const assert = require('assert');

// SUT System under test
function map(array, callback) {
    const mapped = [];
    for(let i = 0; i < array.length; i++) {
        mapped[i] = callback(array[i], i);
    }
    return mapped;
}

describe('array methods', () => {

    it('map', () => {
        const array = [1, 2, 3];
        const mapped = map(array, x => x * x);
        assert.deepEqual(mapped, [1, 4, 9]);
    });

    it('map passes index as second arg', () => {
        const array = [1, 2, 3];
        const mapped = map(array, (x, i) => i);
        assert.deepEqual(mapped, [0, 1, 2]);
    });
});