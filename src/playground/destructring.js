// console.log('destructuring is rinning')
// const person = {
//   name: 'maher',
//   age: 34,
//   location: {
//     city: 'Amsterdam',
//     temp: 33
//   }
// }

// const { age, name: firstName = 'anonymous' } = person
// console.log(`${firstName} is ${age}`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'god father',
//   auther: 'whtever',
//   puplisher: {
//     name: 'NANDU'
//   }
// }
// const { name: puplishername = 'self-puplished' } = book.puplisher
// console.log(puplishername)

const adress = ['naritaweg', 'Amsterdam', 'Nord Hollnd', '1043bx']

const [, city, state = 'new York'] = adress

console.log(`You are in ${city} ${state}`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee, , cost] = item
console.log(`a meduim ${coffee} costs ${cost}`)
