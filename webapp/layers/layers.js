var wms_layers = [];

var format_states_0 = new ol.format.GeoJSON();
var features_states_0 = format_states_0.readFeatures(json_states_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_states_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_states_0.addFeatures(features_states_0);
var lyr_states_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_states_0, 
                style: style_states_0,
                interactive: true,
                title: '<img src="styles/legend/states_0.png" /> states'
            });
var format_detailed_1 = new ol.format.GeoJSON();
var features_detailed_1 = format_detailed_1.readFeatures(json_detailed_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_detailed_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_detailed_1.addFeatures(features_detailed_1);
var lyr_detailed_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_detailed_1, 
                style: style_detailed_1,
                interactive: true,
                title: '<img src="styles/legend/detailed_1.png" /> detailed'
            });

lyr_states_0.setVisible(true);lyr_detailed_1.setVisible(true);
var layersList = [lyr_states_0,lyr_detailed_1];
lyr_states_0.set('fieldAliases', {'STATE_NAME': 'STATE_NAME', 'DRAWSEQ': 'DRAWSEQ', 'STATE_FIPS': 'STATE_FIPS', 'SUB_REGION': 'SUB_REGION', 'STATE_ABBR': 'STATE_ABBR', });
lyr_detailed_1.set('fieldAliases', {'id': 'id', 'open_date': 'open_date', 'name': 'name', 'location': 'location', 'lat': 'lat', 'lon': 'lon', 'threat': 'threat', 'commodity': 'commodity', 'field_11': 'field_11', });
lyr_states_0.set('fieldImages', {'STATE_NAME': 'TextEdit', 'DRAWSEQ': 'Range', 'STATE_FIPS': 'TextEdit', 'SUB_REGION': 'TextEdit', 'STATE_ABBR': 'TextEdit', });
lyr_detailed_1.set('fieldImages', {'id': '', 'open_date': '', 'name': '', 'location': '', 'lat': '', 'lon': '', 'threat': '', 'commodity': '', 'field_11': '', });
lyr_states_0.set('fieldLabels', {'STATE_NAME': 'no label', 'DRAWSEQ': 'no label', 'STATE_FIPS': 'no label', 'SUB_REGION': 'no label', 'STATE_ABBR': 'no label', });
lyr_detailed_1.set('fieldLabels', {'id': 'no label', 'open_date': 'no label', 'name': 'no label', 'location': 'no label', 'lat': 'no label', 'lon': 'no label', 'threat': 'no label', 'commodity': 'no label', 'field_11': 'no label', });
lyr_detailed_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});