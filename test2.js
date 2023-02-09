// function square(x){
//     console.log(`square of ${x}: ${x * x}`);
// }
// square(5);
// console.log("hey foysal")

// let y=square
// y(5)
const taskone = (callback)=>{
    console.log("task one of one")
}
const tasktwo = ()=>{
    setTimeout(()=>{
     console.log("tasktow.dataloading");
     callback()
    },2000)
 }
 const taskthree = ()=>{
    console.log("task three of three")
 }
//  const taskfour = ()=>{
//      console.log("task four of four")
//  }
 taskone();
 tasktwo();
 taskthree();


taskone(function f1(){
    tasktwo(function f2(){
        taskthree();
    });
})

function square(x){
    console.log(`square of ${x}: ${x * x}`);
}
function higherorderFunction(nam,  callback){
    callback(nam)
}
higherorderFunction(6, square);


