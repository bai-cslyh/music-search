import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['authToken'] = localStorage.token
// 响应拦截器
axios.interceptors.response.use((response) => {
  // 拦截未登录状态
  if (response.status === 200) {
    return response.data;
  }
}, (error) => {
  console.log('请求超时', error)
})

const QQMusic = {
    getHomePageResource: 'api/cgi-bin/musicu.fcg'
}

function apiPost (url, data) {
  axios.defaults.headers.post['token'] = localStorage.token
  console.log('发起 post 请求 -> ', url, data)
  return axios.post(url, qs.stringify(data))
}

function apiGet (url, query) {
  axios.defaults.headers.post['token'] = localStorage.token
  var str = Object.keys(query).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
  }).join('&')
  console.log('发起 get 请求 -> ', url + '?' + str)
  return axios.get(url + '?' + str)
}

export default {
  getHomePageResource: (data) => apiGet(QQMusic.getHomePageResource, data),
}