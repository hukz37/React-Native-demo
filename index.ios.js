  // /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// class app extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('app', () => app);






/* 携程的页面     九宫格实现*/
/*
var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	PixelRatio
} = React;

var app = React.createClass({
	render: function(){
		return (
			<View style={styles.flex}>
				<View style={styles.container}>
					<View style={[styles.item,styles.center]}>
						<Text style={styles.font}>酒店</Text>
					</View>

					<View style={styles.item,styles.lineLftRight}>
						<View style={[styles.center,styles.flex,styles.lineCenter]}>
							<Text style={styles.font}>海外酒店</Text>
						</View>
						<View style={[styles.center,styles.flex]}>
							<Text style={styles.font}>特惠酒店</Text>
						</View>
					</View>

					<View style={styles.item}>
						<View style={[styles.center,styles.flex,styles.lineCenter]}>
							<Text style={styles.font}>团购</Text>
						</View>
						<View style={[styles.center,styles.flex]}>
							<Text style={styles.font}>客栈.公寓</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		marginTop: 25,
		marginLeft: 5,
		marginRight: 5,
		height: 84,
		borderRadius: 5,
		padding: 2,
		backgroundColor: '#FF0067',
		flexDirection: 'row'
	},
	item: {
		flex: 1,
		height: 80,
		// borderColor: 'blue',
		// borderWidth: 1,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	flex: {
		flex: 1
	},
	font: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold'

	},
	lineLftRight: {
		borderLeftWidth: 1/PixelRatio.get(),
		borderRightWidth: 1/PixelRatio.get(),
		borderColor: '#fff'
	},
	lineCenter:{
		borderBottomWidth: 1/PixelRatio.get(),
		borderColor: '#fff'
	}
});

AppRegistry.registerComponent("app",() => app);

*/









/*网易新闻列表展示*/

/*
var React = require('react-native');
var Header = require('./header');

var {
	AppRegistry,
	StyleSheet,
	View,
	Text
} = React;

var List = React.createClass({
	render: function(){
		return (
			<View style={styles.list_item}>
				<Text style={styles.list_item_font}>{this.props.title}</Text>
			</View>
			);
	}
});
var ImportantNews = React.createClass({
	show: function(title){
		alert(title);
	},
	render: function(){
		var news = [];
		for(var i in this.props.news){
			var text = (
				<Text  key={i} onPress={this.show.bind(this,this.props.news[i])} numberOfLines={2} style={styles.news_item}>
					{this.props.news[i]}
				</Text>
				);
			news.push(text);
		}
		return(
			<View style={styles.flex}>
				<Text style={styles.news_title}>今日要闻</Text>
				{news}
			</View>
			);
	}
});





var app = React.createClass({
	render: function(){
		var news=[  '1.刘慈欣<<三体>>获"雨果奖"为中国作家首次',
					'2.京津冀协同发展定位明确:北京无经济中心表述',
					'3.好奇宝宝第一次淋雨,父亲用镜头记录了下来',
					'4.A股预言帝:只说一次,大盘或将这么走'];
		return (
			<View style={styles.flex}>
				<Header></Header>
				<List title='宇航员在太空宣布"三体"获奖'></List>
				<List title='NASA发短片纪念火星征程50年'></List>
				<List title='男生连续做一周苦瓜吃吐女友'></List>
				<List title='女童遭鲨鱼袭击又下海救伙伴'></List>
				<ImportantNews news={news}></ImportantNews>
			</View>

			);
	}
});

var styles = StyleSheet.create({
	flex:{
		flex: 1
	},
	list_item:{
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		justifyContent: 'center'
	},
	list_item_font:{
		fontSize: 16
	},
	news_title:{
		fontSize: 20,
		fontWeight:'bold',
		color: '#CD1D1C',
		marginLeft: 10,
		marginTop: 15
	},
	news_item:{
		marginLeft: 10,
		marginRight: 10,
		fontSize: 15,
		lineHeight:20
	}
});

AppRegistry.registerComponent('app', () => app);
*/








//3.4章    搜索框
var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	TextInput
} = React;
 
 var onePT = 1 / React.PixelRatio.get();
 var Search = React.createClass({
 	getInitialState: function(){
 		return {
 			show :false
 		};
 	},
 	getValue: function(text){
 		var value = text;
 		this.setState({
 			show: true,
 			value: value
 		});
 	},
 	hide: function(val){
 		this.setState({
 			show: false,
 			value: val
 		});
 	},
 	render: function(){
 		return (
 			<View style={styles.flex}>
 				<View style={[styles.flexDirection,styles.inputHeight]}>
 					<View style={styles.flex}>
 						<TextInput style={styles.input} returnKeyType="search" placeholder="请输入关键字" 
 							onEndEditing={this.hide.bind(this,this.state.value)} value={this.state.value} onChangeText={this.getValue}/>
 					</View>
 					<View style={styles.btn}>
 						<Text style={styles.search} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
 					</View>
 				</View>
 				{this.state.show ?
 					<View style={[styles.result]}>
 						<Text onPress={this.hide.bind(this,'北京'+this.state.value + '市')} style={styles.item} numberOfLines={1}>北京{this.state.value}市</Text>
 						<Text onPress={this.hide.bind(this,this.state.value + '园街')} style={styles.item} numberOfLines={1}>{this.state.value}园街</Text>
 						<Text onPress={this.hide.bind(this,80+this.state.value + '综合商店')} style={styles.item} numberOfLines={1}>80{this.state.value}综合商店</Text>
 						<Text onPress={this.hide.bind(this,this.state.value + '区')} style={styles.item} numberOfLines={1}>{this.state.value}区</Text>
 						<Text onPress={this.hide.bind(this,'杨林'+this.state.value + '园')} style={styles.item} numberOfLines={1}>杨林{this.state.value}</Text>
 					</View>
 					:null
 					}
 			</View>
 			);
 	}
 });

var app = React.createClass({
	render: function(){
		return(
			<View style={[styles.flex,styles.topStatus]}>
				<Search></Search>
			</View>
			);
	}
});
var styles = StyleSheet.create({
	flex:{
		flex: 1
	},

	flexDirection: {
		flexDirection: 'row'
	},
	topStatus: {
		marginTop: 25
	},
	inputHeight: {
		height: 45,
	},
	input: {
		height: 45,
		borderWidth: 1,
		marginLeft: 5,
		paddingLeft: 5,
		borderColor: '#ccc',
		borderRadius: 4
	},
	btn: {
		width: 55,
		marginLeft: -5,
		marginRight: 5,
		backgroundColor: '#23BEFF',
		height: 45,
		justifyContent: 'center',
		alignItems: 'center'
	},
	search: {
		color: '#fff',
		fontSize: 15,
		fontWeight: 'bold'
	},
	result: {
		marginTop: onePT,
		marginLeft: 5,
		marginRight: 5,
		height: 200,
		borderColor: '#ccc',
		borderTopWidth: onePT
	},
	item: {
		fontSize: 16,
		padding: 5,
		paddingTop: 10,
		paddingBottom: 10,
		borderWidth: onePT,
		borderColor: '#ddd',
		borderTopWidth: 0
	}
});

AppRegistry.registerComponent("app",() => app);




























