

if (Meteor.isClient) {
  Template.navbarUser.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  });

  Template.register.events({
    'submit form': function(event){
      event.preventDefault();
      var emailVar = event.target.registerEmail.value;
      var passwordVar = event.target.registerPassword.value;
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      });
    }
  });

  Template.navbar.events({
    'submit form': function(event){
      event.preventDefault();
      var emailVar = event.target.loginEmail.value;
      var passwordVar = event.target.loginPassword.value;
      Meteor.loginWithPassword(emailVar, passwordVar);
    }
  });
}

Router.route('/', function () {
  this.render('Home');
});

Router.route('/register');

