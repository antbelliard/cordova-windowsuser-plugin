var exec = require('cordova');

window.getUserName = function(successCallback, errorCallback) {
	    cordova.exec(successCallback, errorCallback, "UserName", "userName", []);
};