// Día 3: Swift
// Clase en vídeo: https://youtu.be/kpsVJptSv1U

import Foundation

/*
 Esto es un comentario
 */

// Hola mundo

print("Hola, Swift!")

// Variables

var myString = "Esto es una cadena de texto"
myString = "Aquí cambio el valor de la cadena de texto"
// myString = 6 // Error
print(myString)

var myString2: String = "Es es otra cadena de texto"
print(myString2)

var myInt = 6
myInt = myInt + 4
print(myInt)
print(myInt - 1)
print(myInt)

var myInt2: Int = 5
print(myInt2)

var myDouble = 6.5
print(myDouble)

var myFloat: Float = 6.5
print(myFloat)

var myBool = false
myBool = true
print(myBool)

// Constantes

let myConst = "Mi propiedad constante"
// myConst = "Mi nueva propiedad constante" // Error
print(myConst)

// Opcionales
var myOptional: String? = "Mi opcional"
myOptional = nil
if myOptional != nil {
    print(myOptional!)
}

// Control de flujo

if myInt == 10 && myString == "Hola" {
    print("El valor es 10")
} else if myInt == 11 || myString == "Hola" {
    print("El valor es 11")
} else {
    print("El valor no es 10 ni 11")
}

// Listas

var myList = ["Brais", "MoureDev", "@mouredev", "Brais"]
print(myList)
print(myList[0])
myList.append("35")
print(myList)

// Sets

var mySet: Set = ["Brais", "MoureDev", "@mouredev", "Brais"]
print(mySet)

// Mapas

var myMap = ["Brais":35, "sebacure":39]
print(myMap)
if let age = myMap["Kontrol"] {
    print(age)
} else {
    print("No existe esta clave")
}
print(myMap["Kontrol"] ?? "No existe esta clave")

// Bucles

for value in myList {
    print(value)
}

var index = 0

while index < myList.count {
    print(myList[index])
    index += 1
}

// Funciones

func myFunc() -> String {
    return "Esto es una función"
}

print(myFunc())

// Clases

class MyClass {
    var name: String?
    var age: Int?
}

var myClass = MyClass()
myClass.name = "Brais"
myClass.age = 35
