jQuery(document).ready(function() {

	jQuery.expr[':'].internal = function(obj){
		host = obj.hostname;
		if((host+"").indexOf(":") != -1){
			port = host.substring(host.indexOf(":"),host.length);
			host = host.replace(port,"");			
		}
		return !obj.href.match(/^mailto\:/) && (host == location.hostname);
	};
	
	jQuery('a:internal').each(
		function( intIndex ){
			jQuery(this).attr("href",tokenizeURL(jQuery(this).attr('href')));
		}
	);
	
	jQuery('img[src*=".action"]').each(
		function( intIndex ){
			jQuery(this).attr("src",tokenizeURL(jQuery(this).attr('src')));
		}
	);
	
	jQuery('div[dojoType="struts:BindDiv"]').each(
		function( intIndex ){
			jQuery( this ).bind (			
			"click",
				function(){
					jQuery(this).find('a:internal').each(
						function( intIndex ){
							jQuery(this).attr("href",tokenizeURL(jQuery(this).attr('href')));
						}
					);
					jQuery(this).find('img[src*=".action"').each(
						function( intIndex ){
							jQuery(this).attr("src",tokenizeURL(jQuery(this).attr('href')));
						}
					);
				}
			);
		}
	);
});

function tokenizeURL(url){

	if(url.indexOf(tokenName+"="+tokenValue) != -1){
		return url;
	}		
	if(url.indexOf('#')==0){
		return url;
	}
	var index = url.indexOf('?');
	
	if(index != -1)
	{
		url = url + '&' + tokenName + '=' + tokenValue;
		index = url.lastIndexOf('&');
	}
	else {
		url = url + '?' + tokenName + '=' + tokenValue;
		index = url.indexOf('?');
	}
	
	
	if(url.indexOf('#')!= -1){
		anchor = url.substring(url.indexOf('#'),index);
		url = url.replace(anchor,'');
		url = url+anchor;
	}
	
	return url;
}

function updateMenuURL(elm){
	MURL = elm.href;
	if(MURL.indexOf(tokenName+"="+tokenValue) == -1){
		if(MURL.indexOf("?") != -1){
			MURL = MURL + "&" + tokenName + "=" + tokenValue;
		}else{
			MURL = MURL + "?" + tokenName + "=" + tokenValue;
		}
	}
	elm.href = MURL; 
}

function rootRedirect(URL){
	 
	if(URL.indexOf("?") != -1){
		URL = URL + "&" + tokenName + "=" + tokenValue;
	}else{
	
		URL = URL + "?" + tokenName + "=" + tokenValue;
	}
	window.location=URL;
}
function rootRedirect(URL,isPopup){
	var target = (isPopup=='yes')?"_blank":"_self";
	if(URL.indexOf("?") != -1){
		URL = URL + "&" + tokenName + "=" + tokenValue;
	}else{
	
		URL = URL + "?" + tokenName + "=" + tokenValue;
	}
	window.open(URL,target);
}