let eventOne = document.getElementById("event1");
eventOne.addEventListener("click", function() {
    eventOne.style.color="red";
});

// changes color with "space" button clicked
let eventTwo = document.getElementById("event2");
document.body.addEventListener("keypress", function(eventDetails) {
    if(eventDetails.code == "Space") {
        eventTwo.style.color ="green";
    }
});


let eventThree = document.getElementById("event3");
eventThree.addEventListener("mouseenter", function(eventDetails){
    eventThree.style.color = "blue";
}) ;

eventThree.addEventListener("mouseleave", function(eventDetails){
    eventThree.style.color = "black";
});

