const config = {
  wechat: {
    appID: "wx27788ef1e4e53cab", //公众号里面取

    AppSecret: "eb00852b8025c75ccdf22b2e98a3e333", //公众号里面取

    base_templateId: "	62Fm7xo1JHAA6KMASxxplsU-gdEKvkwtMQdCChATtEM", // 元气提醒模板的id

    birthday_templateId: "	uFoJDauJy-uaOi5-4tmFNgO10KjD6kEpXanvRd8TAQ0", // 生日模板id

    //pay_templateId: "", // 发薪模板id

    love_templateId: "	l5poj1lAlB8jjh9gVqPXGyYIE3EwKK0JNM66y-UMSWc", // 相恋模板id

    token: "jimmyxuexue", //自定义的token
  },

  polymerization: {
    weather: "http://apis.juhe.cn/simpleWeather/query", // 第三方天气接口 key
    city: "临沂", // 查询福州的天气
  },
};

module.exports = config;
