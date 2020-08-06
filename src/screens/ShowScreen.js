import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';


const ShowScreen = ({navigation}) => {
	const id = navigation.getParam('id');
	const { state } = useContext(Context);

	const blogPost = state.find((blogPost) => blogPost.id === id);
	return (
		<View>			
			<Text style={styles.titleStyle}>Blog Title</Text>
			<Text style={styles.subTitleStyle}>{blogPost.title}</Text>

		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingTop: 20,		
		textAlign: 'center'
	}, 
	subTitleStyle: {
		fontSize: 16,
		paddingTop: 10,
		textAlign: 'center'
	}, 
});

export default ShowScreen;