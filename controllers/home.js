const article = require('mongoose').model('Article');

module.exports = {
  index: (req, res) => {
      article.find({}).limit(6).populate('author').then(articles =>{
          res.render('home/index', {articles: articles});
      })

  }
};