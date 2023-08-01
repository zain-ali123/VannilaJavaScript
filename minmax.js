
function main() {

    console.log(minmax([1, 2, 3, 4, 5]));
    
}
function minmax(array) {

    let arr = [];
    let minValue = Math.min(...array);
    arr.push(minValue)
    let maxValue = Math.max(...array);
    arr.push(maxValue)
    return arr
    
}
main();