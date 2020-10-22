/**
 * 封装所有的网络请求，避免在各个组件中零散的发起API调用
 */

import axios from 'axios'

// 全局配置URL前导路径
axios.defaults.baseURL = 'http://localhost:3000'

// 请求获取所有英雄的数据
async function getHeroList() {
    const res = await axios.get("/heroes")
    return res
}

// 删除指定id的英雄
async function removeHeroById(id) {
    const res = await axios.delete(`/heroes/${id}`)
    return res
}

// 获取指定id的英雄数据
async function getHeroById(id) {
    const res = await axios.get("/heroes/" + id)
    return res
}

// 修改指定id的英雄数据
async function updateHero(id, hero) {
    const res = await axios.put(`/heroes/${id}`, hero)
    return res
}

// 新建一个英雄数据
async function createHero(hero) {
    const res = await axios.post("/heroes", hero);
    return res
}

export default {
    getHeroList,
    removeHeroById,
    getHeroById,
    updateHero,
    createHero
}