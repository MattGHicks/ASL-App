Template.AddComment.events({
    'submit #addCommentForm': function (event, template) {

        event.preventDefault();

        //Get postId
        var message = event.target.addComment.value;

        var postId = template.data._id;

        //console.log(message + '//' + postId);

        Meteor.call('addComment', message, postId, function (error) {
            if(!error){
                alert('Comment Submitted!');
            } else {
                alert('Comment Submission Failed!')
            }
        });
    }
});