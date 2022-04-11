var $days = $('.infomation .info_days'),
    $hour = $('.infomation .info_hour'),
    $min = $('.infomation .info_min'),
    $sec = $('.infomation .info_sec');

    dayNum = $days.text();
    hourNum = $hour.text();
    minNum = $min.text();
    secNum = $sec.text();

var addzero = function(num){
  if(num < 10){
    num = '0'+ num;
    return num;
  }
  return num;
}
var startTime = function(){
  setInterval(secTime,1000);
}
var secTime = function(){
  if(secNum == '00'){
    secNum = 60;
    minTime();
  }
  --secNum;
  $sec.text(addzero(secNum));
}
var minTime = function(){
  if(minNum == '00'){
    minNum = 60;
    hourTime();
  }
  --minNum;
  $min.text(addzero(minNum));
}
var hourTime = function(){
  if(hourNum == '00'){
    hourNum = 60;
    daysTime();
  }
  --hourNum;
  $hour.text(addzero(hourNum));
}
var daysTime = function(){
  if(dayNum == '00'){
    dayNum = 60;
  }
  --dayNum;
  $days.text(addzero(dayNum));
}
startTime();
