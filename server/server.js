
function google_image_query(term, callback) {
	Meteor.http.get(
		//"https://www.googleapis.com/customsearch/v1",
		"foo",
		{
			params:{
				key :"AIzaSyBTCfVx3h1kApUfBdebGjxZatjfWvXvVfo",
				searchType : "image",
				cx : "012570061627819724333:vs034tn43g0",
				q : term
			}
		},
		callback
	);
}

Meteor.startup(function() {
	/*
	_.map(SearchTerms['terms'], function (term) {
		google_image_query(term, function(error, res) {
			var link = res["data"]["items"][0]["link"];
			console.log(link);
		        Links.push([term, link]);
		});
	});
       */
});

Meteor.methods({
	getImage : function () {
		var rndint = Math.round(Math.random() * Links.length);
		console.log("called");
		console.log(Links[rndint]);
		return Links[rndint];
	},
	checkGuess : function () {
		console.log(this.userId);
	}
})
