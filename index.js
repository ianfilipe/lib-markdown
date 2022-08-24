import chalk from "chalk";
import fs from "fs";

function handleError(error) {
  throw new Error(chalk.red(error));
}

async function getFile(filePath) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(chalk.green(text));
  } catch (err) {
    handleError(err);
  }
}

getFile("./files/text1.md");
