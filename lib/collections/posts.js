Posts = new Meteor.Collection('posts');

Posts.allow({
	update: function (userId, post) { return ownsDocument(userId, post); },
	remove: function (userId, post) { return ownsDocument(userId, post); }
});

/*
Permissions for editing the postings
Posts.deny({
	update: function (userId, post, fieldNames) {
		// may only edit the following fields:
		return (_.without(fieldNames, ))
	}
})
*/

validatePost = function (post) {
	var errors = {};

	if (!post.title) {
		errors.title = "Please enter a title";
	}

	if (!post.price) {
		errors.price = "Please specify a price";
	}

	if (!post.number) {
		errors.number = "Please enter a phone number";
	}

	if (!post.description) {
		errors.description = "Please enter a description";
	}

	if (!post.city || !post.region) {
		errors.location = "Please specify your location";
	}

	if (!post.category) {
		errors.category = "Please select a category";
	}

	return errors;
};


Meteor.methods({
	postInsert: function (postAttributes) {
		check(this.userId, String);
		check(postAttributes, {
			title: String,
			image: String,
			price: String,
			category: String,
			number: String,
			description: String,
			city: String,
			region: String
		});

		var errors = validatePost(postAttributes);
		if (errors.title || errors.category || errors.price || errors.number || errors.description || errors.location) {
			throw new Meteor.Error('invalid-post', "Please fill in all the reqired fields");
		}

		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date(),
			flags: 0
		});

		var postId = Posts.insert(post);

		return {
			_id: postId
		};
	},

	flag: function (postId) {
		var updated = Posts.update(postId, {$inc: {flags: 1}});
	},

	deletePost: function (postId) {
		check(postId, String);

		var toDelete = Posts.findOne(postId);
		if (toDelete.userId !== Meteor.userId()) {
			return;
		}

		if (toDelete == null) {
			alert('no posting found');
		}

		// Posts.delete(toDelete.path);
		Posts.remove({ _id: postId });
	}

	// flags: function (postId) {}
});
