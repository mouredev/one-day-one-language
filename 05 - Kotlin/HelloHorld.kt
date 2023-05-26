// Día 5: Kotlin
// Clase en vídeo: https://www.twitch.tv/videos/1829088315?t=00h17m36s

fun main() {

    /*
     * Esto es un comentario
     */

    // Hola mundo

    println("Hola, Kotlin!")

    // Variables

    var myString = "Esto es una cadena de texto"
    myString = "Aquí cambio el valor de la cadena de texto"
    // myString = 6 Error
    println(myString)

    var myString2: String = "Esta es otra cadena de texto"
    println(myString2)

    var myInt = 7
    myInt = myInt + 4
    println(myInt)
    println(myInt - 1)
    println(myInt)

    println("Este es el valor de la variable myInt: $myInt")

    var myInt2: Int = 5
    println(myInt2)

    var myDouble = 6.5
    println(myDouble)

    myDouble = 6.0
    println(myDouble)

    var myDouble2: Double = 6.5
    var myFloat = 6.5f

    var myBool = false
    myBool = true
    println(myBool)

    // Constantes

    val myConst = "Mi propiedad constante"
    // myConst = "Mi nueva propiedad constante" Error

    // Control de flujo

    if (myInt == 10 && myString == "Hola") {
        println("El valor es 10")
    } else if (myInt == 11 || myString == "Hola") {
        println("El valor es 11")
    } else {
        println("El valor no es ni 10 ni 11")
    }

    // Lista

    val myList = mutableListOf("Brais", "Moure", "@mouredev")
    println(myList[1])
    myList.add("Brais")
    println(myList)

    // Sets

    val mySet = setOf("Brais", "Moure", "@mouredev", "Brais")
    println(mySet)

    // Mapas

    val myMap = mutableMapOf("Brais" to 36, "Srodriguez" to 27, "manujb_29" to 34)
    myMap["Roswell468"] = 17
    println(myMap["manujb_29"])

    // Bucles

    for (value in myList) {
        println(value)
    }

    for (value in mySet) {
        println(value)
    }

    for (value in myMap) {
        println(value)
    }

    var myCounter = 0

    while (myCounter < myList.count()) {
        println(myList[myCounter])
        myCounter++
    }

    // Opcionales

    var myOptional: String? = null
    println(myOptional)
    myOptional = "Mi cadena de texto opcional"
    println(myOptional)

    // Funciones

    myFunction()

    // Clases

    var myClass = MyClass("Brais", 36)
    println(myClass.age)
}

fun myFunction() {
    println("Esto es una función")
}

// Clases

class MyClass(val name: String, val age: Int)
