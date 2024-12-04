// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Blog = require('./models/Blog'); 
const app = express();
const port = 5000;


app.use(cors());

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));


app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.log("Error fetching blogs:", error);
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});
app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
