var nameData = ['A', 'B', 'C', 'D', 'E'];   

function gradeGenerator() {
var gradeData = prompt('Enter your grade to check your letter grade');
getAvg(nameData,gradeData);
}

function getAvg(nameData, gradeData) {        
        if (gradeData>= 79) {
          alert("Your grades are " + nameData[0]);
        } else if (gradeData >= 60) {
          alert("Your grades are " + nameData[1]);
        } else if (gradeData >= 59) {
          alert("Your grades are " + nameData[2]);
        } else if (gradeData >= 40) {
          alert(" Your grades are " + nameData[3]);
        } else {
          alert("Your grades are " + nameData[4]);
        }

    }