$(document).ready(function(){
    console.log('loaded');
    $('#loadMe').click(function(){
        $('#here').load('dif.html');
    });
});