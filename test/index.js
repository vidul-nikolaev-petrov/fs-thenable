// It works.
const assert = require('assert');
const fs = require('../');

fs.readFile(__filename, 'utf8').then(
    function (data) {
        var text = data.slice(3, 12);
        assert(text === 'It works.');
        console.info('successfully resolved:', text);
    }
);

fs.readFile(__filename + 'n/a', 'utf8').then(
    null,
    function (err) {
        assert(err);
        assert(err.code === 'ENOENT');
        console.error('successfully rejected:', err.code);
    }
);
