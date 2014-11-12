var customer_index = -1;
var application_index = -1;
var connected = 0;

var pagesStack = new Array ();

function wlCommonInit () {
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	//alert('pages/home-view.html');
	$(":mobile-pagecontainer").pagecontainer ("change","pages/home-view.html",{transition:'none'});   
	
	/* Navigation drawer menu */
	
}

function loadPage (url) {
	
	
	$(":mobile-pagecontainer").pagecontainer ("change", url,{transition:'slide',reverse:false});
	
} 
function loadBackPage (url) {
	
	
	$(":mobile-pagecontainer").pagecontainer ("change", url,{transition:'slide',reverse:true});
} 
function loadBackPage (url,transition) {
	
	
	$(":mobile-pagecontainer").pagecontainer ("change", url,{transition:transition,reverse:true});
}


function getConnectionStatus () {
	return connected;
}

function setConnectionStatus (status) {
	connected = status;
}
// Change size code
var countZoom = 0;
var zoom = 0;

function changeSize () {
	$('div *, p *, span *, li *, a *').each(function () {
        var el = $(this);
        var size = el.data('font-size');
        el.css('font-size', Math.max (size + zoom, 0) + 'px');
    });
}

$(document).on ("pageshow", function () {
	
	
	$('div *, p *, span *, li *, a *').each(function () {
	    var el = $(this);
	    var size = parseInt(el.css('font-size'));
	    el.data('font-size', size);
	});
	
	$("#changeSizeAction").on ("click", function () {
		
		countZoom ++;
		
		if (countZoom % 3 == 0) {
			zoom = 0;
			changeSize ();
		} else if (countZoom % 3 == 1) {
			zoom = 1;
			changeSize ();
		} else if (countZoom % 3 == 2) {
			zoom = 3;
			changeSize ();
		}
		
	});
});
