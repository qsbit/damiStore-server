/*
 * @Description: 我的收藏模块路由
 * @Author: Jungle
 * @Date: 2020-03-04 22:28:01
 * @LastEditors: Jungle
 * @LastEditTime: 2020-04-07 22:52:36
 */
const Router = require('koa-router');
const collectController = require('../../controllers/collectController')

let collectRouter = new Router();

collectRouter
  .post('/user/collect/addCollect', collectController.AddCollect)
  .post('/user/collect/getCollect', collectController.GetCollect)
  .post('/user/collect/deleteCollect', collectController.DeleteCollect)

module.exports = collectRouter;