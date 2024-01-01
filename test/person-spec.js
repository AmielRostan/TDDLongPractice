const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const Person = require('../problems/person');

describe("Person", function () {
    let person1 = new Person('John', 27);
    let person2 = new Person('Peter', 33);

    beforeEach(function () {
        person1 = new Person('John', 27);
        person2 = new Person('Peter', 33);
    });

    it("Should accept name and age to create the instance", function () {
        expect(person1.name).to.be.equal('John');
        expect(person1.age).to.be.equal(27);
    });

    it("Should have a method sayHello()", function () {
        expect(person1.sayHello()).to.be.equal('Hi, my name is John');
    });

    it("Should have a method visit(person)", function () {
        expect(person1.visit(person2)).to.be.equal("John visited Peter");
    });

    it("Should have a method switchVisit(otherperson) that invokes visit() in the other person", function () {
        expect(person1.switchVisit(person2)).to.be.equal("Peter visited John");
    });

    it("Should have a method update(obj)", function () {
        let coolPerson = person1;

        expect(() => coolPerson.update('Henry')).to.throw(TypeError, 'The input must be an object');

        expect(() => coolPerson.update({ name: 'Henry' })).to.throw(TypeError, 'The input must have both name and age properties');

        coolPerson.update({ name: "Charlie", age: 25 });

        expect(coolPerson).to.deep.equal({ name: "Charlie", age: 25 });
    });

    it("Should have a method tryUpdate() that returns true on successful update and false on error", function () {
        expect(person1.tryUpdate(person2)).to.be.equal(true);

        expect(person1).to.be.deep.equal(person2);

        expect(person1.tryUpdate('Dave')).to.be.equal(false);
    });

    it("Should call sayHello on each Person instance and return an array of greetings", function () {
        const greetings = Person.greetAll([person1, person2]);

        expect(greetings).to.have.lengthOf(2);

        expect(greetings).to.deep.equal([
            'Hi, my name is John',
            'Hi, my name is Peter'
          ]);
    });
});
