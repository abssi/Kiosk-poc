function initPopUp(){
	$( "#mortgae-amount").popup();
	$( "#mortgae-amount" ).popup('open');
	
	 $( "#mortgae-amount").one({
	        popupafterclose: function() {
	        
	            
	            	
	            	//alert('after close');
	        	    
				    selectedAmount=$('#amount').val();
				    loadPage("../pages/mortgage-options-view.html");
				   
	            	
	           
	        }
	    });

}
$("#options").one('click',function(e) {
	e.preventDefault();
	initPopUp();
	
});
// for validating only numerical  inputs 
function checnum(as) {
	var dd = as.value;
	if (isNaN(dd)) {
		dd = dd.substring(0, (dd.length - 1));
		as.value = dd;
		
	}
}  

// most functions removed from here due to multiple call problem/bug
$( document ).on( "pageinit", "#page", function(  ) {
	

});
