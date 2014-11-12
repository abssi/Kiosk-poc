var fr={
		"newMortgage":"Nouveau crédit",
		"propreties":"Mes propriétés",
		"refinance":"Refinancement",
		"popupText":"Chargement des fichiers de langue...</br></br>Merci de patienter.",
		"policeSize":"Taille Police"
};

var ar={
		"newMortgage":"رهن عقاري  جديد",
		"propreties":"عقارات",
		"refinance":"إعادة التمويل",
		"popupText":"تحميل ملفات اللغة</br></br>  .الرجاء الانتظار",
		"policeSize":"حجم الخط"
};
var currentLang;
var choosingLang="fr";


function translate(lan){
	
	$('#new-mortgage').text(lan.newMortgage);
	$('#propreties').text(lan.propreties);
	$('#refinance').text(lan.refinance);
	$('#policeSize').text(lan.policeSize);
	
}

function displayRedPopup (dismissibleBool, translateBool,popupText) {
	$("#confirmationPopup").attr ("data-dismissible", dismissibleBool);
	$('.loading-language').html(popupText);
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
	displayRedPopup(false, true,ar.popupText);
	choosingLang="fr"
	}
		
});
$("#go-ar").click(function() {
  if(choosingLang=="fr"){
  currentLang=ar;
  displayRedPopup(false, true,fr.popupText);
  choosingLang="ar"
  }
		
});






