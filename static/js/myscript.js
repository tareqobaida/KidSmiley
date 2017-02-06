$(function() {

  "use strict";
 //onClick jumping to a section
 //replace IMG inside carousels with a background image
 $(".jumper").on("click", function(e){    
    e.preventDefault();
    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, 600);
    
});


//input field
$("#myValue").change(function(){
      $("#amount").val($(this).val()*700);
    }).fadeIn("slow");


  

 

  


});
  