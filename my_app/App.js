/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View ,Button} from "react-native";
import { Directions } from "react-native-gesture-handler";
// import TextHeader from "./Demo/01-Text/TextHeader";
// import News from "./Demo/01-Text/TextNews";
// import TouchableTest from './Demo/03-TouchableOpacity/TouchableOpacity-Demo'
// import TextInputTest from './Demo/02-TextInput/TextInput-Demo'
// import ImageTest from './Demo/04-Image/Image-Demo'
import ScrollViewTest from './Demo/05-ScrollView/ScrollView'
import ListViewTest from './Demo/06-ListView/ListView'
import RootNavigator from './Demo/07-Navigation/navigaiton'
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './Demo/07-Navigation/HomeScreen'
import ProfileScreen from './Demo/07-Navigation/ProfileScreen'

const Navigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
});

const App = createAppContainer(Navigator);
export default App

/*------------------------其余组件-------------------------*/
/*
export default class App extends Component{
  render(){
    return(
      <View flex={1} backgroundColor='white'>
        ScrollView组件
        <ScrollViewTest></ScrollViewTest>

        ListView组件
        <ListViewTest></ListViewTest>
      </View>
    );
  }
}
*/

/*------------------------简单的主/交叉轴使用-------------------------*/
/*
// 简单的主/交叉轴使用
const styles = StyleSheet.create({
  container: {
    margin:30,
    width:300,
    height:500,
    backgroundColor: 'yellow',
    // 默认主轴方向是column
    // 设置为横向排列
    flexDirection: 'row',
    // 主轴方向
    justifyContent: 'center',
    // 交叉轴
    alignItems: 'center'
  },
  child1:{
    width:100,
    height: 100,
    backgroundColor: 'green'
  },
  child2:{
    width:100,
    height: 100,
    backgroundColor: 'blue'
  }
});
*/

/*------------------------flex-------------------------*/
/*
  可以给组件指定flex，flex的值是数字。flex：1表示组件可以撑满所有的剩余空间
  同时存在多个并列的子组件，flex：1，均分
  如果这些并列的子组件的flex值不一样，则谁的值更大，谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）
*/
/*
const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: 'yellow'
  },
  child1:{
    marginTop:30,
    flex: 1,
    backgroundColor: 'green'
  },
  child2:{
    flex: 2,
    backgroundColor: 'blue'
  }
});

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}></View>
        <View style={styles.child2}></View>
      </View>
    );
  }
}
*/

/*------------------------View组件-------------------------*/
/*
  在Web开发中，div是最重要的一个元素，是页面布局的基础
  在ReactNative开发中，View组件的作用类似div。是最基本的组件。
  被看做是容器组件
*/
/*
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#F2F2F2"
  },
  flex: {
    flex: 1
  },
  // 多个组件需要设置
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    flexDirection: "row",
    backgroundColor: "gray",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 80,
    borderRadius: 5
  },

  // 给中间的区域设置左右边线
  lineLeftRight: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "red"
  },
  // 给上半区域设置下边线
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: "white"
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, styles.flex]}>
        <View style={styles.item}>
          <View style={[styles.flex, styles.center]}>
            <Text>酒店</Text>
          </View>
          <View style={[styles.flex, styles.lineLeftRight]}>
            <View style={[styles.flex, styles.center, styles.bottomLine]}>
              <Text>海外酒店</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text>特价酒店</Text>
            </View>
          </View>
          <View style={styles.flex}>
            <View style={[styles.flex, styles.center, styles.bottomLine]}>
              <Text>团购</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text>民宿</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
*/

/*------------------------Text组件-------------------------*/
/*
  常用特性：
  onPress 手指触摸时间
  numberIfLines 显示多少行
  可以设置字体颜色、大小、对齐方式等等
 */
/*
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default class App extends Component {
  render() {
    let news = [
      '1.知网低买高卖惹争议 专家：涉嫌滥用市场优势地位',
      '2.“万年不长”的手臂终于变大了，别说没告诉你这些技巧',
      '3.手臂足够的粗，在健身房总会受到迷一样的凝视，这严格意义上是一件好事。但真的要让手臂持续变大，真的不容易，这不是在吓唬新手，老司机们深有同感。如果你接着看下去，就会发现每一个技巧都想让你的手臂变大',
      '4.手臂训练大多数的训练哲学：不使用完全锁住关节来保持肌肉处于张力之下，使用一定负重和力竭组，休息时间减到最少来增加强度。',
    ];

    return (
      <View style={styles.flex}>
        <TextHeader />
        <News news={news}/>
      </View>
    );
  }
}
*/

/*------------------------TouchableOpacity组件-------------------------*/
/*
export default class App extends Component{
  render(){
    return(
      <View flex={1} backgroundColor='white'>
        <TouchableTest></TouchableTest>
      </View>
    );
  }
}
*/


/*------------------------TextInputTest组件-------------------------*/
/*
export default class App extends Component{
  render(){
    return(
      <View flex={1} backgroundColor='white'>
          <TextInputTest></TextInputTest>
      </View>
    );
  }
}
*/

/*------------------------Image组件-------------------------*/
/*
export default class App extends Component{
  render(){
    return(
      <View flex={1} backgroundColor='white'>
          <ImageTest></ImageTest>
      </View>
    );
  }
}
*/

