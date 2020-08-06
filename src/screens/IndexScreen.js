import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {

	const { state, addBlogPost, deleteBlogPost } = useContext(Context)
	return (
		<View>			
			<TouchableOpacity activeOpacity = { .8 } style={styles.buttonStyle} onPress={addBlogPost}>
				<Text style={styles.buttonTitleStyle}> Add New Blog</Text>
			</TouchableOpacity>
			
			<FlatList 
				data={state} 
				keyExtractor={(blogPost) => blogPost.title} 
				renderItem={( { item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Show' , {id: item.id})} >
						
							<View style={styles.row}>
								<Text style={styles.titleStyle}>{item.title}</Text>														
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
									<Feather style={styles.iconStyle} name="trash" />
								</TouchableOpacity>							
							</View>

						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 15,
		paddingHorizontal: 15,
		borderBottomWidth: 1,
		borderColor: 'gray'

	},
	titleStyle: {
		fontSize: 16,
		fontWeight: 'bold',
	}, 
	iconStyle: {
		fontSize: 24,
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

export default IndexScreen;
