import {instance} from "./apiConfig/apiConfig";
import {AxiosResponse} from "axios";


export const productsApi = {
    products() {
        return instance.get<any, AxiosResponse<ProductsType>>('products')
    },
    // addProducts() {
    //     return instance.post('products/add')
    // },
}

export type ProductsType = {
    "index": string,
    "name": string,
    "type": string,
    "unit": string,
    "price": number,
    "country": string,
    "maker": string
}