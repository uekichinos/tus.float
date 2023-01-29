(function($) {
    $.fn.tusfloat = function(options) {
        var settings = $.extend({
            decimal: 2,
        }, options);

		var decimal = settings.decimal;
        var input = $(this).val();

        /* regex only accept number and dot */
        if (/^[0-9\.]+$/.test(input)) {
    
            /* only allow one dot */
            if (input.replace(/[^.]/g, "").length > 1) {
                $(this).val(input.slice(0, -1));
            }
    
            /* check if dot exist */
            if(input.indexOf(".") >= 0 && input.substr(input.indexOf(".")).length > (decimal + 1)) {
                $(this).val((input.substr(0, input.indexOf(".")) + input.substr(input.indexOf("."), (decimal + 1))));
            }
        }
        else {

            /* replace only effected character */
            $(this).val(input.replace(/[a-zA-Z`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/g,''));
        }
    }
}(jQuery));