
/* JavaScript content from js/main.js in folder common */
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
	
	loadPage ("pages/home-view.html");   
	
	/* Navigation drawer menu */
	
}

function loadPage (url) {
	/*$("#pageContent").load (url, function () {
        $(this).enhanceWithin(); /* apply styles 
    });*/
	
	$(":mobile-pagecontainer").pagecontainer ("change", url);
} 


function getConnectionStatus () {
	return connected;
}

function setConnectionStatus (status) {
	connected = status;
}

/* JavaScript content from js/main.js in folder ipad */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}