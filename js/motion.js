//variables
let motionId1=document.querySelector('#promotion1')
let motionId2=document.querySelector('#promotion2')
//debugger
//eventlistner   
document.addEventListener('DOMContentLoaded',motion)
setInterval(function(){ 
  motionId2.innerHTML=""
  motionId1.innerHTML=""
  //debugger
  i=0
  j=0
  motion()
  }, 21000);

//function 
let i=0
   ,j=0;
    
function motion(){
  
    let text1="We make buying textbooks easy and affordable. "
    let text2=" Find the lowest new and used prices on the books you need. "    
        if(text1.charAt(i)!="."){
          motionId1.innerHTML+=text1.charAt(i)
          setTimeout(motion,200)
          i++;   
        } 
          else {
           motionId2.innerHTML+=text2.charAt(j)
              setTimeout(motion,200)
               j++;
      }         
}



