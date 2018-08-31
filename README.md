AngularJS1 "Controller As" Demo
===============================

通过`controller as someVar`语法，我们可以给controller一个别名。

在多个controller嵌套的情况下，使用这种语法会让代码更清楚。
否者你可能需要写`$parent.someVar`甚至`$parent.$parent.$parent.someVar`这样的代码。

一旦我们使用`controller as`，那么controller本身就代替了`$scope`，你的变量和函数都应该挂在`this`上，而不是`$scope`上了。

`controller as`也是当前AngularJS1中推荐的用法。

```
npm install
open index.html
```

![demo](./images/demo.jpg)

Resources
---------

- 强烈推荐：<https://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html>
- AngularJS1 style guide, highly recommended: <https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#controllers>
- <https://beginor.github.io/2016/04/05/angularjs-controller-as.html>