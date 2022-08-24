import chalk from "chalk";
import fs from "fs";

function getFile(filePath) {
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, (err, text) => {
    console.log(chalk.green(text));
  });
}

getFile("./files/text1.md");
