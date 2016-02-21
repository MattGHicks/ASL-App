Template.postSubmit.helpers({
	myFormData: function () {
		return { directoryName: 'images', prefix: this._id, _id: this._id };
	},
	filesToUpload: function () {
		return Uploader.info.get();
	}
});

Template.postEdit.helpers({
	selectData: function(data){
     if(data === this.category){
       return 'selected';
     }
  }
});


Template.postEdit.events({
	'submit .post-update': function (e) {
		e.preventDefault();

		var thisPostId = this._id;


		// var imageData = function () {
		// 	if (Session.get('imageData')) {
		// 		var path = Session.get('imageData');
		// 		return '/upload/' + path;
		// 	} else return '/file_icon.png';
		// 	};

		var postUpdate = {
			// image: imageData(),
			category: $(e.target).find('[name=category]').val(),
			price: $(e.target).find('[name=price]').val(),
			title: $(e.target).find('[name=title]').val(),
			number: $(e.target).find('[name=number]').val(),
			description: $(e.target).find('[name=description]').val(),
			city: $(e.target).find('[name=city]').val(),
			region: $(e.target).find('[name=region]').val(),
			//name: function () { return Meteor.user().username; },
			// anonymous: $(e.target).find('[name=anon]').val()
			//flags: 0
		};


		// var errors = validatePost(post);
		// if (errors.title || errors.category || errors.price || errors.number || errors.description || errors.location) {
		// 	return alert(errors[0]);
		// };

		Posts.update(thisPostId, {$set: postUpdate}, function(error) {
			if (error) {
				//display the error to the user
				alert('error');
			}else {
				Router.go('postPage', {_id: thisPostId});
			}
		});
	}
});
