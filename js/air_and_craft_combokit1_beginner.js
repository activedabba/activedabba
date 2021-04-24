$(document).ready(function() {

    $.getJSON("air_and_craft_combokit1_beginner.json",
        function(data) {
            var pro_duct = '';

            pro_duct += '<div class="col-lg-3 col-sm-3">'
            pro_duct += '<a class="portfolio-box" href="' + data.img1 + '">'
            pro_duct += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img1 + '">'
            pro_duct += '</a>'
            pro_duct += '</div>'
            pro_duct += '<div class="col-lg-3 col-sm-3">'
            pro_duct += '<a class="portfolio-box" href="' + data.img2 + '">'
            pro_duct += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            pro_duct += '</a>'

            // pro_duct += '<a class="portfolio-box" href="' + data.img1 + '"><button>view</button></a>'
            // pro_duct += '<button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on top </button>'
            // pro_duct+='<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And heres some amazing content.">Click to toggle popover</button>'
            pro_duct += '<button type="button" id="view" class="btn bg-primary btn-lg">View All</button>'
            pro_duct += '</div>'


            pro_duct += '<div class="col-lg-5 col-sm-3">'
            pro_duct += '<div class="align-self-baseline">'
            pro_duct += '<h5 class="mb-3">' + data.title + '</h5>'
            pro_duct += '<p>' + data.desc + '</p>'
            pro_duct += '<hr>'
            pro_duct += '<p><b>Includes : </b>' + data.include + '</p>'
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

            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img1 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img1 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img2 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img3 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img4 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img4 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img1 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img5 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img6 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img7 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img8 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img1 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img9 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'
            img_container += '<div class="col-lg-3 col-sm-3">'
            img_container += '<a class="portfolio-box" href="' + data.img10 + '">'
            img_container += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded" src="' + data.img2 + '">'
            img_container += '</a>'
            img_container += '</div>'

            $('#imgcontainer').append(img_container);
        });


});
/*
$(document).ready(function() {

    $.getJSON("air_and_craft_combokit1_beginner.json",
        function(data) {
            var pro_duct = '';
            pro_duct = +' <div class="col-lg-10 align-self-end">'
            pro_duct = +'<div class="bd-example">'
            pro_duct = +'<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">'
            pro_duct = +'<ol class="carousel-indicators">'
            pro_duct = +'<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>'
            pro_duct = +'<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>'
            pro_duct = +'<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>'
            pro_duct = +'                            </ol>'
            pro_duct = +'<div class="carousel-inner">'

            pro_duct = +'<div class="carousel-item active">'
            pro_duct = +'<img src="'+data.img3+'" class="img-fluid" alt="...">'
            pro_duct = +'<div class="carousel-caption d-none d-md-block">'
            pro_duct = +'<h5 class="text-black">Air and Craft Combo Kit 1 - Beginner</h5>'
            // pro_duct = +'<a class="btn btn-primary" href="https://api.whatsapp.com/send?phone=+917845802872&text=Hello%20ActiveDabba,%20I%20would%20like%20to%20buy%20%22Air%20and%20Craft%20Combo%20Kit%201%20-%20Beginner%22.%20Please%20contact%20me%20if%20this%20product%20is%20available%20and%20in%20stock.%20And%20the%20Product%20Url%20is%20https%3A%2F%2Factivedabba.com%2Fproduct%2Fair-and-craft-combo-kit-1--beginner%2F1">Buy</a>'

            pro_duct = +'</div>'
            pro_duct = +'</div>'
            pro_duct = +'<div class="carousel-item">'
            pro_duct = +'<img src="'+data.img2+'" class="img-fluid" alt="...">'
            pro_duct = +'<div class="carousel-caption d-none d-md-block">'
            pro_duct = +'<h5 class="text-black">Air and Craft Combo Kit 2 - Beginner</h5>'
            // pro_duct = +'<a class="btn btn-primary" href="https://api.whatsapp.com/send?phone=+917845802872&text=Hello%20ActiveDabba,%20I%20would%20like%20to%20buy%20%22Air%20and%20Craft%20Combo%20Kit%201%20-%20Beginner%22.%20Please%20contact%20me%20if%20this%20product%20is%20available%20and%20in%20stock.%20And%20the%20Product%20Url%20is%20https%3A%2F%2Factivedabba.com%2Fproduct%2Fair-and-craft-combo-kit-1--beginner%2F1">Buy</a>'

            pro_duct = +'</div>'

            pro_duct = +'</div>'
            pro_duct = +'<div class="carousel-item">'
            pro_duct = +'<img src="'+data.img2+'" class="img-fluid" alt="...">'
            pro_duct = +'<div class="carousel-caption d-none d-md-block">'
            pro_duct = +'<h5 class="text-black">Air and Craft Combo Kit 3 - Beginner</h5>'
            // pro_duct = +'<a class="btn btn-primary" href="https://api.whatsapp.com/send?phone=+917845802872&text=Hello%20ActiveDabba,%20I%20would%20like%20to%20buy%20%22Air%20and%20Craft%20Combo%20Kit%201%20-%20Beginner%22.%20Please%20contact%20me%20if%20this%20product%20is%20available%20and%20in%20stock.%20And%20the%20Product%20Url%20is%20https%3A%2F%2Factivedabba.com%2Fproduct%2Fair-and-craft-combo-kit-1--beginner%2F1">Buy</a>'

            pro_duct = +'</div>'

            pro_duct = +'</div>'
            pro_duct = +'</div>'
            pro_duct = +'<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">'
            pro_duct = +'<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
            pro_duct = +'<span class="sr-only">Previous</span>'
            pro_duct = +'</a>'
            pro_duct = +'<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">'
            pro_duct = +'<span class="carousel-control-next-icon" aria-hidden="true"></span>'
            pro_duct = +'<span class="sr-only">Next</span>'
            pro_duct = +'</a>'
            pro_duct = +'</div>'
            pro_duct = +'</div>'
            pro_duct = +'</div>'

            $('#test').append(pro_duct);
        });
});*/