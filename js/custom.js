$(document).ready(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 1000

    })
});

$(document).ready(function () {
    $(".all").click(function () {
        $(".historic-image").show();
        $(".awarded-image").show();
        $(".iconic-image").show();
        $(".modern-image").show();
        $(".longest-image").show();
        $(".highest-image").show();
        $(".oldest-image").show();
        $(".ad").show();
        $(".Gallery1").show();
        $(".about-us").show();
        $(".count").show();
        $(".deneb_cta").show();


    });
    $(".historic").click(function () {
        $(".historic-image").show();
        $(".awarded-image").hide();
        $(".iconic-image").hide();
        $(".modern-image").hide();
        $(".longest-image").hide();
        $(".highest-image").hide();
        $(".oldest-image").hide();
        $(".Gallery1").hide();
        $(".about-us").hide();
        $(".count").hide();
        $(".deneb_cta").hide();

    });
    $(".awarded").click(function () {
        $(".historic-image").hide();
        $(".awarded-image").show();
        $(".iconic-image").hide();
        $(".modern-image").hide();
        $(".longest-image").hide();
        $(".highest-image").hide();
        $(".oldest-image").hide();
        $(".Gallery1").hide();
        $(".about-us").hide();
        $(".count").hide();
        $(".deneb_cta").hide();
    });
    $(".iconic").click(function () {
        $(".historic-image").show();
        $(".awarded-image").hide();
        $(".iconic-image").hide();
        $(".modern-image").hide();
        $(".longest-image").hide();
        $(".highest-image").hide();
        $(".oldest-image").hide();
        $(".ad").hide();
        $(".Gallery1").hide();
        $(".about-us").hide();
        $(".count").hide();
        $(".deneb_cta").hide();
    });
    $(".modern").click(function () {
        $(".historic-image").hide();
        $(".awarded-image").hide();
        $(".iconic-image").hide();
        $(".modern-image").show();
        $(".longest-image").hide();
        $(".highest-image").hide();
        $(".oldest-image").hide();
        $(".Gallery1").hide();
        $(".about-us").hide();
        $(".count").hide();
        $(".deneb_cta").hide();
    });
    $(".longest").click(function () {
        $(".historic-image").hide();
        $(".awarded-image").hide();
        $(".iconic-image").hide();
        $(".modern-image").hide();
        $(".longest-image").show();
        $(".highest-image").hide();
        $(".oldest-image").hide();
        $(".Gallery1").hide();
        $(".about-us").hide();
        $(".count").hide();
        $(".deneb_cta").hide();
    });
    $(".highest").click(function () {
        $(".historic-image").hide();
        $(".awarded-image").hide();
        $(".iconic-image").hide();
        $(".modern-image").hide();
        $(".longest-image").hide();
        $(".highest-image").show();
        $(".oldest-image").hide();
        $(".Gallery1").hide();
        $(".about-us").hide();
        $(".count").hide();
        $(".deneb_cta").hide();
    });
    $(".oldest").click(function () {
        $(".historic-image").hide();
        $(".awarded-image").hide();
        $(".iconic-image").hide();
        $(".modern-image").hide();
        $(".longest-image").hide();
        $(".highest-image").hide();
        $(".oldest-image").show();
        $(".Gallery1").hide();
        $(".about-us").hide();
        $(".count").hide();
        $(".deneb_cta").hide();
    });


});


// $(document).ready(function () {
//     $('.bridge').on('change', function () {
//         // console.log("some changes occure")
//         var bridge_list = [];

//         $('#filters :input:checked').each(function(){

//             var bridge = $(this).val();
//             bridge_list.push(bridge);
//             console.log(bridge_list);
           

//             if(bridge_list.length == 6){
//                 $('.main-bridge').fadeIn('slow');
//             }
//             else{
//                 $('.main-bridge').each(function(){
//                     var bridgeTag = $(this).attr('data-tag');
                
//                     if(jQuery.inArray(bridgeTag,bridge_list) > -1)
//                     {

                        
                        
//                         $(this).fadeIn('slow')
//                     }
//                         else
//                         {
//                             $(this).hide()

//                         }

//                 })
                
//             }

// });
//     });
// });


$(document).ready(function () {
    $('.bridge').on('change', function () {
      var bridge_list = [];
  
      $('#filters :input:checked').each(function(){
        var bridge = $(this).val();
        bridge_list.push(bridge);
      });
  
      if($('#filters :input:checked').length == 0){
        $('.main-bridge').fadeIn('slow');
      }
      else{
        $('.main-bridge').filter(function(){
          var bridgeTag = $(this).attr('data-tag');
          return $.inArray(bridgeTag, bridge_list) > -1;
        }).fadeIn('slow');
        $('.main-bridge').filter(function(){
          var bridgeTag = $(this).attr('data-tag');
          return $.inArray(bridgeTag, bridge_list) == -1;
        }).hide();
      }
    });
  });
  