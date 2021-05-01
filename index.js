const fetch = require('node-fetch');
const express = require('express');
const app = express();

app.get('/', async function(req, res){
    fetch('https://creepycrawly.wiresdev.ga/api').then(data => data.json()).then(data => {
        let text = ''

        data.sort();

        text = text + 'Sites: '+data.length+'<br><br>'

        data.forEach(site => {
            text = text + site + '<br>'
        })

        res.send(text)
    })
})

app.listen()