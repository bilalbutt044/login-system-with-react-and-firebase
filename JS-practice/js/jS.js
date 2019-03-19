$(document).ready(function(){
    $('li').text('bilal');
    $('li').html('<b>billa butt</b>');
    $('li').append('append');
    $('li').prepend('prepend');
    $('li').after($('<li>after</li>'));
    $('li').before($('<li>before</li>'));
    // $('li').remove('.hello');
    // $('p').empty();

    $('p').addClass('color ');
    // $('p').removeClass('color');

    $('.add').click(function(){
        $('p').toggleClass('important');
            // alert(    $('p').css('background-color'));
    });

    // $("p").innerHeight('30px');
    // $("p").outerHeight('30px');
    var a =  $("p").outerHeight();
    // alert(a);
    // $("p").outerHeight('30px');
    // $("p").innerHeight('30px');
});

$(document).ready(function(){
    $('p').on({
        mouseover : function(){
            $('p').css('background-color','blue');
        },
        mouseout : function(){
            $('p').css('background-color','grey');
        }
    });
    var a = 99;
    function handler(event){
        // alert(event.data.msg);
    }
    $('p').on('click', {msg:a}, handler);
});

$(document).ready(function(){
    $('p').on('contextmenu',function(e){
        e.preventDefault();
    });
});

$(document).ready(function(){

    colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };
    $.each(colors , function(key, value){
        $('p').append(key + " " + value);
    })

});

$(document).ready(function(){
    $('input').css('border','1px solid red')
})