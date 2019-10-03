What the Service worker is doing:
is actually sit between your web app and the rest of the web.Every request wether javascript or ajax to any location will funnel through the service worker. If Service worker not listening for outbound requests they just pass through. But if it is listening you need to make sure out bound request is routed correctly.

-fetch handler - all requests funnel through it. If requesting resources not on your domain, you are still bound by CORS.
1:57 min - first video

- we are making our own 'proxy' that sits on the bowser....why?

  - what are things I would want to do if I could program all my network requests
  - use api called cache api: a programmatic way of storing resource request, instead of relying on the browser caching mechanism.
    -Cache is major use case for Service Workers: "I wanna do something different with the caching behavior that I don't normally do with my files
  - offline computing - do work offline and then update when online using: caching and background sync enabled... like with google docs saves and updated resources when offline to online
  - background sync is a spec and only supported in one browser - but there are lesser form of background sync like storing things persistently
    -transparent url re writing: have a web page req img from one location : from one cdn : service worker decides that cdn is down because req failed: re write from another cdn location : dont have to update html
  - pragmatically created content that responded to from client: your offline someone makes ajax request to get data, you create artificial response from service worker and webpage wont know difference and think it got response from server. Use Cache response, user offline but still clicking around.
    -webpage req file, service workers say "im gonna request more than just the img, or force multiple resources to the page""you ask for one thing and I think you want 4 things": programmatic control

-push notifications: two technologies used at the same time. Push / Notifications are same prompt but different things... many users block notifications which limits the amazing tech behind what Push is capable of

-service worker can use api to send notification to the browser if you have permission
-can push notifications from service worker, you can use the notification to push them to something you want them to see
-but is being abused

-push is how service worker can be notified of something from the server. How the server can tell the service worker that something needs to occur. Like "show a visible notification"

-can send push to service worker to update cache and the next time they come to site it auto uploads to sync

- Push Tech can: new version of application - pre push and install and app is already install by the time client uses it

- service workers live independent of an open tab



#1 task-
  - is to make the site reconize if the user is offline or not.
    - dev tools network: toggle online and offline
#2 task
  - set up for using a service worker