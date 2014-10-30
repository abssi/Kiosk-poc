

$('.row').one('click', function (e) {
	 // e.preventPropagation();
	  e.preventDefault();
	  terms=loanOptions[$(this).attr("id")];
	  loadPage("../pages/mortgage-simulator-view.html");
	   
	  
});

//   $('#back2').on('click', function (e) {
//      e.stopPropagation();
//      e.preventDefault();
//
//	  terms=loanOptions[$(this).attr("id")];
//	  loadBackPage("../pages/select-mortgage-type-view.html");
//	  
//});
