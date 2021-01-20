
/*var modal01 = document.getElementById("outdoor-modal");
var img01 = document.getElementById("outdoor");
var modalImg01 = document.getElementById("img01");
var captionText = document.getElementById("caption01");
img01.onclick = function(){
	modal01.style.display = "block";
	modalImg01.src = this.src;
	captionText.innerHTML = this.alt;
}
modal01.onclick = function() {
	this.style.display = "none";
}*/
document.getElementById("outdoor").onclick = function() {
	document.getElementById("modal-outdoor").style.display = "block";
	document.getElementById("modal-outdoor-img").src = this.src;
	//document.getElementById("caption01").innerHTML = this.alt;
}
document.getElementById("modal-outdoor").onclick = function() {
	this.style.display = "none";
}

document.getElementById("bar").onclick = function() {
	document.getElementById("modal-bar").style.display = "block";
	document.getElementById("modal-bar-img").src = this.src;
	//document.getElementById("caption01").innerHTML = this.alt;
}
document.getElementById("modal-bar").onclick = function() {
	this.style.display = "none";
}

document.getElementById("indoor").onclick = function() {
	document.getElementById("modal-indoor").style.display = "block";
	document.getElementById("modal-indoor-img").src = this.src;
	//document.getElementById("caption01").innerHTML = this.alt;
}
document.getElementById("modal-indoor").onclick = function() {
	this.style.display = "none";
}
/*
var modal02 = document.getElementById("bar-modal");
var img02 = document.getElementById("bar");
var modalImg02 = document.getElementById("img02");
var captionText = document.getElementById("caption02");
img02.onclick = function(){
	modal02.style.display = "block";
	modalImg02.src = this.src;
	captionText.innerHTML = this.alt;
}
modal02.onclick = function() {
	this.style.display = "none";
}


var modal03 = document.getElementById("indoor-modal");
var img03 = document.getElementById("indoor");
var modalImg03 = document.getElementById("img03");
var captionText = document.getElementById("caption03");
img03.onclick = function(){
	modal03.style.display = "block";
	modalImg03.src = this.src;
	captionText.innerHTML = this.alt;
}*/
/*modal03.onclick = function() {
	this.style.display = "none";
}*/

