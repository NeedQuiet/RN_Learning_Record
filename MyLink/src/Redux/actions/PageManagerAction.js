import * as TYPES from "../ActionType";
import { translateString } from "src/Localizations/I18n";
//actions

export function showHud(ret, message = translateString("main", "Loading...")) {
	return {
		type: TYPES.ACTION_PAGEMANAGER_SHOWHUD,
		showHud: ret,
		hudMessage: message
	};
}
