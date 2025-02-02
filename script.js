//your JS code here. If required.
function removeOption(){
	let colorSelect=document.getElementById("colorSelect");
	let selectOption=colorSelect.options[colorSelect.selectedIndex];
	colorSelect.removeChild(selectOption);
}
