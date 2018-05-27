# @unction/dig

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> KeyChainType => TreeType => ValueType

Takes a chain of keys and a tree, traversing down and reaching the last value. If any part of the chain is undefined or not an object the result will always be undefined.

``` javascript
dig(["aaa", "bbb", "ccc"])({aaa: {bbb: {ccc: "1"}}}) // "1"
dig(["aaa", "ddd", "ccc"])({aaa: {bbb: {ccc: "1"}}}) // undefined
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/dig.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/dig.svg?maxAge=2592000&style=flat-square
