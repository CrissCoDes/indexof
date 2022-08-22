const index = (array, element) =>{
    if(array.indexOf(element) >= 0){
        return element;
    }
    return false;
}

console.log(index(['one', 'two', 'three'], 'three'))

function indes(arr, elem){
    if (arr.indexOf(elem) >= 0){
        return elem;
    }
    return arr;
}

console.log(indes(['pink', 'blue', 'yellow'], 'red'));