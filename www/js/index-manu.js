$( document ).ready(function() {
	$.ajax({
	  url: "http://api.openweathermap.org/data/2.5/weather?zip=3760,es&appid=bbd6287d58f35b7563fba60f1c8d8c78",
	  success: function( data ) {
	  	var icon = data.weather[0].icon;
	  	var description = data.weather[0].description;

	  	$("#clima").append("<img />");
	  	$("#clima").append("<span class='description'><span/>");

	    $("#clima img").attr("src","http://openweathermap.org/img/w/" + icon + ".png");
	    $("#clima .description").html(description);
	    
	    $.mobile.loading( "hide" );
	  }
	});
  	// Handler for .ready() called.
});