function invertir(text){
  return text.split("").reverse().join("");
}

function palindromo(text){
  const palindromo = text.split("").reverse().join("").replace(/\s/g, "") === text.replace(/\s/g, "");
  return palindromo
}

async function test(req, res) {
  const onlyTextRegex = /^[a-zA-Z\s]+$/;

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