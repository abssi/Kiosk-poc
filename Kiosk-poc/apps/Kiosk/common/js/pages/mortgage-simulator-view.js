
/** 
 * Submit button Action.
 */

$("#submitButton").on("click", function() {
	$( "#ask-expert" ).popup('open');

});
$("#back").on("click", function(e) {
	e.preventDefault();
	loadPage ("mortgage-options-view.html");

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

   //alert(cn.length);
	
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
	cn[5].value = prin+" MAD";

	var mon = Math.round(((n * prin) - a) * 100) / 100;
	cn[6].value = mon+" MAD";
	//var tot = Math.round((mon / n) * 100) / 100;
	var tot2 = (cn[4].value * a * c) /100 ;
	cn[7].value = tot2+" MAD";
	var pmi = (cn[3].value * a * 2) / 100;
	cn[8].value = pmi + " MAD";
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
	
	
	$( document ).on( "pageinit", "#page", function( event ) {
		 $("#contact-info").validationEngine({validateNonVisibleFields: true});
		
		  $( "#ask-expert" ).popup();
		  $( "#confirmation" ).popup();
		  $( "#confirmationSubmit").click(function(e) {
				 
				e.preventDefault();
			//	$( "#confirmation" ).popup('close');
//			    selectedAmount=$('#amount').val();
			    loadPage("../pages/next-best-offer-view.html");
		     });
		  
		 
		  $( "#popupSubmmit").click(function(e) {
			 var correct= $("#contact-info").validationEngine('validate');
			
			 if(correct){
			e.preventDefault();
			$( "#ask-expert" ).popup('close');
			
			setTimeout(function()
			         {
				$( "#confirmation" ).popup('open');
			         }, 100);
			 }
			
//		    selectedAmount=$('#amount').val();
//		    loadPage("../pages/mortgage-options-view.html");
	     });
		  $( "#cancel").click(function(e) {
				 
				e.preventDefault();
				$( "#ask-expert" ).popup('close');
//			    selectedAmount=$('#amount').val();
//			    loadPage("../pages/mortgage-options-view.html");
		     });
	});




