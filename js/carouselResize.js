window.addEventListener("resize", function(e) {
    var mapElement = document.getElementById("myCarousel");
		var innerMapElement = document.getElementById("carousel-inner");
		var newHeight = mapElement.offsetWidth * .39;
    mapElement.style.height = String(newHeight) + "px";
    innerMapElement.style.height = String(newHeight) + "px";
		console.log("height: " + mapElement.offsetHeight);
});
    var mapElement = document.getElementById("myCarousel");
		var innerMapElement = document.getElementById("carousel-inner");
		var newHeight = mapElement.offsetWidth * .39;
    mapElement.style.height = String(newHeight) + "px";
    innerMapElement.style.height = String(newHeight) + "px";
		console.log("height: " + mapElement.offsetHeight);