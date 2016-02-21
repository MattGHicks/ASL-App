Template.footerTabs.events({
	'click #homepage': function () {
		Router.go('categories');
	},
	'click #newPosting': function () {
		Router.go('postSubmit');
	},
	'click #myAccount': function () {
		Router.go('account');
	}
});
