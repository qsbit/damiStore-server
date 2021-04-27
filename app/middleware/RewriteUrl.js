/*
 * @Description: 重写静态资源URL
 * @Author: Jungle
 * @Date: 2020-04-07 23:24:37
 * @LastEditors: Jungle
 * @LastEditTime: 2020-04-07 23:26:37
 */
module.exports = async (ctx, next) => {
  if (ctx.url.startsWith('/public')) {
    ctx.url = ctx.url.replace('/public', '');
  }
  await next();
}