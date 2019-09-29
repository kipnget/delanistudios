$(document).ready(function() {
    $("#designLogo").click(function() {
      $("#inlineDesign").slideUp();
      $(".toggleDesignLogo").slideDown();
    });
    $(".toggleDesignLogo").click(function() {
      $(".toggleDesignLogo").slideUp();
      $("#inlineDesign").slideDown();
    });
  
    $("#devLogo").click(function() {
      $("#inlineDev").slideUp();
      $(".toggleDevLogo").slideDown();
    });
    $(".toggleDevLogo").click(function() {
      $(".toggleDevLogo").slideUp();
      $("#inlineDev").slideDown();
    });
  
    $("#productLogo").click(function() {
      $("#inlineProduct").slideUp();
      $(".toggleProductLogo").slideDown();
    });
    $(".toggleProductLogo").click(function() {
      $(".toggleProductLogo").slideUp();
      $("#inlineProduct").slideDown();
  
    });
  });

  $(document).ready(function() {
    $('.hover').hover(function(){
		$('.port-desc',this).slideToggle('slow');
	}, function(){
		$('.port-desc',this).slideToggle('slow');
    });
});

  $("#submission").submit(function(event){
    var data_1 = $("input:first").val();
    var data_2 = $("input#mail").val();
    if(data_1 && data_2 != ""  ){
      $(".message").text("Thank you " + data_1 + " Your message has been received");
      $(".message").removeClass("error");
      $(".message").addClass("success");
    }else{
      $(".message").text("Error!!! Please fill in all the details correctly");
      $(".message").addClass("error");
    }
    event.preventDefault(); 
  });  
