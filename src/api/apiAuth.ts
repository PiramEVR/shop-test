import {instance} from './apiConfig/apiConfig'

export const auth = {
    login() {
        return instance.get('admin/check')
    },
}

export type UsersType = {

    "name": string,
    "email": string,
    "phone": string,
    "password": string
}