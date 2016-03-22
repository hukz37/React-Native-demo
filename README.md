# React-Native-demo

开始学习React-Native,最开始在网上看一些教程,按照教程搭建环境.后来买了一本书,看了一些了,还是想完整的学习一下,将书中的项目以及一些小的demo敲一下.

FaceBook官方地址:http://facebook.github.io/react-native/

github地址:https://github.com/facebook/react-native

学习RN

###1.简单的九宫格(比普通的九宫格稍微复杂一些)
![九宫格](https://box.worktile.com/view/71758690a2c648efb1da73dea5b24171?pid=39f1a5e31a40410cbd72fafeae831bf6&token=5f46b8d2b9604b0a93e32ceeda3d8a75&dt=)



###2.网易新闻
这个有一些问题,目前还没找到原因,我修改了flexDirection之后没有居中显示
在这个小demo中创建了一个新闻列表的组件,最开始有一个提示:Warning: Each child in an array or iterator should have a unique "key" prop. Check the top-level render call using
网上看到这句话:react对dom做遍历的时候，会根据data-reactid生成虚拟dom树。如果你没有手动的添加unique constant key的话，react是无法记录你的dom操作的。它只会在重新渲染的时候，继续使用相应dom数组的序数号(就是array[index]这种)来比对dom树
(链接：http://www.zhihu.com/question/37701739/answer/82354393)


![](https://box.worktile.com/view/ecced1823fef469b9005ff6306cfeac7?pid=39f1a5e31a40410cbd72fafeae831bf6&token=5f46b8d2b9604b0a93e32ceeda3d8a75&dt=)

