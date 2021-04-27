$(document).ready(function() {
    $.getJSON("product.json",
        function(data) {
            var pro_duct = '';
            $.each(data, function(key, value) {
                pro_duct += '<div class="col-lg-4 col-sm-6">'
                pro_duct += '<img class="img-fluid shadow p-3 mb-5 bg-body rounded zoom" src="' + value.link + '">'
                pro_duct += '<div class="align-self-baseline">'
                pro_duct += '<h5 class="text-center mb-1">' + value.title + '</h5>'
                pro_duct += '<p class="text-center text-muted mb-0">' + value.price + '</p><br>'
                pro_duct += '<p class="text-center">'
                pro_duct += '<a class="btn btn-primary mb-2" target="_blank" href="' + value.btnlink + '">View</a></p>'
                pro_duct += '</div>'
                pro_duct += '</div>'
            });
            $('#container').append(pro_duct);
        });
});

// var data1 = JSON.parse(product);


// import data1 from "/data/product.json"
// console.log(data1);
// var data = {
//     "content": [{
//             "title": "Air and Craft Combo Kit 1 - Beginner",
//             "price": "Price: ₹ 199",
//             "link": "assets/img/workbooks/free-workbook.jpg",
//             "btnlink": "products_details.html",
//         },
//         {
//             "title": "Air and Craft Combo Kit 2 - Beginner",
//             "price": "Price: ₹ 199",
//             "link": "assets/img/workbooks/free-workbook.jpg",
//             "btnlink": "",
//         },
//         {
//             "title": "Air and Craft Combo Kit 3 - Beginner",
//             "price": "Price: ₹ 199",
//             "link": "assets/img/workbooks/free-workbook.jpg",
//             "btnlink": "",
//         },
//         {
//             "title": "Air and Craft Combo Kit 3 - Beginner",
//             "price": "Price: ₹ 199",
//             "link": "assets/img/workbooks/free-workbook.jpg",
//             "btnlink": "",
//         }

//     ]
// };



// var template = {
//     "tag": "div",
//     "class": "row justify-content-center",
//     "id": function(obj, index) { return (index); },
//     "class": "col-lg-3 col-sm-3",
//     "children": [

//         { "tag": "img", "class": "img-fluid shadow p-3 mb-5 bg-body rounded", "src": "${link}", "html": "${link}" },
//         { "tag": "div", "class": "align-self-baseline", "tag": "h5", "class": "mb-1", "html": "${title}" },
//         { "tag": "p", "class": "text-muted mb-2", "html": "${price}" },
//         { "tag": "a", "class": "btn btn-primary text-center", "href": "${btnlink}", "html": "View" }
//     ]
// };

// $('#container').json2html(data.content, template);