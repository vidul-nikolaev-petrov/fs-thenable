const fs = typeof window !== 'undefined' ? window.require('fs') : require('fs');

module.exports = exports = new Proxy(fs, {
    get(target, propName) {
        const prop = target[propName];

        if (typeof prop !== 'function') {
            return prop;
        }

        return function (...args) {
            return new Promise((resolve, reject) => {
                const cb = (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                };

                prop.apply(target, args.concat(cb));
            });
        };
    }
});
