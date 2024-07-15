function feedItem(title, body, linkUrl, imageUrl) {
    this.Title = title;
    this.Body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

exports.createFeedItem = function(title, body, linkUrl, imageUrl) {
    return new feedItem(title, body, linkUrl, imageUrl);
  };