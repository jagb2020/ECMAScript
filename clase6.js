/* es8 */
/* object */
const data = {
    frontend: 'jose',
    backend: 'angel',
    desing: 'erika', //Trailing-Comas.
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

/* objet values */
const data2 = {
    frontend: 'jose',
    backend: 'angel',
    desing: 'erika', //Trailing-Comas.
}

const values = Object.values(data2)
console.log(values)
console.log(values.length)

/* paddign */
const string = 'hello'
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'___'))
console.log('food'.padEnd(12,'___'))

const obj = {
    name: 'pepe', //Trailing-Comas.
}