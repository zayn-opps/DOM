//innertext/inner html selector 

let id =document.getElementById('id1');
 id.innerText="DOM"

 //class name selector 
 let classname1= document.getElementsByClassName("classname1")[1];

classname1.innerHTML="i am web developer";

//NAME SELECTOR 
 let nameSELECTOR = document.getElementsByName("helloNAME")[2];
 nameSELECTOR.innerHTML="hi kmn aco sobiy "
 
 //tag selector 

  let tag=document.getElementsByTagName("h2")[3];
  tag.innerText="tag element ar kaj"

  //query selector \

  //id//
  let query=document.querySelector(" #queryid1");


  //class


  let query1=document.querySelector("query2");
  //tag

  let tag_dorbo=document.querySelector("h6");

  //query seletor all
  
  //class//
 let all= document.querySelectorAll(".all")[1];
all.innerHTML="helo java "

let all1= document.querySelectorAll(".all")[2];
all1.innerHTML="helo dom  "


//id name 
let idkam= document.querySelectorAll("#idkam")[0];
idkam.innerHTML="id kaj korlam "



