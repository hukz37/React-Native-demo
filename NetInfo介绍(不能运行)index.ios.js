
在React Native中,NetInfo API提供了获取网络状态的方法.

isConnected:表示网络是否连接
fetch():获取网络状态
addEventListener(eventName,handler):添加事件监听
removeEventListener(eventName,handler):删除事件监听

网络状态主要有一下类型:
none: 离线状态
wifi: 在线状态,并且通过wifi或者是iOS模拟器连接
cell: 网络连接.通过3G,WiMax或者LTE进行连接
unknown:错误情况,网络状态未知



NetInfo可以获取网络的状态和类型.比如:在手机3G网络的情况下建议用户开启"无图浏览";在Wifi的情况下,引导用户播放视频.获取网络状态的代码如下;;


//获取连接类型
NetInfo.fetch().done(function(reachability){
	alert(reachability);
});


//获取是否连接
NetInfo.isConnected.fetch().done(function(isConnected){
	alert(isConnected);
});

//添加网络状态变化监听
NetInfo.addEventListener('change',function(reachability){
	alert(reachability);
});


//获取是否连接 
NetInfo.isConnected.addEventListener('change',function(isConnected){
	alert(isConnected);
});










