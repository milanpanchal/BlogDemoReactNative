import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';


const CreateScreen = ({navigation}) => {
	const { addBlogPost } = useContext(Context);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	return (
		<View>			
			<Text style={styles.titleStyle}>Enter Blog Title:</Text>
			<TextInput style={styles.input} value={title} onChangeText={newValue => setTitle(newValue)} />
			<Text style={styles.subTitleStyle}>Enter Blog Content:</Text>
			<TextInput style={styles.input} value={content} onChangeText={newValue => setContent(newValue)} />

			<TouchableOpacity 
				activeOpacity = { .8 } 
				style={styles.buttonStyle} 
				onPress={() => { addBlogPost(title, content, () => {
					navigation.navigate('Index');
				})}}>

				<Text style={styles.buttonTitleStyle}> Add New Blog</Text>
			</TouchableOpacity>

		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingTop: 20,	
		paddingHorizontal: 20	
	}, 
	subTitleStyle: {
		fontSize: 16,
		paddingTop: 10,
		paddingHorizontal: 20,
	}, 
	input: {
		fontSize: 16,
		borderWidth: 1,
		borderColor: 'black',
		height: 50,
		marginHorizontal: 20,
		marginVertical: 10,
	},
	buttonStyle: {
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

export default CreateScreen;