if (Meteor.isClient) {

Template.userAccess.helpers({
	currentlyLoggedIn: function () {
		return Meteor.user().username;
	}
});

Accounts.onLogin(function () {
	$('.close').click();
}); 


Template.userAccess.events({
	'click .sign-out': function (e) {
		e.preventDefault();

		Meteor.logout(function (error) {
			if(error) {
				alert('unable to log out!');
			}
		});
	}
});


Template.register.events({
	'submit .register-form': function (e, t) {
		e.preventDefault();

		Accounts.createUser({
			username: t.find('#registerName').value,
			password: t.find('#registerPassword').value,

		}, function (err) {
			if(err) {
				alert(err.message);
			}
		});
	}
});


Template.signIn.events({
	'submit .sign-in-form': function (e, t) {
		e.preventDefault();

		var username = t.find('#username').value;
		var password = t.find('#password').value;

		Meteor.loginWithPassword(username,password,function(error) {
			if(error) {
				alert('Wrong credentials');
			}
		});
	},

	'click .go-to-register': function (e) {
		e.preventDefault();

		$('.close').click();
		$('.register-modal').click();
	}

});


Template.signOut.events({
	'click .sign-out': function (e, t) {
		e.preventDefault();

		Meteor.logout(function (error) {
			if(error) {
				alert('unable to log out!');
			}
		});
	}
});


}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
