//variables
let btnComment=document.querySelector('.Postbtn')
let inputName=document.querySelector('#inputName')
let inputEmail=document.querySelector('#inputEmail')
let cm=document.querySelector('#text')
let chbx=document.querySelector('input[name="level"]:checked')
let chbx2=document.querySelectorAll('input[type="checkbox"]:checked');
let id=document.querySelector('.Postbtn').getAttribute('data-id')


//eventlistner
EventListener()
function EventListener(){
    btnComment.addEventListener('click',addCm)
    inputEmail.addEventListener('blur',validatInput)
    inputName.addEventListener('blur',validatInput)
    cm.addEventListener('blur',validatInput)
   }

//function
function validatInput(field){
checkTak(this)
// check inputEmail will be correct
if(this.type==='email'){
  let emailText=this.value
  console.log(emailText)
 if(emailText.includes('@')){
  inputEmail.classList.add("true")
  inputEmail.classList.remove("false")}
 else{
    inputEmail.classList.add("false")
    inputEmail.classList.remove("true")
 }
 }
}
//check input wont be empty
function checkTak(field){
    if(field.value.length>0){
     field.classList.add('true')
     field.classList.remove('false')
    }else{
      field.classList.remove('true')
      field.classList.add('false')
   }
}

function addCm(e){
   e.preventDefault()
   checkInput()
}

function checkInput(){
  // e.preventDefault()
   inputName1=inputName.value
   inputEmail1=inputEmail.value
   inputCm=cm.value
  
   if (inputName1==="" || inputEmail1==="" || inputCm==="") {
       printMessage('Please enter all fields.','alert-warning')
    }
    else{
      let cmValue=cm.value
      let nameValue=inputName.value
      let ideas=document.querySelector('#ideas')
      let tr=document.createElement('tr')  
      let tr1=[]
          tr.innerHTML=`
              <ins>${cmValue}</ins>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <sub>By:&nbsp;${nameValue}</sub>
              `
              ideas.appendChild(tr)
              tr1.push(tr) 
           tr1.forEach(element => {
              console.log(tr1)
           });
            
     printMessage('Thanks.','alert-success')
    }
   }


function printMessage(message,className){

 let err1=document.querySelector('.err')
 if (err1) {
     err1.remove()
 }

 let place=document.querySelector('#mm')
 let div=document.createElement('div')
 let msg=document.createTextNode(message) 
 div.appendChild(msg)
 place.appendChild(div)
 div.classList.add(className)
 div.classList.add('styleAlert')
 div.classList.add('err')
 setTimeout(() => {
    document.querySelector('.err').remove()
 },3000);
 
}





