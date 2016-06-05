//AlertIOS组件

var React = require('react-native');

var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	AlertIOS
} = React;

var app = React.createClass({
	render: function(){
		return (
			<View style={styles.container}>
				<Text style={styles.item} onPress={this.tip}>提示对话框</Text>
				<Text style={styles.item} onPress={this.input}>输入对话框</Text>
			</View>
			);
	},
	tip: function(){
		AlertIOS.alert('提示','选择学习React Native',[
			{
				text: '取消',
				onPress: function(){
					alert('你点击了取消按钮');
				}
			},
			{
				text: '确认',
				onPress: function(){
					alert('你点击了确认按钮');
				}
			}
			]);
		
	},
	input: function(){
		AlertIOS.prompt('提示','使用React Native开发App',[
		{
			text: '取消',
			onPress: function(){
				alert('你点击了取消按钮');
			}
		},
		{
			text: '确认',
			onPress: function(e){
				alert(e);
			}
		}
			]);
	}
});


var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 25
	},
	item: {
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		height: 30,
		borderWidth: 1,
		padding: 6,
		borderColor: '#ddd'
	}
});

AppRegistry.registerComponent('app', ()=> app);
