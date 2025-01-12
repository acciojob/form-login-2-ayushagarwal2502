//your JS code here. If required.
function submitForm(event){
	event.preventDefault();
	let a=document.getElementById("First Name").value;
	let b=document.getElementById("Last Name").value;
	let c=document.getElementById("Phone Number").value;
	let d=document.getElementById("Email ID").value;

	let message = "First Name: " + a + "\nLast Name: " + b + "\nPhone Number: " + c + "\nEmail ID: " + d;
	alert(message);
}