let weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

window.addEventListener("load", showWeekDays);
function showWeekDays(){
    let i = 0;
    // finds header cells
    let headingCells = document.getElementsByTagName("th");
    while (i < 7) {
        // writes the week days into the header cells
        headingCells[i].innerHTML = weekDays[i];
        i++; // plus one to the counter
    }
}