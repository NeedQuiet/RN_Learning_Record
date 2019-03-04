import React, { Component } from "react";
import {StyleSheet, Text, View } from "react-native";

// 样式
const styles = StyleSheet.create({
    flex: {
        flex:1,
    },
    // ‘今日要闻’标题
    news_title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#CD1D1C',
        marginLeft: 10,
        marginTop: 15,
    },
    // 每一条新闻
    news_item:{
        marginTop:10,
        marginLeft:10,
        marginRight: 10,
        fontSize:15,
        lineHeight: 30,
    },
});

// 组件
export default class News extends Component{
    show(title){
        alert(title);
    }
    render(){
        // 定义数组，用于存储设置好的Text组件
        let newsComponets = [];
        // 遍历存储信息的数组，从外部传入的
        for (let i in this.props.news) {
            let text = (
                <Text 
                style={styles.news_item}
                numberOfLines={2}
                key={i}
                onPress={this.show.bind(this,this.props.news[i])}
                >
                {this.props.news[i]}
                </Text>
            );
            // 将设置好的Text存入数组
            newsComponets.push(text);
        }

        return(
            <View style={styles.flex}>
                <Text style={styles.news_title}>今日要闻</Text>
                {newsComponets}
            </View>
        );
    }
}