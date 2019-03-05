import * as TYPES from "../../ActionType";

/**
 * 这里可以初始化一个默认的实体类
 */
const rootNavInitialState = {
	showHud: false,
	hudMessage: "Loading...",
	showToast: false,
	toastMessage: ""
};

/*
  Object.assign()接口可以接收多个参数，第一个参数是目标对象，后面的都是源对象，assign方法将多个原对象的属性和方法都合并到了目标对象上面，如果在这个过程中出现同名的属性（方法），后合并的属性（方法）会覆盖之前的同名属性（方法）。
*/

export default function PageManagerReducer(
	state = rootNavInitialState,
	action
) {
	switch (action.type) {
		case TYPES.ACTION_PAGEMANAGER_SHOWHUD:
			return Object.assign({}, state, {
				showHud: action.showHud,
				hudMessage: action.hudMessage
			});

		default:
			return state;
	}
}
