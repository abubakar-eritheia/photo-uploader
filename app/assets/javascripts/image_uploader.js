$(document).ready(function(){
  $('#image_attachment').on('change', openFiles);
  $('#check-box').on('change', enableButton);
});

function openFiles(evt){
  var i, img_container;
  var files = evt.target.files;
  if (!files.length || !window.FileReader) {
    return;
  } else {
    img_container = $('.image-holder');
    i = 0;
    
    if (/^image/.test(files[i].type)) {
      for (var i = 0, len = files.length; i < len; i++) {
        var file = files[i];
        var reader = new FileReader();

        if ( i == 0 ) {
          img_container.removeClass('d-none');
        }

        reader.onloadend = (function(f) {
          return function(e) {
            var element = '<div class="col-sm-6 custom-height"><label>' + f.name + '</label><div class="img-box"><img class="img-fluid" src="' + this.result + '" /></div></div>';

            if (img_container.find('.row').last().children('.col-sm-6').length > 1) {
              img_container.append('<div class="row"></div>');
            }
            img_container.find('.row').last().append(element);
          };
        })(file);
        reader.readAsDataURL(file);
      }
    }
  }
}

function enableButton() {
  if ($(this).is(':checked')) {
    $('#submit_button').removeAttr('disabled').removeClass('disabled');
  } else {
    $('#submit_button').attr('disabled', 'disabled').addClass('disabled');
  }
}
