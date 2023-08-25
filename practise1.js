/* var nme=prompt("enter your name");
console.log("hello"+nme+"good morning");*/

/*const numb1 = prompt("enter first Number");
const numb2 = prompt("enter second number");
const sum = numb1 + numb2;
console.log("total ", sum); */

/*for(i=0;i<=10;i++){
  console.log(i)
}*/

/*function areaofrec(l,w){
  let area=l*w;
    return area
}*/

/*const n=promp("enter a number:");
if(n%2==0){
    console.log("even");
}
else{
    console.log("odd");
}*/

/*function leapyr(year){
  if((year%4==0)||(year%400==0)){
      console.log("it is leap year"); } 
      
else {
    console.log("not a leap year");
  }
}*/

/*var username=prompt("enter name")
for(let i=1;i<=5;i++){
  console.log(username);
}*/

/*var age=prompt("enter age")
if(age<13){
  console.log("child");
}
else if(agr > 13 && age<20){
  console.log("teenage");
}
else{
  console.log("adult");
}*/

/*let num=promt("enter a number");
if(num<0){
  console.log("number is negative");
}
else if(num>0){
  console.log("number is positive");
}
else{
  console.log("number is zero");
}*/

// let s1=parseInt(prompt("enter s1"));
// let s2=parseInt(prompt("enter s2"));
// let s3=parseInt(prompt("enter s3"));
// if(s1===s2===s3){
//   console.log("eqilateral");
// }
// else if(s1==!s2==!s3){
//   console.log("scalean");
// }
// else{
//   console.log("isolese");
// }

/*for(i=1;i<=10;i++){
 console.log(i);
}*/

/*for(i=1;i<=10;i++){
  if(i%2==0){
    console.log(i);
  }
}*/

/*for(i=1;i<=50;i++){
  if(i%2!==0){
    console.log(i);
  }
}*/

/*let sum=0;
for(i=1;i<10;i++){
  sum=sum+i
}
console.log(sum);*/

/*let a=[1,2,3,4,5,6,7]
for(i=0;i<a.length;i++){
  console.log(a[i]);
}*/

/*function vowels(str){
  var vowelcount=0
  const vowelss=["a","e","i","o","u"]
  for(char of str){
    if(vowels.includes(char)){
      vowelcount++
    }
  }
  return vowelcount
}*/

/*let firstname= "user"
let lastname= "name"
fullname= `${firstname} ${lastname}`
console.log(fullname);*/

/*let firstnumber=23.432
let secondnumber=87.93
add=firstnumber+secondnumber
sub=firstnumber-secondnumber
mul=firstnumber*secondnumber
div=firstnumber/secondnumber
console.log(add,sub,mul,div);*/

/*let firstnumber=128
firstnumber+=156
console.log(firstnumber);
firstnumber-=33
console.log(firstnumber);
firstnumber/=4
console.log(firstnumber);
firstnumber*=23
console.log(firstnumber);*/

/*let number=true
console.log(typeof number);*/

//let basket=["a","b","c","d","e","f","g"]
//console.log(basket[3]);
//basket[2]="z"
//console.log(basket[2]);

/*let achivement="sport award"
function selection(indp){
  console.log(`congrats for ${indp}`);
}
selection(achivement)*/

/*function addNumbers(num1,num2){
  return num1+num2;
}
const n1=addNumbers(23,34);
const n2=addNumbers(32,43);
const result=[n1,n2];
console.log(result);*/

/* let a=53;
let b=78;
if(a>b){
  console.log(true);
}
else{
  console.log(false);
}*/

/*let s1=21;
let s2=22;
let s3=21;
if(s1===s2&&s1===s3||s2===s1&&s2===s3||s3===s2&&s3==s1){
  console.log("all sides equal");
}
else if(s1===s2||s2===s3||s1===s3){
  console.log("two sides are equal");
}
else{
  console.log("all sides not equal");
}*/

/*for( let i=0;i<=10;i++){
console.log(`the number is ${i}`);
}*/

// let rdam="plutonium";
// let logh=rdam.length;
// console.log(logh);
// console.log(rdam.toUpperCase());
// console.log(rdam.charAt(3));
// console.log(rdam.charAt(rdam.length-2));
// console.log(rdam.indexOf("t"));

/*let basket=["mang","orng","ape","bann","gra"];
let material=["ur","pl","th","ra"];
let combine=basket.concat(material);
console.log(combine);*/

