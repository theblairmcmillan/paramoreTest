$(function() {

	var inputs = $("#formInputs input");
	var mainInputs = $("#mainForm .mainInputs");
	
	var whyYouContainer = $("#whyYou");
	var whyYouInputs = $("#whyYou .form-inputs");
	var whyYouButton = $("#whyYou .nextQuestion");
	var whyYouRadioButtons = $("#whyYou .form-inputs label");
	var nextQuestionButton = $("#mainForm .nextQuestion");

	inputs.keyup(function(e) {
		if ($(e.target).val() != "") {
			$(e.target).addClass("indented activeCheck");
		} else if ($(e.target).val() === "") {
			$(e.target).removeClass("indented activeCheck");
		}
	})

	nextQuestionButton.click(function() {
		mainInputs.addClass("hidden");
		$(this).addClass("hidden");
		$("#mainCheck").removeClass("hidden");
		$("#formInputs h5").first().css("padding-left", "20px");

		$("#comeBack").addClass("hidden");
		$('.editSection').removeClass("hidden");

		whyYouContainer.removeClass("inactive").addClass("active");
		whyYouInputs.removeClass("hidden");
		whyYouButton.removeClass("hidden");
	})

	whyYouRadioButtons.click(function(e) {
		whyYouRadioButtons.removeClass("selected");
		$(this).addClass("selected");
	})


})