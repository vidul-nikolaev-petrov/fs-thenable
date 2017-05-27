// It works.
const assert = require('assert');
const fs = require('../');

fs.readFile(__filename, 'utf8').then(
    function (data) {
        var text = data.slice(3, 12);
        assert(text === 'It works.');
        console.info('◕‿◕ pass: resolved');
    }
);

fs.readFile(__filename + 'n/a', 'utf8').then(
    null,
    function (err) {
        assert(err);
        assert(err.code === 'ENOENT');
        console.error('◕‿◕ pass: rejected');
    }
);

~function() {
    assert(fs.constants.O_SYNC === 128);
    console.info('◕‿◕ pass: prop type recongnition (defined)');
}();

~function() {
    assert(fs.NA === undefined);
    console.info('◕‿◕ pass: prop type recongnition (undefined)');
}();