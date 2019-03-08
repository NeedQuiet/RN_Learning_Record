import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet,
	createFinalStyles
} from "src/Utility/PathExport";
import { NavigationBarOptions } from "src/Utility/PathExport";
import { translateString } from "src/Localizations/I18n";

/**
 * view.js中只有最基本的组件。所有的事件全都由index.js处理.所有的模块导入，只能从PathExport,react中导入。
 */

const originalStyle = {
	container: {
		flex: 1,
		alignItems: "center"
	},
	textStyle: {
		color: "blue",
		backgroundColor: "yellow"
	},
	navigationItemStyle: {
		color: "white"
	}
};

const styles = StyleSheet.create(originalStyle);


export default class MainView extends Component{
	//状态栏配置
	static statusBarConfig = {
		contentType: "light-content"
	};

	//NavigationBar 配置
	static navOpt = NavigationBarOptions.navigationOptions(
		{
			title: translateString("main", "Example")
		},
		{
			/**
			 * rightItem: null,
			 * leftItem: null,
			 * headerBackgroundImage: ImageManager.nav_background,
			 */
			leftItem: NavigationBarOptions.HeaderItem(
				<Text style={styles.navigationItemStyle}>Back</Text>,
				"navLeftClick"
			),
			rightItem: NavigationBarOptions.HeaderItem(
				<Text style={styles.navigationItemStyle}>push</Text>,
				"navBtnClick"
			)
		}
	);

	render() {
		return (
			<View style={styles.container}>
				<Text
					category={"main"}
					extraStyleName="textStyle"
					style={styles.textStyle}
				>
					{this.props.showHud ? "Hud is showing" : "Hud  is not showing"}
				</Text>
			</View>
		);
	}
}
