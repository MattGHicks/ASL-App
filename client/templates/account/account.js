Template.account.events({
	// 'click #profile': function (e) {
	// 	Session.set('tab', 'profile');
	// 	var profile = document.getElementById('profile');
	// 	var myAccount = document.getElementById('myAccount');

	// 	myAccount.classList.remove("active");
	// 	profile.classList.add("active");
	// },
	// 'click #myAccount': function (e) {
	// 	Session.set('tab', 'postings');
	// 	var profile = document.getElementById('profile');
	// 	var myAccount = document.getElementById('myAccount');

	// 	profile.classList.remove("active");
	// 	myAccount.classList.add("active");
	// }
});

Template.account.helpers({
	isPostings: function () {
		return Session.equals('tab', 'postings');
	}
});

Template.postings.helpers({
	postings: function () {
		var user = Meteor.user().username;
		return Posts.find({author: user});
	}
});

Template.posting.events({
	'click #delete': function () {
		if (confirm('Delete this posting?')) {
			Meteor.call('deletePost', this._id);
		}
	}
	// 'click #edit': function () {
	// 	alert(this.params._id);
	// 	return Router.go('postEdit');
	// }
});