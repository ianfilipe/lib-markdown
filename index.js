import chalk from "chalk";
import fs from "fs";

function handleError(error) {
  throw new Error(chalk.red(error));
}

function getFile(filePath) {
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, (err, text) => {
    if (err) {
      handleError(err);
    }
    console.log(chalk.green(text));
  });
}

getFile("./files/text1.md");
