var feedItem = require('../model/feedItem')

exports.getAllFeedItems = (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(currentStories));
}
// Create an array called currentStories
var currentStories = [];


// Create 3 instances of feedItem and add them to the array as elements
var feedItem1 = feedItem.createFeedItem("Marist Spring Concert!", "Click \"read more\" for more details about out lineup!", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "images/marist_spring_concert.png");
var feedItem2 = feedItem.createFeedItem("Study in Dublin", "Study in the capital city of the Emerald Isle", "http://linkurl2.com", "images/dublin.jpg");
var feedItem3 = feedItem.createFeedItem("Studiare in Firenze!", "Il programma nuovo di studio in Italia per gli studenti del primo anno.", "http://linkurl1.com", "images/firenze.jpg");
var feedItem4 = feedItem.createFeedItem("Marist Mens Track Stats", "Use TFRRS to see best marks, prs, season bests and more!", "https://www.tfrrs.org/teams/tf/NY_college_m_Marist.html", "images/TFRRS_Logo.jpg");
currentStories.push(feedItem1);
currentStories.push(feedItem2);
currentStories.push(feedItem3);
currentStories.push(feedItem4);


exports.getAllFeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}

exports.getFeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  	res.send(currentStories[req.params.feedItemID]);
}

exports.saveFeedItem = function(req, res) {
	let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	currentStories.push(newFeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}

exports.deleteFeedItem = function(req, res) {
	currentStories.splice(req.params.feedItemID, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}


exports.updateFeedItem = function(req, res) {
	// get the existing user from the array
	var updatedFeedItem = currentStories[req.params.feedItemID];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title)
		updatedFeedItem.title = req.body.title;
	if(req.body.body)
		updatedFeedItem.lastName = req.body.body;
	if(req.body.linkUrl)
		updatedFeedItem.linkUrl= req.body.linkUrl;
	if(req.body.imageUrl)
		updatedFeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	currentStories[req.params.feedItemID] = updatedFeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories[req.params.feedItemID]);
}

exports.replaceFeedItem = function(req, res) {
	// get the existing user from the array
	var updatedFeedItem = currentStories[req.params.feedItemID];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title && req.body.body && req.body.linkUrl && req.body.imageUrl)
		updatedFeedItem.title = req.body.title;
		updatedFeedItem.body = req.body.body;
		updatedFeedItem.linkUrl= req.body.linkUrl;
		updatedFeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	currentStories[req.params.feedItemID] = updatedFeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories[req.params.feedItemID]);
}
