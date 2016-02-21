if (Posts.find().count() === 0) {

	for (var i = 0; i < 30; i++) {
		Posts.insert({
			author: 'Guy ' + i,
			number: '+25512345678',
			title: 'post#' + i,
			category: JayUtils.getRandomCategory(),
			image: 'resources/blue-camera-icon.png',
			description: 'This is the description for this post!',
			price: '300',
			city: 'Dar-Es-Salaam',
			region: 'Mbezi',
			flags: 0

		});
	}

}
