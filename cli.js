import chalk from 'chalk'
import validateURL from './http-validation.js'
import getFile from './index.js'

const path = process.argv

async function processText(filePath) {
  const result = await getFile(filePath[2])
  if (path[3] === 'validate') {
    console.log(chalk.yellow('links validados'), await validateURL(result))
  } else {
    console.log(chalk.yellow('lista de links'), result)
  }
}

processText(path)
