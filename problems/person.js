class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return 'Hi, my name is ' + this.name;
  }

  visit(person) {
    return `${this.name} visited ${person.name}`;
  }

  switchVisit(person) {
    return person.visit(this);
  }

  update(person) {
    if(!(person instanceof Object)) {
      throw new TypeError('The input must be an object');
    }

    if(person.name === undefined || person.age === undefined) {
      throw new TypeError('The input must have both name and age properties');
    }

    this.name = person.name;
    this.age = person.age;
  }

  tryUpdate(person) {
    try {
      this.update(person);
      return true;
    } catch (e) {
      return false;
    }
  }

  static greetAll(personArray) {
    let greetings = [];

    for(let i = 0; i < personArray.length; i++) {
      greetings.push(personArray[i].sayHello());
    }

    return greetings;
  }
}

module.exports = Person;
