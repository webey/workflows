/**
 * Created by xiayan on 15/12/2015.
 */
$(function() {
    var Mustache = require('mustache');

    $.getJSON('js/data.json', function(data) {
        var template = $('#speakerstpl').html();
        var html = Mustache.to_html(template, data);
        $('#speakers').html(html);
    }); //getJSON

}); //function