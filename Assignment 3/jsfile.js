function printDate()
{
    var todayDate = new Date()
    document.write("Today's date in DD/MM/YYYY is "+todayDate.getDate()+"/"+(todayDate.getMonth()+1)+"/"+todayDate.getFullYear())
    //javaScript getMonth() starts from 0, hence added 1 to get the correct month
}   

printDate()