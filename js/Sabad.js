//variables
let IconSabad=document.querySelector('.icon')
let Item=document.querySelector('.item')
let Realize=document.querySelector('.realize')
let DropContent=document.querySelector('.cart-content')
let removBtn=document.querySelector('.submenu')
let Clear=document.querySelector('.clear')
//Addeventlistner
EventListener()
function EventListener(){
    Realize.addEventListener('click',getInfo)
    removBtn.addEventListener('click',removeFromsabad)
 Clear.addEventListener('click',clearAll)
}

//removBtn.addEventListener('click',removeFromsabad)

//class OR function

//get info for transfer to sabad
function getInfo(e){
 e.preventDefault()
 if(e.target.classList.contains('icon')){
  let info= e.target.parentElement;
  addTosabad(info)}
}

//add info to sabad
function addTosabad(info){
//access to details of info
    const productInfo={
        img: info.querySelector('.add').src,
        author: info.querySelector('.title').textContent,
        id:info.querySelector('button').getAttribute('data-id')
    }

//correct image src
let productInfoFinal=productInfo.img
let tr=document.createElement('tr')
tr.innerHTML=`
		<td> <img src="${productInfoFinal[1]}" class="imgSabad" /> </td>
        <td>${productInfo.author}</td>
        <td><a href="#" class="removeBtn">X</a></td> `
       
        DropContent.appendChild(tr)
        DropContent.style.display ="block";
    }

//remove items from sabad
    function removeFromsabad(e){        
     if(e.target.classList.contains('removeBtn')){
         let item=e.target.parentElement.parentElement
         item.remove()
     }
//check if there is any item, Hide Name and other title
     checkSabad()
    }

    //check if there is any item, Hide Name and other title
function checkSabad(){
    let imgS=document.querySelector('.imgSabad')
        if (!imgS){
        DropContent.style.display ="none";
           }
}

//clear All
function clearAll(e){
    while (DropContent.firstChild) {
        DropContent.firstChild.remove()
    }
}