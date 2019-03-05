import {
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	Easing,
	Animated
} from "react-native";
import Text from "src/UI/CustomView/CustomText";
import MyNavigationBarOptions from "src/UI/Navigator/NavigationBarOptions";
import GlobalUI, { createFinalStyles } from "src/Utility/GlobalUI";

export const ColorManager = require("../Configs/UIConfigs/ColorManager")
	.default;
export const FontManager = require("../Configs/UIConfigs/FontManager").default;
export const ImageManager = require("../Configs/UIConfigs/ImageManager")
	.default;
export const I18n = require("../Localizations/I18n").default;
export const NavigationBarOptions = MyNavigationBarOptions;

module.exports = {
	get ColorManager() {
		return require("../Configs/UIConfigs/ColorManager").default;
	},
	get FontManager() {
		return require("../Configs/UIConfigs/FontManager").default;
	},
	get ImageManager() {
		return require("../Configs/UIConfigs/ImageManager").default;
	},

	get I18n() {
		return require("../Localizations/I18n").default;
	},
	get CustomButton() {
		return require("../UI/CustomView/CustomButton").default;
	},
	get CustomActivityIndicatorView() {
		return require("../UI/CustomView/CustomActivityIndicatorView").default;
	},
	get View() {
		return View;
	},
	get Image() {
		return Image;
	},
	get Text() {
		return Text;
	},
	get StyleSheet() {
		return StyleSheet;
	},
	get TouchableOpacity() {
		return TouchableOpacity;
	},
	get NavigationBarOptions() {
		return NavigationBarOptions;
	},
	get Easing() {
		return Easing;
	},
	get Animated() {
		return Animated;
	},
	get Constant() {
		return GlobalUI;
	},
	get createFinalStyles() {
		return createFinalStyles;
	}
};
