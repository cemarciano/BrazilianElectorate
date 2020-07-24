
var currentPhoto = "bolsonaro";		// First photo to be displayed

/* Initialization function: */
 $(document).ready(function(){

	 if(window.innerHeight > window.innerWidth){
		 alert("Please rotate your screen to landscape mode and press OK.");
	 }

	 // Counts photos:
	 numPhotos = $(".photo").length;

	 // Hides photos with IDs different than currentPhoto:
	 $(".photo").each(function(i, obj) {
		 if (obj.id != currentPhoto){
			 $(this).hide();
		 }
	 });


	 // Adds click events to arrow buttons:
	 $("#bolsonaro-icon").click(function(){
		photoToChange = "bolsonaro"
		if (currentPhoto != photoToChange){
			swapPhotos(currentPhoto, photoToChange)
			currentPhoto = photoToChange;
		}
	 });
	 $("#alckmin-icon").click(function(){
		photoToChange = "alckmin"
		if (currentPhoto != photoToChange){
			swapPhotos(currentPhoto, photoToChange)
			currentPhoto = photoToChange;
		}
	 });
	 $("#marina-icon").click(function(){
		photoToChange = "marina"
		if (currentPhoto != photoToChange){
			swapPhotos(currentPhoto, photoToChange)
			currentPhoto = photoToChange;
		}
	 });
	 $("#ciro-icon").click(function(){
		photoToChange = "ciro"
		if (currentPhoto != photoToChange){
			swapPhotos(currentPhoto, photoToChange)
			currentPhoto = photoToChange;
		}
	 });
	 $("#haddad-icon").click(function(){
		photoToChange = "haddad"
		if (currentPhoto != photoToChange){
			swapPhotos(currentPhoto, photoToChange)
			currentPhoto = photoToChange;
		}
	 });

});


// Swap between photos numbered before and after:
function swapPhotos(before, after){
	$('#'+before).fadeTo(0,1);
	$('#'+after).hide();
	$('#'+after).css("z-index", 100);
	$('#'+before).css("z-index", 10);
	// Displays the new photo:
	$("#"+after).fadeIn(500);
	setTimeout(function() {
	  $('#'+before).hide();
  	}, 500);
}
