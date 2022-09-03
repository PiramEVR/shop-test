import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AuthRedActionType, authReducer} from "./reducers/authReducer";
import {ProductRedActionType, productsReducer} from "./reducers/productsReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))


//Типизация санок

export type AppActionType = AuthRedActionType | ProductRedActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => {
    return useDispatch() as ThunkDispatch<AppRootStateType, unknown, AppActionType>
}

export type AppRootStateType = ReturnType<typeof rootReducer>

