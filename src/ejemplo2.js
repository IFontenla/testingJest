// funcion a la que se le pase un array.
//esta devolverá  el primer y el ultimo elemento del array(concatenado)
// y en mayusculas
// si tiene menos de dos elementos, lanzamos excepción.
//[{]'angel','pepe','bea'] => "ANGELBEA"

export function firstLast(values) {
    if(values.length < 2) throw new Error('minimo 2 elementos')
    return values[0].toUpperCase() + values[values.length-1].toUpperCase()
    
}
