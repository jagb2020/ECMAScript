/* async await */
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('Hello World'), 3000)
        : reject (new error('Test error'))
    })
}

const HelloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

HelloAsync()

/* una mejor forma de utilizar async/await */
const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()