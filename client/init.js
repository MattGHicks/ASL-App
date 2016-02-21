// only necessary for cardova app
// if(Meteor.isCordova) {
// 	Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
// }

// Meteor.startup(function () {
// 	Uploader.finished = function (index, file) {
// 		Session.set('imageData', file.path);
// 		Uploads.insert(file);
// 	}
// })