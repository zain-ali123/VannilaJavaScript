const prompt = require("prompt-sync")();

function main() {
    const no_of_obj = parseInt(prompt("Enter no of Objects : "));
    const no_of_keys = parseInt(prompt("Enter no of Items : "));
    // console.log(no_of_keys,no_of_obj)
    let arr = [];
    let alpa=['a','b','c']
    for (let i = 0; i < no_of_obj; i++) {
        let newObj = {}
        for (let j = 0; j < no_of_keys; j++) {
            let new_value = parseInt(prompt(`Enter key${j + 1} for object${i + 1} `));
            let new_key = alpa[j];
            newObj[new_key] = new_value;
            
            
        }
        arr.push(newObj);
        
    }
    console.log(arr);
    let sumObj = {}
    let i = 0;
    for (let Object of arr) {
                
        
        let sum = 0;
        for (let key in Object) {
            
            const value = Object[key];
            sum = sum + value;
            
            
        }
        let my_obj = Object
        console.log(my_obj)
        const key = `object : ${i + 1}`;
        sumObj[key] = sum;
        i = i + 1;;
    }
    console.log(sumObj);


    const keyValueArray = Object.entries(sumObj);

    keyValueArray.sort((a, b) => a[1] - b[1]);


    const sortedObject = Object.fromEntries(keyValueArray);

console.log(sortedObject);
    
}
main();