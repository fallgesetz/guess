Meteor.startup(function() {
	Meteor.call('getImage', function(error, ret) {
		Session.set("link", ret);
	});
});

Template.hello.image = function() {
	Meteor.call('getImage', function(error, res) {
		Session.set("link", res);
	});
	return Session.get("link");
};



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
