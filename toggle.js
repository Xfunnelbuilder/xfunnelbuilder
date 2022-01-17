$('[data-title="panel"], .panel').hide(); // hide panel 
  $('[data-title="accordion"], .accordion').click(function(){
    var panel = $(this).next(); // select panel next to the accordion
    if (panel.css('display')=='block'){
    $(".active").removeClass("active"); // remove active class from the accordion
      panel.slideUp(); // to slide up the panel next to the accordion
    } else if (panel.css('display')=='none'){
    $(".active").removeClass("active");  
     $('[data-title="panel"], .panel').slideUp(); // to slide up other panels
       panel.slideDown(); // to slide down the panel next to the accordion
      $(this).addClass("active");
    }
  });
