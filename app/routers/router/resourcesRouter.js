/*
 * @Description: 资源模块路由
 * @Author: Jungle
 * @Date: 2020-02-07 16:51:56
 * @LastEditors: Jungle
 * @LastEditTime: 2020-02-25 22:36:30
 */
const Router = require('koa-router');
const resourcesController = require('../../controllers/resourcesController')

let resourcesRouter = new Router();

resourcesRouter
  .post('/resources/carousel', resourcesController.Carousel)

module.exports = resourcesRouter;