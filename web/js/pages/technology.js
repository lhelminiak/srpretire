$(function() {
    //initialize rangeslider plugin
    $('input[type="range"]').rangeslider({
        polyfill : false,
        onSlide: function(position, value) {

            if(value <= 200){
                $("#ui-1").addClass("ui_box_hover");
                $("#ui-2").removeClass("ui_box_hover");
                $("#ui-3").removeClass("ui_box_hover");
            }

            else if(value <= 400){
                $("#ui-1").removeClass("ui_box_hover");
                $("#ui-2").addClass("ui_box_hover");
                $("#ui-3").removeClass("ui_box_hover");
            }

            else{
                $("#ui-1").removeClass("ui_box_hover");
                $("#ui-2").removeClass("ui_box_hover");
                $("#ui-3").addClass("ui_box_hover");
            }




        }

    });

});