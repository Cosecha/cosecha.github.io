$(document).ready(function(){

		 $('#lang-toggle').bootstrapToggle('on');
		 setLanguage('Spanish');

		 $('#lang-toggle').change(function(){
			 var isChecked = $(this).prop('checked');
			 var whichLang = getLanguage(isChecked);

			 setLanguage(whichLang);

		 });


});

function getLanguage(status){
	if (status) {
		return 'Spanish';
	} else {
		return 'English';
	}
}

function setLanguage(lang) {
	$('.i18n').each(function(){
		switch (lang) {
		case 'Spanish':
			var text = $(this).data('spanish');
			$(this).html(text);
			break;
		case 'English':
			var text = $(this).data('english');
			$(this).html(text);
	 }
	});
}
