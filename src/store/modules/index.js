import http from '@/http'
import {GETINDEXDATA} from '../mutation-types'
const state={
  indexData:{}//主页的数据
}
const mutations={
  [GETINDEXDATA](state,data){
    state.indexData = data
  }
}
const actions={
  async getIndexData({commit}){
    const data = await http.module.getIndexData()
    commit(GETINDEXDATA,data)
  }
}
export default {
  state,
  mutations,
  actions
}