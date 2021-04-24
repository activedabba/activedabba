$(document).ready(function() {


    $.getJSON("events.json",
        function(data) {
            var event = '';
            $.each(data, function(key, value) {

                event += '<div class="col-lg-3 col-sm-3">'
                event += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + value.img + '">'
                event += '<div class="align-self-baseline">'
                event += '<h6 class="mb-2 mt-2">' + value.name + '</h6>'
                event += '<p class="text-muted mb-0">' + value.date + '</p>'
                event += '<br><a class="btn btn-primary" href="' + value.link + '">Visit</a>'
                event += '</div>'
                event += '</div>'

            });
            $('#container').append(event);
        });
});