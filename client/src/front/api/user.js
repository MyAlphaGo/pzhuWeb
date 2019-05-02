import base from './base';
import axios from '../../http/axios';

const User = {
    getUserInfo(params) {
        return new Promise((resolve, reject) => {
            axios.post(`${base.getUserInfo}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    getUserResource(params) {
        return new Promise((resolve, reject) => {
            axios.post(`${base.getUserResource}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    searchUserResource(params) {
        return new Promise((resolve, reject) => {
            axios.post(`${base.searchUserResource}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    delUserResource(params) {
        return new Promise((resolve, reject) => {
            axios.post(`${base.delUserResource}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    getUserAchievement(params) {
        return new Promise((resolve, reject) => {
            axios.post(`${base.getUserAchievement}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    delUserAchievement(params) {
        return new Promise((resolve, reject) => {
            axios.post(`${base.delUserAchievement}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    },
    searchUserAchievement(params) {
        return new Promise((resolve, reject) => {
            axios.post(`${base.searchUserAchievement}`, params).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err.data)
            })
        })
    }

}

export default User