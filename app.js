let time = 25 * 60000, session = 0, interval;

function startTimer() {
    document.getElementById("info").innerHTML = "Work it!";
    interval = setInterval(function() {
        if (time <= 0) {
            clearInterval(interval);
            document.title = "Next session starting now...";
            document.getElementById("timer").innerHTML = "00:00";
            checkSession();
            checkTime();
            startTimer();
        } else {
            document.getElementById("timer").innerHTML = writeTime(time);
            if (session % 2 != 0 || session == 8) {
                document.title = "Break time: " + writeTime(time);
                document.getElementById("info").innerHTML = "Time for a sweet break.";
            } else {
                document.title = writeTime(time);
            }
        }
        time -= 1000;
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
    document.getElementById("info").innerHTML = "We've been paused.";
    document.getElementById("timer").innerHTML = writeTime(time);
    document.title = "Paused @ " + writeTime(time);
}

function stopTimer() {
    clearInterval(interval);
    document.getElementById("info").innerHTML = "Let's try that again! Press start.";
    document.getElementById("timer").innerHTML = "00:00";
    document.title = "Yeah, that's fine!";
    time = 25 * 60000;
    session = 0;
}

function checkSession() {
    if (session < 8) {
        session++;
    } else {
        session = 0;
    }
}

function checkTime() {
    if (session % 2 != 0 && session <= 8) {
        time = 5 * 60000;
    } else if (session % 2 == 0 && session <= 8) {
        time = 25 * 60000;
    } else if (session == 8) {
        time = 30 * 60000;
        document.getElementById("info").innerHTML = "Go on! I'll see you in 30 ;)";
    }
}

function writeTime(ms) {
    let minutes, seconds, readableTime;
    minutes = parseInt((ms / 1000) / 60);
    seconds = parseInt((ms / 1000) % 60);
    readableTime = `${minutes}`.padStart(2, '0') + ":" + `${seconds}`.padStart(2, '0');
    return readableTime;
}

