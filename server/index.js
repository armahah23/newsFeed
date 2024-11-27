const express = require('express');
const cors = require('cors');
const RSSParser = require('rss-parser');

const app = express();
app.use(cors());

const feedURL = "https://netflixtechblog.com/feed"

const parser = new RSSParser();
let articles = [];

const parse = async url => {
  const feed = await parser.parseURL(url);
  
  feed.items.forEach(item => {
    articles.push( {item})
  });
}
parse(feedURL);

app.get ('/',  (req, res) => {
  res.send(articles);
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.export = app;