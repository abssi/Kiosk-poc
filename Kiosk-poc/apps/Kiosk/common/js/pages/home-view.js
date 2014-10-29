var fr={
		"newMortgage":"Nouveau crédit",
		"propreties":"Mes propriétés",
		"refinance":"Refinancement",
		
};

var ar={
		"newMortgage":"ائتمان جديد",
		"propreties":"عقارات",
		"refinance":"إعادة التمويل",
		
};


function translate(lan){
	$('#new-mortgage').text(lan.newMortgage);
	$('#propreties').text(lan.propreties);
	$('#refinance').text(lan.refinance);
	
}


$("#newmortgages").click(function() {

	loadPage("../pages/select-mortgage-type-view.html");
		
});
$("#go-fr").click(function() {

	translate(fr);
		
});
$("#go-ar").click(function() {
translate(ar);
	
		
});






