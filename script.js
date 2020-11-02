$(function () {
    let today = moment().format("dddd, MMMM Do");
    $("p").append(today);

    // create a function that will apply classes based off time

    let currentTime= moment().format('H');
    console.log(currentTime);
    for (i=9; i<= 17; i++) {
        if(i < currentTime) {
            $("#row9").addClass("past");
            $("#row10").addClass("past");
            $("#row11").addClass("past");
            $("#row12").addClass("past");
            $("#row13").addClass("past");
            $("#row14").addClass("past");
            $("#row15").addClass("past");
            $("#row16").addClass("past");
            $("#row17").addClass("past");
        } else if(i == currentTime) {
            $("#row9").addClass("present");
            $("#row10").addClass("present");
            $("#row11").addClass("present");
            $("#row12").addClass("present");
            $("#row13").addClass("present");
            $("#row14").addClass("present");
            $("#row15").addClass("present");
            $("#row16").addClass("present");
            $("#row17").addClass("present");
        } else( i > currentTime) ;{
            $("#row9").addClass("future");
            $("#row10").addClass("future");
            $("#row11").addClass("future");
            $("#row12").addClass("future");
            $("#row13").addClass("future");
            $("#row14").addClass("future");
            $("#row15").addClass("future");
            $("#row16").addClass("future");
            $("#row17").addClass("future");
        };
    };

});
