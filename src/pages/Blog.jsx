import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Blog page</h1>
      {posts.map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
