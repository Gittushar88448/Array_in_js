      // HOISTING PROCESS

      // INVOKE FUNCTION
// work();

     //FUNCTION DECLARATION 
// function work(){
//     let i = 0;
//     while(i<100){
//         console.log("Number is:" + " " + i);
//         i++;
//     }
// }


    // NAMED FUNCTION ASSIGNMENT
 
    //   IN NAMED FUNCTIONS HOISTING WILL NOT WORK 
// let newFunction = function func(a, b){
//         return a+b;
//      }
     
//      let a = newFunction(4,6);
//      console.log(a);


// ANONYMUS FUNCTION 


// let newFunc =  function newFu(a,b){
//     console.log(arguments);
//     return a+b;
// }

// let a = newFunc(5,6,7,8);
// console.log(a);

// console.log(`${arguments}`);

// console.log( newFunc instanceof Object);

// REST OPERATOR 

// function spec(...args){
//     let total = 0;
//     for(let values of args){
//         total = values + total;
//     }
//     return total;
// }
// let a = spec(6,7,8,8);
// console.log(a);

// DEFAULT PARAMETER

function para(p, a=20, b= 4){
    return (p+a+b)/b;
}
var a = para(200);
console.log(a);