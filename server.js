const app = require('./app')
const port = 3002;
const host = 'localhost'

const server = app.listen(port, host, () => {
    console.log(`Node server listening to ${server.address().port}`);
})