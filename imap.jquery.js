/**
 * jQuery plugin - Interactive map of UK
 * https://github.com/AndrewHathaway/imap.js
 */

(function(window, document, $, undefined) {

	$.fn.imap = function(opts) {

		var map = $(this),
			settings = $.extend({
				width : 500,
				height : 1500,
				base_color : '#ACDA93',
				hover_color : '#81AD51',
				disabled_color : '#CCCCCC',
				fade_speed : 300,
				stroke_width : 1,
				stroke_color : '#FFFFFF',
				disabled : []
			}, opts),
			map_img = Raphael(map[0], settings.width, settings.height);

		map_img.safari();

		var _label = map_img.popup(50, 50, '').hide(),
			arr = new Array();

		for(var country in paths) {

			attributes = {
				fill : settings.base_color,
				stroke : settings.stroke_color,
				'stroke-width' : settings.stroke_width,
				'stroke-linejoin' : 'round'
			}

			var path = map_img.path(paths[country].path);
			arr[path.id] = country;

			if(disabled(paths[country].slug)) {
				attributes.fill = settings.disabled_color;
			}

			path.attr(attributes);
			path.count = country;

			path.hover(function() {

				var slug = paths[arr[this.id]].slug;

				if(disabled(slug)) {
					return false;
				}

				$('body').css('cursor', 'pointer');

				this.animate({
					fill : settings.hover_color
				}, settings.fade_speed);

				var bbox = this.getBBox();

				switch(slug) {

					case 'scotland' :
					case 'south-west' :
					case 'wales' :
						_label.attr({text: paths[arr[this.id]].name}).update(bbox.x + bbox.width/3, bbox.y + bbox.height/1.8, bbox.width).toFront().show();
						break;

					default:
						_label.attr({text: paths[arr[this.id]].name}).update(bbox.x, bbox.y + bbox.height/2, bbox.width).toFront().show();
						break;

				}

			}, function() {	

				var slug = paths[arr[this.id]].slug;

				if(disabled(slug)) {
					return false;
				}

				$('body').css('cursor', 'default');

				this.animate({	
					fill : settings.base_color
				}, settings.fade_speed);

				_label.hide();

			});

			path.click(function() {
				if(disabled(paths[arr[this.id]].slug)) {
					return false;
				}

				if(typeof settings.onClick == 'undefined') {
					location.href = paths[arr[this.id]].url;
				} else {
					settings.onClick(paths[arr[this.id]]);
				}
			});

		}

		function disabled(slug) {
			return $.inArray(slug, settings.disabled) !== -1;
		}

	}

})(window, document, jQuery);