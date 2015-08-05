window.addEventListener("devicelight",function(event){

	if(event.value>100){
		document.querySelector("#wow").text="its dim";
	}
})
