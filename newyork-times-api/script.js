let main_div= document.createElement('div');
let h1= document.createElement('h1');
h1.setAttribute('id','properties')
h1.innerHTML="THE PERTINENT TIMES";
main_div.append(h1);
let nav= document.createElement('nav');
nav.setAttribute('class','navbar navbar-expand-lg navbar-light bg-light');
let div_btn= document.createElement('div');
div_btn.setAttribute('class','collapse navbar-collapse');
div_btn.setAttribute('id','navbarSupportedContent');
nav.append(div_btn);
let ul= document.createElement('ul');
ul.setAttribute('class','navbar-nav mr-auto')
div_btn.append(ul);

let li= document.createElement('li');
li.setAttribute('class','nav-item active');
let a= document.createElement('A');
a.setAttribute('class','nav-link');
a.setAttribute('href',"#");
a.setAttribute('onclick',"triggerClick('home')");
a.innerHTML=`<b>HOME </b>`;
li.append(a);
ul.append(li);


let li1= document.createElement('li');
li1.setAttribute('class','nav-item active');
let a1= document.createElement('A');
a1.setAttribute('class','nav-link');
a1.setAttribute('href','#');
a1.setAttribute('onclick',"triggerClick('world')");
a1.innerHTML=`<b>WORLD </b>`;
li1.append(a1);
ul.append(li1);

let li2= document.createElement('li');
li2.setAttribute('class','nav-item active');
let a2= document.createElement('A');
a2.setAttribute('class','nav-link');
a2.setAttribute('href','#');
a2.setAttribute('onclick',"triggerClick('politics')");
a2.innerHTML=`<b>POLITICS</b>`;
li2.append(a2);
ul.append(li2);

let li3= document.createElement('li');
li3.setAttribute('class','nav-item active');
let a3= document.createElement('A');
a3.setAttribute('class','nav-link');
a3.setAttribute('href','#');
a3.setAttribute('onclick',"triggerClick('magazine')");
a3.innerHTML=`<b>MAGAZINE</b>`;
li3.append(a3);
ul.append(li3);

let li4= document.createElement('li');
li4.setAttribute('class','nav-item active');
let a4= document.createElement('A');
a4.setAttribute('class','nav-link');
a4.setAttribute('href','#');
a4.setAttribute('onclick',"triggerClick('technology')");
a4.innerHTML=`<b>TECHNOLOGY</b>`;
li4.append(a4);
ul.append(li4);

let li5= document.createElement('li');
li5.setAttribute('class','nav-item active');
let a5= document.createElement('A');
a5.setAttribute('class','nav-link');
a5.setAttribute('href','#');
a5.setAttribute('onclick',"triggerClick('science')");
a5.innerHTML=`<b>SCIENCE</b>`;
li5.append(a5);
ul.append(li5);

let li6= document.createElement('li');
li6.setAttribute('class','nav-item active');
let a6= document.createElement('A');
a6.setAttribute('class','nav-link');
a6.setAttribute('href','#');
a6.setAttribute('onclick',"triggerClick('health')");
a6.innerHTML=`<b>HEALTH</b>`;
li6.append(a6);
ul.append(li6);

let li7= document.createElement('li');
li7.setAttribute('class','nav-item active');
let a7= document.createElement('A');
a7.setAttribute('class','nav-link');
a7.setAttribute('href','#');
a7.setAttribute('onclick',"triggerClick('sports')");
a7.innerHTML=`<b>SPORTS</b>`;
li7.append(a7);
ul.append(li7);

let li8= document.createElement('li');
li8.setAttribute('class','nav-item active');
let a8= document.createElement('A');
a8.setAttribute('class','nav-link');
a8.setAttribute('href','#');
a8.setAttribute('onclick',"triggerClick('arts')");
a8.innerHTML=`<b>ARTS</b>`;
li8.append(a8);
ul.append(li8);

let li9= document.createElement('li');
li9.setAttribute('class','nav-item active');
let a9= document.createElement('A');
a9.setAttribute('class','nav-link');
a9.setAttribute('href','#');
a9.setAttribute('onclick',"triggerClick('fashion')");
a9.innerHTML=`<b>FASHION</b>`;
li9.append(a9);
ul.append(li9);

let li10= document.createElement('li');
li10.setAttribute('class','nav-item active');
let a10= document.createElement('A');
a10.setAttribute('class','nav-link');
a10.setAttribute('href','#');
a10.setAttribute('onclick',"triggerClick('food')");
a10.innerHTML=`<b>FOOD</b>`;
li10.append(a10);
ul.append(li10);

let li12= document.createElement('li');
li12.setAttribute('class','nav-item active');
let a12= document.createElement('A');
a12.setAttribute('class','nav-link');
a12.setAttribute('href','#');
a12.setAttribute('onclick',"triggerClick('travel')");
a12.innerHTML=`<b>TRAVEL</b>`;
li12.append(a12);
ul.append(li12);

main_div.append(nav);

document.body.append(main_div);

function triggerClick(s){
  document.body.innerHTML="";
  document.body.append(main_div);
   
    
    console.log("its " +s+ " clicked");
    toPrint(s);

}
async function toPrint(exe){

    try{
    let f= await fetch(`https://api.nytimes.com/svc/topstories/v2/${exe}.json?api-key=bASekjmJCrORBBl3AodIcFxIFeX4QTM6`)
    let data= await f.json();
    // console.log(data);
    for(let i=0;i<29;i++){
   
        let container =document.createElement('div');
        container.setAttribute('class','card');
        container.classList.add('cardEdit','mb-3','row','no-gutters','col-md-8');
        container.setAttribute('id','clear');
        let cardBody =document.createElement('div');
        cardBody.setAttribute('class','card-body');
        let titlecard= document.createElement('h3');
        titlecard.setAttribute('class','card-title');
        titlecard.innerHTML= ` ${data.results[i]["section"].toUpperCase()}`;
        let sectioncard=document.createElement('h5');
        sectioncard.setAttribute('class','card-title');
        sectioncard.innerHTML= data.results[i]["title"];
        let datecard =document.createElement('b');
        datecard.innerHTML=`${data.results[i]["created_date"]}`;
        let abstractcard=document.createElement('h5');
        abstractcard.innerHTML=`${data.results[i]["abstract"]}`;
        let anch= document.createElement('A');
        anch.innerHTML="Continue reading";
        anch.setAttribute('href',`${data.results[i]["short_url"]}`);
        let img_div=document.createElement('div');
        img_div.setAttribute('class','cardEdit');
        let image =document.createElement('img');
        image.setAttribute('src',data.results[i]["multimedia"][0]["url"]);
   
        image.setAttribute('class','rounded float-right');
        image.setAttribute('class','card-img');
       
        img_div.append(image);

    document.body.append(container);
    
    container.append(cardBody,img_div);
    cardBody.append(titlecard,sectioncard,datecard,abstractcard,anch);
    }
    
}
    catch(err){
        console.log(err);
    }

}