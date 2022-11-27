// Your code here.

function getFirstName(person){
  return person.firstName
}

let person = {firstName: 'Johnny', lastName: 'Bravo'}

console.log(getFirstName(person))
console.log(getLastName({firstName: 'Johnny', lastName: 'Bravo'}))


function getLastName(person){
  return person.lastName
}

console.log(getLastName(person))
console.log(getLastName({firstName: 'Johnny', lastName: 'Bravo'}))


function getFullName(person){
  return person.firstName + " " + person.lastName
}

console.log(getLastName(person))
console.log(getLastName({firstName: 'Johnny', lastName: 'bravo'}))


function setFirstName(person, newFirstName){
  person.firstName = newFirstName
}

setFirstName(person, 'Andrea')
console.log(person)


function setAge(perosn, newAge){
  person.age = newAge
}
setFirstName(person1, 25)
setFirstName(person2, 33)


function giveBirthday(person){
  
  if(person.age === undefined){
    person.age = 1
  } else if (person.age !== undefined){
    person.age += 1
  }
}

giveBirthday(person)
giveBirthday(person2)
console.log(person)
console.log(person2)




// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
