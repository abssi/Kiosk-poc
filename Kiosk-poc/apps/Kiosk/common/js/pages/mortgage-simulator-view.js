
/** 
 * Submit button Action.
 */



$("#header-back").on("click", function(e) {
	e.preventDefault();
	selectedAmount=$("#amount").val();
	loadBackPage ("mortgage-options-view.html");

});

$("#submitButton").on("click", function() {
	 $( "#ask-expert" ).popup();
	$( "#ask-expert" ).popup('open');
	 $( "#cancel").click(function(e) {
		 
			e.preventDefault();
			$( "#ask-expert" ).popup('close');

	     });
	 $( "#popupSubmmit").click(function(e) {
		 var correct= $("#contact-info").validationEngine('validate');
		
		 if(correct){
		e.preventDefault();
		$( "#ask-expert" ).popup('close');
	    $( "#ask-expert").one({
		        popupafterclose: function() {
		        
		            
		            	
		            	
		        	    
		        	$( "#confirmation" ).popup();
					$( "#confirmation" ).popup('open');
					 $( "#confirmationSubmit").click(function(e) {
						 
							e.preventDefault();
						//	$( "#confirmation" ).popup('close');
//						    selectedAmount=$('#amount').val();
						    loadPage("../pages/next-best-offer-view.html");
					     });
					  
					 
					 
					 
					   
		            	
		           
		        }
		    });
		
		
		 }
		
//	    selectedAmount=$('#amount').val();
//	    loadPage("../pages/mortgage-options-view.html");
     });

});
$("#back").on("click", function(e) {
	e.preventDefault();
	selectedAmount=$("#amount").val();
	loadBackPage ("mortgage-options-view.html");

});

/**
 * Function to check and calculate the loan
 * @param as:
 * 	Context
 */
function checkAndValidate(evt){
	validate(evt);
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

function validate(evt) {
	  var theEvent = evt || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9]|\./;
	  if( !regex.test(key) ) {
	    theEvent.returnValue = false;
	    if(theEvent.preventDefault) theEvent.preventDefault();
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
		
		 
		  
		 
	});




