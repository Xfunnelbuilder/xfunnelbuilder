 $(document).ready(function(){
      $("[data-title='carousel-header1'], .carousel-header1").after("<div class='owl-carousel mycarousel1 owl-theme'></div>");
      $("[data-title='carousel-header2'], .carousel-header2").after("<div class='owl-carousel mycarousel2 owl-theme'></div>");
      $("[data-title='carousel-header3'], .carousel-header3").after("<div class='owl-carousel mycarousel3 owl-theme'></div>");
      $("[data-title='carousel1']").addClass("owl-carousel mycarousel1 owl-theme");
      $("[data-title='carousel2']").addClass("owl-carousel mycarousel2 owl-theme");
      $("[data-title='carousel3']").addClass("owl-carousel mycarousel3 owl-theme");
      $("[data-title='item1']").addClass("item1");
      $("[data-title='item2']").addClass("item2");
      $("[data-title='item3']").addClass("item3");
      $(".mycarousel1").append($(".item1"));
      $(".mycarousel2").append($(".item2"));
      $(".mycarousel3").append($(".item3"));	
});

