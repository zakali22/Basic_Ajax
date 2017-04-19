$(document).ready(function() {
  $.getJSON('data.json', function(data) {
      var output = '';
      $.each(data, function(key, val) {
          output += '<div class="col-sm-6 col-md-4" id="speakers">';
          output += '<div class="thumbnail">';
          output += '<img src="images/' + val.shortname + '_tn.jpg"/>';
          output += '<div class="caption">';
          output += '<h3>' + val.name + '</h3>';
          var $p = '<p>' + val.bio + '</p>';
          output += $p.substring(0, 400);
          output += '<p><a href="#" class="btn btn-primary" role="button">Contact details</a></p>';
          output += '</div>';
          output += '</div>';
          output += '</div>';
      });
      $('.row').html(output);
    });
    $('#search').keypress(function(event) {

      var searchText = $('#search').val();
      var keyText = new RegExp(searchText, "i");
        $.getJSON('data.json', function(data) {

            var output = '';
            $.each(data, function(key, val) {
              if(val.name.search(keyText) != -1){
                output += '<div class="col-sm-6 col-md-4" id="speakers">';
                output += '<div class="thumbnail">';
                output += '<img src="images/' + val.shortname + '_tn.jpg"/>';
                output += '<div class="caption">';
                output += '<h3>' + val.name + '</h3>';
                var $p = '<p>' + val.bio + '</p>';
                output += $p.substring(0, 400);
                output += '<p><a href="#" class="btn btn-primary" role="button">Contact details</a></p>';
                output += '</div>';
                output += '</div>';
                output += '</div>';
              }
            });
            $('.row').html(output);
          });
    });
});
