'use strict';

const version = 3;
var isOnline = true;
var isLoggedIn = false;
var cacheName = `ramblings-${version}`;

var urlsToCache = {
	loggedOut: [
		"/",
		"/about",
		"/contact",
		"/404",
		"/offline",
		"/css/styles.css",
		"/js/blog.js",
		"/js/home.js",
		"/js/login.js",
		"/js/add-post.js",
		"/images/logo.gif",
		"/images/offline.png"
	]
}

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('message', onMessage);

main().catch(console.error);

// ***************************

async function main() {
	await sendMessage({ requestStatusUpdate: true });
}

async function onInstall() {
	console.log(`Service Worker (${version}) installed`);
	self.skipWaiting();
}

async function sendMessage(msg) {
	var allClients = await clients.matchAll({ includeUncontrolled: true });
	return Promise.all(
		allClients.map(function clientMsg(client) {
			var chan = new MessageChannel();
			chan.port1.onmessage = onMessage;
			return client.postMessage(msg, [chan.port2]);
		})
	);
}

function onMessage({ data }) {
	if (data.statusUpdate) {
		({ isOnline, isLoggedIn } = data.statusUpdate);
		console.log(
			`Service Worker (v${version}) status update, isOnline: ${isOnline}, isLoggedIn: ${isLoggedIn}`
		);
	}
}

function onActivate(evt) {
	evt.waitUntil(handleActivation());
}

async function handleActivation() {
	await clients.claim();
	console.log(`Service Worker (${version}) activated.`);
}
