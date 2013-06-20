jQuery Interactive UK Map
=========================

Original source from [Return True](http://return-true.com/2011/06/using-raphaeljs-to-create-a-map/). I just wrote the jQuery plugin and added some features/options.

###Options:
* `width` - Width of the map - int - default 500
* `height` -  Height of the map - int - default 1500
* `base_color` -  Basic map colour - string/hex - '#ACDA93'
* `hover_color` - Colour to show on hover - string/hex - default '#81AD51'
* `disabled_color` - Colour for disabled regions - string/hex - default '#CCCCCC'
* `fade_speed` - Speed of animation between hover states - int - default 300
* `stroke_width` - Width of the stroke between regions - int - default 1
* `stroke_color` - Colour of the stroke - string/hex - default '#FFFFFF'
* `disabled` - Array of disabled regions, by slug - default []

###Callbacks:
* `onClick` - When a region is clicked. The region data will be passed with the callback (`slug`, `url`, `path` etc). By default, `onClick` redirects the user to the URL given in `paths.js`

On hover, a tooltip is show with the path name in `paths.js` and the region will fade to the `hover_color`.

###Usage
To initalise the plugin:
		
	$(function() {
		$('#map').imap({});
	});

	<div id="map"></div>


###Disabling regions
To disable a region:
	
	$(function() {
		$('#map').imap({
			disabled : [
				'republic-of-ireland'
			]
		});
	});

	<div id="map"></div>

###Example Photo
![Example of imap](http://f.cl.ly/items/2y2K320d0H1S1Y2d1b3l/Image%202013.06.20%2010%3A50%3A01.png)


[Andrew Hathaway - Twitter](http://twitter.com/andrewhathaway)
