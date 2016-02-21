Template.header.events({
	'click #post': function () {
		if(Meteor.user()) {
			return Router.go('postSubmit');
		} else {
			$('.signIn-modal').click();
		}
	},
	'submit .search': function (e) {
		e.preventDefault();

		var toSearch = $(e.target).find('[name=search]').val();
		// var reg = toSearch;

		// Session.set('searched', 'one');
		Session.set('search', toSearch);
		$('body').click();
		Router.go('searchResults');
	},
	'click #account': function (e) {
		e.preventDefault();

		var loggedIn = Meteor.userId();

		if(loggedIn) {
			return Router.go('account');
		} else {
			$('.signIn-modal').click();
		}
	},
	'click .collapsed': function () {
		Meteor.logout();
		alert('you are logged out!');
	}
});
