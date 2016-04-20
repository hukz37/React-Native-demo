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
/*
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

*/







/*
简单图片浏览器

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} = React;
var imgs = [
	'http://vczero.github.io/ctrip/hua2.png',
	'http://vczero.github.io/ctrip/nian2.png',
	'https://box.worktile.com/view/9dce0c6d741b4ecfa1f775fd05fc45b6?pid=39f1a5e31a40410cbd72fafeae831bf6&token=8527f2406f0e47c09271626246d7d9aa&dt='
];

var MyImage = React.createClass({
	getInitialState: function(){
		var imgs = this.props.imgs;
		return {
			imgs: imgs,
			count: 0
		};
	},
	goNext: function(){
		var count = this.state.count;
		count++;
		if (count < imgs.length) {
			this.setState({
				count: count
			});
		};
	},
	goPreview: function(){
		var count = this.state.count;
		count--;
		if (count >= 0) {
			this.setState({
				count: count
			});
		};
	},
	render: function(){
		return(
			<View style={styles.flex}>
				<View style={styles.Image}>
					<Image style={styles.img} source={{uri: this.state.imgs[this.state.count]}} resizeMode="contain"/>
				</View>
				<View style={styles.btns}>
					<TouchableOpacity onPress={this.goPreview}>
						<View style={styles.btn}>
							<Text>上一张</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.goNext}>
					<View style={styles.btn}>
						<Text>下一张</Text>
					</View>
				</TouchableOpacity>
				</View>
			</View>
			);
	}
});

var app = React.createClass({
	render: function(){
		return(
			<View style={[styles.flex,{marginTop:40}]}>
				<MyImage imgs={imgs}></MyImage>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	flex: {
		flex: 1,
		alignItems: 'center'
	},
	Image: {
		borderWidth: 1,
		width: 300,
		height: 200,
		borderRadius: 5,
		borderColor: '#ccc'
	},
	img: {
		height: 200,
		width: 300
	},
	btns: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20
	},
	btn: {
		width: 60,
		height: 30,
		borderColor: '#0089FF',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
		marginRight: 20
	},
});

AppRegistry.registerComponent('app', ()=> app);

*/







/*TabBar的切换*/


/*

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TabBarIOS
} = React;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;
var app = React.createClass({
	getInitialState: function(){
		return {
			tab: 'message'
		};
	},
	select: function(tabName){
		this.setState({
			tab: tabName
		});
	},
	render: function(){
		return (
			<TabBarIOS style={styles.flex}>
				<TabBarIOS.Item title="消息"
								icon={require("image!message")}
								onPress={this.select.bind(this,'message')}
								selected={this.state.tab === 'message'}>
					<ScrollView>
						<View style={styles.message}>
							<Text style={styles.message_title}>南山南</Text>
							<Text>
								他不在和谁谈论相逢的孤岛,因为心里早已荒芜人烟
								他的心里再装不下一个家,做一个只对自己说谎的哑巴,他说
								呵呵哒
								他不在和谁谈论相逢的孤岛,因为心里早已荒芜人烟
								他的心里再装不下一个家,做一个只对自己说谎的哑巴,他说
								呵呵哒								
								他不在和谁谈论相逢的孤岛,因为心里早已荒芜人烟
								他的心里再装不下一个家,做一个只对自己说谎的哑巴,他说
								呵呵哒								
								他不在和谁谈论相逢的孤岛,因为心里早已荒芜人烟
								他的心里再装不下一个家,做一个只对自己说谎的哑巴,他说
								呵呵哒								
								他不在和谁谈论相逢的孤岛,因为心里早已荒芜人烟
								他的心里再装不下一个家,做一个只对自己说谎的哑巴,他说
								呵呵哒
							</Text>
						</View>
					</ScrollView>
				</TabBarIOS.Item>
				<TabBarIOS.Item title="联系人"
								icon={require("image!phone")}
								onPress={this.select.bind(this,'phonelist')}
								selected={this.state.tab === 'phonelist'}>
					<ScrollView>
						<Text style={styles.list}>
							<Text>唐三藏</Text>
							<Text>13189049076</Text>
						</Text>
						<Text style={styles.list}>
							<Text>孙悟空</Text>
							<Text>13189049077</Text>
						</Text>
						<Text style={styles.list}>
							<Text>猪八戒</Text>
							<Text>13189049078</Text>
						</Text>
						<Text style={styles.list}>
							<Text>沙和尚</Text>
							<Text>13189049079</Text>
						</Text>
					</ScrollView>
				</TabBarIOS.Item>
				<TabBarIOS.Item title="动态"
								icon={require("image!star")}
								onPress={this.select.bind(this,'star')}>
					<ScrollView style={styles.flex}>
						<Image style={{width: width,height: height}} source={{uri:'http://vczero.github.io/ctrip/star_page.jpg'}}/>
					</ScrollView>
				</TabBarIOS.Item>
			</TabBarIOS>
			);
	}
});

var styles = StyleSheet.create({
	flex: {
		flex : 1
	},
	message: {
		alignItems: 'center',
		marginRight: 5,
		marginLeft: 5
	},
	message_title:{
		fontSize: 18,
		color: '#18B5FF',
		marginBottom: 5
	},
	list: {
		height: 30,
		fontSize: 15,
		marginLeft: 10,
		marginTop: 10
	},
});

AppRegistry.registerComponent('app',()=> app);


*/









