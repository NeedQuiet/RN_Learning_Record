/* eslint-disable react-native/no-unused-styles */
import React,{ Component} from "react";
import { StyleSheet,View,Text,ListView} from "react-native";

/*
    ListView 数据列表
    ListView 最重要的是设置每行显示的组件
    section、header

    使用ListView.DataSource，给它传递一个普通的数据数组，再使用dataSource对象实例化一个ListView组件。
    ListView实现：row/section组件定义、设置数据

    设置ListView数据源：
    将dataSource对象设置为state属性，ListView会根据数据源进行渲染
*/

// 原始数据
const contents = [
    ["section0-row0", "section0-row1", "section0-row2", "section0-row3"],
    ["section1-row0", "section1-row1", "section1-row2", "section1-row3"],
    ["section2-row0", "section2-row1", "section2-row2", "section2-row3"],
    ["section3-row0", "section3-row1", "section3-row2", "section3-row3"],
    ["section4-row0", "section4-row1", "section4-row2", "section4-row3"],
    ["section5-row0", "section5-row1", "section5-row2", "section5-row3"],
];

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 25
    },
    row:{
        justifyContent:'center',
        alignItems: 'center',
        padding: 5,
        height: 100,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC'
    },
    content:{
        flex:1,
        fontSize: 20,
        color:'blue',
        lineHeight: 100
    },
    sectionHedaer:{
        height:25,
        backgroundColor: '#CCCCCC'
    },
    headerContent:{
        textAlign:'center',
        fontSize: 20,
        lineHeight:25
    }
});

export default class ListViewTest extends Component{
    constructor(props) {
        super(props);
        // 创建dataSource对象
        let ds = new ListView.DataSource({
            // 通过判断决定渲染哪些组件，避免全部渲染，提高渲染效率
            rowHasChanged:(oldRow,newRow) => oldRow!==newRow,
            sectionHeaderHasChanged: (oldSection, newSection) => oldSection !== newSection
        });

        this.state = {
            // 设置dataSource时，不直接使用提供的原始数据，使用cloneWithRow对数据源进行复制
            // 使用复制后的数据源实例化ListView。优势，当原始数据发生变化时，ListView组件的dataSource不会改变
            // dataSource:ds.cloneWithRows(contents) // 不分组使用
            dataSource:ds.cloneWithRowsAndSections(contents) // 分组使用
        }
    }

    // 渲染行组件，参数是每行要显示的数据对象
    /*
        rowData: 行数据
        sectionID: 当前行所在的组id
        rowID: 当前行所在的行id
        highlightRow: 高亮函数
    */
    _renderRow = (rowData,sectionID,rowID,highlightRow) => {
        return(
            <View style={styles.row}>
                <Text style={styles.content}>{rowData}</Text>
            </View>
        );
    }

    _renderSectionHeader =(sectionData, sectionID) =>{
        return(
            <View style={styles.sectionHedaer}>
                <Text style={styles.headerContent}>Section:{sectionID}</Text>
            </View>
        );
    }

    render(){
        return(
            <ListView
                style={styles.container}
                dataSource = {this.state.dataSource}
                renderRow= {this._renderRow} 
                renderSectionHeader = {this._renderSectionHeader}
            >
            </ListView>
        );
    }
}

