import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer(state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [...state, { title: `Blog Post #${ state.length + 1 }` }];
		case 'delete_blogpost':
			return [...state, { title: `Blog Post #${ state.length + 1 }` }];
		default:
			return state;
	}
};

export const BlogProvider = ({ children }) => {
	// const blogPosts = [ { title: 'Blog Post #1' }, { title: 'Blog Post #2' }, { title: 'Blog Post #3' }, { title: 'Blog Post #4' }, { title: 'Blog Post #5' } ];
	const [blogPosts, dispatch] = useReducer(blogReducer, []);


	return <BlogContext.Provider value={{data: blogPosts}}>  
		{ children }
	</BlogContext.Provider>

};

export default BlogContext;