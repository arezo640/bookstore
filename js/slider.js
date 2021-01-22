var slideIndex = 1 ;
var n ;

var slide=document.getElementsByClassName("slide")
var dot=document.getElementsByClassName("dot");
var next=document.querySelector(".next");
var prev=document.querySelector(".prev");

function prev1(n){ 
  //debugger;
  slideIndex += n;
    disno();
   dotactive();
  if (slideIndex==4 ){ slideIndex = 1;}
  if (slideIndex==0){ slideIndex=slide.length;}
    slide[slideIndex - 1].style.display="block";    
   dot[slideIndex-1].classList.add("active");
}

function disno(){
  for (i=0 ; i<=slide.length-1;i++){
       slide[i].style.display="none"; 
    }
}

function dotactive(){
  //debugger;
    for (i=0; i<dot.length; i++){
      dot[i].classList.remove("active");
   }
   console.log(dot.length);
 }
var V = 1;
setInterval(function(v){
  slideIndex += V;
    disno();
   dotactive();
  if (slideIndex==4 ){ slideIndex = 1;}
  if (slideIndex==0){ slideIndex=slide.length;}
    slide[slideIndex - 1].style.display="block";    
},3000)

/********************protofilo*************************** */
<scfilterSelection("all")
	function filterSelection(c) {
	  
	  debugger;  var x, i;
	  x = document.getElementsByClassName("filterDiv");
	  if (c == "all") c = "";
	  for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	  }
	}
	
	function w3AddClass(element, name) {
		debugger;
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	  }
	}
	
	function w3RemoveClass(element, name) {
		debugger;
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
		  arr1.splice(arr1.indexOf(arr2[i]), 1);     
		}
	  }
	  element.className = arr1.join(" ");
	}
	
	// Add active class to the current button (highlight it)
	var btnContainer = document.getElementById("myBtnContainer");
	var btns = btnContainer.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function(){
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	  });
	}