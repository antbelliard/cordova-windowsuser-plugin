var exec = require('cordova');

module.exports = {
	getUserName:function(successCallback, errorCallback) {
	    cordova.exec(successCallback, errorCallback, "UsernamePlugin", "getUserName", []);
	}
};