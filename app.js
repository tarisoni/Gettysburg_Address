$(document).ready(function(){

    $("#container").fadeIn(1000);

    $("p").hover(function(){
      $(this).css("background-color","yellow");
    }, function(){
      $(this).css("background-color","");
    });

    $("h2").on("click", function(){
      $(this).animate({
          "margin-left": "20px",
          "opacity": .25
        },function(){
          $(".speech").css("opacity", ".50");
    });
});

  $("#switcher-large").on("click", function(){
    $("p").css("font-size", "1.5em")
  });

  $("#switcher-default").on("click", function(){
    $("p").css("font-size", "")
  });

  $("#switcher-small").on("click", function(){
      $("p").css("font-size", "0.5em")
  });

  $(document).keydown(function(e){
    if (e.keyCode == 37){
      $("#switcher").animate({
          "margin-left": "-20px",
      });
    } else if (e.keyCode == 38){
      $("#switcher").animate({
          "margin-top": "-20px",
      });
    } else if (e.keyCode == 39){
      $("#switcher").animate({
          "margin-left": "20px",
      });
    } else if (e.keyCode == 40){
      $("#switcher").animate({
          "margin-top": "20px",
      });
    }
  });

});
