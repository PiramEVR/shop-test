import {instance} from './apiConfig/apiConfig'

export const authApi = {
    login() {
        return instance.get('')
    },
    registration() {
        return instance.get('auth/registration')
    },
    removeUser() {
        return instance.delete('auth/registration')
    },
    auth(data: loginType) {
        return instance.post('process_login', data)
    }
}

export type UsersType = {
    "name": string,
    "email": string,
    "phone": string,
    "password": string
}

export type loginType = {
    name: string,
    password: string
}
