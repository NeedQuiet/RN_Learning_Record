import React, { Component } from "react";
import {StyleSheet, Text, View ,TouchableOpacity,TouchableHighlight} from "react-native";

/*
  React Native 提供3个组件用于给其他没有触摸时间的组件绑定触摸事件
  TouchableOpacity 透明触摸，点击时，组件会出现透明过渡效果
  TouchableHighlight 高亮触摸，点击时，组件会出现高亮效果
  TouchableWithoutFeedback 无反馈性触摸，点击时，组件无视觉变化
  需要导入组件 TouchableOpacity
*/

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height: 45,
        marginTop: 25,
    },
    flex: {
        flex:1,
    },
    input:{
        height:45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#CCC',
        borderRadius: 4,
    },
    btn:{
        width:55,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#23BEFF',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    search:{
        color:'#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default class TouchableTest extends Component{
    clickBtn(){
        alert('点击搜索按钮');
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.flex}>
                    <View style={styles.input}></View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={this.clickBtn}>
                    <Text style={styles.search}>搜索</Text>
                </TouchableOpacity>
            </View>
        );
    }
}