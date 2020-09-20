import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';

const StartGameScreen = ({}) => {
	return (
		<View style={styles.screen}>
			<Text>The Game Screen</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.title}>Input a number</Text>
				<TextInput style={styles.input} />
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button}>
						<Button title="Reset" onPress={() => {}} />
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}>
						<Button title="Confirm" onPress={() => {}} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		padding: 10
	},
	inputContainer: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center'
	},
	input: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		marginVertical: 10
	},
	title: {
		fontSize: 20,
		marginVertical: 10
	},
	buttonContainer: {
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	button: {
		width: '40%'
	}
});

export default StartGameScreen;
