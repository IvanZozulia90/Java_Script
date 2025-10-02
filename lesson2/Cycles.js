

const x = 2;
const y = 3;

// function pow (x, y){
//     let result = x;
//     for (let i=1; i < y; i++){
//          result *= x;
//     }
//     return result
// };



// let answer = pow(x,y);
// console.log(answer)

// let sum = 2*2*2
// console.log(sum)

function pow (x, y){
    let result = Math.pow(x, y);
    return result
}

console.log(pow(x, y))