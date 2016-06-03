module.exports = {

    getUserName: function (sucess, fail) {
    	var userName = "AUserName";
	    if(userName != "") {
	        sucess(userName);
	    }
	    else {
	        fail("not able to get userName");
	    }
    }
};
require("cordova/exec/proxy").add("UsernamePlugin", module.exports);