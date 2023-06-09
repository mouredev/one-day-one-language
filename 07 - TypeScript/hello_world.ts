// Día 7: TypeScript
// Clase en vídeo: https://www.twitch.tv/videos/1841100654?t=00h17m59s

/*
Esto es un cometnario
*/

// Hola mundo

console.log("Hola, TypeScript!")

// Variables

var myString = "Esto es una cadena de texto"
// myString = 5 Error
console.log(myString)

let myString2: string = "Esto es una cadena de texto"
myString2 = "Aquí cambio el valor de la cadena de texto"
myString2 = "6"
console.log(myString2)
console.log(typeof myString2)

let myNumber: number = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(typeof myNumber)
console.log(myNumber - 1)
console.log(myNumber)

console.log(myString + " " + myNumber)

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

console.log(myNumber + myNumber2)

let myBool: boolean = false
myBool = true
console.log(myBool)
console.log(typeof myBool)

let myUndefined: undefined
// myUndefined = "myUndefined" Error
console.log(myUndefined)

// Constantes

const myConst = "Mi propiedad constante"
// myConst = "Otro valor" Error
console.log(myConst)

// Controles de flujo

if (myNumber == 10 && myString == "Hola") {
    console.log("El valor es 10")
} else if (myNumber == 11 || myString == "Hola") {
    console.log("El valor es 11")
} else {
    console.log("El valor no es 10 ni 11")
}

// Funciones

function myFunction(): string {
    return "Mi función"
}

console.log(myFunction())

function sumTwoNumbers(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber
}

console.log(sumTwoNumbers(5, 10))

// List

let myList: Array<string> = ["Brais", "Moure", "@mouredev"]
console.log(myList)

// Set

let mySet: Set<string> = new Set(["Brais", "Moure", "@mouredev", "Brais"])
mySet.add("36")
console.log(mySet)

// Mapas

let myMap: Map<string, number> = new Map([["Brais", 36], ["orom_", 40]])
myMap.set("juanitolopez", 23)
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
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

let myClass: MyClass = new MyClass("Brais", 36)
console.log(myClass)
console.log(myClass.name)

// Enum
enum MyEnum {
    DART = "dart",
    PYTHON = "python",
    SWIFT = "swift",
    JAVA = "java",
    KOTLIN = "kotlin",
    JAVASCRIPT = "javascript"
}

const myEnum = MyEnum.DART
console.log(myEnum)