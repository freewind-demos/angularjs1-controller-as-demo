const app = angular.module('app', [])
app.controller('ParentController', function () {
    this.hello = 'Hello ParentController'
})
app.controller('ChildController', function () {
    this.hello = 'Hello ChildController'
})