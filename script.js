"use strict";
var counter,
    start = 0,
    end = 0,
    service = {};

function restartCount() {
    document.getElementById("counter").innerHTML = start = 0;
}

function stopCount() {
    clearInterval(counter);
}

function resetCount() {
    document.getElementById("reset").value = "start";
    stopCount();
    document.getElementById("counter").innerHTML = document.getElementById("number").value = start = 0;
    $("#fingers, #toes").removeClass("highlight");
}

function count() {
    document.getElementById("counter").innerHTML = start += 1;
    if (start % 3 === 0) {
        $("#fingers").addClass("highlight");
    } else {
        $("#fingers").removeClass("highlight");
    }
    if (start % 5 === 0) {
        $("#toes").addClass("highlight");
    } else {
        $("#toes").removeClass("highlight");
    }
    if (start === end) {
        stopCount();
    }
}

function startCount() {
    end = Number(document.getElementById("number").value);
    counter = setInterval(count, 1000);
    document.getElementById("reset").value = "reset";
}

function toggle() {
    if (document.getElementById("reset").value === "start") {
        startCount();
    } else {
        resetCount();
    }
}