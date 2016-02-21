Template.postSubmit.created = function () {
	Session.set('postSubmitErrors', {});
};

Template.postSubmit.helpers({
	myFormData: function () {
		return { directoryName: 'images', prefix: this._id, _id: this._id };
	},
	filesToUpload: function () {
		return Uploader.info.get();
	},
	errorMessage: function (field) {
		return Session.get('postSubmitErrors')[field];
	},
	errorClass: function (field) {
		return !!Session.get('postSubmitErrors')[field] ? 'has-error' : '';
	}
});

/**
 * Convert an image
 * to a base64 url
 * @param  {String}   url
 * @param  {Function} callback
 * @param  {String}   [outputFormat=image/png]
 */
// function convertImgToBase64URL(url, callback, outputFormat){
//     var canvas = document.createElement('CANVAS'),
//         ctx = canvas.getContext('2d'),
//         img = new Image();
//     img.crossOrigin = 'Anonymous';
//     img.onload = function(){
//         var dataURL;
//         canvas.height = img.height;
//         canvas.width = img.width;
//         ctx.drawImage(img, 0, 0);
//         dataURL = canvas.toDataURL(outputFormat);
//         callback(dataURL);
//         canvas = null;
//     };
//     img.src = url;
// }

// convertImgToBase64URL('http://bit.ly/18g0VNp', function(base64Img){
    // Base64DataURL
// });

Template.postSubmit.events({
	'submit .post-submit': function (e) {
		e.preventDefault();
		var imageData = function () {
			if (Session.get('imageData')) {
				var path = Session.get('imageData');
				return '/upload/' + path;
			} else return '/file_icon.png';
			};

			// var src = $('#preview').src;

		var post = {
			image: $('#preview').attr('src'),//imageData(),
			category: $(e.target).find('[name=category]').val(),
			price: $(e.target).find('[name=price]').val(),
			title: $(e.target).find('[name=title]').val(),
			number: $(e.target).find('[name=number]').val(),
			description: $(e.target).find('[name=description]').val(),
			city: $(e.target).find('[name=city]').val(),
			region: $(e.target).find('[name=region]').val()
			//name: function () { return Meteor.user().username; },
			// anonymous: $(e.target).find('[name=anon]').val()
			//flags: 0
		};

		var errors = validatePost(post);
		if (errors.title || errors.category || errors.price || errors.number || errors.description || errors.location) {
			return Session.set('postSubmitErrors', errors);
		}

		Meteor.call('postInsert', post, function (error, result) {
			// display error to user and abort
			if (error) {
				return throwError(error.reason);
			}

			Session.set('imageData', null);
			Router.go('postPage', {_id: result._id});
		});

	},
	'click #preview': function () {
		// MeteorCamera.getPicture([options], callback)
		$('#fileInput').click();
		$('#fileInput').change(function () {
			encodeImageFileAsURL();
		});

	}

});


// function below is to attach event listener to the meteor plugin for image uploads
// Template.postSubmit.rendered = function () {
// 	if (!Meteor.isCordova) {
// 		setTimeout(function(){
// 			var browse = document.getElementsByClassName('jqUploadclass');
// 			browse[0].onchange = function (event) {
// 				var reader = new FileReader();

// 				reader.onload = function () {
// 					$('#preview').attr('src', reader.result);
// 				};

// 				reader.readAsDataURL(event.target.files[0]);
// 				console.log(event.target.files[0].name)
// 		}
// 		}, 2000);
// 	}
// }

// function to preview the loaded image
// function loadImage(event) {
// 		var reader = new FileReader();

// 		reader.onload = function () {
// 			$('#preview').attr('src', reader.result);
// 		};

// 		reader.readAsDataURL(event.target.files[0]);
// 		console.log(event.target.files[0].name)
// }

//alert('online form builder');
// Template.postSubmit.helpers({
// 	src:
// });
