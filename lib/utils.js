JayUtils = {

    getRandomCategory: function () {
        var categories = ['community', 'for-sale', 'housing', 'jobs', 'services', 'wanted'];
    	var index = Math.floor(Math.random()*6);
    	return categories[index];
    }

};
