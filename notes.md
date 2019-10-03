What the Service worker is doing:
is actually sit between your web app and the rest of the web.Every request wether javascript or ajax to any location will funnel through the service worker. If Service worker not listening for outbound requests they just pass through. But if it is listening you need to make sure out bound request is routed correctly.

-fetch handler - all  requests funnel through it. If requesting resources not on your domain, you are still bound by CORS.
1:57 min - first video

- we are making our own 'proxy' that sits on the bowser....why?

  - what are things I would want to do if I could program all my network requests
  - use api called cache api: a programmatic way of storing resource request, instead of relying on the browser caching mechanism.
  -Cache is major use case for Service Workers: "I wanna do something different with the caching behavior that I don't normally do with my files
  - offline computing - do work offline and then update when online using: caching and background sync enabled... like with google docs saves and updated resources when offline to online
  - 