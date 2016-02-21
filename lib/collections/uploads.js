Uploads = new Mongo.Collection('uploads');

Uploads.allow({
	insert: function () {
		return true;
	},
	update: function () {
		return true;
	}
});