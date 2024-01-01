const {expect} = require('chai');
const reverseString = require('../problems/reverse-string');

describe("Reverse string", function () {
    it("Should return inversed the string given.", function () {
        expect(reverseString('fun')).to.be.equal('nuf');
    });

    it("Should throw an error when input is not a string.", function () {
        expect(() => reverseString(57)).to.throw();
    });
})
