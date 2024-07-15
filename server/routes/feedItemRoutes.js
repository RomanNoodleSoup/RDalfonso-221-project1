const express = require('express')
const router = express.Router();
let feedItemController = require("../controller/feedItemController.js");


router.route('/')
    .get(feedItemController.getAllFeedItems)
    .post(feedItemController.getAllFeedItems)

module.exports = router;

