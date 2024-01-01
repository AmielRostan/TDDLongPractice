const {expect} = require('chai');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const myMap = require('../problems/my-map');

describe("My map", function () {
    let arr;
    const callback = (el) => el * 2;
    beforeEach(function() {
        arr = [1, 2, 3];
    });

    it("Should return an array like the original with the callback applied in each element", function () {
        expect(myMap(arr, callback)).to.deep.equal([2, 4, 6]);
        expect(arr).to.deep.equal([1, 2, 3]);
    });

    it("The function shouldnt call the built in Array.map", function () {
        const mapSpy = chai.spy.on(Array.prototype, 'map');

        expect(myMap(arr, callback)).to.deep.equal([2, 4, 6]);

        expect(mapSpy).not.to.have.been.called();
        chai.spy.restore(Array.prototype, 'map');
    });

    it("should invoke the callback once for each element in the array", function () {
        const callbackSpy = chai.spy();

        myMap(arr, callbackSpy);

        expect(callbackSpy).to.have.been.called.exactly(arr.length);
    });
})
