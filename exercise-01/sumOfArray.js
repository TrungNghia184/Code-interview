function addElementInArray(array) {
    return (array.length === 0) ? 0 : array[0] + addElementInArray(array.slice(1))
}

console.log('(Should get 32 as result), result:',addElementInArray([5, 9, 6, 8, 4, 6]))
console.log('(Should get 30 as result), result:',addElementInArray([1, 9, 2, 8, 3, 7]))
console.log('(Should get 511 as result), result:',addElementInArray([-69, 240, -6, 13, -666, 999]))
