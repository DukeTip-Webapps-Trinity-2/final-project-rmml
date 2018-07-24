//Global vars
var childPrice = 1400;
var adultPrice = 1500;
var seniorPrice = 1400;
var militaryPrice = 1350;
var membershipPrice = 6000;
var childVal;
var adultVal;
var seniorVal;
var militaryVal;
var membershipVal;

$(document).ready(function () {
    var total;
    $('#submit').click(priceCalculator);
});


function priceCalculator() {
    childVal = $('#Child').val();
    adultVal = $('#Adult').val();
    seniorVal = $('#Senior').val();
    militaryVal = $('#Military').val();
    membershipVal = $('#Membership').val();
    total = childPrice * childVal + adultPrice * adultVal + seniorPrice * seniorVal + militaryPrice * militaryVal + membershipPrice * membershipVal;
    console.log(total);
    if (total != NaN) {
        $('#total').text(total);
        // still working on it
        if (total <= 0) {
            total = 0;
        }

    }
}


// -1  0



//moving image

$(window).scroll(function(){
    $(".top").css("opacity", 3 - $(window).scrollTop() / 250);
  });







