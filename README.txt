Maddox- FrameWork of Website, About Page, Tickets, JavaScript, and, finding cities and various addresses
Logan- Special Events Page, Contact Page, Month Pages, and, Carousel for Index
Madison- Home Page, finding fonts "back to the future" and "lazer 84" and,
Richard- Rides Page, cards for ride page, finding images for rides  and,







<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" integrity="sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B" crossorigin="anonymous">

   
    <title>weather boi</title>
  </head>
  <body>

<div class="text-center">
    <h3> The Weather </h3>
    <input class="city" type="text"></input>
    <button class="submit">Submit</button>
    <div>Weather in :
        <span class="city-name"></span>
    </div>


    <div class="weather"></div>

    <div class="temp"></div>

    <div class="country"></div>


     <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
    <script src="weather.js"></script>
</body>
    </html>





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












































































































































































































































