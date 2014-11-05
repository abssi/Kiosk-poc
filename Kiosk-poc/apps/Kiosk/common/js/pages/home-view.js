var fr={
		"newMortgage":"Nouveau crédit",
		"propreties":"Mes propriétés",
		"refinance":"Refinancement",
		
};

var ar={
		"newMortgage":"سلف  جديد",
		"propreties":"عقارات",
		"refinance":"إعادة التمويل",
		
};
var currentLang;
var choosingLang="fr";


function translate(lan){
	
	$('#new-mortgage').text(lan.newMortgage);
	$('#propreties').text(lan.propreties);
	$('#refinance').text(lan.refinance);
	
}

function displayRedPopup (dismissibleBool, translateBool) {
	$("#confirmationPopup").attr ("data-dismissible", dismissibleBool);
	
	$("#confirmationPopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	$("#confirmationPopup").popup ("open");
		
	setTimeout (
		function () {
			$("#confirmationPopup").popup ("close");
		}, 
		4000
	);
	
	$(document).bind ({
		popupafterclose: function (event, ui) {
			if (translateBool) {
				//console.log ("yes translate");
				translate (currentLang);
			}
		}
	});
}


$("#newmortgages").click(function(e) {
	e.preventDefault();
	loadPage("../pages/select-mortgage-type-view.html");
		
});
$("#go-fr").click(function() {
	if(choosingLang=="ar"){
	currentLang=fr;
	displayRedPopup(false, true);
	choosingLang="fr"
	}
		
});
$("#go-ar").click(function() {
  if(choosingLang=="fr"){
  currentLang=ar;
  displayRedPopup(false, true);
  choosingLang="ar"
  }
		
});
//$( document ).on( "pageinit", "#page", function( event ) {
//
//$.mobile.loadPage( "../pages/select-mortgage-type-view.html", { showLoadMsg: false } );
//
//});





