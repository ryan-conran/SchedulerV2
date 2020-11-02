$(function () {
    let today = moment().format("dddd, MMMM Do");
    $("p").append(today);

    // create a function that will apply classes based off time

    let currentTime= moment().format('h');
    console.log(currentTime);
    for (let i=9; i<= 17; i++) {
        if(i < currentTime) {
            $("#row" + i).addClass("past");
        } else if(i == currentTime) {
            $("#row" + i).addClass("present");
        } else if( i > currentTime) ;{
            $("#row" + i).addClass("future");
        };
    };

});
