import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error loading blogs");
        setLoading(false);
      });
  }, []);

  const handleViewMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Blogs</h1>
        <button className="create-button" onClick={() => navigate("/create-blog")}>
          Create New Blog
        </button>
      </header>
      <div className="blogs-list">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-item">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-caption">
              {blog.caption.split(" ").slice(0, 4).join(" ")}...
            </p>
            <button className="view-more-button" onClick={() => handleViewMore(blog._id)}>
              View More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
