/*
  setTimeout()
  setImmediate()
  setInterval()
*/

function showTheme(theme) {
  console.log(`Estoy aprendiendo ${theme}`);
}

//showTheme('Node.js');
setTimeout(showTheme, 5000, 'Node.js');
/* 
Estamos pasando una funcion como argumento de otra funcion, 
es lo que se llama funcion de orden superior
*/