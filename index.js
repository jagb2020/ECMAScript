function newFunction (name, age, country) {
    var name = name || `angel`
    var age = age || 28
    var country = country || `MX`
    console.log(name, age, country)
}

//es6
function newFunction2 (name = `angel`, age = 32, country = `MX`) {
    console.log(name, age, country)
}

newFunction2()
newFunction2(`jose`, `18`, `arg`)

let hello = `hola`
let world = `world`
let epicPharase = hello + ` ` + world 
console.log(epicPharase)
let epicPharase2 = `${hello} ${world}`
console.log(epicPharase2)