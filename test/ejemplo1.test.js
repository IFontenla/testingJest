import {add, sub} from '../src/ejemplo1'

describe('Test del ejemplo 1 suma', () => {
    it('sumar dos enteros', () =>{
        const result = add(2,3)
        expect(result).toBe(5)
    } )
})

describe('Test del ejemplo 1 resta', () => {
    it('restar dos enteros', () =>{
        const result = sub(8,5)
        expect(result).toBe(3)
    } )
    
   /* it('restar dos ceros', () =>{
        const result = sub(0,0)
        expect(result).toBe(0)
    } )*/

    /*it('restar dos frases', () =>{
        const result = sub("hola","adios")
        expect(result).toThrow('valores incorrectos')
    } )*/

    it('restar dos null', () =>{
        expect( () => sub() ).toThrow()
    } )
})