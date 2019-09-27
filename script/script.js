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
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
  function myFunction() {
    alert("We have received your message. Thank you for contacting us.");
  }
  
    