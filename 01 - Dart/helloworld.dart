// Día 1: Dart
// Clase en vídeo: https://www.twitch.tv/videos/1786404728?t=00h12m34s

void main() {
  /*
   * Esto es un comentario
   */

  // Hola mundo

  print("Hola, Dart!");

  // Variables

  var myString = "Esto es una cadena de texto";
  myString = "Aquí cambio el valor de la cadena de texto";
  // helloDart = 6; Error
  print(myString);

  String myString2 = "Esto es otra cadena de texto";
  print(myString2);

  var myInt = 7;
  myInt = myInt + 4;
  print(myInt);
  print(myInt - 1);
  print(myInt);

  int myInt2 = 5;
  print(myInt2);

  var myDouble = 6.5;
  print(myDouble);

  myDouble = 6;
  print(myDouble);

  double myDouble2 = 123.56;
  print(myDouble2);

  var myBool = false;
  myBool = true;
  print(myBool);

  // Constantes

  final myFinal = "Mi propiedad final";
  // myFinal = "Mi nueva propiedad final"; Error

  final myFinalInt = myInt;
  print(myFinalInt);

  const myConst = "Mi propiedad constante";
  // myConst = "Mi nueva propiedad constante"; Error
  // const myConstInt = myInt; Error

  // Control de flujo

  if (myInt == 10 && myString == "Hola") {
    print("El valor es 10");
  } else if (myInt == 11 || myString == "Hola") {
    print("El valor es 11");
  } else {
    print("El valor no es 10 ni 11");
  }

  // Listas

  myFunction();
  var myReturn = myFunctionWithReturn();
  print(myReturn);

  var myList = ["Brais", "Moure", "@mouredev", "Brais"];
  print(myList);
  print(myList[0]);

  // Sets

  var mySet = {"Brais", "Moure", "@mouredev", "Brais"};
  print(mySet);

  // Mapas

  var myMap = {"Brais": 35, "Genemix": 23};
  print(myMap);
  print(myMap["Brais"]);

  var myMap2 = Map<String, int>();
  myMap2["Frg152"] = 22;
  myMap2["Zhamudio"] = 20;

  // Bucles

  for (final value in myList) {
    print(value);
  }

  var myCounter = 0;

  while (myCounter <= myInt) {
    print(myCounter);
    myCounter++;
  }

  // Clases

  var myClass = MyClass("Brais", 35);
  print(myClass.name);
  print(myClass.age);

  // Opcionales

  String? myOptionalString;
  print(myOptionalString);

  myOptionalString = "Mi valor no nulo";
  print(myOptionalString);
  myOptionalString = null;
  print(myOptionalString);

  // Enum

  print(MyEnum.dart);
}

// Funciones

void myFunction() {
  print("Esto es una función");
}

String myFunctionWithReturn() {
  return "Esto es una función con retorno";
}

// Clases

class MyClass {
  String name;
  int age;

  MyClass(this.name, this.age) {}
}

// Enum

enum MyEnum { dart, python, swift, java, kotlin }
