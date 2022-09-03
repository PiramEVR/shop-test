import {AppThunk} from '../store';
import {authApi, UsersType} from "../../api/apiAuth";

enum EnumAuthReducerActionType {
    isMe = 'AUTH/IS-ME',
}

const initialState = {
    users: [] as UsersType[]
};

export const authReducer = (
    state: initialStateType = initialState,
    action: AuthRedActionType
): initialStateType => {
    switch (action.type) {
        case EnumAuthReducerActionType.isMe:
            return {...state, users: [...action.payload]}
        default:
            return {...state};
    }
};

const isMeAC = (users: UsersType[]) => {
    return {
        type: EnumAuthReducerActionType.isMe,
        payload: users
    } as const
}

export const logInTC = (): AppThunk =>
    async dispatch => {
        try {
            const res = await authApi.login();
            dispatch(isMeAC(res.data));
        } catch (e: any) {
            console.log(e)
        }
    }


type initialStateType = typeof initialState;
export type AuthRedActionType =
    | ReturnType<typeof isMeAC>