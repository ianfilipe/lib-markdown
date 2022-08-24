function generateURLArr(linksArr) {
  return linksArr.map((link) => Object.values(link).join());
}

function validateURL(linksArr) {
  return generateURLArr(linksArr);
}

export default validateURL;
