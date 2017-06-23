'use strict'

const doctors = [
  { number: 20, actor: 'William Hartnell', begin: 1963, end: 1966 },
  { number: 30, actor: 'Patrick Troughton', begin: 1966, end: 1969 },
  { number: 3, actor: 'Jon Pertwee', begin: 1970, end: 1974 },
  { number: 4, actor: 'Tom Baker', begin: 1974, end: 1981 },
  { number: 5, actor: 'Peter Davison', begin: 1982, end: 1984 },
  { number: 6, actor: 'Colin Baker', begin: 1984, end: 1986 },
  { number: 7, actor: 'Sylvester McCoy', begin: 1987, end: 1989 },
  { number: 8, actor: 'Paul McGann', begin: 1996, end: 1996 },
  { number: 9, actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
  { number: 10, actor: 'David Tennant', begin: 2005, end: 2010 },
  { number: 11, actor: 'Matt Smith', begin: 2010, end: 2013 },
  { number: 12, actor: 'Peter Capaldi', begin: 2013, end: 2013 }
];

// `.filter()` => returns a new array of values based on conditional return statement
let filteredDocs = doctors.filter(doctor => doctor.number > 10) // => Returns a new array of doctors; only those with a `number` value greater than 10
console.log(filteredDocs)


// Define a filter callback, which can then be passed directly into .filter()
// The parameter and return value are implicite in this pattern
function filterByEndDate(doctor) {
  return doctor.end > 2000
}
filteredDocs = doctors.filter(filterByEndDate)
console.log(filteredDocs)
