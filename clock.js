document.addEventListener('DOMContentLoaded', function(){
	var degrees = 45
	var i = 0; 

// secondRotation(0); // returns 0
// secondRotation(59); // returns (60 / 60) * 360
// hourRotation(12); // returns 0

	var move = function() {
	i++; // call out the i++ instead of writing out for loop
	//hand will move 6 degrees per second. (360 degrees in a full circle/60seconds)
	//(60seconds in an hour which is equalt to 60 minutes in a full circle)
	document.getElementById("second").style.transform = "rotate(" + (i/60*360)   + "deg)"; 
	document.getElementById("minute").style.transform = "rotate(" + (i/(60*60)*360) + "deg)";
	document.getElementById("hour").style.transform = "rotate(" + (i/(60*60*12)*360)  + "deg)";

}

setInterval(move, 1000); // 1000 milliseconds is equal to 1 second

});