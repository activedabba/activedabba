$(document).ready(function() {


    $.getJSON("workshops.json",
        function(data) {
            var workshop = '';
            $.each(data, function(key, value) {

                workshop += '<div class="col-lg-3 col-sm-3">'
                workshop += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + value.img + '">'
                workshop += '<div class="align-self-baseline">'
                workshop += '<h6 class="mb-2 mt-2">' + value.name + '</h6>'
                workshop += '<p class="text-muted mb-0">' + value.date + '</p>'
                workshop += '<br><a class="btn btn-primary" href="' + value.link + '">Visit</a>'
                workshop += '</div>'
                workshop += '</div>'

            });
            $('#container').append(workshop);
        });
});