/*webView的使用*/
/*
var React = require('react-native');
var Dimensions = require('Dimensions');

var {
	AppRegistry,
	StyleSheet,
	Text,
	WebView,
	View
} = React;

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var app = React.createClass({
	render: function(){
		return (
			<View style={styles.container}>
				<WebView injectedJavaScript="alert('欢迎使用React Native')"
						 contentInset={{left:-10,top:-28}}
						 scrollEnabled={false}
						 html='<div><img src="http://vczero.github.io/ctrip/star_page.jpg"></div>'
						 bounces = {false}>
						 url='http://weibo.com/vczero'
						 style={{width: width,height: height}}
				</WebView>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

AppRegistry.registerComponent('app', ()=> app);


*/






/*    案例:新浪微博OAuth授权(根本没有办法使用啊)*/

/*

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	WebView
} = React;

var appKey = '4263807830';
var callback = 'http://www.baidu.com';
var url = 'http://api.weibo.com/oauh2/authorize?client_id=' + appKey + '&redirect_uri=' + callback;

module.exports = React.createClass({
	getInitialState: function(){
		return {
			code: null
		};
	},
	render: function(){
		return (
			<View style={styles.container}>
			{
				!this.state.code ? <WebView style={styles.container} url={url} onNavigationStateChange={this.navChange} />
				:<Text>{this.state.code}</Text>
			}
			</View>
			);
	},
	navChange: function(state){
		var _that = this;
		if (state.url.indexOf(callback + "/?code=") > -1) {
			var code = state.url.split('?code=')[1];
			//TODO: 这里可以使用code去交换accessToken
			_that.setState({
				code: code
			});
		};
	}
});

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var app = React.createClass({
	render: function(){
		return (
			<View style={styles.container}>
				<WebView injectedJavaScript="alert('欢迎使用React Native')"
						 contentInset={{left:-10,top:-28}}
						 scrollEnabled={false}
						 html='<div><img src="http://vczero.github.io/ctrip/star_page.jpg"></div>'
						 bounces = {false}>
						 url='http://weibo.com/vczero'
						 style={{width: width,height: height}}
				</WebView>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

AppRegistry.registerComponent('app', ()=> app);



*/







//4.2  案例:购物车

