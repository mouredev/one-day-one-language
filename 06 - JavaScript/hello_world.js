// Día 6: JavaScript
// Clase en vídeo: https://youtu.be/6cnFl9aHD5Y

/*
Esto es un comentario
*/

// Hola mundo

console.log("Hola, JavaScript!");

// Variables

var myString = "Esto es una cadena de texto"
console.log(myString)

let myString2 = "Esto es una cadena de texto"
myString2 = "Aquí cambio el valor de la cadena de texto"
console.log(typeof myString2)
myString2 = 6
console.log(myString2)
console.log(typeof myString2)

let myNumber = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(myNumber - 1)
console.log(myNumber)

console.log(myString + " " + myNumber)

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

let myBool = false
myBool = true
console.log(myBool)
console.log(typeof myBool)

myBool = null
console.log(myBool + myNumber2)

myBool = undefined
console.log(myBool)

let myUndefined
console.log(myUndefined)

// Constantes

const MY_CONST = "Mi propiedad constante"
// MY_CONST = "Otro valor" Error
console.log(MY_CONST)

// Control de flujo

if (myNumber == 10 && myString == "Hola") {
    console.log("El valor es 10")
} else if (myNumber == 11 || myString == "Hola") {
    console.log("El valor es 11")
} else {
    console.log("El valor no es 10")
}

myBool = null

if (myBool) {
    console.log("null")
}

// Funciones

function myFunction() {
    return "Mi función"
}

console.log(myFunction())

// Listas

let myList = ["Brais", "Moure", "@mouredev", 36]
console.log(myList)
console.log(myList[0])

// Set

let mySet = new Set(["Brais", "Moure", "@mouredev", 36, "Brais"])
mySet.add("Moure")
console.log(mySet)

// Mapas

let myMap = new Map([["Brais", 36], ["ztiake", 37], ["zPato04", 18]])
myMap.set("Niku1525", 20)
console.log(myMap)
console.log(myMap.get("Brais"))

// Bucles

for (const value of myList) {
    console.log(value)
}

let myCounter = 0

while (myCounter < myList.length) {
    console.log(myList[myCounter])
    myCounter++
}

// Clases

class MyClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let myClass = new MyClass("Brais", 36)
console.log(myClass)
console.log(myClass.name)

// Enum

const MyEnum = {
    DART: "dart",
    PYTHON: "python",
    SWIFT: "swift",
    JAVA: "java",
    KOTLIN: "kotlin",
    JAVASCRIPT: "javascript"
}

const myEnum = MyEnum.JAVASCRIPT
console.log(myEnum)

