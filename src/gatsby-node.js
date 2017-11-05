import fs from "fs";
import path from "path";
import Promise from "bluebird";

const DEFAULT_SOURCE = "./src/well-known/";
const DESTINATION = "./public/.well-known/";

exports.onPostBuild = (args, pluginOptions) => {
  const source = pluginOptions.source || DEFAULT_SOURCE;
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(DESTINATION)) {
      fs.mkdirSync(DESTINATION);
    }
    fs.readdir(source, (err, files) => {
      if (err) {
        reject(err);
      }
      files.forEach(file => {
        fs.copyFileSync(path.join(source, file), path.join(DESTINATION, file));
      });
      resolve();
    });
  });
};
