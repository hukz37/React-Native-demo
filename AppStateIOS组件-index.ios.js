
//PixelRatio应用
var React = require('react-native');

var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	PixelRatio,
	AppStateIOS
} = React;

alert(AppStateIOS.currentState);//获取当前app的属性
var app = React.createClass({
	render: function(){
		return (
			<View style={styles.container}>
				<View style={{borderWidth: 1, borderColor: 'red',height: 40, marginBottom: 20}}></View>
				<View style={{borderWidth: 1/PixelRatio.get(),borderColor: 'red', height: 40}}></View>
			</View>
			);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 25
	},
});

AppRegistry.registerComponent('app', ()=> app);