/*let basket=["mang","orng","ape","bann","gra"];
let basket1=["piape"];
for(let i=0;i<basket.length;i++) {
console.log(i);}*/

/*let pack1=[11,22,33,44,55];
let pack2=[10,20,30,40];
function calculateTotal(arr){
   let total=0
   for(i=0;i<arr.length;i++){
  total+=arr[i];
}
return total;
}
let pack1Total=calculateTotal(pack1);
let pack2Total=calculateTotal(pack2);
console.log(pack1Total);
console.log(pack2Total);*/

/*let person1= { name:"edc"}
let person2=person1
person2.name="cde";
console.log(person1);
console.log(person2);*/

/*let person={
  name:"shn",
  place:"hyd",
  prof:"dvp"
};
let text="";
for(let x in person){
  text = x + ' ' + text
}
console.log(text)*/

/*const myStr= "this is a " + "ball"
console.log(myStr);*/

/*function common(arr1, arr2) {
  let common = [];
  for (let i = 0; i < arr1.length; i++);
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j]){
      common.push(arr1[i]);
    }
  }
}
return common;
let arr1=[2,3,4,5,6];
let arr2=[3,4,5,6,7];*/


/*function commonele(arr1, arr2) {
  const seta = new Set(arr1);
  const setb = new Set(arr2);
  let newarr = [];
  for (let i of setb) {
    if (seta.has(i)) {
      newarr.push(i);
    }
  }
  return newarr;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 5, 6, 7];
console.log(commonele(arr1, arr2));*/

/*function commonele(arr1, arr2) {
  const seta = new Set(arr1);
  const setb = new Set(arr2);
  let newarr = [];
  for (let i of seta) {
    if (setb.has(i)) {
      newarr.push(i);
    }
  }
  return newarr;
}
const arr1 = [1, 2, 3, 4, 5,0];
const arr2 = [2, 4, 8, 3,1,0];
console.log(commonele(arr1, arr2));*/

/*const number = 10;
if (number < 0) {
  console.log("it is not possible for negative number");
} else if (number == 0) {
  console.log("factorial for zero is 1");
} else {
  let factorial = 1;
  for (i = 1; i < 10; i++) {
    factorial *= i;
  }
  console.log(factorial);
}*/

/*function factorial(num) {
  if (num < 0) {
    console.log("not possible");
  } else if (num == 0) {
    console.log("factorial for zero is 1");
  } else {
    let factorial = 1;
    for (i = 1; i <= num; i++) {
      factorial *= i;
    }
    console.log(factorial);
  }
}
factorial(8);*/

/*function palindrom(string){
  let leng=string.length
  for(i=0;i<leng/2;i++){
    if(string!==string[leng-1-i]){
      return "it is palindrome"
    }
  }
  return "it is not palindrome"
}
let string="radar"
console.log(palindrom("radar"))*/

/*let str="propertynon";
let newstr="";
for(i=0;i<str.length;i++){
  let char = str[i]
  if(char!=="a"&&char!=="e"&&char!=="i"&&char!=="o"&&char!=="u"){
    newstr+=str[i]
  }
}
console.log(newstr)*/

/*let str="elephant";
let newstr=""
for(i=0;i<str.length;i++){
  let char=str[i]
  if(char!=="a"&&char!=="e"&&char!=="i"&&char!=="o"&&char!=="u"){
    newstr+=str[i]
  }
}
console.log(newstr)*/

// let str="elephant";
// console.log(str.charAt(7));
// console.log(str.charCodeAt(3))
// console.log(str.indexOf(5))


/*let obj1={met:'ore',abs:'ur',impo:'irq'}
let obj2={met:'ore',abo:'th',imo:'ast'}
console.log({...obj1,...obj1})*/
/*var y=()=>{
  console.log("dum");
}
y();*/
/*let x=(a,b)=>{
  console.log(a+b);
}
x(3,4);*/
/*let x=(a,b)=>{
  return a+b;
}
console.log(x(3,4));*/
/*const dum=(mul1,mul2)=>mul1*mul2;
console.log(dum(2,3))*/
/*let urn=(add1,add2)=>add1+add2;
console.log(urn(5,6));*/
/*let wrd="itt othet imefo ttin h".split('t');
console.log(wrd);*/
//const user={name:"edf",age:"54"}
//const {name,age}=user
//console.log(user);