/*
var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	View,
	NavigatorIOS,
	ScrollView,
	AsyncStorage,
	TouchableOpacity
} = React;

var Model = [
	{
		id: '1',
		title: '佳沛新西兰进口猕猴桃',
		desc: '12个装',
		price: 99,
		url: 'http://vczero.github.io/ctrip/guo_1.jpg'
	},
		{
		id: '2',
		title: '墨西哥进口牛油果',
		desc: '6个装',
		price: 59,
		url: 'http://vczero.github.io/ctrip/guo_2.jpg'
	},	{
		id: '3',
		title: '美国加州进口车厘子',
		desc: '1000g',
		price: 91.5,
		url: 'http://vczero.github.io/ctrip/guo_3.jpg'
	},	{
		id: '4',
		title: '新疆特产西梅',
		desc: '1000g',
		price: 69,
		url: 'http://vczero.github.io/ctrip/guo_4.jpg'
	},	{
		id: '5',
		title: '陕西大荔冬枣',
		desc: '2000g',
		price: 59.9,
		url: 'http://vczero.github.io/ctrip/guo_5.jpg'
	},	{
		id: '6',
		title: '南非红心西柚',
		desc: '2500g',
		price: 29.9,
		url: 'http://vczero.github.io/ctrip/guo_6.jpg'
	}

];


var Item = React.createClass({
	render: function(){
		return(
			<View style={styles.item}>
				<TouchableOpacity onPress={this.props.press}>
					<Image resizeMode='contain'
							style={styles.img}
							source={{uri:this.props.url}}>
						<Text numberOfLines={1} style={styles.item_text}>
							{this.props.title}
						</Text>
					</Image>
				</TouchableOpacity>
			</View>
			);
	}
});

var List = React.createClass({
	getInitialState: function(){
		return{
			count: 0
		};
	},
	componentDidMount: function(){
		var _that = this;
		AsyncStorage.getAllKeys(function(err,keys){
			if (err) {
				//TODO: 存储取数据出错
				//给用户提示错误信息
			}

			//将存储的商品条数反映到按钮上
			_that.setState({
				count: keys.length
			});
		});
	},
	render: function(){
		var list = [];
		for(var i in Model){
			if (i % 2 === 0) {
				var row = (
					<View style={styles.row}>
						<Item url={Model[i].url}
							  key={Model[i].id}
							  title={Model[i].title}
							  press={this.press.bind(this,Model[i])}>
						</Item>
						<Item url={Model[parseInt(i)+1].url}
							  key={Model[parseInt(i)+1].id}
							  title={Model[parseInt(i)+1].title}
							  press={this.press.bind(this,Model[parseInt(i)+1])}>
						</Item>
					</View>
					);
				list.push(row);
			}
		}
		var count = this.state.count;
		var str = null;
		if (count) {
			str = ',共'+count + '件商品';
		}
		return (
			<ScrollView style={{marginTop: 10}}>
				{list}
				<Text onPress={this.goGouWu} style={styles.btn}>去结算{str}</Text>
			</ScrollView>
			);
	},
		goGouWu: function(){
			this.props.navigator.push({
				component: GouWu,
				title: '购物车'
			});
		},

		press: function(data){
			var count = this.state.count;
			count ++;
			//改变数字状态
			this.setState({
				count:count
			});
			//AsyncStorage存储
			AsyncStorage.setItem('SP-' + this.genId() + '-SP', JSON.stringify(data),function(err){
				if (err) {
					//TODO 存储出错
				}
			});

		},
		//生成随机ID:GUID
		genId: function(){
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
				var r = Math.random() * 16 | 0
				v = c == 'x'? r: (r & 0x3 | 0x8);
				return v.toString(16);
			}).toUpperCase();
		}
}); 


var GouWu= React.createClass({
	getInitialState: function(){
		return {
			data: [],
			price: 0
			};
	},
	render: function(){
		var data = this.state.data;
		var price = this.state.price;
		var list = [];
		for(var i in data){
			price += parseFloat(data[i].price);
			list.push(
				<View style={[styles.row, styles.list_item]}>
					<Text style={styles.list_item_desc}>
						{data[i].title}
						{data[i].desc}
					</Text>
					<Text style={styles.list_item_price}>${data[i].price}</Text>
				</View>
				);
		}

		var str = null;
		if (price) {
			str = ', 共' + price.toFixed(1) + '元';
		}

		return(
			<ScrollView style={{marginTop: 10}}>
				{list}
				<Text style={styles.btn}>支付{str}</Text>
				<Text style={styles.clear} onPress={this.clearStorage}>清空购物车</Text>
			</ScrollView>
			);
	},

	componentDidMount: function(){
		var _that = this;
		AsyncStorage.getAllKeys(function(err,keys){
			if (err) {
				//TODO:存储取数据出错
				//如果发生错误,这里直接返回(return)防止进入下面的逻辑
			}
			AsyncStorage.multiGet(keys,function(errs,result){
				//TODO:错误处理
				//得到的结果是二维数组
				//result[i][0]表示我们存储的键,result[i][1]表示我们存储的值
				var arr = [];
				for(var i in result){
					arr.push(JSON.parse(result[i][1]));
				}
				_that.setState({
					data: arr
				});
			});
		});
	},
	clearStorage: function(){
		var _that = this;
		AsyncStorage.clear(function(err){
			if (!err) {
				_that.setState({
					data: [],
					price: 0
				});
				alert('购物车已经清空');
			}
			//TODO: ERR
		});
	}
});

var app = React.createClass({
	render: function(){
		return (
			<NavigatorIOS style={styles.container} initialRoute={{
				component: List,
				title: '水果列表'
			}}>

			</NavigatorIOS>
			);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	row: {
		flexDirection: 'row',
		marginBottom: 10
	},
	item:{
		flex: 1,
		marginLeft: 5,
		borderWidth: 1,
		borderColor: '#ddd',
		marginRight: 5,
		height: 100
	},
	img: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	item_text:{
		backgroundColor: '#000',
		opacity: 0.7,
		color: '#fff',
		height: 25,
		lineHeight: 18,
		textAlign: 'center',
		marginTop: 74
	},
	btn: {
		backgroundColor: '#FF7200',
		height: 33,
		textAlign: 'center',
		color: '#fff',
		marginLeft: 10,
		marginRight: 10,
		lineHeight: 24,
		marginTop: 40,
		fontSize: 18
	},
	list_item: {
		marginLeft: 5,
		marginRight: 5,
		padding: 5,
		borderWidth: 1,
		height: 30,
		borderRadius: 3,
		borderColor: '#ddd'
	},
	list_item_desc: {
		flex: 2,
		fontSize: 15
	},
	list_item_price: {
		flex: 1,
		textAlign: 'right',
		fontSize: 15
	},
	clear: {
		marginTop: 10,
		backgroundColor: '#FFF',
		color: '#000',
		borderWidth: 1,
		borderColor: '#ddd',
		marginLeft: 10,
		marginRight: 10,
		lineHeight: 24,
		height: 33,
		fontSize: 18,
		textAlign: 'center'
	}
});

AppRegistry.registerComponent('app', ()=> app);


*/






