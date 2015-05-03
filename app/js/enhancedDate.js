


var enhancedDate = (function iffe() {
  'use strict';



  var myDate;
  var dayNames = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var myDayName;
  var todaysDate;
  var myMonth;
    function setDate(enterDate) {
        if (enterDate instanceof Date || typeof enterDate === "number"){
          myDate = new Date(enterDate);

        } else{
          myDate = new Date();
        }
    }


    function getDate(returnObject) {
         if (!dateIsSet){
             setDate();
         }
         if (returnObject) {
           return myDate;
         } else {
           return myDate.getTime();
         }
    }

    function getDayName() {
      if (!dateIsSet){
             setDate();
         }
      myDayName = myDate.getDay();
      return dayNames[myDayName];
    }
    function getMonthName(enterDate) {
      if (!dateIsSet){
             setDate();
         }
      myMonthName = myDate.getMonth();
      return monthNames[myMonthName];
    }
    function isFuture(enterDate) {
      if (!dateIsSet){
             setDate();
         }
      return myDate.getTime() > Date.now();
    }

  function isToday() {
      if (!dateIsSet){
             setDate();
         }
      var today = new Date();
      var month = today.getMonth();
      var date = today.getDate();
      var year = today.getYear();

      if (myDate.getMonth() === month && myDate.getDate() === date && myDate.getYear() === year){
        return true;

      } else{
        return false;
      }

    }

  return{
    setDate: setDate,
    getDate: getDate,
    getDayName: getDayName,
    getMonthName: getMonthName,
    isToday: isToday,
    isFuture: isFuture
  };

})();
enhancedDate.getDayName();
enhancedDate.getMonthName();
var message = '';
enhancedDate.setDate(new Date());

message += 'Today is ' + enhancedDate.getDayName() + ' in the month of ' + enhancedDate.getMonthName();

console.log(message);
