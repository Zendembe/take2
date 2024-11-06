var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VedavathiHostel_1 = new ol.format.GeoJSON();
var features_VedavathiHostel_1 = format_VedavathiHostel_1.readFeatures(json_VedavathiHostel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VedavathiHostel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VedavathiHostel_1.addFeatures(features_VedavathiHostel_1);
var lyr_VedavathiHostel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VedavathiHostel_1, 
                style: style_VedavathiHostel_1,
                popuplayertitle: "Vedavathi Hostel",
                interactive: true,
                title: '<img src="styles/legend/VedavathiHostel_1.png" /> Vedavathi Hostel'
            });
var format_GangaHostel_2 = new ol.format.GeoJSON();
var features_GangaHostel_2 = format_GangaHostel_2.readFeatures(json_GangaHostel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GangaHostel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GangaHostel_2.addFeatures(features_GangaHostel_2);
var lyr_GangaHostel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GangaHostel_2, 
                style: style_GangaHostel_2,
                popuplayertitle: "Ganga Hostel",
                interactive: true,
                title: '<img src="styles/legend/GangaHostel_2.png" /> Ganga Hostel'
            });
var format_CBLOCK_3 = new ol.format.GeoJSON();
var features_CBLOCK_3 = format_CBLOCK_3.readFeatures(json_CBLOCK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBLOCK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBLOCK_3.addFeatures(features_CBLOCK_3);
var lyr_CBLOCK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CBLOCK_3, 
                style: style_CBLOCK_3,
                popuplayertitle: "C BLOCK",
                interactive: true,
                title: '<img src="styles/legend/CBLOCK_3.png" /> C BLOCK'
            });

lyr_OSMStandard_0.setVisible(true);lyr_VedavathiHostel_1.setVisible(true);lyr_GangaHostel_2.setVisible(true);lyr_CBLOCK_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VedavathiHostel_1,lyr_GangaHostel_2,lyr_CBLOCK_3];
lyr_VedavathiHostel_1.set('fieldAliases', {'Vedavathi': 'Vedavathi', });
lyr_GangaHostel_2.set('fieldAliases', {'26 Floors': '26 Floors', });
lyr_CBLOCK_3.set('fieldAliases', {'C BLOCK': 'C BLOCK', });
lyr_VedavathiHostel_1.set('fieldImages', {'Vedavathi': 'TextEdit', });
lyr_GangaHostel_2.set('fieldImages', {'26 Floors': 'TextEdit', });
lyr_CBLOCK_3.set('fieldImages', {'C BLOCK': '', });
lyr_VedavathiHostel_1.set('fieldLabels', {'Vedavathi': 'header label - always visible', });
lyr_GangaHostel_2.set('fieldLabels', {'26 Floors': 'header label - always visible', });
lyr_CBLOCK_3.set('fieldLabels', {'C BLOCK': 'header label - visible with data', });
lyr_CBLOCK_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});