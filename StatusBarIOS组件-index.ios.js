
//StatusBarIOS组件:app的状态栏
var React = require('react-native');

var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	StatusBarIOS
} = React;

StatusBarIOS.setStyle('light-content');
StatusBarIOS.setNetworkActivityIndicatorVisible(true);
var app = React.createClass({
	render: function(){
		return (
			<View style={styles.container}>
			</View>
			);
	}
});

var styles= StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1FB9FF'
	}
});

AppRegistry.registerComponent('app', ()=> app);




/*
StatusBarIOS有3个静态方法
1.setStyle(style,animated):设置状态栏的样式.其参数style是字符串,可以是'default'或者'light-content'中的一个.animated是可选参数,表示是否有动画过渡,其值为true或者false.
2.setHidden(hidden,animated):用于隐藏状态栏.其参数hidden是boolen类型,如果其值为true,则隐藏状态栏.
3.setNetworkActivityIndicatorVisible(visible):是否显示网络状态.

*/







