// const target={
// msga:"1",
// msgb:2,
// msgc:"3",
// }
// let handler={};
// const proxy1 = new Proxy(target,handler);
// console.log(proxy1.msgb);

// const stu={
//   firstName:"edc",
//   middleName:"dd",
//   lastName:"cde",
//   get getName(){
//     return `${this.firstName} ${this.middleName} ${this.lastName}`;
//  }
// };
// console.log(stu.getName);

// const stu={
//     firstName:"edc",
//     middleName:"dec",
//     lastName:"cde",
  
//   set changeName(newName){
//     this.firstName=newName;
//   }
// };
// stu.firstName="eed";
// console.log(stu.firstName);

// function Person(){
//     this.name="edc",
//     this.age="12",
//     this.greet=function(){
//         console.log("hello");
//     }
// }
// const person1=new Person()
// const person2=new Person()
// console.log(person1.name);
// console.log(person2.name);
// var a=3;
// if(true){
//     let a="b";
//     console.log(a)
// }
// function add(){
//     var a=1;
//     console.log(a);
// }
// add()
// console.log(a);

// try{
//     a=1;
//    console.log(a);
// }
// catch(error){
//     console.log(error);
// }
// console.log("oops");

// function add(a,b){
//     if(a===undefined || b===undefined){
//         throw new Error('a and b cannot be defined');
//     }
//     if(typeof a==="string"||typeof b==="string"){
//         throw new Error('a and b should be valid numbers')
//     }
//     console.log(a+b)
// }
// try{
//     add(1,'a')
// }catch(error){
//     console.warn(error);
// }
// console.log('completed');

// const x=JSON.stringify({
//     "name":"edc",
//     "city":"dec",
//     "rtf":"srt",
//     "wrt":"vbn",
//     "rty":"tdp",
// });
// console.log(x, JSON.parse(x));


// let arr=[2,3,4,5]
// let newarr=arr.map(function(element){
//     return element*3;
// });
// console.log(newarr);

// const fetchData=async()=>{
//     try{
 //       const response=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=cake");
//         const data= await response.json();
//         console.log(data);
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// fetchData();

// const fetchDataSequently=async()=>{
//     try{
//         const response=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=cake");
//         const data=await response.json();
//         console.log(data);

//         const response1=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=frenchfries");
//         const data1=await response1.json();
//         console.log(data1);

//       const responce2=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=pancake");
//         const data2=await responce2.json();
//         console.log(data2);
//     }
//     catch(e){
//         console.log(e)
//     }
// }
// fetchDataSequently();

// const id= ["cake","frenchfries","pancake","biriyani"];
// const fetchDataInParallel= Promise.all(
//     id.map(async id=>{
//         const url= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
//     })
// );
// //fetchDataInParallel
// console.log(fetchDataInParallel);

// const url1= getPromise("https://www.themealdb.com/api/json/v1/1/search.php?s=cake");
// const url2= getPromise("https://www.themealdb.com/api/json/v1/1/search.php?s=cupcake");
// const url3= getPromise("https://www.themealdb.com/api/json/v1/1/search.php?s=frechfries");
// const url4= getPromise("https://www.themealdb.com/api/json/v1/1/search.php?s=paneer");
// Promise.allSettled([url1,url2,url3]).then(result=>{
//     console.log({result});
// }).catch(error=>{
//     console.log("error")
// })

// function palindrom(string){
//     let leng=string.length
//     for(i=0;i<=leng/2;i++){
//         if(string[i]!==string[leng-1-i]){
//             return "it is not palindrome";
//         }
//     }
//    return "it is palindrome";
// }
// let string="racecar";
// console.log(palindrom(string));

// function reverseStrng(str){
//     let splitString=str.split("");
//     let reverseArray=splitString.reverse();
//     let joinstr=reverseArray.join("");
//     return joinstr;
// }
// console.log(reverseStrng("quantummechanics"));

// let numerator=8;
// let denominator=0;
// try{
//     if(denominator==0){
//         throw{
//             error:"div by zero is error",
//             message:"denominator is zero"
//         }
//     }
//     else{
//        console.log((numerator/denominator));
//     }
// }
// catch(e){
//     console.log(e.error);
//     console.log(e.message);
