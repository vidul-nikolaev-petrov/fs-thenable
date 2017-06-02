// It works.
const assert = require('assert');
const fs = require('../');

fs.readFile(__filename, 'utf8').then(
    function (data) {
        var text = data.slice(3, 12);
        assert(text === 'It works.');
        console.info(colorGreenPass(), `promise resolved: '${text}'`);
    }
);

fs.readFile(__filename + 'n/a', 'utf8').then(
    null,
    function (err) {
        assert(err);
        assert(err.code === 'ENOENT');
        console.info(colorGreenPass(), `promise rejected: '${err.code}'`);
    }
);

~function() {
    assert(fs.constants.R_OK !== 0);
    console.info(colorGreenPass(), 'prop type recongnition (defined)');
}();

~function() {
    assert(fs.NA === undefined);
    console.info(colorGreenPass(), 'prop type recongnition (undefined)');
}();

function colorGreenPass() {
    return colorGreen('pass');
}

function colorGreen(text) {
    return `\x1b[42m\x1b[30m ${text} \x1b[0m`;
}