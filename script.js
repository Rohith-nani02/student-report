function showResult() {

    let total = 419;
    let maximum = 500;

    let percentage = (total / maximum) * 100;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 60) {
        grade = "C";
    }
    else if (percentage >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    document.getElementById("result").innerHTML =
        "Result: PASS";

    document.getElementById("percentage").innerHTML =
        "Percentage: " + percentage.toFixed(2) + "%";

    document.getElementById("grade").innerHTML =
        "Grade: " + grade;
}
