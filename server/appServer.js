const express = require('express')
const app = express();
app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.listen(1337, () => console.log('Listening on port 1337.'))



/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
    if (e.keyCode == 32) {
      goToLocation('/feed');
    }
  }