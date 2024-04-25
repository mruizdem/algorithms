// Create a function that, given a string, returns all of that string's contents, but without blanks
const removeBlanks = (str) => {
  const destructuredStr = [...str]
  let newStr = ""
  for(let i = 0; i < deStr.length; i++) {
    if(deStr[i] !== ' ') {
        newStr = newStr + deStr[i]
    }   
  }
  return newStr
}
const x = removeBlanks(" Pl ayTha tF u nkyM usi c")
console.log(x)

// Create a JavaScript function that given a string, returns the integer made from the string's digits. You are allowed to use isNaN() and Number()
const getDigits = (str) => {
    const destrStr = [...str]
    let newStr = ""
    for(let i = 0; i < destrStr.length; i++){
        if(!isNaN(destrStr[i])) {
            newStr = newStr + destrStr[i]
        }
    }
    return Number(newStr)
}

let x = getDigits("0s1a3y5w7h9a2t4?6!8?0") //=> 1357924680
console.log(x)

// Create a function that, given a string, returns the string's acronym (first letter of each word capitalized). You are allowed to use .split() and .toUpperCase()
const acronym = (str) => {
    str = str.split(" ")
    let result = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] !== "") {
            result = result + str[i][0]
        }
    }
    return result.toUpperCase()
}

let x = acronym(" there's no free lunch - gotta pay yer way.")// => "TNFL-GPYW"
console.log(x)
let y = acronym("Live from New York, it's Saturday Night!")// => "LFNYISN"
console.log(y)

// Create a function that, given a string, returns the number of non-space characters found in the string
// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11


// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value
// removeShorterString(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning','sunshine','Earth','says','hello']
// removeShorterStrings(['There','is','a','bug','in','the','system'], 3) => ['There','bug','the','system']
