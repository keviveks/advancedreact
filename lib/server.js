import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { answer: 3434 });
});

app.listen(config.port, () => {
  console.info(`Server running on ${config.port}`);
});
