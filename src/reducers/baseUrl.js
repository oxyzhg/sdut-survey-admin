const basicUrl = {
  server: 'https://api.youthol.cn/api',
  localhost: 'http://localhost:5000/api',
  test: 'http://192.168.1.104/youthAPI/public/api'
};

export default (state = basicUrl.server) => state;
