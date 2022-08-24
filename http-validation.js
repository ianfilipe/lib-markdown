import fetch from 'node-fetch'

function handleErrors(err) {
  throw new Error(err.message)
}

async function checkStatus(urlArr) {
  try {
    const statusArr = await Promise.all(
      urlArr.map(async url => {
        const response = await fetch(url)
        return response.status
      })
    )
    return statusArr
  } catch (err) {
    handleErrors(err)
  }
}

function generateURLArr(linksArr) {
  return linksArr.map(link => Object.values(link).join())
}

async function validateURL(linksArr) {
  const links = generateURLArr(linksArr)
  const linksStatus = await checkStatus(links)
  const result = linksArr.map((link, index) => ({
    ...link,
    status: linksStatus[index],
  }))
  return result
}

export default validateURL
