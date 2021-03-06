$(document).foundation();

/* Adjust height and width */

function adjust(){
	var w = $(window).width();
	var h = $(window).height();
	$("#hero .toptriangle").css("border-width",h+"px "+w+"px 0 0");
	$("#hero .bottomtriangle").css("border-width","0 0 "+h+"px "+w+"px");
	$("#hero h1").css("padding-top",(h/2-5.5/100*h)+"px");
	$("#hero").css("margin-bottom",(h/3-0.5/100*h)+"px");
	$("#midtriangle").css("border-width",(h/6)+"px 0 0 "+w+"px");
}

$(window).resize(adjust);

adjust();

(function glimpser(){
	var text = ["Web Development", "SEO Optimization", "Software Solutions", "Builder of Awesome Websites", "Follower of Code Quality", "has happy and satisfied clients", "is hip" , "the first of its name" ,"..."];
	var i=0;
	setInterval(function(){
		$("#hero #glimpse").text(text[i]).fadeOut().fadeIn();
		i++;
		if(i>text.length)
			i=0;
	}, 2500);	
}).call(this);

$(window).scroll(function navbar(){
	var heroheight = $("#hero h1").position();
	var h = $(window).height();
	heroheight = heroheight.top + (h/2-5.5/100*h);
	var s = $(window).scrollTop();
	if(s>heroheight) {
		$("#navigation").css("background-color","#333");
	}
	if(s<heroheight) {
		$("#navigation").css("background-color","transparent");
	}

	var midh = $("#midtriangle").outerHeight()+55;
	$("#midfollowup").css("margin-top",midh+"px"); 

});


function showmobnav(a) {
	console.log(a);
    if(a==1)
    	$("#mobnav").css("display","flex");
	else if(a==0)
		$("#mobnav").css("display","none");

}

$(document).ready(function() {
	// detect url and add background for nav on non-homepages
	var allurl = (window.location.pathname).split("/");
	var last=allurl[allurl.length-1];
	if(!(last==""||last=="index.html"||last=="#")) {
		$("#navigation").css("background-color","#333");
	}
});