$(function() {

	var inputs = $("#formInputs input");

	inputs.keyup(function(e) {
		if ($(e.target).val() != "") {
			$(e.target).addClass("indented activeCheck");
		} else if ($(e.target).val() === "") {
			$(e.target).removeClass("indented activeCheck");
		}
	})
})