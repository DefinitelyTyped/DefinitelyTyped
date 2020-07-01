$.clientSideLogging({
    log_level: 3,
    client_info: {
        location:true,
        screen_size:true,
        user_agent:true,
        window_size:false
    }
});

$.info({msg:$(this).parents('li').find('input:text').val()});
$.error({msg:$(this).parents('li').find('input:text').val()});
$.log($(this).parents('li').find('input:text').val());

$.post('/log?type=error&msg=YOUR_ERROR_MESSAGE');
