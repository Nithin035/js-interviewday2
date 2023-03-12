// 1.
hoistedvariable=3;
console.log(hoistedvariable);
var hoistedvariable
// or
sayhello()
function sayhello(){
    console.log("hosting")
}
// 2.
function call1(name) {
 console.log("Hii ",name);
}
          
function Func(calling) {
calling("pavan");
 }
  Func(call1)

//3 callback hell function
function calltime(){
    setTimeout(()=>{
        console.log("1");
        setTimeout(()=>{
            console.log("2"); 
            setTimeout(()=>{
                console.log("3");
                setTimeout(()=>{
                    console.log("4");
                    setTimeout(()=>{
                        console.log("5");
                        setTimeout(()=>{
                            console.log("6");
                            setTimeout(()=>{
                                console.log("7");
                            },7000)
                        },6000)
                    },5000)
                },4000)
            },3000)
        },2000)
    },1000)
}
calltime()

// function call(){
//     for(let i=7;i<=14;i++){
//         setTimeout(()=>{
// console.log(i)
//         },i*1000)
//     }
//  }
//  call()
//4promise
var promise=new Promise(function(resolve,reject){
    var x="pavan"
    var y= "pavan"
    if(x===y){
        resolve()
    }else{
        reject()
    }
})
promise.then(()=>{
    console.log("sucess")
})
promise.catch(()=>{
    console.log("failed")
})
//5q promise chaning
new Promise(function(resolve,reject){
    setTimeout(()=>{resolve(1),1000})
}).then(function(Result){
    console.log(Result)
    return Result *2
}).then(function(Result){
    console.log(Result)
    return Result *3
})
.then(function(Result){
    console.log(Result)
    return Result *4
})
//6. example of async/await
function resolveafter2seconds(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("Problem resolved")
        },2000)
    })
}
 async function asynccall(){
    console.log("function calling")
    const result = await resolveafter2seconds();
    console.log(result)
 }
 //7
 let promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Promise resolved")
    },3000)
})
  async function myFunction(){
    let result=await promise1;
    console.log(result);
}
myFunction();
 //8
 function add(a,b){
    console.log(a+b)
 }
 add(10,13)