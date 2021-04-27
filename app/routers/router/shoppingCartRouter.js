/*
 * @Description: 购物车模块路由
 * @Author: Jungle
 * @Date: 2020-02-19 16:11:18
 * @LastEditors: Jungle
 * @LastEditTime: 2020-04-07 22:53:07
 */
const Router = require('koa-router');
const shoppingCartController = require('../../controllers/shoppingCartController')

let shoppingCartRouter = new Router();

shoppingCartRouter
  .post('/user/shoppingCart/getShoppingCart', shoppingCartController.GetShoppingCart)
  .post('/user/shoppingCart/addShoppingCart', shoppingCartController.AddShoppingCart)
  .post('/user/shoppingCart/deleteShoppingCart', shoppingCartController.DeleteShoppingCart)
  .post('/user/shoppingCart/updateShoppingCart', shoppingCartController.UpdateShoppingCart)

module.exports = shoppingCartRouter;