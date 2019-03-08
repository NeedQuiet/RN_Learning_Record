import React from "react";
import { connect } from "react-redux";
import { View } from "src/Utility/PathExport";
import BaseComponent from "src/UI/Pages/BaseComponent";
import MainView from "./view";
import { showHud } from "src/Redux/actions/PageManagerAction";
import CustomToast from "src/UI/CustomView/CustomToast";

/**
 * index.js文件用于将所有事件抽离出来。保证所有的UI都在view.js,
 * index.js中用BaseComponentDidMount等代替原有的ComponentDidMount等生命周期，方法一定要写成箭头函数的形式，否则不识别
 */

export class index extends BaseComponent {
	static navigationOptions = MainView.navOpt;
	//状态栏配置。BaseComponent会读取,涉及到样式配置全都写在view.js里
	statusBarConfig = MainView.statusBarConfig;

	_onBackButtonPressAndroid = () => {
		//当return true时，会阻止默认的返回事件
		alert("Back On Press");
		return true;
	};

	BaseComponentDidMount = () => {
		this.props.navigation.setParams({ navBtnClick: this.navBtnClicked });
	};

	navBtnClicked = () => {
		this.toast.show("这是一个toast");

		this.props.dispatch(showHud(true,'这是一个Hud'));
		this.timer = setTimeout(() => {
			this.props.dispatch(showHud(false));
		}, 3000);
	};

	BaseComponentWillUnmount = () => {};

	BaseRender = () => {
		const { showHud, hudMessage } = this.props.PageManagerReducer;
		const params = {
			showHud
		};
		return (
			<View style={{ flex: 1 }}>
				<MainView {...params} />
				<CustomToast
					ref={e => {
						this.toast = e;
					}}
				/>
			</View>
		);
	};
}

const useReducers = store => {
	return {
		//Reducers
		PageManagerReducer: store.PageManagerReducer
	};
};
export default connect(useReducers)(index);
