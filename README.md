#stilr-classnames

The function returned by this module helps you define 
[Stilr](https://github.com/kodyl/stilr) styles within a component definition.

```JSX
var style = require('stilr-classnames');

<button {...style({color: 'red'})}>Hello</button>
// -> <button className="_a39va">Hello</button>
```

Optional second, third, and so on, parameters can define `className`s that must
be included in the final `className`.

```JSX
<button {...style({color: 'red'}, 'yo1', 'yo2')}>Hello</button>
// -> <button className="_a39va yo1 yo2">Hello</button>
```

This is particularly helpful when you embed components within other components.

```JSX
class ButtonWithRedText extends React.Component {
  render() {
    return (
      <button {...style({color: 'red'}, this.props.className)}>
        {this.props.children}
      </button>
    );
  }
}

class ButtonWithRedTextAndBlueBackground extends React.Component {
  render() {
    return (
      <Foo {...style({backgroundColor: 'blue'})} />
    );
  }
}
```

In fact, any parameter beyond the first is treated as if it is a parameter being
passed into the famous
[JedWatson/classnames](https://github.com/JedWatson/classnames) function.
That is, the following two achieve equivalent results:

```JSX
var stilrcx = require('stilr-classnames');

<div {...stilrcx({float: 'left'}, 'yo1', {yo2: false)} />
```

```JSX
var cx = require('classnames');

<div className={cx('_v092z', 'yo1', {yo2: false})} />
```
