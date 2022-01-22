//DifferenceBetweenYears

var howManyYears = function(date1, date2){
    var a1=date1.split("/");
    var a2=date2.split("/");
    return Math.abs(a1[0]-a2[0])
  }