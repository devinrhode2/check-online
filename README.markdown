# Am I online?

```javascript
checkOnline(function(online) {
  if (online) {
    //yay!
  } else {
    //offline
  }
});
```

Originally made by Rob here: http://ednortonengineeringsociety.blogspot.com/2010/10/detecting-offline-status-in-html-5.html

Read up there if you want to know a lot.

This will also subscribe to online/offline events in browser that support them:
```javascript
var $window = $(window);
$window.on('offline', function nowOffline() {});
$window.on('online', function nowOnline() {});
```
