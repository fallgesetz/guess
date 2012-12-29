Meteor.render(function() {
	var term, link;
});
Template.hello.events({
	"click .guess_btn" : function () {
		var guess = $("#guess").val();
		Meteor.call('checkGuess', guess, function(error, ret) {
			if (ret === 1) {
				console.log("you guessed right");
			}
		})
	}
});
