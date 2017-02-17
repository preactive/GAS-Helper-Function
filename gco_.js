
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//Returns the offset value of the column (Row 1) titled "Status"
//(eg, if the 7th column is labeled "Status", this function returns 6)
//
// Usage: gco_("dogs",sheet)
// Output: 1
//
// Usage: gco_("Chickens",sheet,1)
// Output: 3
//
/*
| Cats | Dogs |    Farm Animals     |  
|      |      |    Cows  | Chickens |
*/
//retired function name "getColumnOffsetOfCurrentParameter_()" and shortened to "gco_()"
function gco_(ColumnHeader,sheet,Row)
{
  Row = typeof Row !== 'undefined' ? Row : 0;  //Pre-Defined Row 1 as the title line if user does not load the second parameter with a Row Number call.
  var lastColumn = sheet.getLastColumn();
  var range = sheet.getRange(1,1,1,lastColumn);
  var HeaderObj = {};
  if(Object.prototype.toString.call(ColumnHeader) === '[object Array]')
  {
    for(var j = 0,JL = ColumnHeader.length; j < JL ; j++)
    {
      var Found = 0;
      var CurrentHeader = ColumnHeader[j];
      for(var i = 0,IL = range.getLastColumn(); i < IL ; i++)
      {
        if (range.offset(Row, i, 1, 1).getValue() == CurrentHeader)
        {
          var Found = 1;
          HeaderObj[CurrentHeader] = i;
        }
      }
      if(Found == 0)
      {
        Logger.log('Column Title: "' + ColumnHeader + '"  — Was not found on: ' + sheet.getName());
      }
    }
    return HeaderObj
  }
  
  if(Object.prototype.toString.call(ColumnHeader) === '[object String]')
  {
    var Found = 0;
    for (var i = 0,IL = range.getLastColumn(); i < IL ; i++)
    {
      if (range.offset(Row, i, 1, 1).getValue() == ColumnHeader)
      {
        var Found = 1;
        return i;
      }
    }
    if(Found == 0)
    {
      Logger.log('Column Title: "' + ColumnHeader + '"  — Was not found on: ' + sheet.getName());
    }
  }
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
