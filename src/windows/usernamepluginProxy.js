
cordova.commandProxy.add("UserName", {

    userName: function (successCallback, errorCallback) {
        var System = Windows.System;
        var User = System.User;
        var KnownUserProperties = System.KnownUserProperties;

        User.findAllAsync().then(function (users) {
            WinJS.Promise.join(users.map(function (user) {
                return user.getPropertiesAsync([KnownUserProperties.domainName,
                    KnownUserProperties.lastName,
                    KnownUserProperties.firstName,
                    KnownUserProperties.providerName,
                    KnownUserProperties.accountName,
                    KnownUserProperties.guestHost,
                    KnownUserProperties.principalName,
                    KnownUserProperties.sessionInitiationProtocolUri]);
            })).then(function (results) {
                for (var i = 0; i < results.length; i++) {
                    successCallback(results[i]);
                    break;
                }
            });
        });
    }
});
