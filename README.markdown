Originally made by Rob here: http://ednortonengineeringsociety.blogspot.com/2010/10/detecting-offline-status-in-html-5.html

Read up there if you want to know a lot.

This will also subscribe to online/offline events in browser that support them:
```javascript
$(document.body).on('offline', function nowOffline() {});
$(document.body).on('online', function nowOnline() {});
```