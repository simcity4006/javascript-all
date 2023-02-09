console.log("wallcome")

const promise1 = new Promise((resolve, reject)=>{


    let  completedPromise = false ;
    if(completedPromise){
        resolve('complated promise1');
    }else{
        reject(new Error("not complated for simcity"))
    }

});
console.log(promise1)

promise1.then(res =>{
    console.log(res);
})
.catch(err=>{
    console.log(err)
})
console.log("end")

