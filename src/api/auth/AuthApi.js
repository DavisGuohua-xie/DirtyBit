import AuthController from './AuthController'

export default class AuthApi{

constructor(){
  this.authController = new AuthController()
}

createNewAccount(username, password, success, failure){
  //Can do pre processing here....
  this.authController.createNewAccount(username, password, success, failure);
}

login(username, password, success, failure){
  //Can do preprocessing here...
  this.authController.login(username, password, success, failure);
}


}
