(function Blog() {
	'use strict';

	var offlineIcon;
	// are we online
	var isOnline = 'onLine' in navigator ? navigator.onLine : true;
	var isLoggedIn = /isLoggedIn=1/.test(document.cookie.toString() || '');
	// task 2.4
	var usingSW = ("serviceWorker" in navigator);
	var swRegistration;

	// task 2.1 --
	// first make variable instance to store service worker
	var svcworker;

	document.addEventListener('DOMContentLoaded', ready, false);
	// task 2.2
	initServiceWorker().catch(console.error);

	// **********************************

	function ready() {
		offlineIcon = document.getElementById('connectivity-status');

		if (!isOnline) {
			offlineIcon.classList.remove('hidden');
		}
// task 1 --
		window.addEventListener('online', function online() {
			offlineIcon.classList.add('hidden');
			isOnline = true;
		});

		window.addEventListener('offline', function offline() {
			offlineIcon.classList.remove('hidden');
			isOnline = false;
		});
	//  -- task 1
	}
	// task 2.3
	async function initServiceWorker() {
		// 2.5
		swRegistration = await navigator.serviceWorker.register("/sw.js", {
			updateViaCache: "none"
		})
// 3.1 -- install is for brand new service worker, if one exists and you have a second one installed it enters the waiting cycle until the life cycle of the previous service worker is complete. Bouncing between waiting and active
		 svcworker = swRegistration.installing || swRegistration.waiting || swRegistration.active

		 navigator.serviceWorker.addEventListener("controllerchange", function onController() {
			svcWorker = navigator.serviceWorker.controller;
		 })
	}



})();
