

let tps = document.getElementsByClassName("tp");

for (let i = 0; i < tps.length; i++) {
    tps[i].addEventListener("click", () => {
        goToLocation('http://my.marist.edu');
    });
}

let delbut = document.getElementsByClassName("delete-button");





// Create a function called displayItem()
function displayItem() {
    // Get the newsfeed element
    let newsFeed = document.getElementById("newsFeed");
    newsFeed.innerHTML = ``
    // Append the feed item element to the newsfeed
    for (let i = 0; i < currentStories.length; i++) {

        newsFeed.innerHTML += `
        
            <div class = 'news_chunk'>
            <div class = 'words'>
            <h2 id='story_title'>${currentStories[i].title}</h2>
            <p id='story_body'>${currentStories[i].body}</p>
            <a id='read_more'href="${currentStories[i].linkUrl}">Read more</a>
            <button class='delete-button'>Delete Item</button>
            </div>
            <a href="${currentStories[i].linkUrl}"><img id="photo" src="${currentStories[i].imageUrl}" alt="${currentStories[i].Title}"></a>
            <p></p>
            </div>
        `;

        if (i + 1 < currentStories.length) { newsFeed.innerHTML += ` <hr> `; }
    }
}


window.addEventListener('load', () => {
    document.getElementById('newFeed').addEventListener('submit', ()=> {

        fetch('/api/currentStories/' + i, 
            {
                method: 'post',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: '{"title": "' + title + '", "body": "' + body + '","linkUrl": "' + linkUrl + '","imageUrl": "' + imageUrl + '"}'
            })

        });

    
    fetch('/api/currentStories').then((res) => {

        res.json().then((data) => {
            console.log(data)
            currentStories = data
            displayItem()
            let delbut = document.getElementsByClassName('delete-button')
            for (let i = 0; i < delbut.length; i++) {
                delbut[i].addEventListener("click", () => {
                    console.log('ah')
                    fetch('/api/currentStories/' + i, {
                        method: 'delete'
                    }
                    ).then(() => {
                        console.log('ahhh')
                        displayItem()
                    });
                })
            };
        })

        console.log("Page has loaded!");
    })

});



