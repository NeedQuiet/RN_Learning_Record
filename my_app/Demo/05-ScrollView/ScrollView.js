import React,{ Component} from "react";
import { StyleSheet,View,Text,ScrollView,RefreshControl} from "react-native";

/*
    ScrollView的简单实现
    实现检测拖拽、滑动的相关方法
    添加几个子组件
*/

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor: 'cyan'
    },
    ScrollView:{
        marginTop:25,
        backgroundColor: '#CCCCCC'
    },
    View_1:{
        margin:15,
        flex:1,
        height: 300,
        backgroundColor: 'yellow',
    },
    View_2:{
        margin:15,
        flex:1,
        height: 300,
        backgroundColor: 'blue',
    },
    View_3:{
        margin:15,
        flex:1,
        height: 300,
        backgroundColor: 'green',
    },

});

export default class ScrollViewTest extends Component{
    _onScrollBeginDrag = () =>{
        console.log('开始拖拽');
    };
    _onScrollEndDrag = () =>{
        console.log('结束拖拽');
    };
    _onMomentumScrollBegin = () =>{
        console.log('开始滑动');
    };
    _onMomentumScrollEnd = () =>{
        console.log('滑动结束');
    };
    _onRefresh = () =>{
        console.log('正在刷新...')
    }

    render(){

        let rows =[];// 创建10个View组件玩玩
        for(let i =0;i<10;i++){
            let row = (
                <View style={styles.View_1}>
                    <Text>{i}</Text>
                </View>
            )
            rows.push(row);
        }

        return(
            <View style={styles.constainer}>
                <ScrollView 
                    style={styles.ScrollView}
                    showsVerticalScrollIndicator ={true}
                    onScrollBeginDrag = {this._onScrollBeginDrag}//开始拖拽
                    onScrollEndDrag = {this._onScrollEndDrag}//结束拖拽
                    onMomentumScrollBegin = {this._onMomentumScrollBegin}//开始滑动
                    onMomentumScrollEnd = {this._onMomentumScrollEnd}//滑动结束
                    refreshControl={
                        <RefreshControl
                            refreshing = {false}
                            tintColor='red'
                            title='正在刷新'
                            onRefresh = {this._onRefresh}//正在刷新...
                        ></RefreshControl>
                    }
                >
                    <View style={styles.View_1}></View>
                    <View style={styles.View_2}></View>
                    <View style={styles.View_3}></View>
                    {
                        rows//可直接放入组件数组
                    }
                </ScrollView>
            </View>
        );
    }
}