
function google_image_query(term, callback) {
	Meteor.http.get(
		"https://www.googleapis.com/customsearch/v1",
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
	_.map(SearchTerms['terms'], function (term) {
		if ( !Links.findOne({'term': term}) ) {
			google_image_query(term, function(error, res) {
				var link = res["data"]["items"][0]["link"];
				Links.insert({'term': term, 'link': link});
			});
		}
	});
	console.log(Links);
});

Meteor.methods({
	getImage : function () {
		var rndint = Math.round(Math.random() * SearchTerms['terms'].length);
		var term = SearchTerms['terms'][rndint];
		var agg = Links.findOne({'term': term});
		return agg.link;
	},
	checkGuess : function () {
		console.log(this.userId);
	}
})
