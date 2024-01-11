var wms_layers = [];

var format_Palestine_0 = new ol.format.GeoJSON();
var features_Palestine_0 = format_Palestine_0.readFeatures(json_Palestine_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Palestine_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palestine_0.addFeatures(features_Palestine_0);
var lyr_Palestine_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Palestine_0, 
                style: style_Palestine_0,
                interactive: true,
                title: '<img src="styles/legend/Palestine_0.png" /> Palestine'
            });
var format_PA_Network_10April2023_1 = new ol.format.GeoJSON();
var features_PA_Network_10April2023_1 = format_PA_Network_10April2023_1.readFeatures(json_PA_Network_10April2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PA_Network_10April2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PA_Network_10April2023_1.addFeatures(features_PA_Network_10April2023_1);
var lyr_PA_Network_10April2023_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PA_Network_10April2023_1, 
                style: style_PA_Network_10April2023_1,
                interactive: true,
    title: 'PA_Network_10April2023<br />\
    <img src="styles/legend/PA_Network_10April2023_1_0.png" /> الاغوار الوسطى<br />\
    <img src="styles/legend/PA_Network_10April2023_1_1.png" /> العرقوب<br />\
    <img src="styles/legend/PA_Network_10April2023_1_2.png" /> الكانوب<br />\
    <img src="styles/legend/PA_Network_10April2023_1_3.png" /> الكتار<br />\
    <img src="styles/legend/PA_Network_10April2023_1_4.png" /> الكويس<br />\
    <img src="styles/legend/PA_Network_10April2023_1_5.png" /> اللطرون<br />\
    <img src="styles/legend/PA_Network_10April2023_1_6.png" /> المرج<br />\
    <img src="styles/legend/PA_Network_10April2023_1_7.png" /> المزوقة<br />\
    <img src="styles/legend/PA_Network_10April2023_1_8.png" /> المكسر<br />\
    <img src="styles/legend/PA_Network_10April2023_1_9.png" /> ام الريحان<br />\
    <img src="styles/legend/PA_Network_10April2023_1_10.png" /> برية القدس<br />\
    <img src="styles/legend/PA_Network_10April2023_1_11.png" /> جبل القرن<br />\
    <img src="styles/legend/PA_Network_10April2023_1_12.png" /> دير رازح<br />\
    <img src="styles/legend/PA_Network_10April2023_1_13.png" /> راس جادر<br />\
    <img src="styles/legend/PA_Network_10April2023_1_14.png" /> ساحل البحر الميت<br />\
    <img src="styles/legend/PA_Network_10April2023_1_15.png" /> شوباش<br />\
    <img src="styles/legend/PA_Network_10April2023_1_16.png" /> عين العوجا<br />\
    <img src="styles/legend/PA_Network_10April2023_1_17.png" /> عين قوابيش<br />\
    <img src="styles/legend/PA_Network_10April2023_1_18.png" /> قرن صرطبة<br />\
    <img src="styles/legend/PA_Network_10April2023_1_19.png" /> مرج الزعرور<br />\
    <img src="styles/legend/PA_Network_10April2023_1_20.png" /> واد القلط<br />\
    <img src="styles/legend/PA_Network_10April2023_1_21.png" /> وادي الدلب<br />\
    <img src="styles/legend/PA_Network_10April2023_1_22.png" /> وادي القف<br />\
    <img src="styles/legend/PA_Network_10April2023_1_23.png" /> وادي جناتا<br />\
    <img src="styles/legend/PA_Network_10April2023_1_24.png" /> وادي عين الزرقا العلوي<br />\
    <img src="styles/legend/PA_Network_10April2023_1_25.png" /> وادي غزة<br />\
    <img src="styles/legend/PA_Network_10April2023_1_26.png" /> وادي فصايل<br />\
    <img src="styles/legend/PA_Network_10April2023_1_27.png" /> وادي قانا<br />\
    <img src="styles/legend/PA_Network_10April2023_1_28.png" /> <br />'
        });

lyr_Palestine_0.setVisible(true);lyr_PA_Network_10April2023_1.setVisible(true);
var layersList = [lyr_Palestine_0,lyr_PA_Network_10April2023_1];
lyr_Palestine_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'THEM7_': 'THEM7_', 'THEM7_ID': 'THEM7_ID', 'NAME': 'NAME', 'aera': 'aera', });
lyr_PA_Network_10April2023_1.set('fieldAliases', {'ap_name_en': 'ap_name_en', 'ap_name_ar': 'ap_name_ar', 'calc_area': 'calc_area', 'cal_area_K': 'cal_area_K', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AREA': 'AREA', });
lyr_Palestine_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'THEM7_': 'TextEdit', 'THEM7_ID': 'TextEdit', 'NAME': 'TextEdit', 'aera': 'TextEdit', });
lyr_PA_Network_10April2023_1.set('fieldImages', {'ap_name_en': 'TextEdit', 'ap_name_ar': 'TextEdit', 'calc_area': 'TextEdit', 'cal_area_K': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Palestine_0.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'THEM7_': 'inline label', 'THEM7_ID': 'inline label', 'NAME': 'inline label', 'aera': 'inline label', });
lyr_PA_Network_10April2023_1.set('fieldLabels', {'ap_name_en': 'inline label', 'ap_name_ar': 'inline label', 'calc_area': 'inline label', 'cal_area_K': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'AREA': 'inline label', });
lyr_PA_Network_10April2023_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});