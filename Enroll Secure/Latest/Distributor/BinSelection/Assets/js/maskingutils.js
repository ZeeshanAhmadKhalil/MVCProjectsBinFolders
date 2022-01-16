/**
 * 
 */
function unmaskFields(ctrl){
		var frmToSubmit = jQuery(ctrl).closest("form");
        var frmToSubmitName = frmToSubmit.attr("name");

        jQuery("form[name='"+frmToSubmitName+"'] input[masking]").first().each(function(){
   
              var allAllowedRegExps = '';
              var myDefs = jQuery.mask.definitions;
             
              jQuery.each( myDefs, function( key, value ) {
                allAllowedRegExps = allAllowedRegExps + value;
            });
           
            allAllowedRegExps = allAllowedRegExps.replace(/\[/g, '');
            allAllowedRegExps = allAllowedRegExps.replace(/\]/g, '');
            allAllowedRegExps = '[^'+allAllowedRegExps+']';
            var re = new RegExp(allAllowedRegExps,"g");
           
            var currentMaskedObject = jQuery(this);
           
            var actualValue = currentMaskedObject.val().replace(re,"");
            currentMaskedObject.val(actualValue);
           
        });
}