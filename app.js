const app = angular.module('app', []);
app.controller('HelloController', function () {
    this.userName = "AngularJs1";
    this.showHelloWords = false;
    this.sayHello = function () {
        this.showHelloWords = true
    }
});