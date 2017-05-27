# fs-thenable

Promised version of the [fs](https://nodejs.org/api/fs.html) module which works on Electron.
Based on [Proxy](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) (i.e. it supports all `fs` methods).

[![Build Status](https://travis-ci.org/vidul-nikolaev-petrov/fs-thenable.svg?branch=master)](https://travis-ci.org/vidul-nikolaev-petrov/fs-thenable)

## Installation

    npm i fs-thenable

## Example

```js
fs.readFile(__filename, 'utf8').then(
    function (data) {
        console.info(data);
    },
    function (err) {
        console.error(err.message);
    }
);
```

## License

  MIT
