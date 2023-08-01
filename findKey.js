var x = { continent: "asia" }
var y= { country: "pakistan" }
var key='asia'
function find_key(obj1,obj2,toFind) {
    if (Object.values(obj1) == toFind) {
       
        return Object.values(obj1)
    }
    if (Object.values(obj2) == toFind) {
        
        return Object.values(obj2)
    }
}

let a = find_key(x, y, key);
console.log(a);