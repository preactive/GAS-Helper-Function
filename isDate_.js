//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
function isDate_(date,logs)
{
  var logs = typeof logs !== 'undefined' ? logs : "";
  if ( Object.prototype.toString.call(date) === "[object Date]" ) 
  { //date it is a date object
    if(logs=="x"){Logger.log('isDate:1-' + date);}
    if ( isNaN( date.getTime() ) ) 
    {  // d.valueOf() could also work
      if(logs=="x"){Logger.log('isDate:2-' + date);}  // date is not valid
      return false
    }
    else 
    {
      return true
    }
  }
  else
  {
    if(logs=="x"){Logger.log('isDate:3-' + date);}
    return false
  }
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
