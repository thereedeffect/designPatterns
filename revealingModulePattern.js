var Module = (function($, undefined) {

	var privateProperty;

	function privateFunction(value) {

		console.log(value);
	}

	return {

		publicMethod : privateFunction(privateProperty)
	};
}(jQuery));

Module.publicMethod();