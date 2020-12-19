/* propiedad de objetos mejorada */
let name = 'angel'
let age = 28

obj = { name: name, age:name }

//es6
obj2 = { name, age}

console.log(obj)
console.log(obj2)

/* => */
const names = [
    {name:'angel', age:28},
    {name:'yesica', age:25}
]

let listOfNames = names.mao(function (item) {
    console.log(item.name)
})

//es6
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const squere = num => num * num

/* promesas */
const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (false) {
            resolve('hey')
        }else{
            reject('ups')
        }
    })
}

helloPromise ()
    .then(response => console.log(response))
    .then(() => console.log('otro then vacio'))
    .catch(error => console.log(error))