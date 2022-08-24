import chalk from 'chalk'
import fs from 'fs'

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
  const resultArr = []
  let temp
  while ((temp = regex.exec(text)) !== null) {
    resultArr.push({ [temp[1]]: temp[2] })
  }
  return resultArr.length === 0 ? 'Não há links' : resultArr
}

function handleError(error) {
  throw new Error(chalk.red(error))
}

async function getFile(filePath) {
  const encoding = 'utf-8'
  try {
    const text = await fs.promises.readFile(filePath, encoding)
    return extractLinks(text)
  } catch (err) {
    handleError(err)
  }
}

// getFile("./files/text1.md");

export default getFile
