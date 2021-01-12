import React, {createRef} from 'react';

import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';

import SignatureCapture from 'react-native-signature-capture';

const App = () => {
	const sign = createRef();

	const saveSign = () => {
		sign.current.saveImage();
	};

	const resetSign = () => {
		sign.current.resetImage();
	};

	const _onSaveEvent = (result) => {
		//result.encoded - for the base64 encoded png
		//result.pathName - for the file path name
		alert('Signature Captured Successfully');
		console.log(result.encoded);
	};

	const _onDragEvent = () => {
		// This callback will be called when the user enters signature
		console.log('dragged');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<Text style={styles.titleStyle}>
					Capture Digital Signature in React Native App
				</Text>
				<SignatureCapture
					style={styles.signature}
					ref={sign}
					onSaveEvent={_onSaveEvent}
					onDragEvent={_onDragEvent}
					showNativeButtons={false}
					showTitleLabel={false}
					viewMode={'portrait'}
				/>
				<View style={{flexDirection: 'row'}}>
					<TouchableHighlight
						style={styles.buttonStyle}
						onPress={() => {
							saveSign();
						}}>
						<Text>Save</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.buttonStyle}
						onPress={() => {
							resetSign();
						}}>
						<Text>Reset</Text>
					</TouchableHighlight>
				</View>
			</View>
		</SafeAreaView>
	);
};
export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	titleStyle: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	signature: {
		flex: 1,
		borderColor: '#000033',
		borderWidth: 1,
	},
	buttonStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		backgroundColor: '#eeeeee',
		margin: 10,
	},
});