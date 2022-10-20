export function add(num1, num2) {
  return num1 + num2
}
export function sub(num1, num2) {
  if (!num1 || !num2) throw new Error('valores incorrectos')
  return num1 - num2
}

//linters y code formatters
function myFunction(value) {
  var num = 5
  let name = 'Izan'
}
