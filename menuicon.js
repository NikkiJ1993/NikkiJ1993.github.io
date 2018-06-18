function myFunction(x) {
    x.classList.toggle("change");
	if(document.getElementById("myNav").style.width == "100%"){
		document.getElementById("myNav").style.width = "0%";
	} else {
		document.getElementById("myNav").style.width = "100%";
	}
	
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}