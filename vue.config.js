module.exports={
  lintOnSave:false,
  devServer:{
    open:true,
    proxy:{
      '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true,
          pathRewrite:{
              "^/api":""
          }
      }
  }
  }
}