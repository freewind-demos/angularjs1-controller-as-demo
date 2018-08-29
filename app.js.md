We don't need to inject `$scope`, instead, the controller itself is "scope".

See normal controller with `$scope`:

```
app.controller('HelloController', function ($scope) {
    $scope.userName = "AngularJs1";
    $scope.showHelloWords = false;
    $scope.sayHello = function () {
        $scope.showHelloWords = true
    }
});
```