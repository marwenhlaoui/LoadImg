/**
 * loadImg 
 *
 * Copyright 2016, Marwen Hlaoui - http://http:marwenhlaoui.me 
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

;(function($){ 

    $.fn.loadImg = function(options){ 
        // set a reference to our element
        var def = {
            "fileExt"  : ['jpg'],
            "fileSize" : [0,2]

        }; 
        var el = $(this).selector; 
        var loader = $(el).append('<div class="loader"></div>');
        var img = $(el).append('<img>');
        var text = (typeof options.text === 'undefined') ? 'Upload' : options.text;
        var init = function(){ 
           if ($(el).attr('exist-img')) {
                _exist($(el).attr('exist-img'));
           }else{
                _ready();
           }
           
        }
        var loadUrl = function(input){
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    setTimeout(showImg(e.target.result) , parseInt(Math.random() * 800 + 800));
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        var showImg = function(url){
                $(el).find('img').show();
                $(el).removeClass('_cssimg');
                $(el).addClass("_imgshow");
                $(el).find('img').attr('src', url);
                $(el).find('.loader').hide('slow');
 
        }
        var verifExt = function(input){
            if (input.files && input.files[0]) {
                var f = input.files[0];
                var validExtensions = ['jpg','gif','png']; //array of valid extensions
                if (options.fileExt) {
                    listExtensions = options.fileExt;
                }else{
                    listExtensions = def.fileExt;
                }
                var fileName = f.name;
                var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
                if (($.inArray(fileNameExt, validExtensions) == -1)||($.inArray(fileNameExt, listExtensions) == -1)){ 
                   return _error("Invalid file type");
                }
            }
            
        }
        var verifSize = function(input){ 

            if (input.files && input.files[0]) {
                var f = input.files[0];
                var file_size =  parseInt(0); 
                var min = def.fileSize[0];
                var max = def.fileSize[1];
                var convert = parseInt(1053633);
                //convert mo -> oct
                //mo * 1053633 
                if (options.fileSize_min) {min = options.fileSize_min}
                if (options.fileSize_max) {max = options.fileSize_max} 
                if (f.size) {file_size = f.size}
                if ((f.size < parseInt(min * convert))||(f.size > parseInt(max * convert))) {
                     return _error("Invalid file size");
                } 
            }
            
        }
        var _error = function(error_type){
            $(el).find('img').hide();
            $(el).find('.loader').hide('slow');
            $(el).removeClass("_imgshow");
            $(el).addClass("_cssimg");
            /*Invalid file type*/
           return false;
        }
        var _ready = function(){
            $(el).addClass("_cssimg");

            $(el).attr("text-file",text);
            /* load photo */
            $(el).find('input[type=file]').on('change',function(){
                $(el).find('.loader').show(); 
                if((verifExt(this) != false)&&(verifSize(this) != false)){
                    loadUrl(this);
                }
            });
        }
        var _exist = function(url){ 

            showImg(url);
            $(el).attr("text-file",text);
            /* load photo */
            $(el).find('input[type=file]').on('change',function(){
                $(el).removeAttr('exist-img');
                $(el).find('.loader').show(); 
                if((verifExt(this) != false)&&(verifSize(this) != false)){
                    loadUrl(this);
                }
            });
        }

        init();
 
    }

})(jQuery);
 