'use strict';

const version = 1;

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);

main().catch(console.error);

// ***************************

async function main() {
	console.log(`Service Worker (${version}) is starting`);
}

async function onInstall() {
	console.log(`Service Worker (${version}) installed`);
	self.skipWaiting();
}

function onActivate() {
	evt.waitUntil(handleActivation());
}

async function handleActivation() {
	await clients.claim();
	console.log(`Service Worker (${version}) activated.`);
}
