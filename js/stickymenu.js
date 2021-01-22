/*********************دسته بندی***********************/
/* When the user clicks on the button,
	   toggle between hiding and showing the dropdown content */
	   function myFunction() {
	     document.getElementById("myDropdown").classList.toggle("show");
	   }
	   
	   function filterFunction() {
	     var input, filter, ul, li, a, i;
	     input = document.getElementById("myInput");
	     filter = input.value.toUpperCase();
	     div = document.getElementById("myDropdown");
	     a = div.getElementsByTagName("a");
	     for (i = 0; i < a.length; i++) {
	       txtValue = a[i].textContent || a[i].innerText;
	       if (txtValue.toUpperCase().indexOf(filter) > -1) {
	         a[i].style.display = "";
	       } else {
	         a[i].style.display = "none";
	       }
	     }
       }

       /**********************sticky menu***************************/

          window.onscroll = function() {myFunction1()};
       function myFunction1() {
          var navbar = document.getElementById("myDropdown");
           if ( document.documentElement.scrollTop>100) {
        document.getElementById("myDropdown").className="sticky";
    } else {
        document.getElementById("myDropdown").className="";
}}	