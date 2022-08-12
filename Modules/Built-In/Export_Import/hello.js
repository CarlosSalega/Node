function hello (name) {
  return `Hello ${name}`;
}

function goodbye () {
  return 'Goodbye';
}

module.exports = {
  hello,
  goodbye
}

/*
ES6 +

export default {
  hello,
  goodbye
}

*/