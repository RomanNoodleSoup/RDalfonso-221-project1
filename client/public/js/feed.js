

    let tps = document.getElementsByClassName("tp");

    for (let i = 0; i < tps.length; i++) {
        tps[i].addEventListener("click", () => {
            goToLocation('http://my.marist.edu');
        });
    }


    function feedItem(title, body, linkUrl, imageUrl) {
        this.Title = title;
        this.Body = body;
        this.linkUrl = linkUrl;
        this.imageUrl = imageUrl;
    }

    // Create an array called currentStories
    let currentStories = [];

    // Create 3 instances of feedItem and add them to the array as elements
    currentStories.push(new feedItem("Story 1", "Body 1", "http://linkurl1.com", "images/campus.png"));
    currentStories.push(new feedItem("Story 2", "Body 2", "http://linkurl2.com", "images/news_pic.jpg"));
    currentStories.push(new feedItem("Story 3", "Body 3", "http://linkurl3.com", "images/hancock.jpeg"));

    displayItem();

    // Create a function called displayItem()
    function displayItem(feedItem) {
        // Get the newsfeed element
        let newsFeed = document.getElementById("newsFeed");

        // Append the feed item element to the newsfeed
        for (let i = 0; i < currentStories.length; i++) {

            newsFeed.innerHTML += `
            <h2>${currentStories[i].Title}</h2>
            <p>${currentStories[i].Body}</p>
            <img id="photo" src="${currentStories[i].imageUrl}" alt="${currentStories[i].Title}">
            <p></p>
            <a href="${currentStories[i].linkUrl}">Read more</a>
            <hr>
        `;
        }
    }


    // Iterate through the currentStories array and call the displayItem() function




