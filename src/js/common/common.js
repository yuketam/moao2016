
$(function() {
	var w = window;
	var doc = document;
	var nav = navigator;
	var $window = $(w);
	var $body = $('body');

	// set device class
	(function() {
		function setDeviceClass() {
			var ua = nav.userAgent;
			var windowWidth = $window.width();
			var windowHeight = $window.height();
			var ios = /ip(hone|od|ad)/i.test(ua);
			var android = /android/i.test(ua);
			//var touch = 'ontouchstart' in doc.documentElement;
			//var iphone = /iphone/i.test(ua);
			//var ipad = /ipad/i.test(ua);
			//var mobile = /android.+mobile|ip(hone|od|ad)/i.test(ua);
			//var webkit = /webkit/i.test(ua);

			// reset class
			$body.removeClass(function(index, className) {
		    return (className.match(/\bdevice_\S+/g) || []).join(' ');
			});

			if (windowWidth < 600) {
				$body.addClass('device_onecolumn');
			} else {
				$body.addClass('device_multicolumn');
			}

			if (ios) {
				$body.addClass('device_sp device_ios');
			} else if (android) {
				$body.addClass('device_sp device_android');
			} else {
				$body.addClass('device_pc');
			}

			if (windowWidth > windowHeight) {
				$body.addClass('device_landscape');
			} else {
				$body.addClass('device_portrait');
			}
		}

		setDeviceClass();
		$window
			.on('resize', setDeviceClass)
			.on('orientationchange', setDeviceClass);
	})();


	// GA
	(function() {
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-54310080-1', 'auto');
		ga('send', 'pageview');
	})();

	// navigation toggle module
	(function() {
		var $navigationBg = $('#navigation-background-js');
		var $navigationMenu = $('#navigation-menu-js');
		var $navigationIcon = $('#navigation-icon-js');

		function navigationToggle() {
			var windowHeight = doc.getElementsByTagName('body')[0].getBoundingClientRect().bottom;
			$navigationBg
				.height(windowHeight)
				.toggle();
			$navigationMenu.toggle();
			$navigationIcon.toggleClass('icon_open');
		}

		$navigationIcon.click(navigationToggle);
		$navigationBg.click(navigationToggle);
	})();
});
