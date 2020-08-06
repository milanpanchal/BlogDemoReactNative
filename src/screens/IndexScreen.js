import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {

	const { state, addBlogPost } = useContext(Context)
	return (
		<View>			
			<TouchableOpacity activeOpacity = { .8 } style={styles.buttonStyle} onPress={addBlogPost}>
				<Text style={styles.buttonTitleStyle}> Add New Blog</Text>
			</TouchableOpacity>
			<FlatList 
				data={state} 
				keyExtractor={(blogPost) => blogPost.title} 
				renderItem={( { item }) => {
					return <Text style={styles.titleStyle}>{item.title}</Text>
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginLeft: 12,
		marginBottom: 10

	}, buttonStyle: {
	    margin:12,
    	backgroundColor:'#17537E',
    	borderRadius:10,
    	paddingVertical: 15
	}, 
	buttonTitleStyle: {
		color:'#fff',
      	textAlign:'center',
	}
});

export default IndexScreen;
