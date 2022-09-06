$(document).ready(function () {
    // console.log("salam")
    // let elem = document.querySelector("h4").innerText

});

$(function () {

    $("h4").css("font-size", "30px")

    // let elem = $("h4").text()
    // console.log(elem);

    // let element = $("#products")
    // console.log(element);

    // let elem = $("h4").text("Ciao Bella")

    // $("#products button").click(function(){
    //   console.log($(this).text());
    // })

    //   $("#products button").click(function(){
    //     console.log($(this).text());
    //   })

    // $("#products button").click(function(){
    //     console.log($(this).html(`<span class = "text-danger">Bye bye</span>`));
    // })


    // $("#products button").click(function() {
    //     $("#products h4").hide();
    // })


    // $("#products button").first().click(function () {
        
    //     $("#products h4").hide();
    // })

    // $("#products button").first().next().click(function () {

    //     $("#products h4").show();
    // })

    // $("#products button").last().click(function () {
    //     $("#products h4").toggle();
    // })

    //  $("#products button").first().click(function() {
    //     $("#products .box").hide();
    //  })

    //  $("#products button").first().next().click(function () {
    //     $("#products .box").show();
    //  })

    //  $("#products button").last().click(function () {
    //     $("#products .box").toggle(1000, function() {
    //         $("#products .box").css("background-color","blue").toggle(1000, function () {
    //             $("#products .box").css("background-color","red").toggle(1000, function () {
    //                 $("#products .box").css("background-color","green").toggle(1000);
    //             })
    //         })
    //     });
    //  })


    $("#products button").first().next().click(function() {
        $("#products .box").show(2000);
        $("h4").css({
            "color":"hotpink",
            "font-size":"100px"
        })
     })
})