
const mongoose = require('mongoose');
const Blog = require('./models/Blog'); 

mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const blogs = [
      {
        title: 'Blog 1',
        caption: 'This is the first blog.',
        image: '/images/blog1.jpg',
        tags: ['tech', 'news']
      },
      {
        title: 'Blog 2',
        caption: 'This is the second blog.',
        image: '/images/blog2.jpg',
        tags: ['health', 'wellness']
      },
      {
        title: 'Blog 3',
        caption: 'This is the third blog.',
        image: '/images/blog3.jpg',
        tags: ['food', 'recipe']
      }
    ];

    await Blog.insertMany(blogs); // Insert multiple blogs
    console.log('Blog data inserted successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('Error:', err);
    mongoose.connection.close();
  });
