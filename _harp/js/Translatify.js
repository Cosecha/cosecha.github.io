// Author: Celso Mireles
// Website: http://PochoLabs.com
// License: MIT License
// Github: 

(function(global, $) {

	var i18n = function(languages) {
        return new i18n.init(languages);
  };

	var i18n_Class = '.i18nx';
	var i18n_directory = '../i18n/';
	var languageList = [];
	var data = {}



	i18n.prototype = {
		apply: function (language) {
			if (!$) {
				throw 'jQuery not loaded';
				}

			// var translation = this.data.language;
			var libSelf = this;

			$('.i18n').each(function() {
					var self = $(this);
					var toSay = self.data('say');
					var translation = libSelf.data.language;

					$(this).html(libSelf.data[language][toSay]);
				});

			this.applyImages(language);

			return this;
		},
		applyImages: function(language) {
			var libSelf = this;

			$('.img-i18n').each(function() {
				var self = $(this);
				var src = self.data('src');
				$(this).attr('src', libSelf.data[language][src]);
			});

			return this;
		},
		logLanguages: function() {
			if ( console ) {
				console.log('Languages: ' + this.data);
			}
			return this;
		},
		setLanguage: function (lang) {
			this.language = lang;
			this.apply(this.language);
			return this;
		}
	};

	i18n.init = function(data) {
		var self = this;
		self.data = data;
	};

	i18n.init.prototype = i18n.prototype;

	global.i18n = global._t = i18n;


}(window, jQuery));
