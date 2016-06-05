//CameraRoll应用
var React = require('react-native');
var{
	AppRegistry,
	CameraRoll,
	Image,
	ListView,
	StyleSheet,
	View,
	Text,
	ScrollView
} = React;

//获取图片的参数设置
var fetchParams = {
	first : 4,
	groupTypes: 'All',
	assetType: 'Photos'
};

var imgUrl = 'http://vczreo.github.io/lvtu/img/';

var app = React.createClass({

	getInitialState: function(){
		return{
			photos: null
		};
	},
	render: function(){
		var photos = this.state.photos || [];
		var photosView = [];
		for(var i = 0; i < 4; i += 2){
			photosView.push(
				<View style={styles.row}>
					<View style={styles.flex_1}>
						<Image resizeMode="stretch"
							   style={[styles.imgHeight,styles.m5]}
							   source={{uri:photos[i]}}/>
					</View>
					<View style={styles.flex_1}>
						<Image resizeMode="stretch"
							   style={[styles.imgHeight,styles.m5]}
							   source={{uri:photos[parseInt(i) + 1]}}/>
					</View>
				</View>
				);
		}

		return(
			<ScrollView>
				<View style={styles.row}>
					<View style={styles.flex_1}>
						<Image resizeMode="stretch"
							   style={[styles.imgHeight,styles.m5]}
							   source={{uri: imgUrl + 'city.jpg'}}/>
					</View>
					<View style={styles.flex_1}>
						<Image resizeMode="stretch"
						style={[styles.imgHeight,styles.m5]}
						source={{uri:imgUrl + '3.jpeg'}}/>
					</View>
				</View>

				<View>
					<Text onPress={this.saveImg.bind(this,'city.jpg','3.jpeg')}
							style={styles.saveImg}>保存图片到相册</Text>
				</View>

				<View style={[{marginTop:20}]}>
					{photosView}
				</View>
			</ScrollView>
			);
	},

	componentDidMount: function(){
		var _that = this;
		CameraRoll.getPhotos(fetchParams,function(data){
			console.log(data);
			var edges = data.edges;
			var photos= [];
			for(var i in edges){
				photos.push(edges[i].node.image.uri);
			}
			_that.setState({
				photos: photos
			});
		},function(){
			alert('获取照片失败');
		});
	},

	saveImg: function(img1,img2){
		var _that = this;
		CameraRoll.saveImageWithTag(imgUrl + img1,function(url){
			if (url) {
				var photos = _that.state.photos;
				photos.unshift(url);
				_that.setState({
					photos: photos
				});
				CameraRoll.saveImageWithTag(imgUrl+ img2,function(url){
					photos,unshift(url);
					_that.setState({
						photos: photos
					});
					alert('保存图片成功');
				},function(){
					alert('保存图片失败');
				});
				}
			},function(){

				alert('保存图片失败');
			});
		}
	});

var styles = StyleSheet.create({
	flex_1:{
		flex: 1
	},
	m5: {
		marginLeft: 5,
		marginRight: 5,
		borderWidth: 1,
		borderColor: '#ddd'
	},
	row: {
		flexDirection: 'row'
	},
	imgHeight: {
		height: 120
	},
	saveImg: {
		flex: 1,
		height: 30,
		textAlign : 'center',
		marginTop: 20,
		backgroundColor: '#3BC1FF',
		color: '#FFF',
		lineHeight: 20,
		borderRadius:5,
		marginLeft: 5,
		marginRight: 5,
		fontWeight: 'bold' 
	}
});


AppRegistry.registerComponent('app', () => app);








