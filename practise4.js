// export function calculateCircleArea(r){
//     return Math.PI*r*r;
// };
// const count=false;
// let countvalue= new Promise(function(resolve,reject){
//     if(count){
//         resolve("there is count value");
//     }
//     else{
//         reject("there is count value");
//     }
// });
// console.log(countvalue);

// const myPromise=new Promise((resolve,reject)=>{
//     let arr=62;
//     if(arr==61){
//         resolve("promise is resolved")
//     }
//     else{
//         reject("promise is reject")
//     }
// });
// myPromise.then((mess)=>{
//     console.log(mess);
// }).catch((mess)=>{
//     console.log(mess)
// });

// const myPromise=new Promise((resolve,reject)=>{
//     let num=-2;
//     if(num>0){
//         resolve("promise is resolved")
//     }
//     else{
//         reject("promise is rejected")
//     }
// });
// myPromise.then((mess)=>{
//     console.log(mess)
// }).catch((mess)=>{
//     console.log(mess)
// });

// function usersinfo(){
//     let users=[];
//     setTimeout(() => {users=[
//         {username:"redfc",idno:"44",
//         username:"bluefc",idno:"55"}];
//     },1000)
//     return users;
// };

// let promisevariable=new Promise((resolve,reject)=>{
//     resolve("javas")
// });
// promisevariable.then((resultinfo1)=>{
//     console.log(resultinfo1)
//     return new Promise((resolve,reject)=>{
//         resolve("javas")
//     })
// })
// .then((resultinfo2)=>{
//     console.log(resultinfo2)
// });

// let varib=new Promise((resolve,reject)=>{
//     resolve("javsol")
// });
// varib.then((result1)=>{
//     console.log(result1)
//     return new Promise((resolve,reject)=>{
//        resolve("hybrid")
//        })
//     })
//    .then((result2)=>{
//     console.log(result2)
//    }).then((result3)=>{
//     console.log(result3)
//    });

// let varibl=new Promise((resolve,reject)=>{
//     resolve(18)
// })
// varibl.then((result)=>{
//     //console.log(result)
//     return result*2
// }).then((result) => console.log(result))
// varibl.then((result)=>{
//     console.log(result)
//     return result*2
// })
// varibl.then((result)=>{
//     console.log(result)
//     return result*2
// })
// varibl.then((result)=>{
//     console.log(result)
//     return result*2
// })
// varibl.then((result)=>{
//     console.log(result)
//     return result*2
// })

// let varib=new Promise((resolve,reject)=>{
//     resolve(18)
// })
// varib.then((result)=>{
//     console.log(result)
//     return result*2
// }).then((result)=>{
//     console.log(result)
//     return result*2
// }).then((result)=>{
//     console.log(result)
//     return result*2
// }).then((result)=>{
//     console.log(result)
//     return result*2
// }).catch((result)=>{
//     console.log(result)
//    // return(result)
// })

// try{
//   throw new Error("this is error")
// }
// catch(e){
//     console.log(e.message)
// }

// try{
//     let a=[2,3,4,5,6]
//     let c=[2,3,4,5,6]
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }catch(e){
//        console.log(e.message)
// }

// try{
//     var a=2;
//     if(a==2){
//         console.log("done")
//     }
//  }catch(e){
//     console.log(e.message)
//  }finally{
//     console.log("cleared")
//  };

// async function f(){
//     console.log("async function");
//     return Promise.resolve(8*9)
// }
// f().then(function (result){
//     console.log(result)
// });

// let prom=new Promise((resolve,reject)=>{
//     resolve("promise solved")
// });
// async function asyncFunc(){
//     try{
//         let result=await promise;
//         console.log(result);
//     }catch(error){
//     console.log(error);
// }
// }
// asyncFunc();

// function text(){
//     return new Promise((resolve,reject)=>{
//         resolve("succesfully");
//     });
// }
// let a=text();
//  a.then(resolved=>console.log(resolved));

// async function main(){
//     let a= await text();
//     console.log(a);
// }
// function text(){
//     console.log("succesfully");
// }

// function calculateSqOfNum(arr){
//      const sumofnum=arr.reduce((acc,val)=>{
//         return (acc+=val*val)
//      },0);   
// return sumofnum;
// }
// const arr=[23,45,63,13,21];
// console.log(calculateSqOfNum(arr));