//第五章


'use strict';

var React = require('react-native');

var {
	AppRegistry,
	StyleSheet,
	Text,
	View
} = React;


var DeviceManager = require('react-native-device-extension');

console.log(require('NativeModules'));

var PieChart = require('react-native-xypiechart');

var handler = function(body) {

	console.log(body.NativeEvent);
}


var chartData = [{
	'label' : 'Chrome',
	value : 36,
	color : '#008800'
},{
	'label' : 'IE8.0',
	value : 22 ,
	color : '#0044bb'
},{
	'label' : 'Other',
	value : 42 ,
	color : '#444444'
}]

var app = React.createClass({
	getInitialState : function(){
		return {orientation: 'unknown'};
	},

	viewDidOrientation: function(event) {
		this.state.orientation = event.Orientation;
	},
	componentDidMount: function(){
		DeviceManager.addListener(DeviceManager.events.DEVICE_ORIENTATION_EVENT,this.viewDidOrientation);
	},

	componentWillUnmount: function() {
		DeviceManager.removeListener(DeviceManager.events.DEVICE_ORIENTATION_EVENT,this.viewDidOrientation);
	},
	render : function(){
		return (
			<View style={styles.container}>
				<PieChart style={styles.chart}>
					chartData = {chartData}
					showPercentage = {true}
					onChange={(handler)}
				</PieChart>
			</View>
			);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	chart :{
		width: 200,
		height: 200
	}
});

AppRegistry.registerComponent('app',()=> app);


























