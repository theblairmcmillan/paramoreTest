$(function() {

	var inputs = $("#formInputs input");

	inputs.keyup(function(e) {
		if ($(e.target).val() != "") {
			$(e.target).addClass("activeCheck");
		} else if ($(e.target).val() === "") {
			$(e.target).removeClass("activeCheck");
		}
	})
})