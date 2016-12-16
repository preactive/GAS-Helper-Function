//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//--//
// Script return Duplicates from input.  Use objToString_() to beautify output or return.
/*
Usage:
  var dupeOut = dupExpose_("Active",0)
  var dupeOut = dupExpose_("Active",0)
  var duplicates = dupeOut["array"]
  //  [["name1"], ["name2"]]
  var dupesObj = dupeOut["dupCountsObj"]
  //{name1=-1.0, name2=-1.0, name3=5.0, name4=-1.0,..............}
*/

function dupExpose_(RefRange,Offset)
{
  
  if(Object.prototype.toString.call(RefRange) === '[object Array]')
  {
    var dataRange = RefRange;
    if(Object.prototype.toString.call(dataRange[0]) === '[object String]')
    {
     return "Not a multiDimensional Array"
    }
  }

  if(Object.prototype.toString.call(RefRange) === '[object String]')
  {
    var dataRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(RefRange).getDataRange().getValues();
  }
  
  var items = {};
  var duplicates = [];
  
  for (var i = 1, iL = dataRange.length; i < iL ; i++) 
  {
    var LoopDupCheck = dataRange[i][Offset];
    if (items[LoopDupCheck] >= 1){items[LoopDupCheck] = 1+items[LoopDupCheck];continue;}
    if (items[LoopDupCheck] == -1)
    {
      duplicates.push([LoopDupCheck]);
      items[LoopDupCheck] = 2;
      continue;
    }
    items[LoopDupCheck] = -1
  }
  var output = {array:duplicates,dupCountsObj:items}
  return output
}

//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
