# SpecialFont
`jskyzero`

## Overview

A Animation Manage System use LeonSans for example.

## Usage

you counld set config like:
```javascript
var config = {
  "create": {
    "header": () => {
      return new LeonSans({
        text: 'world.execute(me);',
        color: ['#FFFFFF'],
        size: 80,
        weight: 200
      });
    },
  "animation": {
    "initialHeaderPosition": ["lemonsConfig", (x) => {
      TweenMax.to(x, 0, [0.5, 0.35])
    }],
  },
  "timeline": [
    [0, "create", "header"],
  ]
}
```

