// Día 8: Go
// Clase en vídeo: https://youtu.be/AGiayASyp2Q

// Creación de módulo: go mod init main
package main

import (
	"container/list"
	"fmt"
	"reflect"
)

func main() {

	// Hola mundo

	fmt.Println("Hola, Go!")

	/*
		Esto es un comentario
	*/

	// Variables

	var myString string = "Esto es una cadena de texto"
	fmt.Println(myString)

	myString = "Aquí cambio el valor de la cadena de texto"
	fmt.Println(myString)

	// myString = 6 Error

	var myString2 = "Esto es una cadena de texto"
	fmt.Println(myString2)

	var myInt int = 7
	myInt = myInt + 4
	fmt.Println(myInt)
	fmt.Println(myInt - 1)
	fmt.Println(myInt)

	fmt.Println(myString, myInt)

	fmt.Println(reflect.TypeOf(myInt))

	var myFloat float64 = 6.5
	fmt.Println(myFloat)
	fmt.Println(reflect.TypeOf(myFloat))

	fmt.Println(float64(myInt) + myFloat)

	var myBool bool = false
	myBool = true
	fmt.Println(myBool)

	// Variable declarada e inicializada de manera abreviada

	myString3 := "Esto es una cadena de texto"
	fmt.Println(myString3)

	// Constantes

	const myConst = "Esto es una constante"
	fmt.Println(myConst)

	// Control de flujo

	if myInt == 10 && myString == "Hola" {
		fmt.Println("El valor es 10")
	} else if myInt == 11 || myString == "Hola" {
		fmt.Println("El valor es 11")
	} else {
		fmt.Println("El valor no es 10")
	}

	// Array

	var myArray [3]int
	myArray[0] = 1
	myArray[1] = 2
	myArray[2] = 3
	// myArray[3] = 3 Error
	fmt.Println(myArray[2])
	// fmt.Println(myArray[3]) Error

	// Map

	myMap := make(map[string]int)
	myMap["Brais"] = 36
	myMap["crais01"] = 35
	myMap["hoz98"] = 24
	fmt.Println(myMap)
	fmt.Println(myMap["Brais"])

	myMap2 := map[string]int{"Brais": 36, "crais01": 35, "hoz98": 24}
	fmt.Println(myMap2)

	// List

	myList := list.New()
	myList.PushBack(1)
	myList.PushBack(2)
	myList.PushBack(3)
	fmt.Println(myList.Back().Value)

	// Bucles

	for index := 0; index < len(myArray); index++ {
		fmt.Println(myArray[index])
	}

	for key, value := range myMap {
		fmt.Println(key, value)
	}

	for index, value := range myArray {
		fmt.Println(index, value)
	}

	// Función

	fmt.Println(myFunction())

	// Estructura

	type MyStruct struct {
		name string
		age  int
	}

	myStruct := MyStruct{"Brais", 36}
	fmt.Println(myStruct)
}

func myFunction() string {
	return "Mi función"
}
