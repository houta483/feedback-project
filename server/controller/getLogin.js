// put middlware here

const login = {};

login.getLogin = (req, res, next) => {
  res.locals = "Tanner"
  next();
}

module.exports = login;



/*
get something to happen when I click
perform a get request to /api/login on click
get redirection to happen when I click
not to make a new page, but add a new compoenent to the eisting page
create components
get login component to show up on click
submission of username and password will connect to a fetch
get wheat I want to appreat when I cliack
*/