$(document).ready(function(){
		// Load global translation data from global variables
		var i18n_data = {
			es: i18n_es,
			en: i18n_en,
			pt: i18n_pt
		};

		// Load i18n library
		var Cosecha_i18n = _t(i18n_data);

		// Set i18n to Spanish
		Cosecha_i18n.setLanguage('es');

	// Make sure language toggle starts out in Spanish
		$('#lang-toggle').bootstrapToggle('on');

		// Run this whenever the language toggle is switched
		$('#lang-toggle').change(function(){

			var isChecked = $(this).prop('checked');
			var whichLang = getLanguage(isChecked);

			Cosecha_i18n.setLanguage(whichLang);

		});

		// Pop Up the modal with the DACA Petition

		//$('#portfolioModal15link').click();

		// Load particleground

		$('#particleground').particleground({
	    dotColor: 'rgba(250,250,250,0.1)',
	    lineColor: 'rgba(250,250,250,0.1)'
		});

		// FAQ Links


});

function getLanguage(status){
	if (status) {
		return 'es';
	} else {
		return 'en';
	}
}
