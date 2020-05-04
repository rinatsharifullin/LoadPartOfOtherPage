$(document).ready(function(){
    console.log('loaded');
    $('#loadMe').click(function(){
        $('#here').load('https://raw.githubusercontent.com/rinatsharifullin/LoadPartOfOtherPage/master/dif.html');
    });
});