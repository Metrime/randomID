(function(){
	var randomID = function(len,strength){
		var possibilities = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!§$%&/()=?-.,;:_#<>*+^°`´"];
		var chars = "";

		var i = strength ? strength : 1;
		while(i--){
			chars+=possibilities[i];
		};
		
		var len = len ? len : 30;

		var result = '';

		while(len--){ 
			result += chars.charAt(Math.floor(Math.random() * chars.length)); 
		};

		return result;
	};

	if(typeof module !== "undefined" && typeof require !== "undefined"){
		module.exports = randomID;
	} else {
		window["randomID"] = randomID;
	};

})();