function initPopUp(){
	$( "#mortgae-amount").popup();
	$( "#mortgae-amount" ).popup('open');
	
	 $( "#mortgae-amount").one({
	        popupafterclose: function() {
	            setTimeout( function(){ 
	            	
	            	//alert('after close');
				    selectedAmount=$('#amount').val();
				    loadPage("../pages/mortgage-options-view.html");
				   
	            	
	            }, 100 );
	        }
	    });

}
$("#options").one('click',function(e) {
	e.preventDefault();
	initPopUp();
	
});


$( document ).on( "pageinit", "#page", function(  ) {
	

});