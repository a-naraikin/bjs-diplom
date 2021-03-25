"use strict"

const userForm = new UserForm();

userForm.loginFormCallback = data => {
  ApiConnector.login(data, response => {
    console.log(response);

    return response.success ? 
           location.reload() :
           userForm.setLoginErrorMessage(response.error);
  });
};