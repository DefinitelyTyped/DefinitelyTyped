///<reference path="jquery.clientSideLogging.d.ts" />

interface JQueryStatic {
    info: (what?: any) => any;
    error: (what?: any) => any;
    log: (what?: any) => any;
    clientSideLogging: (options: ClientSideLoggingObject) => any;
}

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