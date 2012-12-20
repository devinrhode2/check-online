/**
 * Example:
 * checkOnline(function(online) {
 *   if (online) {
 *     //online
 *   } else {
 *     //offline
 *   }
 * });
 * 
 * !IMPORTANT expects /onlineCheck.css to contain just 'success'
 * Your server also needs to support filename based cache busting, which html5 boilerplate's .htaccess file has for you
 * but you will need to add json to the list of file extensions list.
 */
var checkOnline = function checkOnlineF(resultCallback) {
  if (navigator.onLine) {
    // Just because the browser says we're online doesn't mean we're online. The browser lies.
    // Check to see if we are really online by making a call for a static JSON resource on
    // the originating Web site. If we can get to it, we're online. If not, assume we're
    // offline.
    $.ajax({
      cache: false,
      timeout: 2800, //you could decrese this, and automatically assume offline if the internet is just CRAWLING
      url: location.origin + '/onlineCheck.' + Math.random() * 99999999999999999 + '.css'
    })
    .done(function onlineCheckDone(resp) {
      if (resp.indexOf('success') > -1) {
        resultCallback(true);
      } else {
        resultCallback(false);
      }
    })
    .fail(function onlineCheckFail(xhr) {
      // We might not be technically "offline" if the error is not a timeout, but
      // otherwise we're getting some sort of error when we shouldn't, so we're
      // going to treat it as if we're offline.
      // Note: This might not be totally correct if the error is because the
      // manifest is ill-formed.
      resultCallback(false);
    });
  } else {
    resultCallback(false);
  }
};