
$("#options").click(function() {
	$( "#mortgae-amount" ).popup('open');

});


$( document ).on( "pageinit", "#page", function( event ) {
	
	  $( "#mortgae-amount" ).popup();
	 
	  $( "#amountSubmit").click(function(e) {
		 
		e.preventDefault();
	    selectedAmount=$('#amount').val();
	    loadPage("../pages/mortgage-options-view.html");
     });
});