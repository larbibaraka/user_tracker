import * as fs from 'fs-extra';
import * as chalk from 'chalk';

let fileName: string = '';
let folderpath: string = '';

export const initFileTracker = (filename: string, folderpath: string) => {
  _setFileName(filename);
  _setFolderpath(folderpath);
};

export const track = async (user: string, action: string, message: string) => {
  // step 01 : create a file for tracking
  const file = `${_getFolderpath()}/${_getFilename()}`;
  const object = {
    user: user,
    action: action,
    message: message,
    timestamp: new Date().getTime(),
  };

  //create the file if does not exist
  try {
    await fs.ensureFile(`${process.cwd()}/${file}`);
  } catch (error) {
    console.error(chalk.red(error));
  }
  fs.appendFile(`${process.cwd()}/${file}`, JSON.stringify(object) + '\r\n');
  console.log({
    action: action,
    message: message,
    timestamp: new Date().getTime(),
  });
};

function _getFilename() {
  return fileName;
}

function _setFileName(name: string) {
  fileName = `${name}.log`;
}

function _getFolderpath() {
  return folderpath;
}

function _setFolderpath(path: string) {
  folderpath = `${path}`;
}
