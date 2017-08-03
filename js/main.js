'use strict';

$("a[href*='#']").click(function(){
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 10
    },500);
})

$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});

$.get(
    'http://www.radiozet.pl/Radio/Lista-przebojow',
    function (response) {
        console.log("> ", response);
        $("#viewer").html(response);
});