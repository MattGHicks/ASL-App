Template.postItem.events({
	'click .selectItem': function () {
		var selected = this._id;
		return Router.go('postPage', {_id: selected});
	}
});