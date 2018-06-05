import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import ajaxCallsInProgress from "./ajaxStatusReducer";
import authReducer from "./authReducer";
import chatReducer from "./chatReducer";
import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import memberReducer from "./memberReducer";

const rootReducer = combineReducers({
    accountReducer,
    ajaxCallsInProgress,
    authReducer,
    chatReducer,
    projectReducer,
    taskReducer,
    memberReducer
});

export default rootReducer;
