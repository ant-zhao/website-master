const isProduct = process.env.NODE_ENV == 'production'

export const hostUrl = isProduct?'https://api.blog.jjz6.cn':'http://10.10.20.202:6060'

// http://192.168.2.105:3030  // 家
// http://192.168.3.85:3030
