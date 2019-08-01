const Express = require('express');
const path = require('path');
const app = Express();
const login = require('./controller/getLogin')

// res.send, res.json, res.sendfile, (res.end)


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../app/index.html'));
})

// this get called after fetch is invoced in the specific FE componenet file
app.get('/api/login', login.getLogin, (req, res) => {
  res.send(res.locals)
})

app.listen(3000);