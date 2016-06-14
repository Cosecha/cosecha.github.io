(function(global, $) {

	var i18n = function(languages) {
        return new i18n.init(languages);
  };

	var i18n_Class = 'i18n';
	var i18n_directory = '../i18n/';
	var languageList = [];



	i18n.prototype = {
		apply: function (language) {
			return this;
		},
		logLanguages: function() {
			if ( console ) {
				console.log('Languages: ' + this.languageList);
			}
			return this;
		}
	};

	i18n.init = function(languages) {
		var self = this;
		self.languageList = [];
		for (i = 0; i < languages.length; i++) {
			self.languageList.push(languages[i]);
		}

	};

	i18n.init.prototype = i18n.prototype;

	global.i18n = global._t = i18n;


}(window, jQuery));
