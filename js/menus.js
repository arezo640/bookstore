
 //When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
 myFunction()
};

function myFunction() {
  var mybutton = document.getElementById("myBtn");
    //removing();
 
  if ( document.documentElement.scrollTop>0 && document.documentElement.scrollTop<350 ){
  document.getElementById("menu1").className="act";
  document.getElementById("menu2").className="";
  document.getElementById("menu3").className="";
  document.getElementById("menu4").className="";
  document.getElementById("menu5").className="";
  mybutton.style.display ="block";
}
else if ( document.documentElement.scrollTop>350 && document.documentElement.scrollTop<760){
          document.getElementById("menu1").className="";
          document.getElementById("menu2").className="act";
          document.getElementById("menu3").className="";
          document.getElementById("menu4").className="";
          document.getElementById("menu5").className="";
          mybutton.style.display ="block";
      }
      else if ( document.documentElement.scrollTop>760 && document.documentElement.scrollTop<1150 ){
          document.getElementById("menu1").className="";
          document.getElementById("menu2").className="";
          document.getElementById("menu3").className="act";
          document.getElementById("menu4").className="";
          document.getElementById("menu5").className="";
          mybutton.style.display ="block";
      }
      else if ( document.documentElement.scrollTop>1150 && document.documentElement.scrollTop<1630 ){
          document.getElementById("menu1").className="";
          document.getElementById("menu2").className="";
          document.getElementById("menu3").className="";
          document.getElementById("menu4").className="act";
          document.getElementById("menu5").className="";
          mybutton.style.display ="block";
      }
      else if ( document.documentElement.scrollTop>1630 ){
        document.getElementById("menu1").className="";
        document.getElementById("menu2").className="";
        document.getElementById("menu3").className="";
        document.getElementById("menu4").className="";
        document.getElementById("menu5").className="act";
        mybutton.style.display ="block";
    }
      else if (document.body.scrollTop<80 || document.documentElement.scrollTop<80 ){
        mybutton.style.display ="none";
      }
    }


let node
node=document.querySelector("#hhh")
node.addEventListener('click',clear)
function clear(e){
    console.log(e.target.text="")
    
}























