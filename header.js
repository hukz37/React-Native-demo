/* 案例:网易新闻列表展示*/

var React = require('react-native');

var {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	PixelRatio
} = React;

var Header = React.createClass({
	render: function(){
		return(
			<View style={styles.flex}>
				<Text style={styles.font_1}>网易</Text>
				<Text style={styles.font_2}>新闻</Text>
				<Text>有态度*</Text>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	flex: {
		marginTop: 25,
		height: 50,
		borderBottomWidth: 3 / PixelRatio.get(),
		borderColor: '#EF2D36',
		//flexDirection : 'row',
		alignItems: 'center',
	},
	font: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	font_1: {
		color: '#CD1D1C'
	},
	font_2: {
		color: '#FFF',
		backgroundColor: '#CD1D1C'
	}
});
module.exports = Header;