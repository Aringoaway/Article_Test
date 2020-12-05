

let  str='<div class="article-advertising">'
    +'<div class="img-wrap">'
    +'<div class="img img--orange"></div>'
    +'</div>'
    +'<div class="text-wrap">'
    +'<h1>Reklamni jednotka</h1>'
    +'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas lorem.</p>'
    +'<div class="elem"></div>'
    +'</div>';

$(str).insertAfter('#add');

$(str).insertAfter('#addtwo');

let adFooter='<div class="foot-article-add">'
    +'<div class="img-foot">'
    +'<div class="image-foot img--orange"></div>'
    +'</div>'
    +'<div class="text-foot">'
    +'<h1 class="foot-title">Reklamni jednotka</h1>'
    +'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas lorem.</p>'
    +'</div>';

$(adFooter).insertAfter('#add-footer');

let sidebar='<div class="ad">'
    +'<div class="img-ad">'
    +'<div class="image-ad img--orange"></div>'
    +'</div>'
    +'<div class="text-ad">'
    +'<h1 class="foot-title">Reklamni jednotka</h1>'
    +'<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Maecenas lorem.</p>'
    +'</div>'
    +'</div>';

$(sidebar).insertAfter('#sidebar');


$(function(){

    let sideBar = $("#sideBar");
    let mainBlock =("#mainBlock")

    sideBar.addClass("fixed");

$});