// var x=10;
// if(true){
//    var x=5;
// }
// console.log(x);



// var Name="Foysal Ahmed Sorker";
// var FatherName="Abdul Hakim Sorker";
// console.log(`Amar Nam ${Name} and FatherName ${FatherName}`)


// const add =(x,y)=>{
//     const total=x*y;
//     console.log(total);
// }
// add(2,3)


// foysal="name";
// console.log(foysal);
// var foysal


// x=20;
// if(true){
//     y=10;
//     console.log(y)
//     var y;
// }
// console.log(x);
// var x



// var x
// x=10;
// console.log(`amar roll ${x}`);




// function foysal(){
//     console.log("hi foysal")
// }
// foysal();


// function text(give="have a laptop"){
//     console.log(`${give}`)
// }
// text("hi simcity")
// text()


// function foysal(x, y){
//     console.log(`${x}`, `${y}`)
// }
// foysal(10,20);

// function khan(x,y, ...b){
//     console.log(`x=${x} y=${y} b=${b}`)
// }
// khan(10,20,30, 40, 50, 60, 70, 80, 90)

// function numbersAdd(x,y,z){
//     return x+y+z;
// }
// let numbers=[1,4,7]
// console.log(numbersAdd(numbers[0], numbers[1], numbers[2]));


// function numbersAdd(x,y,z){
//     return x+y+z;
// }
// let numbers=[1,4,7]
// console.log(numbersAdd(...numbers));


// let num1=[1,2,3]
// let num2=[5, ...num1, 5];
// console.log(num2)


// let num1=[1,2,3];
// let num2=[4,5,6];
// let numbers=num1.concat(num2);
// console.log(numbers)


// let rol1=[1,2,3]
// let rol2=[4,5,6]
// let mot=[...rol1, ...rol2]
// console.log(mot);


// let p1={
//     Name:"foysal ahmed",
//     age:"20"
// }
// let p2={
//     address:"bamnishair",
//     nationality:"bangladesh"
// }
// let p={...p1, ...p2}
// console.log(p);



// function studentInfo(name, age){
//     return{
//         name: name,
//         age:age
//     }
// }
// console.log(studentInfo("foysal ahmed", "20"));

// let message={
//     body:function(){
//         return `hi i am object function.`
//     }
// }
// console.log(message.body());



// let message={
//     body(){
//         return `hi i am object function.`
//     }
// }
// console.log(message.body());




// let message={
//     'body name'(){
//         return `hi i am object function.`
//     }
// }
// console.log(message['body name']());

// let nese=[1,2,3,4,5,6]
// for(let name of nese){
//     console.log(name)
// }



// let student={
//     name:"foysal ahmed",
//     roll: "101",
//     croll:"3.91"
// }
// for(let x in student){
//     console.log(x);
// }


// let student={
//     name:"foysal ahmed",
//     roll: "101",
//     croll:"3.91"
// }
// for(let x in student){
//     console.log(student[x]);
// }

// let student={
//     name:"foysal ahmed",
//     roll: "101",
//     croll:"3.91"
// }
// for(let x in student){
//     console.log(`${x}: ${student[x]}`);
// }


// var numbers=[1,2,3,4,5,6];
// for(var x=0; x<numbers.length; x++){
//     console.log(numbers[x])
// }


// var numbers=[10,20,3,50,60]
// numbers.forEach(myFaoysal)
// function myFaoysal(x){
//     console.log(x)
// }


// var numbers=[10,20,3,50,60]
// numbers.forEach(function(x){
//     console.log(x)
// })




// var numbers=[10,20,3,50,60]
// var squareNumbers=[]
// numbers.forEach(function(x){
//     squareNumbers.push(x*x);
// })
// console.log(squareNumbers)



// var numbers=[10,20,30,40];
// console.log(numbers)
// numbers.forEach(function(x,index,arr){
//     arr[index]=x-5;
// })
// console.log(numbers)



// var numbers=[10,20,3,50,60]
// var squareNumbers=[]
// numbers.forEach(function(x){         56.10
//     squareNumbers.push(x*x);
// })
// console.log(squareNumbers)

// var numbers=[10,20,3,50,60]
// var squareNumbers=numbers.map(function(x){
//     return (x*x);
// })
// console.log(squareNumbers)


// var numbers=[10,20,3,50,60]
// var newNumber=numbers.filter(function(x){
//     return x>=10;
// })
// console.log(newNumber)



// function simcity1(){
//     console.log("hi my name is a simcity foysal ahmed")
// }
// const simcity2 =() => {
//     console.log("hi foysal ahmed sorker")
// }
// simcity2();
// simcity1();


// function foysalA(){
//     return 'foysal amar name'
// }
// console.log(foysalA());

// function message1(){
//     return "ami message one"
// }
// const message2 = () => "ami message two";
// return dile { dite hoy}
// console.log(message1())
// console.log(message2())


// function have(num1, u){
//     return num1+u;
// }
// console.log(have(10,2))


//         let hova= (ny, yt) =>{
//             return ny+yt
//         }
//         console.log(have(12,4))


