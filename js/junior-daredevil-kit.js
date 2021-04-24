$(document).ready(function() {

    $.getJSON("junior-daredevil-kit.json",
        function(data) {
            var pro_duct = '';

            pro_duct += '<div class="col-lg-3 col-sm-3">'
            pro_duct += '<a class="portfolio-box" href="' + data.img1 + '">'
            pro_duct += '<img class="img-fluid" src="' + data.img1 + '">'
            pro_duct += '</a>'
            pro_duct += '</div>'
            pro_duct += '<div class="col-lg-3 col-sm-3">'
            pro_duct += '<a class="portfolio-box" href="' + data.img2 + '">'
            pro_duct += '<img class="img-fluid" src="' + data.img2 + '">'
            pro_duct += '</a>'

            // pro_duct += '<a class="portfolio-box" href="' + data.img1 + '"><button>view</button></a>'
            // pro_duct += '<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on top </button>'
            // pro_duct+='<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And heres some amazing content.">Click to toggle popover</button>'
            pro_duct += '<button type="button" id="view" class="btn bg-primary btn-lg mt-5">View All</button>'
            pro_duct += '</div>'


            pro_duct += '<div class="col-lg-5 col-sm-3">'
            pro_duct += '<div class="align-self-baseline">'
            pro_duct += '<h5 class="mb-3 text-center">' + data.title + '</h5> <br>'
            pro_duct += '<p>' + data.desc + '</p>'
            pro_duct += '<hr>'
            pro_duct += '<p><b>Includes : </b> <br>' + data.include + '</p>'
            pro_duct += '<hr>'
            pro_duct += '<p>Check out more surprise gifts inside..</p>'
            pro_duct += '<hr>'
            pro_duct += '<p><b>Levels : </b>' + data.level + '</p>'
            pro_duct += '<hr>'

            pro_duct += '<p><b>Price : </b>' + data.price + '</p>'
            pro_duct += '<p class="text-center">'
            pro_duct += '<a class="btn btn-primary mb-2" href="' + data.btnlink + '">Buy</a></p>'
            pro_duct += '</div>'
            pro_duct += '</div>'
            $('#container').append(pro_duct);


            $("#view").click(function() {
                // alert('works!')
                $("#imgcontainer").toggle();
            });
            $("#imgcontainer").css("display", "none");
            var img_container = '';

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
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img3 + '">'
            img_container += '<img class="img-fluid" src="' + data.img3 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img4 + '">'
            img_container += '<img class="img-fluid" src="' + data.img4 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img5 + '">'
            img_container += '<img class="img-fluid" src="' + data.img5 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img6 + '">'
            img_container += '<img class="img-fluid" src="' + data.img6 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img7 + '">'
            img_container += '<img class="img-fluid" src="' + data.img7 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img8 + '">'
            img_container += '<img class="img-fluid" src="' + data.img8 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img9 + '">'
            img_container += '<img class="img-fluid" src="' + data.img9 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img10 + '">'
            img_container += '<img class="img-fluid" src="' + data.img10 + '">'
            img_container += '</a>'
            img_container += '</div>'


            $('#imgcontainer').append(img_container);
        });


});