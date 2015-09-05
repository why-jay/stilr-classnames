#stilr-classnames

The function returned by this module helps you define 
[Stilr](https://github.com/kodyl/stilr) styles within a component definition.

```JSX
var stilrcx = require('stilr-classnames');

<button className={stilrcx({color: 'red'})}>Hello</button>
// -> <button className="_a39va">Hello</button>
```

Optional second, third, and so on, parameters can define `className`s that must
be included in the final `className`.

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

In fact, any parameter beyond the first is treated as if it is a parameter being
passed into the famous
[JedWatson/classnames](https://github.com/JedWatson/classnames) function.
That is, the following two achieve equivalent results:

```JSX
stilrcx({float: 'left'}, 'yo1', {yo2: false})
```

```JSX
var cx = require('classnames');

cx('_v092z', 'yo1', {yo2: false})
```

This reliance on [classnames](https://github.com/JedWatson/classnames) gives
the additional benefit, among many, of comfortably disregarding falsy values
being passed into the function.

```
<div className={stilrcx({float: 'left'}, false, undefined)} />
// -> <div className="_xo3r3" />
```
