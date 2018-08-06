// 1. Set the variable `givenName` to the string "Addison".

var givenName = 'Addison'

// 2. Set candies equal to 20, people to 6, and leftover equal
// to the remainder of dividing 20 by 6.

var candies = 20
var people = 6
var leftover = 20 % 6

// 3. Create a function called greeting that returns "Hello, <name>!",
// where <name> is the name given as an argument to the function.
// "Come here, Charlie."

function greeting(name) {
    return("Hello, " + name + "!");
}
greeting("Chase");


// 4. Create a function called isOdd that, given a number, will
// return true if it is odd and false if it is not.

function isOdd(number) {
    if (number % 2 === 1) {
        return true
    }
    else if (number % 2 === -1) {
        return true
    }
    return false
}

// 5. Create a function called isEven that, given a number, will
// return true if it is even and false if it is not.

function isEven(number) {
    if (number % 2 === 0) {
        return true
    }
        return false
}

// 6. Create a function called fahrenheitToCelsius that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Celsius.

function fahrenheitToCelsius (f) {   //To convert F to C, deduct 32, then *5, then divide by 9
    return ((f-32)*5) /9
}

// 7. Create a function called celsiusToFahrenheit that takes a
// Celsius temperature as an argument and returns the
// temperature in Fahrenheit.

function celsiusToFahrenheit (c) {      //times 9/5 plus 32: where 9/5=1.8
    return (c*(9/5) +32)
}

// 8. Create a function called fahrenheitToKelvin that takes a
// Fahrenheit temperature as an argument and returns the
// temperature in Kelvin. This function must use your previous
// fahrenheitToCelsius function.
// Absolute zero (0 K) is equivalent to −273.15 C.
// 1 degree Kelvin equals 1 degree Celsius.

function fahrenheitToKelvin (f) {     //K = 5/9 (° F - 32) + 273.15     var celsius = (c*(9/5) +32)
     
    return fahrenheitToCelsius (f) + 273.15
}

// 9. Create a function called lesser that takes two numbers as
// arguments and returns the lesser of them. This function should
// use an if/else statement.

function lesser (num1, num2) {
    if (num1 < num2) {
        return num1
    }
    else {
        return num2
    }
}

// 10. Create a function called multigreeting that takes a name
// and a language code and returns a version of "Hello, <name>!"
// in the specified language. The supported languages and their
// translations are below.
//
// en - Hello, <name>!
// es - ¡Hola, <name>!
// fr - Bonjour, <name>!
// eo - Saluton, <name>!
//
// If any other language code is used, return nothing.


function multigreeting (name, language) {
    if (language === "en") {
        return ("Hello, " + name + "!");
    }
    else if (language === "es") {
        return ("¡Hola, " + name + "!");
    }
    else if (language === "fr") {
        return ("Bonjour, " + name + "!");
    }
    else if (language === "eo") {
        return ("Saluton, " + name + "!");
    }
}

// 11. Create a function, howOld, that takes a birthdate and a another
// date (the "current date") and returns how many years old the person
// with that birthdate was on that date. The dates should be JavaScript
// Date objects.
// If the birth date is after than the current date, return nothing.

/* function calcAge(yearOfBirth) {
    var age = new Date ().getfullyear() - yearOfBirth; 
    console.log(`You are ${age} years old!`);
  }
  calcAge ("1978");      convert milliseconds to yrs; round down 
  */

function howOld (birthdate, current ) {
    if 
}
    return ();