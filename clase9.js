/* es10 */
/* flat */
let array = [1,2,3 [1,2,3 [1,2,3]]]

// console.log(array.flat(profundidad de flat))
console.log(array.flat(2))

/* flatMap */
let array2 = [1,2,3,4,5]

console.log(array2.flatMap(value => [value, value * 2]))

/* trimStart */
let hello = '   hello world'

console.log(hello)
console.log(hello.trimStart())

/* trimEnd */
let hello2 = 'hello world   '

console.log(hello2)
console.log(hello2.trimEnd())

/* menejador de errorres opcional */
// try{

// }catch (error){ 
//     error
// }

//es10
try{

}catch { 
    error
}

/* trasformar de arreglos a objetos y al reves */
let entries = [["name", "oscar"],["age", 32]]
console.log(Object.fromEntries(entries))

/*  */
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);