import React, { Component } from "react";
import { StyleSheet,View, Image } from "react-native";

/*
    用于显示图片的组件，包括网络图片、静态资源等等
    常用性能：
        resizeMode： 图片适应模式cover(默认、等比缩放，以宽高最小为准)、contain(等比缩放，以宽高最大为准)、streth(铺满)
        source：图片引用地址
        iOS支持属性：onLoad、onLoadEnd、onLoadStart、onProgress
*/

// 练习：显示两张图片，分别是网络图片、静态资源
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    alignItems: "center"
  },
  net: {
    marginTop: 30,
    width: 300,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan"
  },
  netImage: {
    width: 280,
    height: 100,
    backgroundColor: "yellow"
  },
  local: {
    marginTop: 30,
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan"
  },
  localImage: {
    width: 180,
    height: 180,
    backgroundColor: "gray"
  }
});

export default class ImgaeTest extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.net}>
          <Image 
            style={styles.netImage}
            source={{url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=962123523,785129186&fm=173&app=25&f=JPEG?w=482&h=288&s=BC8B9D5F527335929839953603008067'}}
            resizeMode='stretch'
          />
        </View>
        <View style={styles.local}>
          <Image 
            style={styles.localImage}
            source={require('./images/RN_Image.png')}
          />
        </View>
      </View>
    );
  }
}
