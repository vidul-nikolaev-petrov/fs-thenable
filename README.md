# fs-thenable

Promised version of the [fs](https://nodejs.org/api/fs.html) module which works on Electron.
Based on the [Proxy](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy) (i.e. it supports all `fs` methods).

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
