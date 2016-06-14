$(document).ready(function(){

		var i18n_data = {
			es: i18n_es,
			en: i18n_en
		};

		var Cosecha_i18n = _t(i18n_data);

		Cosecha_i18n.setLanguage('es');
	// Make sure language toggle starts out in Spanish
		$('#lang-toggle').bootstrapToggle('on');
		// Set i18n to Spanish
		//setLanguage('Spanish');


		// Run this whenever the language toggle is switched
		$('#lang-toggle').change(function(){
			// This is just to get language data in the form of a string.
			// I know it would be easier to just use the boolean value,
			// but this is a way to prepare for more languages in the
			// future, even that would mean using something other
			// than the toggle as the UI component to select language.
			var isChecked = $(this).prop('checked');
			var whichLang = getLanguage(isChecked);

			Cosecha_i18n.setLanguage(whichLang);

		});





});

function getLanguage(status){
	if (status) {
		return 'es';
	} else {
		return 'en';
	}
}

function setLanguage(lang) {
	// This makes sure all .i18n content is using the set language
	// $('.i18n').each(function(){
	// 	switch (lang) {
	// 	case 'Spanish':
	// 		var text = $(this).data('spanish');
	// 		$(this).html(text);
	// 		break;
	// 	case 'English':
	// 		var text = $(this).data('english');
	// 		$(this).html(text);
	// 		break;
	//  }
	// });

	// This makes sure that all images being referenced are using the correct
	// src attribute
	$('.img-i18n').each(function() {
		var self = $(this);
		switch (lang) {
			case 'Spanish':
				var src = self.data('spanish');
				self.attr('src', src);
				break;
			case 'English':
				var src = self.data('english');
				self.attr('src', src);
				break;
		}
	});



	// This makes sure that all scrips (right now only one) are using the
	// the current language
}
