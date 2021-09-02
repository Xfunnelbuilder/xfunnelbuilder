<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw=" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha256-kksNxjDRxd/5+jGurZUJd1sdR2v+ClrCl3svESBaJqw=" crossorigin="anonymous" />
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha256-pTxD+DSzIwmwhOqTFN+DB+nHjO4iAsbgfyFq5K5bcE0=" crossorigin="anonymous"></script>
<link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">

<svg class="svg" viewbox="0 0 1264 587" preserveAspectRatio="none">
<defs>
<clipPath id="my-clip-path1" clipPathUnits="objectBoundingBox" >
 <path transform="scale(0.00079113924050632911392405063291139,0.002)" d="M0,0 L0, 410.9 Q632, 587 1264, 410.9 L1264, 0 Z"></path>
    </clipPath>
<clipPath id="my-clip-path2" clipPathUnits="objectBoundingBox" >
 <path transform="scale(0.00079113924050632911392405063291139,0.002)" d="M0,0 L0, 410.9 Q632, 587 1264, 410.9 L1264, 0 Z"></path>
    </clipPath>
<clipPath id="my-clip-path3" clipPathUnits="objectBoundingBox" >
 <path transform="scale(0.00079113924050632911392405063291139,0.002)" d="M0,0 L0, 410.9 Q632, 587 1264, 410.9 L1264, 0 Z"></path>
    </clipPath>
<clipPath id="my-clip-path4" clipPathUnits="objectBoundingBox" >
 <path transform="scale(0.00079113924050632911392405063291139,0.002)" d="M0,0 L0, 410.9 Q632, 587 1264, 410.9 L1264, 0 Z"></path>
    </clipPath>
<clipPath id="my-clip-path5" clipPathUnits="objectBoundingBox" >
 <path transform="scale(0.00079113924050632911392405063291139,0.002)" d="M0,0 L0, 410.9 Q632, 587 1264, 410.9 L1264, 0 Z"></path>
    </clipPath>
  </defs>
</svg>

<script>
  $(document).ready(function(){
      $("[data-title='carousel-header1'], .carousel-header1").after("<div class='owl-carousel mycarousel1 owl-theme'></div>");
      $("[data-title='carousel-header2'], .carousel-header2").after("<div class='owl-carousel mycarousel2 owl-theme'></div>");
      $("[data-title='carousel-header3'], .carousel-header3").after("<div class='owl-carousel mycarousel2 owl-theme'></div>");
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
</script>

<script>
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
       </script>
