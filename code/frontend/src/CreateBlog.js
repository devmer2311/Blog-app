import React, { useState } from "react";
import axios from "axios";
import "./CreateBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/blogs", {
        title,
        caption,
        image,
        tags: tags.split(","),
      });
      alert("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="create-blog-container">
      <h1 className="create-blog-title">Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Caption</label>
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="create-blog-button">
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
