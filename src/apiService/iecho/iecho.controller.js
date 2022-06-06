function invertir(text){
  return text.split("").reverse().join("");
}

function palindromo(text){
  return text.split("").reverse().join("") === text;
}

async function test(req, res) {
  const onlyTextRegex = /^[a-zA-Z]+$/;

  const {
    query: {
      text,
    },
  } = req;
  
  if (!onlyTextRegex.test(text)) return res.status(400).send({
    error: 'no text',
  });

  res.status(200).send({
    text: invertir(text),
    palindrome: palindromo(text),
  });
}

module.exports = {
  test
};