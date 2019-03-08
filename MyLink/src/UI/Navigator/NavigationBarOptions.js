import React from "react";
import {
	View,
	Image,
	Platform,
	StatusBar,
	TouchableOpacity
} from "react-native";
import ImageManager from "../../Configs/UIConfigs/ImageManager";
import ColorManager from "../../Configs/UIConfigs/ColorManager";
import FontManager from "../../Configs/UIConfigs/FontManager";
import { Header } from "react-navigation";

const imageHeaderImageStyle = {
	position: "absolute",
	zIndex: -1,
	width: "100%",
	height: "100%",
	resizeMode: "cover"
};
const headerBackArrowStyle = {
	width: 30,
	height: 30
};

export const navigationOptionsHidden = () => ({
	header: null,
	gesturesEnabled: true
});

export const navigationOptionsSystem = title => ({
	gesturesEnabled: true,
	title: title
});

const navHeader = backgroundImageSource => {
	return props => {
		return (
			<View>
				<Image style={imageHeaderImageStyle} source={backgroundImageSource} />
				<Header {...props} style={{ backgroundColor: "transparent" }} />
			</View>
		);
	};
};
const HeaderItem = (child, onPressFunc) => {
	return navigation => {
		const params = navigation.state.params || {};
		return (
			<TouchableOpacity onPress={params[onPressFunc]}>{child}</TouchableOpacity>
		);
	};
};

const navigationOptions = (optExtraStyle, navExtra = {}) => {
	const navExtraOptins = {
		rightItem: null,
		leftItem: null,
		headerBackgroundImage: ImageManager.nav_background,
		...navExtra
	};
	const extraStyle = {
		headerTintColor: ColorManager.nav_tint_primary,
		...optExtraStyle
	};
	return ({ navigation }) => {
		let options = {
			headerStyle: {
				backgroundColor: "transparent",
				borderBottomWidth: 0,
				elevation: 0,
				marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
			},
			drawerLockMode: "locked-closed",
			headerTitleAllowFontScaling: false,
			//后退按钮和标题都使用此属性作为它们的颜色
			headerTitleStyle: {
				//fontFamily: FontManager.Medium,
				fontWeight: "normal",
				alignSelf: "center",
				color: ColorManager.nav_tint_primary.color
			},

			headerLeftContainerStyle: {
				marginLeft: 5
			},
			headerRightContainerStyle: {
				marginRight: 10
			},
			header: navHeader(navExtraOptins.headerBackgroundImage),
			headerRight: navExtraOptins.rightItem ? (
				navExtraOptins.rightItem(navigation)
			) : (
				<View />
			),
			//是否允许手势返回
			gesturesEnabled: true,
			headerBackImage: (
				<Image
					source={ImageManager.back_arrow_default}
					style={headerBackArrowStyle}
				/>
			),
			...extraStyle
		};
		if (navExtraOptins.leftItem) {
			options.headerLeft = navExtraOptins.leftItem(navigation);
		}
		return options;
	};
};

export default {
	navigationOptions,
	HeaderItem
};
