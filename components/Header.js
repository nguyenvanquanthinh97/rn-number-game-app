import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 30,
		backgroundColor: '#f7287b',
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerText: {
		fontSize: 18
	}
});

export default Header;
