const { constants } = require("buffer");

/**
 * Defines the chat_files controller service.
 *
 */
const fs = require("fs").promises;

async function getFileList(FILEPATH) {
  const files = await fs.readdir(FILEPATH);
  const data = {
    files: files,
    results: "SUCCESS",
  };
  return data;
}

async function checkForFile(path) {
  try {
    await fs.access(path, constants.R_OK | constants.W_OK);
    return true;
  } catch (err) {
    return false;
  }
}

async function readFile(path) {
  try {
    const data = await fs.readFile(path);
    //console.log(`data = ${typeof data.toString()}`);
    return data.toString();
  } catch (err) {
    console.log(`Read Error: ${err}`);
  }
}

module.exports = { getFileList, checkForFile, readFile };