//d8//

/*let ar1=[1,2,3,4];
let ar2=[5,6,7,8];
function combi(ar1,ar2){
  return[ ...ar1, ...ar2];
};
console.log(combi(ar1,ar2))*/

/*let arr=[11,22,33,44,55,66]
let total=arr.reduce(function(a,b){
  return a+b
},0);
console.log(total);*/

/*let arr=[4,6,8,12,14]
let total=arr.reduce((a,b)=>{
return a+b
},0);
console.log(total);*/

/*let che=["ho","no","mno","kmno","so","zno","hcl"]
let cheU=che.map(Element=>Element.toUpperCase());
console.log(cheU);*/

// let arr=[3,5,7,4,5]
// let product=arr.reduce((a,b)=>{
//   return a*b;
// });
// console.log(product);

/*let arr=[3,4,5,6,7]
let doub=arr.map(element=>element*2);
console.log(doub);*/

// let arr=[2,3,4,5,6]
// let doub=arr.reduce((a,b=2)=>{
//   return a*b
// });
//  console.log(doub);

//let num=[2,3,3,4]
//let str="edc,vfr,tgb,nhy,ujm"
//let srt=str.split('')
//console.log(srt);
//str.reverse();
//console.log(str)
/*let arr=[1,2,3,4,5]
for( let x of arr){
  console.log(x);
}*/

/*let obj={
  name:"Rfc",
  age:44,
  prof:"tec"
};
for(let x in obj){
  console.log(obj[x]);
}*/

/*let obj1=["ed","dc","as","cv"];
for(let x of obj1){
  console.log(x);
}*/

/*let b="dumm";
function greeting(nam){
  console.log("dumm");
}
let a="user";
function process(inpt){
  console.log("user");
}
process(greeting);
greeting(process);
process(b);
process(a);
greeting(a);
greeting(b);*/

/*function largestarray(array){
  let maximumnum=-2,max
  const res=array.map((arr)=>{
    max=Math.max(...arr)
    maximumnum=Math.max(maximumnum,max)
  })
  console.log(maximumnum)
}
largestarray([[2,3,4,5],[3,4,5,6],[9,7,8,6],[5,6,7,9]])*/

/*function smallestnoarray(array){
  let minimumnum=Infinity,min
  const res=array.map((arr)=>{
    min=Math.min(...arr)
    minimumnum=Math.min(minimumnum,min)
  })
  console.log(minimumnum)
}
smallestnoarray([[33,44,55,66],[22,33,44,55],[77,66,55,94],[16,24,34,74]])*/

/*const arr=[1,2,3,3,2,2,5,5,4,4,4,4,7,7]
function countOccurance(arr){
  return arr.reduce((x,y)=>{
    if(x[y]){
      x[y]++
    }
    else{
      x[y]=1
    }
    return x;
  },{});
};
console.log(countOccurance(arr));*/


// const Msheet = [
//   { name: "ed", mark: 23 },
//   { name: "de", mark: 32 },
//   { name: "fc", mark: 45 },
//   { name: "gb", mark: 33 },
// ];
// function getAveragescore(Msheet){
// // const avgstu = Msheet.reduce((nm, mk) => nm + mk);
// const total = Msheet.reduce((totalMarks, obj) => obj.mark + totalMarks, 0);
// const avg=total/Msheet.length
// return avg;
// };
//console.log(getAveragescore(Msheet));

/*let arr = [
  [1, 2],
  [3, 4],
  [2, 3, [2, 3], 0, [[5, 6]]],
  [9, 7, 9],
  [10, 11, 13],
  [14, 15],
];
function flattenDeepArray(arr) {
  return arr.reduce((acc, curr) => {
    return Array.isArray(curr) ? acc.concat(flattenDeepArray(curr)) : acc.concat(curr);
  }, []);
}
console.log(flattenDeepArray(arr));*/

/*const lrrt=(num1,num2)=>num1*num2
const lrrt=(num1,num2)=>num1-num2
console.log(lrrt(23,43));*/

