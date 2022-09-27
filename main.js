/* Practice Assignment 4:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".
const helloWorld = () => {
	return("Hello World!")
}

//test
console.log("helloWorld function: ",helloWorld())

// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.
const greeting = (name) => {
	return(`Hello, ${name}.`)
}

//test
console.log("greeting function: ", greeting("Katsumoto"))

// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.
const divisibleByThree = (number) => {
	if (number % 3 === 0) {
		return true
	}
	return false
}

//test
console.log("divisibleByThree function with 3: ", divisibleByThree(3))
console.log("divisibleByThree function with 4: ", divisibleByThree(4))

// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.
const averageAge = (num1, num2, num3) => {
	//make array
	let numArray = []
	//push parameters in array
	numArray.push(num1, num2, num3)
	//if a number is undefined, filter it out
	numArray = numArray.filter((i) => {
		return i !== undefined
	})

	//calculate sum with reduce array method
	sum = numArray.reduce((accumulator, value) => {
		return accumulator + value
	})

	//average calculation
	avgCalc = sum / numArray.length

	return Math.round(avgCalc)
}

//test
console.log("averageAge function with 8,9,10: ", averageAge(8, 9, 10))
console.log("averageAge function with 8,10: ", averageAge(8, 10))

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.
const leetSpeak = (word) => {
	//replacing letter 'a' with 4
	var word = word.replace(/a/g, "4")

	//replacing letter 'e' with 3
	var word = word.replace(/e/g, "3")

	//returns the modified word
	return word
}

//test
console.log("leetSpeak function with hellaw: ", leetSpeak("hellaw"))

// output:
// helloWorld function:  Hello World!
// greeting function:  Hello, Katsumoto.
// divisibleByThree function with 3:  true
// divisibleByThree function with 4:  false
// averageAge function with 8,9,10:  9
// averageAge function with 8,10:  9
// leetSpeak function with hellaw:  h3ll4w