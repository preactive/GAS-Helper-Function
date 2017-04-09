function testOrCreateSheet_(TargetSheetName,TargetWorkbook)
{
  var TargetWorkbook = typeof TargetWorkbook !== 'undefined' ? TargetWorkbook : "";
  
  try 
    {
      if(TargetWorkbook == "")
      {
        var ssOpen = SpreadsheetApp.getActive();
      }
      if(TargetWorkbook != "")
      {
        var DestTypeCheck = TargetWorkbook.indexOf("https://"); 
        if(DestTypeCheck >= 0)
        { 
          var ssOpen = SpreadsheetApp.openByUrl(TargetWorkbook)
          }
        if(DestTypeCheck == -1)
        {
          var ssOpen = SpreadsheetApp.openById(TargetWorkbook) 
          }
      }
    }
  catch(e)
    {
      Logger.log(e)
      return
    }
  var Sheet = ssOpen.getSheetByName(TargetSheetName);
  if (Sheet == null) 
  {
    var Sheet = ssOpen.insertSheet().setName(TargetSheetName);
  }  
}
