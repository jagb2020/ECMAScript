/** multi linea **/
let lorem = "hola \n" + "mundo"

//es6
let lorem2 = `HOLA 
MUNDO`

console.log(lorem)
console.log(lorem2)

/** destruturacion de elementos **/
let person = {
    name: 'angel',
    age: 26,
    country: 'MX'
}

console.log(person.name, person.age)

//es6
let { name } = person
console.log(name)

/* operador de propagracion */

let team1 = ['angel', 'jose', 'hector'];
let team2 = ['valeria', 'yesica', 'camila'];

let education = ['David', ...team1, ...team2]

console.log(education)

/* var let const */
{
    var globalVar = "global var"
}

{
    let globalLet = 'global let'
    console.log(globalLet)
}

console.log(globalVar)

//->Assignment to constant variable
const a = 'b'
a = 'a'
console.log(a)
