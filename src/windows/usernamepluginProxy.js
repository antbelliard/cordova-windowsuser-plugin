
cordova.commandProxy.add("UserName", {

    userName: function (successCallback, errorCallback) {
    	Windows.System.UserProfile.UserInformation.getDisplayNameAsync().then(function(displayName) {
			successCallback(displayName);
		})
    }
});