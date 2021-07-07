/**
 * Defines the CHAT files router.
 *
 * @type {Router}
 * The purpose of this component is to provide basic
 * file access services.
 */

const filesRouter = require("express").Router();
const controller = require("./chat_files.controller");
const methodNotAllowed = require("../../errors/methodNotAllowed");

/*
 * Here we setup the multer
 * for storage of uploaded files.
 */
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "C:\\temp\\test_uploads\\",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadMulter = multer({ storage: storage });

// Standard GET route for a list of available files
filesRouter.route("/").get(controller.list).all(methodNotAllowed);

// Standard GET route for downloading a file
filesRouter
  .route("/download/:filename")
  .get(controller.download)
  .all(methodNotAllowed);

// Standard GET route for downloading a file for viewing
filesRouter.route("/view/:filename").get(controller.view).all(methodNotAllowed);

// Standart POST route for uploading a file to the server storage
filesRouter
  .route("/upload")
  .post(uploadMulter.array("file"), controller.upload)
  .all(methodNotAllowed);

module.exports = filesRouter;
