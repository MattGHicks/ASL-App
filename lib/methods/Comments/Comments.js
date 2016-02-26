Meteor.methods ({
    'addComment' : function (message, postId) {
        //get current user
        var user = Meteor.user();

        //login check
        if(!user) {
            throw new Meteor.Error('You must be logged in to submit comment!');
        }

        if(!message) {
            throw new Meteor.Error('Comment message cannot be empty!');
        }

        if(!postId) {
            throw new Meteor.Error('Post Id Undefined!');
        }


        Comments.insert({
            Author: user.username,
            Message: message,
            UserId: user._id,
            PostId: postId,
            CreatedAt: Date.now()
        });

    }
});