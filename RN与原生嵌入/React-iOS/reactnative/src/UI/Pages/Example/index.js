import React from "react";
import { connect } from "react-redux";
import { View } from "src/Utility/PathExport";
import BaseComponent from "src/UI/Pages/BaseComponent";
import MainView from "./view";
import { showHud } from "src/Redux/actions/PageManagerAction";
import CustomToast from "src/UI/CustomView/CustomToast";
import {NativeModules,NativeEventEmitter} from "react-native"

const nativeModule = NativeModules.OpenNativeModule;
const nativeToRNEventModule = NativeModules.NativeToRNEventEmitter;

/**
 * index.js文件用于将所有事件抽离出来。保证所有的UI都在view.js,
 * index.js中用BaseComponentDidMount等代替原有的ComponentDidMount等生命周期，方法一定要写成箭头函数的形式，否则不识别
 */

export class index extends BaseComponent {
	static navigationOptions = MainView.navOpt;
	//状态栏配置。BaseComponent会读取,涉及到样式配置全都写在view.js里
	statusBarConfig = MainView.statusBarConfig;

	constructor(props) {
		super(props);
	}

	_onBackButtonPressAndroid = () => {
		//当return true时，会阻止默认的返回事件
		alert("Back On Press");
		return true;
	};

	BaseComponentDidMount = () => {
		this.props.navigation.setParams({ navBtnClick: this.navBtnClicked ,navLeftClick:this.navLeftClicked});

		let eventEmitter = new NativeEventEmitter(nativeToRNEventModule);
        this.listener = eventEmitter.addListener("CustomEventName", (result) => {
            alert("监听到通知事件" + result);
        })
	};

	navBtnClicked = () => {
		this.toast.show("这是一个toast");

		this.props.dispatch(showHud(true,'test'));
		this.timer = setTimeout(() => {
			this.props.dispatch(showHud(false));
			this.rightClick();
		}, 2000);
		// this.props.navigation.push('NextView');
	};

	rightClick = () => {
		nativeModule.rightNavItem("右侧按钮已点击", (Message)=>{
			alert(Message);	
		})
	}

	navLeftClicked = () => {
		this.toast.show("返回已点击");	
		this.timer = setTimeout(()=>{
			nativeModule.popToRootViewController();
		},100);
	}

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
