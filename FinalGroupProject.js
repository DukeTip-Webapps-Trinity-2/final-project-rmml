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
    $("#check1").click(selectOnlyThis);
    $("#check2").click(selectOnlyThis);
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
//uncheck the other box when this one is checked.
function selectOnlyThis() {
    for (var i = 1;i <= 2; i++)
    {
        var el = document.getElementById("check" + i);
        el.checked = false;
    }
    this.checked = true;
}

var childPrice1 = 60;
var adultPrice1 = 40;
var seniorPrice1 = 300;
var militaryPrice1 = 500;
var membershipPrice1 = 6000;
var child1Val;
var adult1Val;
var senior1Val;
var military1Val;
var membership1Val;

$(document).ready(function () {
    var total1;
    $("#check1").click(selectOnlyThis);
    $("#check2").click(selectOnlyThis);
    $('#submit1').click(priceCalculator);
});


function priceCalculator() {
    child1Val = $('#Child1').val();
    adult1Val = $('#Adult1').val();
    senior1Val = $('#Senior1').val();
    military1Val = $('#Military1').val();
    membership1Val = $('#Membership1').val();
    total1 = child1Price * child1Val + adult1Price * adult1Val + seniorPrice1 * seniorVal1 + militaryPrice1 * military1Val + membershipPrice1 * membership1Val;
    console.log(total1);
    if (total1 != NaN) {
        $('#total1').text(total1);
        // still working on it
        if (total1 <= 0) {
            total1 = 0;
        }

    }
}
//uncheck the other box when this one is checked.
function selectOnlyThis() {
    for (var i = 1;i <= 2; i++)
    {
        var el = document.getElementById("check" + i);
        el.checked = false;
    }
    this.checked = true;
}


//b0d2710044a92019076885661a5ce50f
$(document).ready(function () {
    $(".submit").click(function () {
        //make api call
        var city = $('.city').val()
        var apiKey = "b0d2710044a92019076885661a5ce50f";
        var uri = "https://api.openweathermap.org/data/2.5/weather?zip=" + city + ",us&units=imperial&appid=" + apiKey;
        console.log(uri);
        $.get(uri, onRes);
    });
});

function onRes(response) {
    console.log(response)
    $(".country").html(response.sys.country)
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description)
}






















































// -1  0



//moving image

$(window).scroll(function(){
    $(".top").css("opacity", 5 - $(window).scrollTop() / 250);
  });


















































































































































































































































