function initPopUp(){
	$( "#mortgae-amount").popup();
	$( "#mortgae-amount" ).popup('open');
	//document.getElementById("amount").focus();
	
	 

}
$("#options").on('click',function(e) {
	e.preventDefault();
	initPopUp();
	
});

$("#amountSubmit").one('click',function(e) {
	
	//e.preventDefault();
	$( "#mortgae-amount").one({
        popupafterclose: function() {
     
         
         	
         	
     	    
			    selectedAmount=$('#amount').val();
			    loadPage("../pages/mortgage-options-view.html");
			   
         	
        
     }
 });
	
	
});
// for validating only numerical  inputs 
function checnum(as) {
	
	var dd = $('#amount').val();
	alert('Am '+$('#amount').val());
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

// most functions removed from here due to multiple call problem/bug
//$( document ).on( "pageinit", "#page", function(  ) {
//	
//
//});


