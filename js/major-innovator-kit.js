$(document).ready(function() {

    $.getJSON("major-innovator-kit.json",
        function(data) {
            var img_container = '';
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_1" src="' + data.img1 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_2" src="' + data.img2 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_3" src="' + data.img3 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_4" src="' + data.img4 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_5" src="' + data.img5 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_6" src="' + data.img6 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_7" src="' + data.img7 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_8" src="' + data.img8 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_9" src="' + data.img9 + '">'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<img class="img-fluid" id="image_10" src="' + data.img10 + '">'
            img_container += '</div>'

            $('#imgcontainer').append(img_container);

            var pro_duct = '';

            pro_duct += '<div class="col-lg-8 col-md-8 col-sm-12">'
            pro_duct += '<div class="align-self-baseline">'
            pro_duct += '<h3 class="mb-3 text-center">' + data.title + '</h3>'
            pro_duct += '<hr class="divider">'
            pro_duct += '<p>' + data.desc + '</p>'
            pro_duct += '<hr>'
            pro_duct += '<p><b>Includes : </b> <br>' + data.include + '</p>'
            pro_duct += '<hr>'
            pro_duct += '<p>Check out more surprise gifts inside..</p>'
            pro_duct += '<hr>'
            pro_duct += '<p><b>Levels : </b>' + data.level + '</p>'
            pro_duct += '<hr>'

            pro_duct += '<p><b>Price : </b>' + data.price + '</p>'
            // pro_duct += '<p class="text-center">'
            // pro_duct += '<a class="btn btn-primary mb-2" target="_blank" href="' + data.btnlink + '">Buy</a></p>'
            pro_duct += '</div>'
            pro_duct += '</div>'
            pro_duct += '<div class="col-lg-4 col-md-4 col-sm-12">'
            pro_duct += '<p class="text-center">'
            pro_duct += '<a class="btn btn-primary mb-2" target="_blank" href="' + data.btnlink + '">Buy</a></p>'
            pro_duct += '</div>'
            $('#container').append(pro_duct);

        });


});