var ALAN={

}
ALAN.TurnDownForWhat=function(){
  window.scrollTo(0, 0);
	var a = document.createElement("script");
	a.setAttribute("src", "js/tdfw.js"),
	document.body.appendChild(a)
}
ALAN.imageSwitched=function(){
	imageLocation='/Website/img/pics/'
	images=['animatedClouds.gif','prettyLights.jpg','animatedLights.gif']
	counter=Math.floor(Math.random() * images.length)
	displayNextImage()
	startTimer()
	function startTimer() {

              setInterval(displayNextImage, 10000);

    }
    function displayNextImage() {
    		console.log(counter)
              counter=counter+1
              counter=counter%images.length
              console.log("url("+imageLocation+images[counter]+") no-repeat top center;")
              console.log(document.getElementById('intro'))
              document.getElementById('intro').style.background='url('+imageLocation+images[counter]+')'+'no-repeat top center'
          	document.getElementById('intro').style.backgroundSize= 'cover'

    //       $("#intro").fadeOut(1000, function() {
        
    // });
          }
}