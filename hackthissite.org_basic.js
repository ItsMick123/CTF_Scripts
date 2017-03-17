//Basic Mission 6

function ascii (a) { return a.charCodeAt(0); } // FUNCTION TO TURN EACH CHARACTER INTO IT'S CHAR CODE
var passwas = jQuery(".sitebuffer center:nth-of-type(3) b").html(); // GRAB THE TEXT FROM THE PAGE
var ints = passwas.split('').map(ascii); // CONVERT TO CHAR CODES
var newpass = '';
for(i=0;i< ints.length;i++) {
	 newpass = newpass + String.fromCharCode(ints[i] - i); //  SUBTRACT POSITION IN STRING FROM CHAR CODE AND CONVERT BACK TO LETTER
}
console.log(newpass);
