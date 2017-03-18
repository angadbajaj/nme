var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

$(document).ready(function(){

	var sloganArea = $('.slogan ul');
	sloganArea.width(sloganArea.find('li').eq(0).find('span').width());

	setInterval(function () {
		var itemHeight = $('.slogan ul li').eq(0).height();

		sloganArea.animate({
			width : $('.slogan ul li').eq(1).find('span').width(),
			top : itemHeight * -1
		},200, function(){
			sloganArea.append($('.slogan ul li').eq(0));
			sloganArea.css('top', 0);

			$('.slogan ul li').each(function(i){
				$(this).css('top', i*itemHeight);
			});
		});

	}, 2000);

});
