function closeDialogPopup(popupId){
	jQuery('#'+popupId).dialog("close");
}

function openDialogPopup(popupId){
	
	var popupElement = jQuery('#'+popupId);
	if(popupElement && popupElement.html() == ''){
		popupElement.html(jQuery('#'+popupId).data("backup"));
		
	}
	
	jQuery('#'+popupId).dialog("open");
	jQuery( "#firstTime_"+popupId ).val("N");
	
}

function clearDivContent(popupId){
	
	var firstTimeVal = jQuery( "#firstTime_"+popupId ).val();
	
	if( firstTimeVal && ( firstTimeVal == undefined || firstTimeVal != 'Y') ){
		jQuery('#'+popupId).html('');
	}
	
}
