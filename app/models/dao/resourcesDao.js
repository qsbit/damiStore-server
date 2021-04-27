/*
 * @Description: 资源模块数据持久层
 * @Author: Jungle
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: Jungle
 * @LastEditTime: 2020-02-27 14:33:43
 */
const db = require('./db.js');

module.exports = {
  // 连接数据库获取轮播图数据
  Carousel: async () => {
    const sql = 'select * from carousel';
    return await db.query(sql, []);
  }
}