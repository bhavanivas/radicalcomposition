function openWorks(evt, worksName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
   tabcontent[i].style.display = "none";
 }
 tablinks = document.getElementsByClassName("tablinks");
 for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(" active", "");
 }
 document.getElementById(worksName).style.display = "block";
 evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function myFunction() {
	var popup = document.getElementById("1");
	popup.classList.toggle("show");
}
function myFunction2() {
	var popup = document.getElementById("2");
	popup.classList.toggle("show");
}
function myFunction3() {
	var popup = document.getElementById("3");
	popup.classList.toggle("show");
}
function myFunction4() {
	var popup = document.getElementById("4");
	popup.classList.toggle("show");
}
function myFunction5() {
	var popup = document.getElementById("5");
	popup.classList.toggle("show");
}
function myFunction6() {
	var popup = document.getElementById("6");
	popup.classList.toggle("show");
}
function myFunction7() {
	var popup = document.getElementById("7");
	popup.classList.toggle("show");
}
function myFunction8() {
	var popup = document.getElementById("8");
	popup.classList.toggle("show");
}
function myFunction9() {
	var popup = document.getElementById("9");
	popup.classList.toggle("show");
}
function myFunction10() {
	var popup = document.getElementById("10");
	popup.classList.toggle("show");
}
function myFunction11() {
	var popup = document.getElementById("11");
	popup.classList.toggle("show");
}
function myFunction12() {
	var popup = document.getElementById("12");
	popup.classList.toggle("show");
}
function myFunction13() {
	var popup = document.getElementById("13");
	popup.classList.toggle("show");
}
function myFunction14 () {
	var popup = document.getElementById("14");
	popup.classList.toggle("show");
}
