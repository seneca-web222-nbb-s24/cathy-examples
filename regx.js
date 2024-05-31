let searchTerm = "dog"
let string = "the quick brown fox jumped over the lazy dog"
let string2 = "The dog saw the cat and ran after it"
let string3 = "Hobbes is a tiger"



//Viewing the world in terms of a reg. expression object
//you set up a regular expression and can use it to search various strings
//string can change, but reg. expression is same
let regex = new RegExp(`${searchTerm}`)
let result = regex.test(string)
console.log(result)
result = regex.text(string2)
console.log(result)
result = regex.text(string3)
console.log(result)
