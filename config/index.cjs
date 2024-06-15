/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa3f3f712ac8e315a',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e1a46122d7e502c986915c4bb1a363a0',

  PROVINCE: '广东',
  CITY: '深圳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝萍',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oGY7i6iQ2e4yQSycoJz6axsWdE9o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'TzPeAupOURO0cQE78zqSrnT1cn02ib46vI0g24UQwyg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-23',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '发哥', year: '1989', date: '09-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝萍', year: '1989', date: '03-23',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '06-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-04-30' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'cNGkZTqwgTPHFP2i17xoPAbrSjSLYM2cx2AQ8KyFQvY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oGY7i6iQ2e4yQSycoJz6axsWdE9o',
    }
  ],

}

module.exports = USER_CONFIG
