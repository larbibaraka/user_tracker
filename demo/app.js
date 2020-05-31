const express = require('express');
const { initFileTracker, track } = require('user_tracker')
const app = express();

// tell file tracker what folder i want to save the file in
initFileTracker('track1', 'tracking')


// example 1 : track any request that come to `/`
app.get('/' , (req, res)=> {
    track('*','get','request to "/"');
    res.send('hello world')
})

// example 2 : track login request that come to `/`
app.get('/login' , (req, res)=> {
    track('*','get','login request from body maybe ...');
    res.send('hello world')
})

app.listen('3000', ()=>{
    console.log('server is running on port : 3000')
})