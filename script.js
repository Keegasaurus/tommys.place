document.getElementById("outdoor").onclick = function() {
	document.getElementById("modal-outdoor").style.display = "block";
	document.getElementById("modal-outdoor-img").src = this.src;
}
document.getElementById("modal-outdoor").onclick = function() {
	this.style.display = "none";
}

document.getElementById("bar").onclick = function() {
	document.getElementById("modal-bar").style.display = "block";
	document.getElementById("modal-bar-img").src = this.src;
}
document.getElementById("modal-bar").onclick = function() {
	this.style.display = "none";
}

document.getElementById("indoor").onclick = function() {
	document.getElementById("modal-indoor").style.display = "block";
	document.getElementById("modal-indoor-img").src = this.src;
}
document.getElementById("modal-indoor").onclick = function() {
	this.style.display = "none";
}
