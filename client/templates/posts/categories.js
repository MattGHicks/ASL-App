var categories = [
	{
		name: "Cars",
		value: "cars",
		src: "http://images.forbes.com/media/2010/11/10/1110_porsche-911-gt2-rs_400x400.jpg"
	},
	{
		name: "Boats",
		value: "boats",
		src: "https://www.keysboatrental.com/site/wp-content/uploads/2015/06/22-deck-boat-400x400.jpg"
	},
	{
		name: "Housing",
		value: "housing",
		src: "http://sun-surfer.com/photos/2012/03/Glass-house-Vilnius-Lithuania-400x400.jpg"
	},
	{
		name: "Jobs",
		value: "jobs",
		src: "http://cdn.womenosophy.com/wp-content/uploads/2014/09/Most_Effective_Ways_to_Look_for_a_Job-400x400.jpg"
	},
	{
		name: "Community",
		value: "community",
		src: "http://www.salesforce.org/wp-content/uploads/2014/02/collaboration-400x400.jpg"
	},
	{
		name: "Services",
		value: "services",
		src: "https://s-media-cache-ak0.pinimg.com/564x/c3/7a/18/c37a184cda80ede2f09c011ad2dd8bf9.jpg"
	}

];

Template.categories.helpers({
	categories: categories
});

Template.categories.events({
	'click .thumbnail': function (e) {
		return Session.set('category', e.target.id);
	}
});