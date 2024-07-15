// 1.导入createStore方法
import { combineReducers } from "redux";
import { legacy_createStore as createStore } from 'redux'

import base from "./base.js";
import user from "./user.js";
// 2.创建一个reducer纯函数的方法，state初始化数据，actions修改数据的行为
const reducer = combineReducers({
  base,
  user
})

//3.创建一个store的对象
const store = createStore(reducer)

// 4.抛出store的对象值
export { store };