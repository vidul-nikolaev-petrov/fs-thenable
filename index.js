const fs = typeof window !== 'undefined' ? window.require('fs') : require('fs');

module.exports = exports = new Proxy(fs, {
    get(target, propName) {
        return function (...args) {
            return new Promise((resolve, reject) => {
                args.push((err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
                target[propName](...args);
            });
        };
    }
});
