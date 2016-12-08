//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
// Subtract Days from Date Function
// Thanks Sean Dalhover for finding this golden nugget!!!
// if 'TimeFrame' is 7/20/2016 from 'var TimeFrame = col[0];' in a loop and you want to email someone 10 days before that date you would:
// subDaysFromDate_(TimeFrame,'10')
// would return 7/10/2016 

function subDaysFromDate_(date,d,logs)
{
  var logs = typeof logs !== 'undefined' ? logs : "";
    if ( Object.prototype.toString.call(date) === "[object Date]" ) 
  { //date it is a date object
    if(logs=="x"){Logger.log('subDaysFromDate:1-' + date);}
    if ( isNaN( date.getTime() ) ) 
    {  // d.valueOf() could also work
      if(logs=="x"){Logger.log('subDaysFromDate:2-' + date);}  // date is not valid
      return
    }
    else 
    {
      var dateToAlter = date;
      var result = new Date(dateToAlter.getTime()-d*(24*3600*1000));
      return result
      }
  }
  else
  {
    if(logs=="x"){Logger.log('subDaysFromDate:3-' + date);}
    return
  }
}

//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
