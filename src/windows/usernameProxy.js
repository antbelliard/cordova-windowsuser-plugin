module.exports = {

    getUserName: function (sucess, fail) {
    	var user = new UserNameJS.UserName()
    	userName = user.getUserName();
	    if(userName != "") {
	        sucess(userName);
	    }
	    else {
	        fail("not able to get userName");
	    }
    }
};
require("cordova/exec/proxy").add("UsernamePlugin", module.exports);