/**
 * Defines the chat_files route controller.
 *
 */

const { getFileList, checkForFile, readFile } = require("./chat_files.service");
const asyncErrorBoundary = require("../../errors/asyncErrorBoundary");
var multer = require("multer");
var uploadMulter = multer({ dest: "C:\\temp\\test_uploads\\" });
const { FILEPATH = "./chat_files" } = process.env;

async function list(_, res) {
  console.log(`Processing GET request`);
  const data = await getFileList(FILEPATH);
  res.json({ data });
}

async function upload(req, res) {
  console.log(`Processing upload`);
  //for (let x in req.files) {
  //  console.log(`x = ${x}, val = ${req.file[x]}`);
  //}
  if (!req.files) {
    //console.log(`file = ${req.files}`);
    res.json({ results: `Error: file was not posted` });
  } else {
    res.json({ results: `Success: ${req.files.length} file(s) were posted` });
  }
}

async function download(req, res) {
  const { filename } = req.params;
  console.log(`FILEPATH = ${FILEPATH}`);
  const path = `${FILEPATH}${filename}`;
  console.log(`Processing download request for ${path}`);

  if (await checkForFile(path)) {
    res.download(path, filename, (err) => {
      if (err) {
        res.json({ results: `2 - File was not found` });
      }
    });
  } else {
    res.json({ results: `1 - File was not found` });
  }
}

async function fileExists(req, res, next) {
  const { filename } = req.params;
  const path = `${FILEPATH}${filename}`;
  //console.log(`fileExists for ${filename}`);
  const fileData = await readFile(path, "utf8");
  if (fileData) {
    res.locals.fileData = { results: "Success", data: fileData };
  } else {
    res.locals.fileData = { results: "Error", data: `File was not found` };
  }
  next();
}

async function view(req, res) {
  console.log(`Running View`);
  res.json(res.locals.fileData);
}

module.exports = {
  list,
  download,
  upload,
  view: [asyncErrorBoundary(fileExists), view],
};
