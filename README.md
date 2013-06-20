jQuery Interactive UK Map
=========================

Original source from [Return True](http://return-true.com/2011/06/using-raphaeljs-to-create-a-map/). I just wrote the jQuery plugin and added features.

Options:
* `width` - Width of the map - int - default 500
* `height` -  Height of the map - int - default 1500
* `base_color` -  Basic map colour - string/hex - '#ACDA93'
* `hover_color` - Colour to show on hover - string/hex - default '#81AD51'
* `disabled_color` - Colour for disabled regions - string/hex - default '#CCCCCC'
* `fade_speed` - Speed of animation between hover states - int - default 300
* `stroke_width` - Width of the stroke between regions - int - default 1
* `stroke_color` - Colour of the stroke - string/hex - default '#FFFFFF'
* `disabled` - Array of disabled regions, by slug - default []

##Usage
To initalise the plugin:
	
	$('#map').imap({});

	<div id="map"></div>