// const foysal = (roll1, roll2) => roll1+roll2;
// console.log(foysal(12,6))


// const foysalsimcity=[
//     {
//         userName: "foysal ahmed sorker",
//         roll: 400,
//         village: "bamnishair"
//     },
//     {
//         userName: "eshan ahmed ahad",
//         roll: 300,
//         village: "notore"
//     },
//     {
//         userName: "mehedi hasan",
//         roll: 200,
//         village: "slyte"
//     },
//     {
//         userName: "momotaz ",
//         roll: 350,
//         village: "rajamehar"
//     }
// ]
// console.log(foysalsimcity);


// function foysalnames(){
//     return foysalsimcity.filter(function(x){
//         return x.roll <=300
//     });
// }
// console.log(foysalnames())


// const foysalsimcity=[
//     {
//         userName: "foysal ahmed sorker",
//         roll: 400,
//         village: "bamnishair"
//     },
//     {
//         userName: "eshan ahmed ahad",
//         roll: 300,
//         village: "notore"
//     },
//     {
//         userName: "mehedi hasan",
//         roll: 200,
//         village: "slyte"
//     },
//     {
//         userName: "momotaz ",
//         roll: 350,
//         village: "rajamehar"
//     }
// ]


// function foysalnames(){
//     return foysalsimcity.filter(function(x){
//         return x.roll <300
//     }).map(function(y){
//         return y.userName
//     });
// }
// // console.log(foysalnames())
// const foysalname2 = () =>{
//  return   foysalsimcity.filter((x)=> x.roll>300).map((y)=> y.userName);

// }
// console.log(foysalname2())



// let numbers=[10,20,30,40,50,60];


// let a=10, b=20;
// [a,b]=[b,a];
// console.log(a)
// console.log(b)


// const studentname=
//     {
//         name: "foysal ahmed",
//         id: 132,
//         village:"bamnishair"
//     }
// const {name, id, village}=studentname;

// console.log(name)
// console.log(id)
// console.log(village)



// const foysalsimcity=(foysal)=>{
//     console.log(`${foysal.id}, ${foysal.fullName}`)
// }
// const foysal={
//     id:100,
//     fullName:"foysal ahmed"    

// }
// foysalsimcity(foysal)



// let numbers=[45,89,78,41,5,6];
// const evenNumber=(value, index, array)=>{
//     if(value%2===0)
//     return value;
// }
// let firstEvenNumber =numbers.findIndex(evenNumber);
// // let firstEvenNumber =numbers.find(x=> x%2===0);
// console.log(firstEvenNumber);

// let foysal=[
// {
//     id:"tio",
//     cgpa:3.5
// },
// {
//     id:"prothome undefind",
//     cgpa:4.5
// },
// {
//     id:"tio",
//     cgpa:3.5
// }]
// console.log(foysal.find(x=> x.cgpa>4));


// const message ="Today is Friday"
// console.log(message.startsWith("today"))


// class foysal{
//     constructor(id, name){
//         this.name=name;
//         this.id=id;
//     }
// }
// let foysalfamily=new foysal("123 sit", "foysal ahmed sorker");
// console.log(foysalfamily);

// class foysalt{
//     constructor(Fullname, village){
//         this.Fullname=Fullname;
//         this.village=village;
//     }
// }
// let foysalfnd=new foysalt("Foysal Ahmed Sorker", "bamnishair")
// console.log(foysalfnd);
// console.log(foysalfnd.Fullname);
// console.log(foysalfnd.village);

// 



// console.log("my name is a foysal")
// console.log("my name is a foysal")
// console.log("my name is a foysal")
// console.log("my name is a foysal")


// const taskone = ()=>{
//     console.log("task one of one")
// }
// const  dataloading =()=>{
//     console.log("tasktow.dataloading");
// }

// const tasktwo = ()=>{
//     setTimeout(dataloading, 2000);
// }
// const taskthree = ()=>{
//     console.log("task three of three")
// }
// const taskfour = ()=>{
//     console.log("task four of four")
// }
// taskone();
// tasktwo();
// taskthree();
// taskfour();




// const taskone = ()=>{
//     console.log("task one of one")
//     callback()
// }



// const tasktwo = ()=>{
//    setTimeout(()=>{
//     console.log("tasktow.dataloading");
//     callback()
//    },2000)
// }
// const taskthree = ()=>{
// }
// const taskfour = ()=>{
//     console.log("task four of four")
// }
// taskone();
// tasktwo();
// taskthree();
// taskfour();




// const taskone = (callback)=>{
//     console.log("task one of one")
// }
// const tasktwo = ()=>{
//     setTimeout(()=>{
//      console.log("tasktow.dataloading");
//      callback()
//     },2000)
//  }
//  const taskthree = ()=>{
//     console.log("task three of three")
//  }
// //  const taskfour = ()=>{
// //      console.log("task four of four")
// //  }
//  taskone();
//  tasktwo();
//  taskthree();


// taskone(function f1(){
//     tasktwo(function f2(){
//         taskthree();
//     });
// })
