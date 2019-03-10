var nameVar = 'Maher'
nameVar = 'dan'
console.log('nameVar', nameVar)

let nameLet = 'dodo'
nameLet = 'jojo'
console.log('nameLet', nameLet)

const nameConst = 'Frank'

console.log('nameCost', nameConst)

// arrow func
const fullName = 'Maher Krde'
if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}
const getFirstName = fullName => fullName.split(' ')[0]
console.log(getFirstName(fullName))

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy () {
    return this.numbers.map(number => number * 2)
  },
  multiply () {
    return this.numbers.map(number => {
      return number * number
    })
  }
}
console.log(multiplier.multiply(), multiplier.multiplyBy())

/// ///////es6 classes

class Person {
  constructor (name = 'anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreetings () {
    return `hi i am ${this.name} !`
  }
  getDescription () {
    return `${this.name} is ${this.age} year(s) old`
  }
}

class Traveler extends Person {
  constructor (name, age, homeLocation = '') {
    super(name, age)
    this.homeLocation = homeLocation
  }
  getGreetings () {
    let greetings = super.getGreetings()
    if (this.homeLocation) {
      greetings += `I'm visiting from ${this.homeLocation}`
    }
    return greetings
  }
}
const me = new Traveler('Maher Krde', 28, 'Amsterdam')
const me2 = new Traveler()
