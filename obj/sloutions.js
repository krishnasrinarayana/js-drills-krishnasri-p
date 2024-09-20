// keys.js
function keys(obj) {
    return Object.keys(obj);
}

module.exports = keys;

// values.js
function values(obj) {
    return Object.values(obj);
}

module.exports = values;

// mapObject.js
function mapObject(obj, cb) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = cb(obj[key], key, obj);
        }
    }
    return result;
}

module.exports = mapObject;


// pairs.js
function pairs(obj) {
    return Object.entries(obj);
}

module.exports = pairs;



// invert.js
function invert(obj) {
    let result = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }
    return result;
}

module.exports = invert;


// defaults.js
function defaults(obj, defaultProps) {
    for (let key in defaultProps) {
        if (defaultProps.hasOwnProperty(key) && obj[key] === undefined) {
            obj[key] = defaultProps[key];
        }
    }
    return obj;
}

module.exports = defaults;
