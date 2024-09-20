// test/testKeys.js
const assert = require('assert');
const keys = require('../keys');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

describe('keys', function() {
    it('should return the keys of the object', function() {
        assert.deepStrictEqual(keys(testObject), ['name', 'age', 'location']);
    });
});
// test/testValues.js
const assert = require('assert');
const values = require('../values');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

describe('values', function() {
    it('should return the values of the object', function() {
        assert.deepStrictEqual(values(testObject), ['Bruce Wayne', 36, 'Gotham']);
    });
});


// test/testMapObject.js
const assert = require('assert');
const mapObject = require('../mapObject');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

describe('mapObject', function() {
    it('should apply the callback function to each value in the object', function() {
        const result = mapObject(testObject, (value, key) => `${key}:${value}`);
        assert.deepStrictEqual(result, {
            name: 'name:Bruce Wayne',
            age: 'age:36',
            location: 'location:Gotham'
        });
    });
});



// test/testPairs.js
const assert = require('assert');
const pairs = require('../pairs');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

describe('pairs', function() {
    it('should convert the object to an array of [key, value] pairs', function() {
        assert.deepStrictEqual(pairs(testObject), [
            ['name', 'Bruce Wayne'],
            ['age', 36],
            ['location', 'Gotham']
        ]);
    });
});


// test/testInvert.js
const assert = require('assert');
const invert = require('../invert');

const testObject = { name: 'Bruce Wayne', age: '36', location: 'Gotham' };

describe('invert', function() {
    it('should invert the object', function() {
        assert.deepStrictEqual(invert(testObject), {
            'Bruce Wayne': 'name',
            '36': 'age',
            'Gotham': 'location'
        });
    });
});


// test/testDefaults.js
const assert = require('assert');
const defaults = require('../defaults');

const obj = { name: 'Bruce Wayne' };
const defaultProps = { name: 'Unknown', age: 36, location: 'Gotham' };

describe('defaults', function() {
    it('should fill in undefined properties with default values', function() {
        assert.deepStrictEqual(defaults(obj, defaultProps), {
            name: 'Bruce Wayne',
            age: 36,
            location: 'Gotham'
        });
    });
});
