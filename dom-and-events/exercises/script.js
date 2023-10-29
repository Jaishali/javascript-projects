function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function( event ) {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });
     missionAbort.addEventListener("click", function( event ) {
        event.target.style.backgroundColor = "red";
     });
     missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });
     missionAbort.addEventListener("click", function( event ) {
        paragraph.innerHTML = 'Are you sure you want to abort the mission?';
     });
    
}

window.addEventListener("load", init);
