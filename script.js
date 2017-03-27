$(function() {

	var inputs = $("#formInputs input");
	var mainInputs = $("#mainForm .mainInputs");
	
	var whyYouContainer = $("#whyYou");
	var whyYouInputs = $("#whyYou .form-inputs");
	var whyYouButton = $("#whyYou .nextQuestion");
	var whyYouRadioButtons = $("#whyYou .form-inputs label");
	var nextQuestionButton = $("#mainForm .nextQuestion");
	var editSection = $(".editSection");
	var comeBackButton = $("#comeBack");

	// MAIN FORM INPUTS

	inputs.keyup(function(e) {
		if ($(e.target).val() != "") {
			$(e.target).addClass("indented activeCheck");
		} else if ($(e.target).val() === "") {
			$(e.target).removeClass("indented activeCheck");
		}
	})

	// NEXT QUESTION BUTTON 

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


	// COME BACK TO THIS SECTION

	comeBackButton.click(function() {
		$(this).addClass('hidden');
		mainInputs.addClass("hidden");
		nextQuestionButton.addClass("hidden");
		$('.editSection').removeClass("hidden");

		whyYouContainer.removeClass("inactive").addClass("active");
		whyYouInputs.removeClass("hidden");
		whyYouButton.removeClass("hidden");
	})

	// EDIT SECTION BUTTON

	editSection.click(function() {
		$(".editSection").addClass("hidden");
		$("#mainCheck").addClass("hidden");
		$("#formInputs h5").first().css("padding-left", "0");
		$("#comeBack").removeClass("hidden");
		mainInputs.removeClass("hidden");
		whyYouInputs.addClass("hidden");
		nextQuestionButton.removeClass("hidden");
		whyYouButton.addClass("hidden");
	})


})