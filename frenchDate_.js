
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
function frenchDate_(date) 
{
  if ( Object.prototype.toString.call(date) === "[object Date]" ) 
  { //date it is a date object
    if ( isNaN( date.getTime() ) ) 
    {  // d.valueOf() could also work
      Logger.log('Inbound date error #1: ' + date);  // date is not valid
      return
    }
    else 
    {
      var month = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
      var day = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
      var m = month[date.getMonth()];
      var d = day[date.getDay()];
      var dateStringFr = d+' '+date.getDate()+' '+m+' '+date.getFullYear();
      return dateStringFr
    }
  }
  else
  {
    Logger.log('inbound date error #2: ' + date);
    return
  }
}
  
/*
you want to use the following format:

le xxxxx 15 cccc 2015.

replace xxxxx with days  (no capitals for weekdays in french)

Monday = lundi
Tuesday = mardi
Wednesday = mercredi
Thursday = jeudi
Friday = vendredi
Saturday = samedi
Sunday = dimanche

replace cccc with the month ( again, no capital )
January = janvier
February = février 
March = mars
April = avril
May = mai
June = juin
July = juillet
August = août
September = septembr
October = octobre 
November = novembre
December = décembre 
*/
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`

