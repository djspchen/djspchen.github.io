// document.write("hello")
// $name=prompt("請輸入")
// confirm($name)
// console.log($name)
// alert($name)

// let text5 = "Lorem i"
// console.log(text5.indexOf("i"))
// console.log(text5.toUpperCase().indexOf("I"));
// console.log(text5.indexOf("R"))
// console.log(text5.slice(1, 10))

// console.log(2 ** 8)

// let a = prompt("請輸入分數", "0")
// console.log(a, typeof (a))
// a = Number(a)
// console.log(a, typeof (a))
// if (isNaN(a)) {
//     document.write("請輸入數字")
// } else {
//     if (a < 0 || a > 100) {
//         document.write("請輸入1-100")
//     } else {
//         if (a >= 60 && a < 70) {
//             document.write("丙等")
//         } else if (a >= 70 && a < 80) {
//             document.write("乙等")
//         } else if (a >= 80 && a < 90) {
//             document.write("甲等")
//         } else if (a >= 90 && a <= 100) {
//             document.write("優等")
//         } else {
//             document.write("不及格")
//         }

//     }

// }

// let payway = prompt("請選擇付款方式 1.現金 2.ATM 3.貨到付款");
// switch (payway) {
//     case "1":
//         document.write("現金");
//         break;
//     case "2":
//         document.write("ATM");
//         break;
//     case "3":
//         document.write("貨到付款");
//         break;
   
//     default:
//         document.write("請選擇正確付款方式");
// }
// let i = 0;
// while (i < 10) {
//     i++;
//     console.log(i)
// }
// do {
//     i++;
//     console.log(i)
// } while (i < 10)
// let a = 0;
// for (i; i <= 10; i++) {

//     a = a + i;
//     console.log(i);

//     console.log(a)
// }

// for (i = 0; i <= 10; i++) {
//     if (i == 6) {
//         continue;
//     }

//     console.log(i);
// }

// function myname(){
//     alert("welcome");
// }

// myname();

// function showName(myName){
//     document.write("我的名字叫"+myName+"。");
// }

// showName("Gavin");
// showName("456");


// function convertDc(dc){
//     dc=dc*1.8+32;
//     return dc;
// }
// let dc=prompt("請輸入溫度","25");
// document.write("華氏溫度為"+convertDc(dc))


// let student=["David","Lily","Perry"];
// document.write("<table border='1'> <tr><td> 編號</td><td>姓名</td></tr>")
// for(i=0;i<student.length;i++){
//     document.write("<tr><td>"+(i+1)+"</td><td>"+student[i]+"</td></tr>");
// }
// document.write("</table>")
// for(i in student){
//     document.write(student[i]+"<br>");
// }



// let student=new Array();
// student[0]=["David","95","80"];
// student[1]=["Lily","85","70"];
// student[2]=["Perry","96","60"];

// document.write("<table border='1'> <tr><td> 姓名</td><td>國文</td><td>英文</td></tr>");

// for(i=0;i<student.length;i++){
//     document.write("<tr>");
//     for(j=0;j<student[i].length;j++){
//         document.write("<td>"+student[i][j]+"</td>");
//     }
//     document.write("</tr>");
// }


// for(i in student){
//     document.write("<tr>");
//     for(j in student[i]){
//         document.write("<td>"+student[i][j]+"</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>")

// let student=["15","3","6","60","8"];
// console.log(student);
// student.push("30","6");
// console.log(student);


// function person(name,age,weight,height){
//     this.name=name;
//     this.age=age;
//     this.weight=weight;
//     this.height=height;
//     this.sayhello=function(){
//         return "我是"+name+"今年"+age+"歲"+weight+"公斤"+height+"公分";
//     }
// }
// person1=new person("David",25,65,180);
// person2=new person("Ken",20,65,175);
// document.write(person1.sayhello()+"<br>"+person2.sayhello());

// function sayhi(){
//     console.log("hi");
// }

// setInterval(sayhi,1000);

   
// function stop(){
//     clearInterval(interval)
    
    
// }


// // let myH1=document.getElementById("first");
// let myp=document.getElementsByClassName("second");
// // console.log(myH1);
// console.log(myp);

// myp.forEach(function (n){
//     console.log(myp)
// })
    

// let myh1=document.querySelectorAll(".second");
// console.log(myh1);

// myh1.forEach(function abc(n){
//     console.log(n)
// })
    
    
// let lnumber=["1","3","5","7","9"];

// lnumber.forEach(function(n,index,arr){
//     if(n>5){
//         console.log(n)
//         console.log(n+"在第"+(index+1)+"個")
//         console.log(arr)

//     }
// })

// function sayhi(name){
//     console.log("hi "+name)
// }
// sayhi("Lily")
// let sayhi = (name)=>{
//     console.log("hi "+name)
// }
// sayhi("Lily")

// let TCNR={
//     name:"勞動力",
//     myname(){
//         console.log(this)
//         console.log(TCNR.name+"。");
//     },
//     address:()=>{
//         console.log(this)
//         console.log("台中市"+TCNR.name);
//     }
// }
// TCNR.myname();
// TCNR.address();

// let body =document.querySelector("body");
// console.log(body.children);
// console.log(body.childNodes);
// console.log(body.parentElement);

// let h1=document.querySelector("h1")
// h1.innerText="勞動力"
// console.log(h1)

// let body=document.querySelector("body")
// body.innerHTML="<h1>勞動力</h1>"
// console.log(body)


let body=document.querySelector("body")
let myh1=document.createElement("h1")
myh1.innerHTML="勞動力"
body.appendChild (myh1)