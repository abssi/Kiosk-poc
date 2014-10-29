
/** 
 * Submit button Action.
 */

$("#submitButton").on("click", function() {
	sourcePage.title = "Mortgage Simulator"; 
	sourcePage.url = "mortgage-simulator-view.html";
	loadPage("ask_expert/expert-view.html");

});
$("#back").on("click", function() {
	loadPage ("next-best-offer-view.html");

});

/**
 * Function to check and calculate the loan
 * @param as:
 * 	Context
 */
function checkAndValidate(as){
	checnum(as);
	loan();
}

/**
 * Function that checks for input values
 * @param as
 */
function checnum(as) {
	var dd = as.value;
	if (isNaN(dd)) {
		dd = dd.substring(0, (dd.length - 1));
		as.value = dd;
		
	}
}   

/**
 * Function that computes the loan details
 */
function fillForm() {
	
	$("#amount").val(selectedAmount);
	$("#interest").val(terms.interest+"%");
	$("#duration").val(terms.duration+" ans");
	
}
function loan() {
	var cn = document.getElementById("mortgageSimulator").getElementsByTagName(
			"input");


	
	var duration = terms.duration;
	
	var interest = terms.interest/100;
	
	
	
	
	if( $("#amount").val()!=""){

	var a = $("#amount").val();
	var b = interest;
	var c = duration;
	//alert(a+" "+b+" "+c);
	var n = c * 12;
	var r = b / (12); //(12 * 100)
	var p = (a * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
	var prin = Math.round(p * 100) / 100;
	cn[3].value = prin+" MAD";

	var mon = Math.round(((n * prin) - a) * 100) / 100;
	cn[6].value = mon+" MAD";
	//var tot = Math.round((mon / n) * 100) / 100;
	var tot2 = (cn[4].value * a * c) /100 ;
	cn[5].value = tot2+" MAD";
	var pmi = (cn[3].value * a * 2) / 100;
	cn[6].value = pmi + " MAD";
	for (var i = 0; i < n; i++) {
		var z = a * r * 1;
		var q = Math.round(z * 100) / 100;
		var t = p - z;
		var w = Math.round(t * 100) / 100;
		var e = a - t;
		var l = Math.round(e * 100) / 100;
		a = e;
	}
	}
	else{
		cn[5].value="";
		cn[6].value="";
		cn[7].value="";
	}
}


	fillForm();
	loan();




