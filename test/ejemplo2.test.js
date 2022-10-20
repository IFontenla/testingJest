import { firstLast } from '../src/ejemplo2'

describe('Test ejemplo 2', () => {
  it('extraer de un array de 3 elementos', () => {
    const frase = firstLast(['angel', 'pepe', 'bea'])
    expect(frase).toBe('ANGELBEA')
  })
  it('extraer de un array de 2 elementos', () => {
    const frase = firstLast(['angel', 'bea'])
    expect(frase).toBe('ANGELBEA')
  })
  it('extraer de un array de 1 elementos', () => {
    expect(() => firstLast(['angel'])).toThrow()
  })
})
