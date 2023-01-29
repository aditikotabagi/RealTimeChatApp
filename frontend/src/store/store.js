import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import alertReducer from "./reducers/alertReducers";
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
