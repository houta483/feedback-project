// put middlware here

const login = {};

login.getLogin = (req, res, next) => {
  res.locals = "Tanner"
  next();
}

module.exports = login;



/*
get something to happen when I click
get redirection to happen when I click
get wheat I want to appreat when I cliack
*/