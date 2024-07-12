

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
currentStories.push(new feedItem("Marist Spring Concert!", "Click \"read more\" for more details about out lineup!", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "images/marist_spring_concert.png"));
currentStories.push(new feedItem("Study in Dublin", "Study in the capital city of the Emerald Isle", "http://linkurl2.com", "images/dublin.jpg"));
currentStories.push(new feedItem("Studiare in Firenze!", "Il programma nuovo di studio in Italia per gli studenti del primo anno.", "http://linkurl1.com", "images/firenze.jpg"));



displayItem();

// Create a function called displayItem()
function displayItem(feedItem) {
    // Get the newsfeed element
    let newsFeed = document.getElementById("newsFeed");

    // Append the feed item element to the newsfeed
    for (let i = 0; i < currentStories.length; i++) {

        newsFeed.innerHTML += `
        
            <div class = 'news_chunk'>
            <div class = 'words'>
            <h2 id='story_title'>${currentStories[i].Title}</h2>
            <p id='story_body'>${currentStories[i].Body}</p>
            <a id='read_more'href="${currentStories[i].linkUrl}">Read more</a>
            </div>
            <a href="${currentStories[i].linkUrl}"><img id="photo" src="${currentStories[i].imageUrl}" alt="${currentStories[i].Title}"></a>
            <p></p>
            </div>
        `;

        if (i + 1 < currentStories.length) { newsFeed.innerHTML += ` <hr> `; }
    }
}



