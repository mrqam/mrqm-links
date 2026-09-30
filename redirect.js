// Public routing only. Link destinations remain private on the Mirqam server.
const match = /^\/([A-Za-z0-9_-]{1,128})\/?$/.exec(location.pathname)
location.replace(match ? 'https://bot.mirqam.sa/' + encodeURIComponent(match[1]) : 'https://mirqam.sa/')
