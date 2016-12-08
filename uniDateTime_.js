//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
function uniDateTime_(InDate,TimeFormats,logs)
{
  var InDate = typeof InDate !== 'undefined' ? InDate : ""
  var TimeFormats = typeof TimeFormats !== 'undefined' ? TimeFormats : ""
  var logs = typeof logs !== 'undefined' ? logs : "";
  if (InDate == "")
  {
    if (TimeFormats == "")
    {
    return new Date();
    }
    else
    {
      var result = Utilities.formatDate(new Date(), "PST", TimeFormats);
      return result;
    }
  }
  if (Object.prototype.toString.call(InDate) === "[object Date]" ) 
  {                                                                   //date it is a date object
    if(logs=="x"){Logger.log('UniDate:1-' + InDate);}
    if ( isNaN( InDate.getTime() ) ) 
    {                                                                 // d.valueOf() could also work
      if(logs=="x"){Logger.log('UniDate:2-' + InDate);}               // date is not valid
      return;
    }
    else 
    {
      var result = Utilities.formatDate(new Date(InDate), "PST", TimeFormats);
      return result;
    }
  }
  else
  {
   if(logs=="x"){Logger.log('UniDate:3-' + InDate);}
    return;
  }
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`

