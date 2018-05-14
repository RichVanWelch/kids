$(function() {

	$('.backdoorhit').hover(function(){
    $('.backdooropen').css('opacity', '1');
    $('.backdoorAbout').delay(500)
  .queue( function(next){
    $(this).css('opacity', '1');
    next();
  });
  }, function() {
   	$('.backdooropen').delay(500)
  .queue( function(next){
    $(this).css('opacity', '0');
    next();
  });
    $('.backdoorAbout').css('opacity', '0');

  })

  $('.backdoorAbout').click(function(){
    $('.aboutus').css('display', 'block');
    $('.aboutus').delay(100)
  .queue( function(next){
    $(this).css('opacity', '1');
      next();
    })
  })

  $('.aboutusClose').click(function(){
    $('.aboutus').css('opacity', '0');
    $('.aboutus').delay(500).queue( function(next) {
      $(this).css('display', 'none');
      next();
    })

  })

  $('.frontdoorHit').hover(function(){
    $('.frontdoorOpen').css('opacity', '1');
    $('.open').css('opacity', '1');
    $('.frontdoorTeam').delay(500)
  .queue( function(next){
    $(this).css('opacity', '1');
    next();
  });
  }, function() {
   	$('.frontdoorOpen').delay(500)
  .queue( function(next){
    $(this).css('opacity', '0');
    next();
  });
    $('.frontdoorTeam').css('opacity', '0');
     $('.open').delay(500)
  .queue( function(next){
    $(this).css('opacity', '0');
       next();
     })

  })

  $('.frontdoorTeam').click(function(){
    $('.ourTeam').css('display', 'block');
    $('.ourTeam').delay(100)
  .queue( function(next){
    $(this).css('opacity', '1');
      next();
    })
  })

  $('.teamClose').click(function(){
    $('.ourTeam').css('opacity', '0');
    $('.ourTeam').delay(500).queue( function(next) {
      $(this).css('display', 'none');
      next();
    })

  })

})


//TIMELINE MAX

//LIGHT POST
var tl = new TimelineMax({repeat:-1, yoyo:true});

tl.to(".light", .25, {
  opacity:"0"
})

.to(".light", .25, {
  opacity:"1"
})

.to(".light", .25, {
  opacity:"0"
})

.to(".light", 3, {
  opacity:"0"
})

.to(".light", .25, {
  opacity:"1"
})

.to(".light", .25, {
  opacity:"0"
})

.to(".light", .25, {
  opacity:"1"
})


.to(".light", 4, {
  opacity:"1"
});
// LIGHT POST END


//DOG
var tl2 = new TimelineMax({delay:4, repeat:-1, repeatDelay:8, ease:Linear.easeNone});

tl2.to (".dog", 5, {
  left:"1000px"
})

.to(".dog", 7, {
  left:"1000px"
})

.to(".dog", 1, {
   css:{transform:"rotateY(180deg)"}
})

.to(".dog", 4, {
  left:"-300px"
});
//DOG END

//CAT EYES
var tl3 = new TimelineMax({repeat:-1, yoyo:true});

tl3.to(".eyes", .75,  {
   css:{'background-position': '0px 0px'},
  ease:SteppedEase.config(4)
})

.to(".eyes", 2, {
  css:{'background-position': '0px 0px'}
})
