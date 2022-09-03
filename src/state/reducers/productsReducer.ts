import {AppThunk} from '../store';
import {productsApi, ProductsType} from "../../api/apiProduct";

enum EnumProductsReducerActionType {
    products = 'SET-PRODUCTS',
}

const initialState = {
    products: [] as ProductsType[]
};

export const productsReducer = (
    state: initialStateType = initialState,
    action: ProductRedActionType
): initialStateType => {
    switch (action.type) {
        case EnumProductsReducerActionType.products:
            return {...state, products: [...action.payload]}
        default:
            return {...state};
    }
};

const setProducts = (products: ProductsType[]) => {
    return {
        type: EnumProductsReducerActionType.products,
        payload: products
    } as const
}

export const getProducts = (): AppThunk =>
    async dispatch => {
        try {
            const res = await productsApi.products();
            console.log(res)
            // dispatch(setProducts(res.data));
        } catch (e: any) {
            console.log(e)
        }
    }


type initialStateType = typeof initialState;
export type ProductRedActionType =
    | ReturnType<typeof setProducts>