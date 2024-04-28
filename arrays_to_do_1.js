// Push Front: Given an array and an additional value, insert this value at the beginning of the array. 
const pushFront = (arr, num) => arr = [num, ...arr]
let a = pushFront([5, 7, 2, 3], 8)
let b = pushFront([99], 7)
console.log(a)
console.log(b)

// Pop Front: Given an array, remove and return the value at the beginning of the array.
const popFront = (arr) => {
    const removedNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length--
    console.log("Updated array: ", arr)
    return removedNum
}

let c = popFront([0, 5, 10, 15])
console.log(`Return Value: ${c}`)
let d = popFront([4, 5, 7, 9])
console.log(`Return Value: ${d}`)

// Insert At: Given an array, index, and additional value, insert the value into array at given index.
const insertAt = (arr, index, val) => {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1]
    }
    arr[index] = val
    return arr
}

let e = insertAt([100, 200, 5], 2, 311)
console.log(e)
let f = insertAt([9, 33, 7], 1, 42)
console.log(f)

// BONUS: Remove At: Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it.
const removeAt = (arr, index) => {
    const removedVal = arr[index]
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length--;
    console.log(arr)
    return removedVal
}

let g = removeAt([1000, 3, 204, 77], 1)// => 3 returned, with [1000,204,77] printed in the function
console.log(g)
let h = removeAt([8, 20, 55, 44, 98], 3) //=> 44 returned, with [8,20,55,98] printed in the function
console.log(h)

// BONUS: Swap Pairs: Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
const swap = (arr) => {
    for (let i = 0; i < arr.length - 1; i += 2) {
        const val1 = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = val1;
    }
    return arr;
}

let i = swap([1, 2, 3, 4])
console.log(i)
let j = swap(["Brendan", true, 42])
console.log(j)