// const data=[{name:"qaz",age:32,place:"zaq"},
//     {name:"wsx",age:33,place:"xsw"},
//     {name:"edc",age:34,place:"cde"},
//     {name:"rfv",age:35,place:"vfr"},
//     {name:"tgb",age:36,place:"bgt"},]
   
    
// const dta=data.map((person)=>{return person.age});
// console.log(dta);
/*const dta=data.map((person)=>{return{
  username:person.name,
  yr:person.age,
  newplac:person.place
}});*/
//const dta=data.filter((pre)=>{return pre.age<36})
//const dta=data.filter((pre)=>{return pre.place==="xsw"})
//const dta=data.find((pre)=>{return pre.age<36})
//console.log(dta);
// const arr=data.reduce((accum,val)=>{
//   console.log(accum)
//   console.log(val.name)
//   return val
//   return accum+=val.age
// },{});

/*const data=[
  {"id":1,"name":"Amit kumar",age:25, R: 'this is r'},
  {"id":2,"name":"Rahul Dixit",age:20},
  {"id":3,"name":"Ravi joshi",age:55},
  {"id":4,"name":"Rohit verma",age:35},
  {"id":5,"name":"Ajay jain",age:17},
]*/
//const newdata=data.find((rod)=>{return rod.name==="Rohit verma"})
//const newdata=data.reduce((rod,age)=>{return Math.max(rod,age)},0)
//const newdata=data.filter((rod)=>{return rod.age>17});
/*const newdata=data.reduce((acc,rod)=>{
  return acc+=rod.age
},0);
console.log(newdata/data.length);*/
//let newdata=data.map((rod)=>{return rod.name[0] === "R"})
//console.log(newdata);
/*function caluculateSumOfSquares(arr){
  const sumofnum = arr.reduce((acc, val) => {
    const sqr = Math.pow(val, 2);
    return acc + sqr;
  }, 0);
  return sumofnum
};
const arr=[1,2,3,4,5];
console.log(caluculateSumOfSquares(arr));*/
/*let arr = [
  { id: 1, name: "Amit Kumar", mark: 25 },
  { id: 2, name: "Rahul Dixit", mark: 80 },
  { id: 3, name: "Ravi Joshi", mark: 79 },
  { id: 4, name: "Rohit Verma", mark: 35 },
  { id: 5, name: "Ajay jain", mark: 31 },
];
const newarr =arr.filter((rra)=>{return rra.mark>31})
console.log(newarr);
const newarr=arr.filter((dom)=>{
  if (dom.name[0]==="R") {
    return dom.name
  }
})

 const total = newarr.reduce((acc, obj) => {
   return (acc += obj.mark);
 }, 0);
 console.log(total / newarr.length);*/

/*const array=["asdf","asdf","lkjhk","fhjkkl","rdf","vbg","edcvfr"]
let newarr=array.filter((ele)=>{return ele.length>4})
console.log(`${newarr}`);*/
//const arr=[1,2,-2,3,4,4,-4,5,5,6,1,-1,2,4,-4,5,5,-3,3]
//const newarr=arr.filter((ele)=>
/*class person{
  constructor(name){
    this.name=name;
  }
  get personName(){
    return this.name;
  }
  set personName(x){
    this.name=x;
  }
}
let person1=new person("jack")
console.log(person1);*/
/*const person ={
  name:"edc",
  age:343,
  address:"ewsder",
}
let { name,age,address }=person
console.log(name);
console.log(person);
console.log(age);
console.log(person.name);*/
/*let arr=[12,32,22,3,23,24,31]
const[x,r,...y]=arr
console.log(x);
console.log(y);
console.log(r);*/
/*const arr=["one","two","three"];
const [x, ,y]=arr
console.log(y)*/
/*let arr = [
  { id: 1, name: "Amit Kumar",age:25},
  { id: 2, name: "Rahul Dixit",age:20},
  { id: 3, name: "Ravi Joshi",age:55},
  { id: 4, name: "Rohit Verma",age:35},
  { id: 5, name: "Ajay jain",age:17},
];*/
//let newarr=arr.find((ele)=>{return ele.name==="Rohit Verma"});
//let newarr=arr.reduce((val,age)=>{return Math.max(val,age)},0);
//let newarr=arr.filter((ele)=>{return ele.age>17});
//let newarr=arr.reduce((val,avgage)=>{return val+=avgage.age},0)
//console.log(newarr/arr.length);
//let newarr=arr.filter((ele)=>{return ele.name[0]==="A"},0)
//let newarr=arr.filter((ele)=>{return ele.name[0]==="R"},0)
//console.log(newarr);

