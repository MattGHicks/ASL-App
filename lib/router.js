Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function () {
		return [Meteor.subscribe('posts'), Meteor.subscribe('items'), Meteor.subscribe('uploads')];
	}
});

if (Meteor.isClient) {
	Router.onBeforeAction( function () {
		var scrollTo = window.currentScroll || 0;
		$('body').scrollTop(scrollTo);
		$('body').css("min-height", 0);
		this.next();
	});
}

Router.route('/list', {
	name: 'postsList',
	data: function () {
		return {
			posts: function () {
				// var searched = new RegExp(Session.get('search'), "i");
				// if (Session.set('searched') == 'one') {
					return Posts.find({ category: Session.get('category') }, { sort: { submitted: -1 } });
				// } else {
				// 	Session.set('searched', 'one');
				// 	return Posts.find({ title: searched }, { sort: { submitted: -1 } });
				// }
			}
		};
	}
});

Router.route('/search', {
	name: 'searchResults',
	data: function () {
		var res = Posts.find({ title: new RegExp(Session.get('search'), "i") }, { sort: { submitted: -1 } });
		return {
			results: function () {
				return res;
			},
			resultsCount: function () {
				if (res.count() === 0) {
					return false;
				} else {
					return true;
				}
			}
		};
	}
});

Router.route('/', {
	name: 'categories'
});

Router.route('/name', {
	name: 'category'
});

Router.route('/posts/:_id', {
	name: 'postPage',
	// waitOn: function () {
	// 	return [
	// 		Meteor.subscribe('items'),
	// 		Meteor.subscribe('uploads')
	// 	];
	// },
	data: function () {
		return Posts.findOne(this.params._id);
	}
});

Router.route('/submit', {
	name: 'postSubmit'
});

Router.route('/account', {
	name: 'account',
	data: function () {
		return Meteor.userId();
	}
});

Router.route('/myposts/:_id/edit', {
	name: 'postEdit',
	data: function () {
		return Posts.findOne(this.params._id);
	}
});

var requireLogin = function () {
	if (!Meteor.user()) {
		alert('Please Log In first');
		// this.render('accessDenied');
 		this.stop();
	} else {
		this.next();
	}
};

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
Router.onBeforeAction(requireLogin, {only: 'account'});
