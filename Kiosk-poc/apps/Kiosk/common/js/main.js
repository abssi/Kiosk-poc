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
	
	
	$(":mobile-pagecontainer").pagecontainer ("change", url,{transition:'none',reverse:false});
	
} 
function loadBackPage (url) {
	
	
	$(":mobile-pagecontainer").pagecontainer ("change", url,{transition:'none',reverse:true});
} 


function getConnectionStatus () {
	return connected;
}

function setConnectionStatus (status) {
	connected = status;
}
