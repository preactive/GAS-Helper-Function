//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//--//Dependent on isEmpty_()
function testOrCreateSheet_(TargetSheetName,HideSheet)
{
  var HideSheet = typeof HideSheet !== 'undefined' ? HideSheet : "";
  var Sheet = SpreadsheetApp.getActive().getSheetByName(TargetSheetName);
  if (Sheet == null) 
  {
    var wasNull = true;
    var Sheet = SpreadsheetApp.getActive().insertSheet().setName(TargetSheetName);
  }  
  if (!isEmpty_(HideSheet) || wasNull)  //will autohide if sheet didnt exist exist
  {
    SpreadsheetApp.getActive().getSheetByName(TargetSheetName).hideSheet();
  }
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
