# @idio/jsx

[![npm version](https://badge.fury.io/js/@idio/jsx.svg)](https://npmjs.org/package/@idio/jsx)

`@idio/jsx` is a new Node.js npm package. A JSX support for the idio web server.

```sh
yarn add -E @idio/jsx
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`idioJsx(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)

## API

The package is available by importing its default function:

```js
import idioJsx from '@idio/jsx'
```

### `idioJsx(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example */
import idioJsx from '@idio/jsx'

(async () => {
  await idioJsx()
})()
```

---

(c) [Art Deco Code][1] 2018

[1]: https://artdeco.bz
