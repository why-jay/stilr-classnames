#stilr-classnames

The function returned by this module helps you define 
[Stilr](https://github.com/kodyl/stilr) styles within a component definition.

```JSX
var stilrcx = require('stilr-classnames');

<button className={stilrcx({color: 'red'})}>Hello</button>
// -> <button className="_a39va">Hello</button>
```

## What the function does under the hood

Every argument passed into the function is processed in a certain way and gets
passed into [Jed Watson's `classnames`
functions](https://github.com/JedWatson/classnames).

If an argument is not a [plain object](https://lodash.com/docs#isPlainObject),
no processing occurs.

If an argument is a plain object, each of its key/value pairs gets checked as
follows.
If the value is a [finite number](https://lodash.com/docs#isFinite) or a
[string](https://lodash.com/docs#isString) or a plain object, the pair is moved
out of the object and into a new one - call it `objA`.
(The plain object case takes care of pseudoclasses and media queries.)
Otherwise, the pair is moved out and into `objB`.

When every argument has been processed, all the `objA`s are merged into one big
object - call it `OBJ_A`.

Finally, the following is returned:
```JS
require('classnames')(objB_1, objB_2, objB_3, ...,
require('stilr').create({x: OBJ_A}).x)
```

## More examples

For starters, you should understand that the following two are equivalent.

```JSX
stilrcx({float: 'left'}, 'yo1', {yo2: false})
```

```JSX
var cx = require('classnames');

cx('_v092z', 'yo1', {yo2: false})
```

Second, third, and so on, parameters can define `className`s that will be
included in the final `className`.

```JSX
<button className={stilrcx({color: 'red'}, 'yo1', 'yo2')}>Hello</button>
// -> <button className="_a39va yo1 yo2">Hello</button>
```

This is particularly helpful when you embed components within other components.

```JSX
class ButtonWithRedText extends React.Component {
  render() {
    return (
      <button className={stilrcx({color: 'red'}, this.props.className)}>
        {this.props.children}
      </button>
    );
  }
}

class ButtonWithRedTextAndBlueBackground extends React.Component {
  render() {
    return (
      <Foo className={stilrcx({backgroundColor: 'blue'})} />
    );
  }
}
```

Thanks to `classnames`'s handling of falsy values, you can comfortably disregard
falsy values being passed into the function.

```JSX
<div className={stilrcx({float: 'left'}, false, undefined)} />
// -> <div className="_xo3r3" />
```

Also note that you can also use `stilr-classnames` for extending your styles
prototypally.

```JSX
var commonStyle = {width: 200};

var divWithRedText = <div className={stilrcx({color: 'red'}, commonStyle})} />
// -> <div className="_2nvzs" />

var divWithBlueText = <div className={stilrcx({color: 'blue'}, commonStyle})} />
// -> <div className="_y39vz" />
```
