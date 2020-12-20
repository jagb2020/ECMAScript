/* class */
class calculator {
    constructor () {
        this.valueA = 0
        this.valueB = 0
    }
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueA
        return this.valueA + this.valueB 
    }
}

const calc = new calculator ()
console.log(calc.sum(2,2))

/* import export */
import {hello} from './module'

hello()

/* generaitors */
function* helloWorld () {
    if(true) {
        yield 'hello'
    }
    if(true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()

console.log(generatorHello.next().value) //hello
console.log(generatorHello.next().value) //world
console.log(generatorHello.next().value) //undifined