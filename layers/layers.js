var wms_layers = [];


        var lyr_mapbox_0 = new ol.layer.Tile({
            'title': 'mapbox',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGF5dG9uZ2pzIiwiYSI6ImNtM2I1bmhyZDFsem0ybnBzMXk0cTh4enUifQ.Ei1X2_FR6HhFtuu-ETxO6w'
            })
        });
var format_airover_1 = new ol.format.GeoJSON();
var features_airover_1 = format_airover_1.readFeatures(json_airover_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airover_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airover_1.addFeatures(features_airover_1);
var lyr_airover_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airover_1, 
                style: style_airover_1,
                popuplayertitle: "air over",
                interactive: false,
                title: '<img src="styles/legend/airover_1.png" /> air over'
            });
var format_airbetween_2 = new ol.format.GeoJSON();
var features_airbetween_2 = format_airbetween_2.readFeatures(json_airbetween_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airbetween_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airbetween_2.addFeatures(features_airbetween_2);
var lyr_airbetween_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airbetween_2, 
                style: style_airbetween_2,
                popuplayertitle: "air between",
                interactive: false,
                title: '<img src="styles/legend/airbetween_2.png" /> air between'
            });
var format_airhome_3 = new ol.format.GeoJSON();
var features_airhome_3 = format_airhome_3.readFeatures(json_airhome_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airhome_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airhome_3.addFeatures(features_airhome_3);
var lyr_airhome_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airhome_3, 
                style: style_airhome_3,
                popuplayertitle: "air home",
                interactive: false,
                title: '<img src="styles/legend/airhome_3.png" /> air home'
            });
var format_uk_4 = new ol.format.GeoJSON();
var features_uk_4 = format_uk_4.readFeatures(json_uk_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uk_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uk_4.addFeatures(features_uk_4);
var lyr_uk_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uk_4, 
                style: style_uk_4,
                popuplayertitle: "uk",
                interactive: false,
                title: '<img src="styles/legend/uk_4.png" /> uk'
            });
var format_uk2_5 = new ol.format.GeoJSON();
var features_uk2_5 = format_uk2_5.readFeatures(json_uk2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_uk2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_uk2_5.addFeatures(features_uk2_5);
var lyr_uk2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_uk2_5, 
                style: style_uk2_5,
                popuplayertitle: "uk2",
                interactive: false,
                title: '<img src="styles/legend/uk2_5.png" /> uk2'
            });
var format_home_6 = new ol.format.GeoJSON();
var features_home_6 = format_home_6.readFeatures(json_home_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_home_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_home_6.addFeatures(features_home_6);
var lyr_home_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_home_6, 
                style: style_home_6,
                popuplayertitle: "home",
                interactive: false,
                title: '<img src="styles/legend/home_6.png" /> home'
            });
var format_italy_7 = new ol.format.GeoJSON();
var features_italy_7 = format_italy_7.readFeatures(json_italy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_italy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_italy_7.addFeatures(features_italy_7);
var lyr_italy_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_italy_7, 
                style: style_italy_7,
                popuplayertitle: "italy",
                interactive: false,
                title: '<img src="styles/legend/italy_7.png" /> italy'
            });
var format_cities_8 = new ol.format.GeoJSON();
var features_cities_8 = format_cities_8.readFeatures(json_cities_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cities_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cities_8.addFeatures(features_cities_8);
var lyr_cities_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cities_8, 
                style: style_cities_8,
                popuplayertitle: "cities",
                interactive: true,
                title: '<img src="styles/legend/cities_8.png" /> cities'
            });

lyr_mapbox_0.setVisible(true);lyr_airover_1.setVisible(true);lyr_airbetween_2.setVisible(true);lyr_airhome_3.setVisible(true);lyr_uk_4.setVisible(true);lyr_uk2_5.setVisible(true);lyr_home_6.setVisible(true);lyr_italy_7.setVisible(true);lyr_cities_8.setVisible(true);
var layersList = [lyr_mapbox_0,lyr_airover_1,lyr_airbetween_2,lyr_airhome_3,lyr_uk_4,lyr_uk2_5,lyr_home_6,lyr_italy_7,lyr_cities_8];
lyr_airover_1.set('fieldAliases', {'id': 'id', });
lyr_airbetween_2.set('fieldAliases', {'id': 'id', });
lyr_airhome_3.set('fieldAliases', {'id': 'id', });
lyr_uk_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_uk2_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_home_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_italy_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_cities_8.set('fieldAliases', {'fid': 'fid', 'City': 'City', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_airover_1.set('fieldImages', {'id': 'TextEdit', });
lyr_airbetween_2.set('fieldImages', {'id': 'TextEdit', });
lyr_airhome_3.set('fieldImages', {'id': 'TextEdit', });
lyr_uk_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_uk2_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_home_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_italy_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_cities_8.set('fieldImages', {'fid': 'TextEdit', 'City': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_airover_1.set('fieldLabels', {'id': 'no label', });
lyr_airbetween_2.set('fieldLabels', {'id': 'no label', });
lyr_airhome_3.set('fieldLabels', {'id': 'no label', });
lyr_uk_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_uk2_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_home_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_italy_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_cities_8.set('fieldLabels', {'fid': 'no label', 'City': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_cities_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});