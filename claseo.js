/* es9 */
/* operador de reposo */
const obj = {
    name: 'angel',
    age: 26,
    country: 'MX'
}

let { name, ...all} = obj
console.log(name, all)
//angel { age: 26, country: 'MX' }

let { country, ...all} = obj
console.log(all)
//{ name: 'angel', age: 26 }

/* propiedades de propagacion */
const obj = {
    name: 'Angel',
    age: 26
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)
//{ name: 'Angel', age: 26, country: 'MX' }

/* promise */
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        // ? resolve ('Hello world')
        ? setTimeout(() => resolve('Hello world', 3000))
        : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))

    /* regex */
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2018-04-20')
    const year = match[1]
    const month = match[2]
    const day = match[3]

    console.log(year,month,day)