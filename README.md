# Angular UI Router Page Class

Easily add route-based classes to your Angular web app.

### Installation
`bower install router-page-class`

Add to your Angular app modules.
```
angular.module('myModule', [
  'routerPageClass'
])
```

Set your page class in your route state data.
```
.state( 'mystate', {
  url : '/myurl',
  data : {
    pageClass : 'myclass'
  }
})
```

Add the directive.
```
<body router-page-class>
...
</body>
```
