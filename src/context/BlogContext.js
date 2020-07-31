import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
	// const blogPosts = [ { title: 'Blog Post #1' }, { title: 'Blog Post #2' }, { title: 'Blog Post #3' }, { title: 'Blog Post #4' }, { title: 'Blog Post #5' } ];
	const [blogPosts, setBlogPosts] = useState([]);

	const addBlogPost = () => {
		setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` } ]);
	};

	return <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>  
		{ children }
	</BlogContext.Provider>

};

export default BlogContext;