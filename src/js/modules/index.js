// index
$(function() {
	// header height adjuster
	var $win = $(window);
	var $body = $('body');
	var $header = $('#header');
	var $navigation = $('#navigation');
	var $moao_header_logo = $('#header__logo');
	var $newsarea_container = $('#gF4sdC');

	var winHeight = $win.height();
	var winWidth = $win.width();
	var navHeight = $navigation.height();
	var bgHeight = winHeight - navHeight;

	var isSp = false;
	var isLandscape = false;
	var moao_header_logo_width = $moao_header_logo.width();
	var moao_header_logo_height = $moao_header_logo.height();

	function adjustHeader() {
		isSp = $body.hasClass('device_sp');
		isLandscape = $body.hasClass('device_landscape')
		winHeight = $win.height();
		winWidth = $win.width();
		navHeight = $navigation.height();
		bgHeight = winHeight - navHeight;

		$header
			.height(winHeight)
			.css('background-size', 'auto ' + winHeight + 'px')
			.css('-webkit-background-size', 'auto ' + winHeight + 'px');

		if (isSp) {
			var width =  Math.floor(winWidth * (isLandscape ? 0.2 : 0.8));
			var useZoom = moao_header_logo_width < width;
			if (useZoom) {
				$moao_header_logo
					.css('margin-left', -(Math.floor(width / 2)) + 'px')
					.width(width)
					.height(Math.floor(moao_header_logo_height / moao_header_logo_width * width));
			}
		}
	}

	function parallaxEffect() {
		var speed = 5;
		var scrollTop = $win.scrollTop();
		var yPosition = (-1) * Math.floor(scrollTop / speed);
    $header.css({ backgroundPosition: '50% '+ yPosition + 'px' });
	}

	// newsエリアのバナーの表示期間コントロール
	(function displayNewsBanner() {
		var from_time = new Date($newsarea_container.data('bf'));
		var to_time = new Date($newsarea_container.data('bt'));
		var now = new Date();
		if (from_time < now && now <= to_time) {
			// now is the display time
		} else {
			$newsarea_container.remove();
		}
	})();

	adjustHeader();
	parallaxEffect();

	$win
		.on('resize', adjustHeader)
		.on('orientationchange', adjustHeader)
		.on('scroll', parallaxEffect)
		.on('touchmove', parallaxEffect);
});

// facebook page plugin
$(function() {
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.7";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

});
