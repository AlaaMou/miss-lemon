$(document).ready(function(){
	//  Add active class to corresponding page 
    var url = window.location;
        $('ul a[href="'+ url +'"]').parent().addClass('active');
        $('ul a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
	
	// animation for name
	
	$(window).on("load",function(){
		$("#artist").animate({"letter-spacing":"1"},700)
	})
})

