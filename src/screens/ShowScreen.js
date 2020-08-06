import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';


const ShowScreen = ({navigation}) => {
	const id = navigation.getParam('id');
	const { state } = useContext(Context);

	const blogPost = state.find((blogPost) => blogPost.id === id);
	return (
		<View style={styles.container}>			
			<Text style={styles.titleStyle}>Title:</Text>
			<Text style={styles.subTitleStyle}>{blogPost.title}</Text>

			<Text style={styles.titleStyle}>Content:</Text>
			<Text style={styles.subTitleStyle}>{blogPost.content}</Text>
		</View>
	);
};


ShowScreen.navigationOptions = ({navigation}) => {
	return {
    	headerRight: () => (
      		<TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
        		<EvilIcons name="pencil" size={30} />
      		</TouchableOpacity>
    	),
  };

};

const styles = StyleSheet.create({
	container: {
		marginLeft: 10,
		paddingTop: 20,		

	},
	titleStyle: {
		fontSize: 16,
		fontWeight: 'bold',
	}, 
	subTitleStyle: {
		fontSize: 16,
		paddingTop: 5,
		paddingBottom: 20,
	
	}, 
});

export default ShowScreen;