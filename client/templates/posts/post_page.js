Template.postPage.helpers({
	src: function () {
		if (this.type.indexOf('image') >= 0) {
			return 'upload/' + this.path;
		} else {
			return 'file_icon.png';
		}
	},
	category: function () {
		return Session.get('category');
	},
	comments: function () {
		return Comments.find({PostId: this._id});
	}
});

Template.postPage.events({
	'change #flag': function (e) {
		Meteor.call('flag', this._id);
		var flagged = document.getElementById('flag');
		flagged.setAttribute("disabled", "true");
	}
});

