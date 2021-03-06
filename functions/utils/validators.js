function isEmpty(phrase) {
  if (phrase.trim() === "") return true;
  return false;
}

function isEmail(email) {
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  return false;
}

exports.validateSignupData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be valid email";
  }
  if (isEmpty(data.password)) {
    errors.password = "Must not be empty";
  }
  if (data.password !== data.confirmPassword) {
    errors.password = "Must be match";
  }
  if (isEmpty(data.handle)) {
    errors.handle = "Must not be empty";
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be valid email";
  }

  if (isEmpty(data.password)) {
    errors.password = "Must not be empty";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0 ? true : false,
  };
};
