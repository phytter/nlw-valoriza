import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
 return res.send('Hello world!')
})

app.listen(3000,  () => console.log('Running!!'))
