import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        setBlog(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error loading blog details");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="single-blog-container">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="single-blog-image" />
      <p>{blog.caption}</p>
      <div className="blog-tags">
        {blog.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
