$(document).ready(function() {

    $.getJSON("tiny-discoverer-kit.json",
        function(data) {
            var img_container = '';
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img1 + '">'
            img_container += '<img class="img-fluid" src="' + data.img1 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img2 + '">'
            img_container += '<img class="img-fluid" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img3 + '">'
            img_container += '<img class="img-fluid" src="' + data.img3 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img4 + '">'
            img_container += '<img class="img-fluid" src="' + data.img4 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img5 + '">'
            img_container += '<img class="img-fluid" src="' + data.img5 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img6 + '">'
            img_container += '<img class="img-fluid" src="' + data.img6 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img7 + '">'
            img_container += '<img class="img-fluid" src="' + data.img7 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img8 + '">'
            img_container += '<img class="img-fluid" src="' + data.img8 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img9 + '">'
            img_container += '<img class="img-fluid" src="' + data.img9 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3 mb-2">'
            img_container += '<a class="portfolio-box" href="' + data.img10 + '">'
            img_container += '<img class="img-fluid" src="' + data.img10 + '">'
            img_container += '</a>'
            img_container += '</div>'

            $('#imgcontainer').append(img_container);

            var pro_duct = '';

            pro_duct += '<div class="col-lg-5 col-sm-3">'
            pro_duct += '<div class="align-self-baseline">'
            pro_duct += '<h3 class="mb-3 text-center">' + data.title + '</h3> <br>'
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
            pro_duct += '<div class="col-lg-5 col-sm-3">'
            pro_duct += '<p class="text-center">'
            pro_duct += '<a class="btn btn-primary mb-2" target="_blank" href="' + data.btnlink + '">Buy</a></p>'
            pro_duct += '</div>'
            $('#container').append(pro_duct);


            // $("#view").click(function() {
            // alert('works!')
            // $("#imgcontainer").toggle();
            // });
            // $("#imgcontainer").css("display", "none");
            // var img_container = '';

            // img_container += '<div class="col-lg-3 col-sm-3">'
            // img_container += '<a class="portfolio-box" href="' + data.img1 + '">'
            // img_container += '<img class="img-fluid" src="' + data.img1 + '">'
            // img_container += '</a>'
            // img_container += '</div>'
            // img_container += '<div class="col-lg-3 col-sm-3">'
            // img_container += '<a class="portfolio-box" href="' + data.img2 + '">'
            // img_container += '<img class="img-fluid" src="' + data.img2 + '">'
            // img_container += '</a>'
            // img_container += '</div>'



        });


});