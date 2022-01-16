function validate(element){
	
	var mainForm = jQuery(element).closest("form");
	var mainFormName = mainForm.attr("name");
	var fieldToValidate = jQuery(element).attr("name");
	if(jQuery(element).attr("masking")){
		var allAllowedRegExps = '';
		var myDefs = jQuery.mask.definitions;
			
		jQuery.each( myDefs, function( key, value ) {
			allAllowedRegExps = allAllowedRegExps + value;
		});
		
		allAllowedRegExps = allAllowedRegExps.replace(/\[/g, '');
		allAllowedRegExps = allAllowedRegExps.replace(/\]/g, '');
		allAllowedRegExps = '[^'+allAllowedRegExps+']';
		var re = new RegExp(allAllowedRegExps,"g");
		if(!jQuery(element).attr("unmaskFields")){
			var actualValue = jQuery(element).val().replace(re,"");
			jQuery(element).val(actualValue);
		}
	}
	
	jQuery.post(mainForm.attr("action") + "?struts.enableJSONValidation=true&struts.validateOnly=true&fieldToValidate=" + fieldToValidate,
			mainForm.serialize(),
	 function(errors){
	 	var found=0;
		if(errors.fieldErrors) {
			for(var fieldName in errors.fieldErrors) {
				 if(fieldName == jQuery(element).attr("name")){
				 	found++;
					clearFieldError(element);
				 	for(var i = 0; i < errors.fieldErrors[fieldName].length; i++) {
				 		addFieldError(element,errors.fieldErrors[fieldName][i]);
				 	}
				 }
			}
			if(found == 0){	clearFieldError(element)}
		}
		else{clearFieldError(element);}
	 });
}

function validateWithFieldComparison(firstElement, secondElement){
	
	var mainForm = jQuery(firstElement).closest("form");
	var mainFormName = mainForm.attr("name");
	var fieldToValidate = jQuery(secondElement).attr("name");
	if(jQuery(firstElement).attr("masking") && jQuery(secondElement).attr("masking")){
		var allAllowedRegExps = '';
		var myDefs = jQuery.mask.definitions;
			
		jQuery.each( myDefs, function( key, value ) {
			allAllowedRegExps = allAllowedRegExps + value;
		});
		
		allAllowedRegExps = allAllowedRegExps.replace(/\[/g, '');
		allAllowedRegExps = allAllowedRegExps.replace(/\]/g, '');
		allAllowedRegExps = '[^'+allAllowedRegExps+']';
		var re = new RegExp(allAllowedRegExps,"g");
		
		var actualValue = jQuery(firstElement).val().replace(re,"");
		jQuery(firstElement).val(actualValue);
		
		actualValue = jQuery(secondElement).val().replace(re,"");
		jQuery(secondElement).val(actualValue)
	}
	
	jQuery.post(mainForm.attr("action") + "?struts.enableJSONValidation=true&struts.validateOnly=true&fieldToValidate=" + fieldToValidate,
			mainForm.serialize(),
	 function(errors){
	 	var found=0;
		if(errors.fieldErrors) {
			for(var fieldName in errors.fieldErrors) {
				 if(fieldName == jQuery(secondElement).attr("name")){
				 	found++;
					clearFieldError(secondElement);
				 	for(var i = 0; i < errors.fieldErrors[fieldName].length; i++) {
				 		addFieldError(secondElement,errors.fieldErrors[fieldName][i]);
				 	}
				 }
			}
			if(found == 0){	clearFieldError(secondElement)}
		}
		else{clearFieldError(secondElement);}
	 });
}

function clearFieldError(element){
	var elementId = jQuery(element).attr('id');	
	jQuery(element).removeAttr("title");
	//jQuery(element).css("border","1px solid #dddddd");
	//jQuery(element).css("background-color","#FFF");
	//---------------------------------------------------
	/*
	if(jQuery(element).attr("class").indexOf("_error") > -1) {
		jQuery(element).attr("class",jQuery(element).attr("class").substring(0,jQuery(element).attr("class").length - 6));
	}
	*/	
	if(jQuery(element).attr("type") == "checkbox"){
		jQuery(element).parent().parent().find(".error-text").remove();
		jQuery(element).parent().removeClass("error-field");
	}else{
		jQuery(element).parent().find(".error-text").remove();
		jQuery(element).removeClass("error-field");
	}
	jQuery(element).removeAttr('aria-describedby');
	jQuery(element).removeAttr('aria-invalid');
	jQuery('#'+elementId+'_chosen').children('a.chosen-single').first().removeClass("error-field");	
}

function addFieldError(element,error){
	var elementId = jQuery(element).attr('id');
	var elementName = jQuery(element).attr('name');
	if(jQuery(element).attr("type") == "checkbox"){
		jQuery(element).parent().parent().append( '<span class="error-text">'+error+'</span>' );
		jQuery(element).parent().addClass("error-field");
	}else{
		jQuery(element).parent().append( '<span id='+elementName+'Error class="error-text">'+error+'</span>' );
		jQuery(element).addClass("error-field");
	}
	jQuery(element).attr('aria-describedby',elementName+'Error');
	jQuery(element).attr('aria-invalid','true');
	jQuery('#'+elementId+'_chosen').children('a.chosen-single').first().addClass("error-field");
	jQuery('#'+elementId+'_chosen').parent().find('span.error-text:first').attr('id',elementName+'Error');
}

