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
				console.log('Languages: ' + this.data);
			}
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
