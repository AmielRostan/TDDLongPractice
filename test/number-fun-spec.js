const {expect} = require('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun');

describe("Return three", function () {
    it("Should return the number 3", function () {
        expect(returnsThree()).to.be.equal(3);
    });
})

describe("Reciprocal", function () {
    it("It have to return the reciprocal of the given number", function () {
        expect(reciprocal(4)).to.be.equal(0.25);
        expect(reciprocal(10)).to.be.equal(0.1);
        expect(reciprocal(100)).to.be.equal(0.01);
    });

    it("The given number must be between 1 and 1000000, otherwise throw a TypeError with a message", function () {
        expect(() => reciprocal(0.5)).to.throw(TypeError, 'The number must be between 1 and 1000000');
        expect(() => reciprocal(1000001)).to.throw(TypeError, 'The number must be between 1 and 1000000');
    });
})