function validateCompleteForm(mainForm){

	var mainFormName = mainForm.attr("name");
	
	jQuery("form[name='"+mainFormName+"'] input[masking]").each(function(){
		var allAllowedRegExps = '';
		var myDefs = jQuery.mask.definitions;
			
		jQuery.each( myDefs, function( key, value ) {
			allAllowedRegExps = allAllowedRegExps + value;
		});
		
		allAllowedRegExps = allAllowedRegExps.replace(/\[/g, '');
		allAllowedRegExps = allAllowedRegExps.replace(/\]/g, '');
		allAllowedRegExps = '[^'+allAllowedRegExps+']';
		var re = new RegExp(allAllowedRegExps,"g");
		
		if(!jQuery(this).attr("unmaskFields")){
			var actualValue = jQuery(this).val().replace(re,"");
			jQuery(this).val(actualValue);
		}
	
	});
	
	jQuery.post(mainForm.attr("action") + "?struts.enableJSONValidation=true&struts.validateOnly=true",
			mainForm.serialize(),
	 function(errors){
	 	var found=0;
		if(errors.fieldErrors) {
			for(var fieldName in errors.fieldErrors) {
				 //if(fieldName == jQuery(element).attr("name")){
				 	found++;
					clearFieldError(element);
				 	for(var i = 0; i < errors.fieldErrors[fieldName].length; i++) {
				 		addFieldError(element,errors.fieldErrors[fieldName][i]);
				 	}
				 //}
			}
			if(found == 0){	clearFieldError(element)}
		}
		else{clearFieldError(element);}
	 });
}


function unmaskFormFields(mainForm){

	var mainFormName = mainForm.attr("name");
	
	jQuery("form[name='"+mainFormName+"'] input[masking]").each(function(){
		var allAllowedRegExps = '';
		var myDefs = jQuery.mask.definitions;
			
		jQuery.each( myDefs, function( key, value ) {
			allAllowedRegExps = allAllowedRegExps + value;
		});
		
		allAllowedRegExps = allAllowedRegExps.replace(/\[/g, '');
		allAllowedRegExps = allAllowedRegExps.replace(/\]/g, '');
		allAllowedRegExps = '[^'+allAllowedRegExps+']';
		var re = new RegExp(allAllowedRegExps,"g");
		
		if(!jQuery(this).attr("unmaskFields")){
			var actualValue = jQuery(this).val().replace(re,"");
			jQuery(this).val(actualValue);
		}
	
	});
}
 
StrutsUtils.clearAllFormFieldError  = function (form){
	jQuery(form).find("input,select").each(function(){
		var element = jQuery( this ).attr( 'name' )
		if(element){
		    clearFieldError(jQuery( this ));
		}
	});
}

StrutsUtils.showHideActionError = function (errors){
		var errorList ;
		if(errors.errors){
			errorList = errors.errors; 
		}
		if(errors.actionErrors){
			errorList = errors.actionErrors;
		}
		if(errorList && !jQuery.isEmptyObject(errorList)){
			jQuery('.error-msg').empty();
			jQuery(errorList).each(function(key,value){
				jQuery('.error-msg').append(value+"<br/>");
			});
			jQuery(".error-msg").show();
		}else{
			jQuery('.error-msg').empty();
			jQuery(".error-msg").hide();
		}
}
StrutsUtils.showHideActionMessages = function (messageList){
		if(messageList.actionMessages && !jQuery.isEmptyObject(messageList.actionMessages)){
			jQuery('.success-msg').empty();
			jQuery(messageList.actionMessages).each(function(key,value){
				jQuery('.success-msg').append(value+"<br/>");
			});
			jQuery(".success-msg").show();
		}else{
			jQuery('.success-msg').empty();
			jQuery(".success-msg").hide();
		}
}


StrutsUtils.showIfErrorMessageExists = function(form,errors){
	if((errors.errors || errors.fieldErrors || errors.actionErrors) && ( !jQuery.isEmptyObject(errors.errors)
		|| !jQuery.isEmptyObject(errors.fieldErrors) || !jQuery.isEmptyObject(errors.actionErrors)
	)){
		var found=0;
		if(errors.fieldErrors && !jQuery.isEmptyObject(errors.fieldErrors)) {
			StrutsUtils.clearAllFormFieldError(form);
			for(var fieldName in errors.fieldErrors) {
				 var element = jQuery("input[name='"+fieldName+"']");
				 if(jQuery(element).attr("name") == undefined){
					 element = jQuery('select[name="' + fieldName + '"]');
				 }
				 if(fieldName == jQuery(element).attr("name")){
				 	found++;
					clearFieldError(element);
				 	for(var i = 0; i < errors.fieldErrors[fieldName].length; i++) {
				 		addFieldError(element,errors.fieldErrors[fieldName][i]);
				 	}
				 }
			}
			if(found == 0){	clearFieldError(element)}
		}else{StrutsUtils.clearAllFormFieldError(form)}
		StrutsUtils.showHideActionError(errors);
		return true;
	}
	StrutsUtils.clearAllFormFieldError(form);
	StrutsUtils.showHideActionError(errors);
	return false;
}
