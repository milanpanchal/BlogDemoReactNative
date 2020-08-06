import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';


const CreateScreen = ({navigation}) => {
	const { state } = useContext(Context);

	return (
		<View>			
			<Text style={styles.titleStyle}>CreateScreen</Text>
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

export default CreateScreen;