(function () {
  "use strict";

  var UserNameJS;

  function type(obj) {
    var typeString;

    typeString = Object.prototype.toString.call(obj);
    return typeString.substring(8, typeString.length - 1).toLowerCase();
  }

  UserNameJS = WinJS.Class.define(function() {

  }, {
  	getUserName: function() {
  		return UserName.User.getUserName();
	}
  });

  WinJS.Namespace.define('UserNameJS', {
    UserName: UserNameJS
  });

}());