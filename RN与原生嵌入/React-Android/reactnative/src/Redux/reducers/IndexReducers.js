import { combineReducers } from "redux";
import PageManagerReducer from "./items/PageManagerReducer";

/*Reduce 约束
  不得改写参数
  不能调用系统 I/O 的API
  不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果
*/

//这里面必须要有初始数据 - 否则报错
const rootReducer = combineReducers({
	PageManagerReducer
});

export default rootReducer;
