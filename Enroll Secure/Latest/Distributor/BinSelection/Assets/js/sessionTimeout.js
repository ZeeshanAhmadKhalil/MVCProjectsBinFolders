(function( $ ){
	
	jQuery.idleTimer = function f(newTimeout) {
		var idle = false, 
		enabled = true, 
		timeout = 30000,
		events = 'mousemove keydown DOMMouseScroll mousewheel mousedown', 

		toggleIdleState = function() {
			idle = !idle;
			f.olddate = +new Date;
			$(document).trigger($.data(document, 'idleTimer', idle ? "idle": "active") + '.idleTimer');
		},
		
		stop = function() {
			
			enabled = false;
			clearTimeout($.idleTimer.tId);
			$(document).unbind('.idleTimer');
		},
		handleUserEvent = function() {
			clearTimeout($.idleTimer.tId);
			if (enabled) {
				if (idle) {
					toggleIdleState();
				}
				$.idleTimer.tId = setTimeout(toggleIdleState, timeout);
			}
		};
		f.olddate = f.olddate || +new Date;
	
		if (typeof newTimeout == "number") {
			timeout = newTimeout;
		} else if (newTimeout === 'destroy') {
			stop();
			return this;
		} else if (newTimeout === 'getElapsedTime') {
			return (+new Date) - f.olddate;
		}
		$(document).bind($.trim((events + ' ').split(' ').join('.idleTimer ')),handleUserEvent);
		$.idleTimer.tId = setTimeout(toggleIdleState, timeout);
		$.data(document, 'idleTimer', "active");
	};
	
	jQuery.sessionIdleTimeout = function( options ) {

		var defaults = {
			message      : 'Your session is about to expire.',
			keepAliveUrl : 'keepalive.action',
			redirUrl     : 'logout.action',
			logoutUrl    : 'logout.action',
			warnAfter    : 0,
			redirAfter   : 1,
			html : '<div  title = "Your session is about to expire."  id="sessionTimeout-dialog"></div>',
			dialogId : 'sessionTimeout-dialog',
			logoutId : "logout",
			stayAlive : "stayAlive",
			pollingInterval:1,
			csrfTokenKey:"",
			csrfTokenValue:"",
			countdownOpen : false,
			failedRequests : 2,
			counter : 1, // seconds,
			popupCounter : 0.3,
			countdownTimer:false,
			countdownTimerId:"countDownTimer",
			onTimeout: function(){
				logout();
			},
			onIdle: $.noop,
			onCountdown: function(counter){
				
			},
			onResume: function(param){
			},
			onAbort: function(param){
				logout();
			}
		};
		var o = defaults,
				dialogTimer,
				redirTimer,
				keepAliveTimer,
				countdown,
				failedReq;

		if ( options ) { o = $.extend( defaults, options ); }

		function logout(){
			window.location = o.logoutUrl+"?"+o.csrfTokenKey+"="+o.csrfTokenValue +"&SessionExpired=Y";
		}
		
		function keepAlive(action,click){
			if( typeof action === "undefined" ){
				action = true;
			}
			if( !o.failedReq ){
					startTimer('stop');
					o.onAbort.call( "Requests Aborted" );
					return;
			}
			
			$.ajax({
						timeout: 1500,
						type: 'GET',
						url: o.keepAliveUrl+"?"+o.csrfTokenKey+"="+o.csrfTokenValue,
						error: function(){
							o.failedReq--;
							if(action){
									startTimer('start');
							}
							if(click){
								$('#' + o.dialogId).dialog('close');
								logout();
							}
						},
						success: function(response){
							if($.trim(response) !== "OK"){
									o.failedReq--;
							}
							if(action){
								startTimer('stop');
								startTimer('start');
							}
							if(click){
								$('#' + o.dialogId).dialog('close');
							}
						}
			});
			
		}
		
		function stayOnResume(){
			clearInterval(countdown);
			o.countdownOpen = false;
			startTimer('start');
			keepAlive(true,true); // ping server
			o.onResume.call("On Resume"); // call the resume callback
		}
		
		function startTimer(action){
			switch(action) {
				case 'start':
					dialogTimer = setTimeout(function(){
						keepAlive(true);
					}, (o.pollingInterval * 1000) - (o.popupCounter  * 1000));
					break;
				case 'stop':
					o.failedReq = o.failedRequests;
					clearTimeout(dialogTimer);
					break;
			}
		}
		

		function idle() {
			keepAlive(true,false);
			if("Y" == o.showSessionTimeoutDialogue || ("Y" != o.showSessionTimeoutDialogue && "N" != o.showSessionTimeoutDialogue)){
				$('#' + o.dialogId).dialog('open');
			}
			
			var countDownTimerOption = {
		       	size : "lg"
			}
			if(((o.pollingInterval / 60) -  (o.popupCounter/60)) >= 1){
					countDownTimerOption.minutes = o.popupCounter / 60;
					countDownTimerOption.seconds = 0;
			}else{
				countDownTimerOption.minutes = 0;
				countDownTimerOption.seconds  = o.popupCounter;
			}			
			
			if("Y" == o.showSessionTimeoutDialogue || ("Y" != o.showSessionTimeoutDialogue && "N" != o.showSessionTimeoutDialogue)){
				if(o.countdownTimer){
					$('#' + o.countdownTimerId).countdowntimer(countDownTimerOption);
				}
			}
			
			o.onIdle.call("Idle");
			o.onCountdown.call("countdown has been started", o.counter);
			
			o.counter = o.popupCounter;
			countdown = setInterval(function() {
				if (--o.counter === 0) {
					clearInterval(countdown);
					o.onTimeout.call("Session has been Time out");
				} else {
					o.onCountdown.call("Counter has been started", o.counter);
				}
			}, 1000);
		}
		
		
		$.idleTimer((o.pollingInterval  * 1000) - (o.popupCounter  * 1000));
		$(document).bind("idle.idleTimer",function() {
					if ($.data(document, 'idleTimer') === 'idle' && !o.countdownOpen) {
						startTimer('stop');
						o.countdownOpen = true;
						idle();
					}
		});

		o.failedReq = o.failedRequests;
		startTimer('start');
		
		$(".ui-dialog-titlebar-close").hide(); 
		$("#" +o.stayAlive).on('click',function(){
			stayOnResume();
		});
		$("#" + o.logoutId).on('click',function(){
			logout();
		});
	};
})( jQuery );