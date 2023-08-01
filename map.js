var a = ['a', 'b', 'c', 'd'];
var b = [1, 2, 3, 4, 5, 6, 7,8,9];

function map(x, y) {
    let len_x = x.length;
    let len_y = y.length;
    let max_len = 0;
    if (len_x > len_y) {
        max_len = len_x;
    }
    else {
        max_len = len_y;
    }
    let arr = [];
    var j = 0;
    var k = 0;
    for (let i = 0; i < max_len; i++) {
        if (j == len_x) {
            j = 0;

        }
        else if (k==len_y) {
            k = 0;
            
        }
        arr.push(`${x[j]}:${y[k]}`)
       
        j++;
        k++;
        
    }
    return arr
}

console.log(map(a,b))