// function caluculateSumOfSquares(arr){
//   const sumofnum=arr.reduce((acc,val)=>{
//     return (acc += val * val);
//   },0);
//   return sumofnum;
// };
// const arr=[1,2,3,4,5];
// console.log(caluculateSumOfSquares(arr));

// let arr = [
//   { id: 1, name: "Amit Kumar", marks: 25 },
//   { id: 2, name: "Rahul Dixit", marks: 80 },
//   { id: 3, name: "Ravi Joshi", marks: 79 },
//   { id: 4, name: "Rohit Verma", marks: 35 },
//   { id: 5, name: "Ajay Jain", marks: 31 }]
// ;
// let newarr = Symbol("name")
// console.log(newarr);

// let newarr=arr.filter((ele)=>{return arr.marks>31})
// console.log(newarr);
//let newarr=arr.filter((ele)=>{ return ele.name[0]==="A"})

// let nnarr=newarr.reduce((acc,val)=>{return acc+=val.marks},0);
// console.log(nnarr/newarr.length);

/*const arr=["waa","der","eerr","rree","tfrew","erdswe","erder","mkolko"]
const newarr=arr.filter((ele)=>{return ele.length>3});
console.log(newarr);*/

// let name = Symbol();
// let person = {
//     [name]: "Jack",
//     age: 25,
//     id: 12
// };
// for (let key in person) {
//     console.log(key);
// }

//let vegitables=new Map([["cucumber",34],["bottlegurd",22],["pumkin",50],["sweetpotato",30]])
// for(let basket of vegitables.keys()){
//   console.log(basket);
// };
// for(let basket of vegitables.values()){
//   console.log(basket);
// };
// for(let basket of vegitables.entries()){
//   console.log(basket);
// };
//console.log(vegitables.get("pumkin"));

// let obj={
//   name:"rfgt",
//   age:34,
//   address:"rjy",
//   state:"ap"
// };
// let map=new Map(Object.entries(obj));
// console.group(map.get("state"));
//console.log(map)
// let digi=[34,44,56,76,98,79,97,87,9]
// let q=digi.forEach((ele)=>{
//   console.log(ele%2==0)
// })
// class Person {
//   constructor(name, city) {
//     this.name = name;
//      this.city = city;
//   }
//   setpersonrollno(a) {
//     this.rollno = a;
//   }
//   setpersonmark(b) {
//     this.mark = b;
//   }
//   setpersonschool(c) {
//     this.school = c;
//   }
// }
// let person1 = new Person("ksssd","rajamahendravaram");
// person1.setpersonmark(98)
// person1.setpersonrollno(09)
// person1.setpersonschool("sgss")
// console.log(person1)
// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };
// rabbit.__proto__ = animal;
// console.log(rabbit.eats);
// let numerator=4;
// let denominator=0;
// try{
//   if(denominator = 0){
//   throw{
//     error:"div by zero is error",
//     message:"denominator is zero"
//   }
//  }
//  else{
//   console.log((numerator/denominator));
// }}
//  catch(e){
//   console.log(e.error)
//   console.log(e.message)
//  }
// if(denominator=0){
//   console.log("error");
// }
// else{
//   console.log(numerator/denominator);
// }

// let user={
//   name:'tdr',
//   age:'50',
// };
// let { name:personname,age:personage}=user;
// console.log(personname);
// console.log(personage);

// }
// class rectangle{
//   constructor (height,width){
//     this.height= height,
//     this.width= width
//   }
//   caluculateArea(){
//     return this.height*this.width
//   };
// };

// function calculateCircleArea(r){
//   return Math.PI*r*r;
// };
// import { calculateCircleArea } from "./link"
// const r=5
// console.log(calculateCircleArea(r))

//import { calculateCircleArea } from "./link";

// const obj = { name:"John",age:"30",city:"NewYork"};
// for(let key in obj){
//   console.log(key)
// }
// 
// const obj={
//   a:10,
//   b:20,
//   c:30
// };
// const values=Object.values(obj)
// const sum=values.reduce((acc,val)=>{return acc+val},0);
// console.log(sum)

// const obj={
//   a:"10",
//   b:"20",
//   c:30
// };
// const values=Object.values(obj)
// if(isNaN(values)){
//   console.log("is number");
// }
// else{
// console.log("no a Number");
// };
// const obj={
//   name:"Jhon",
//   age:30,
//   city:"new york"
// };
// const entries=Object.entries(obj)
// console.log(entries);