import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {

	const { state, deleteBlogPost } = useContext(Context)

	return (
		<View>						
			<FlatList 
				data={state} 
				keyExtractor={(blogPost) => blogPost.title} 
				renderItem={( { item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Show' , {id: item.id})} >
						
							<View style={styles.container}>
								<View style={styles.row}>
									<Text style={styles.titleStyle}>{item.title}</Text>
									<TouchableOpacity onPress={() => deleteBlogPost(item.id)} >
										<Feather style={styles.iconStyle} name="trash" />
									</TouchableOpacity>							
								</View>
								<Text style={styles.contentStyle}>{item.content}</Text>

							</View>

						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({navigation}) => {
	return {
    	headerRight: () => (
      		<TouchableOpacity onPress={() => navigation.navigate('Create')}>
        		<Feather name="plus" size={30} />
      		</TouchableOpacity>
    	),
  };

};

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderColor: 'gray',
		paddingHorizontal: 15,
		paddingVertical: 15,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	titleStyle: {
		fontSize: 16,
		fontWeight: 'bold',
	}, 
	contentStyle: {
		fontSize: 16,
	}, 

	iconStyle: {
		fontSize: 24,
	},
});

export default IndexScreen;
