/**
 * Defines the test router.
 *
 * @type {Router}
 * The purpose of this component is to provide a basic
 * test route for connectivity verification.
 */

const testRouter = require("express").Router();
const controller = require("./test.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

testRouter.route("/").get(controller.list).all(methodNotAllowed);

module.exports = testRouter;
