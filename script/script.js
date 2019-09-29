$(document).ready(function() {
    $("#designLogo").click(function() {
      $("#inlineDesign").hide();
      $(".toggleDesignLogo").show();
    });
    $(".toggleDesignLogo").click(function() {
      $(".toggleDesignLogo").hide();
      $("#inlineDesign").show();
    });
  
    $("#devLogo").click(function() {
      $("#inlineDev").hide();
      $(".toggleDevLogo").show();
    });
    $(".toggleDevLogo").click(function() {
      $(".toggleDevLogo").hide();
      $("#inlineDev").show();
    });
  
    $("#productLogo").click(function() {
      $("#inlineProduct").hide();
      $(".toggleProductLogo").show();
    });
    $(".toggleProductLogo").click(function() {
      $(".toggleProductLogo").hide();
      $("#inlineProduct").show();
  
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
  // JQUERY
// lazy load
$(function(){
  $(".lazy").Lazy();
});

$(document).ready(function () {
  // loader
  $("#Loader").fadeOut(1000);
  $("#head").addClass("onLoad").fadeIn(2000);
  $("html, body").scrollTop(0);
});