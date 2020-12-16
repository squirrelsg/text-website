// startbtn.addEventListener("click",function(){
// 	#marquee.style.animation = "scrolling 150s linear infinite";
// });
// stopbtn.addEventListener("click",function(){
// 	#marquee.style.animation = "scrolling 150s linear infinite";
// });
$(document).ready(function(){
	$(".snowflake").click(function(){
		$(".marquee").toggleClass('marquee-stop');
	});
	// $(".stopbtn").toggle(
  //   function(){
  //     $(".marquee").css("animation-play-state", "paused");
  //   },
  //   function(){
  //     $(".marquee").css("animation-play-state", "running");
  //   }
  // );
	// $(".startbtn").toggle(
  //   function(){
  //     $(".marquee").css("animation-play-state", "running");
  //   },
  //   function(){
  //     $(".marquee").css("animation-play-state", "paused");
  //   }
  // );
});

var $mrq = $('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 50,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true
});


$("#stopbtn").click(function(){
	$mrq.marquee('toggle');
});

