import getFile from '../index.js'

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
  },
]

describe('getFile::', () => {
  it('deve ser uma função', () => {
    expect(typeof getFile).toBe('function')
  })
  it('deve retornar array com resultados', async () => {
    const result = await getFile(
      '/home/ian/www/lib-markdown/test/files/text1.md'
    )
    expect(result).toEqual(arrayResult)
  })
  it('deve retornar mensagem "não há links"', async () => {
    const result = await getFile(
      '/home/ian/www/lib-markdown/test/files/text2.md'
    )
    expect(result).toBe('Não há links')
  })
})
