//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//--//Dependent on testOrCreateSheet_() 
//Script Based ImportRange

//Example importRange_('0AodPsggrbsh1dDNH....................','Main4NS!A:G','Common!C7','y')
//Example importRange_('0AodPsggrbsh1dDNH....................','Main4NS!A:G','return','y')
//Explanation importRange_('Importing Spreadsheet Key or URL','Importing Spreadsheet Tab Name and Range','Destination Spreadsheet Tab Name and Range or Return to variable','Will add note to the first cell of import')

function importRange_(Source_Key,Source_SheetRange,SetSheetRange,Add_Note) 
{
  var SourceTypeCheck = Source_Key.indexOf("https://"); 
  
  var Source_SheetRangeArr = Source_SheetRange.split("!");
  var Source_Sheet = Source_SheetRangeArr[0];
  var Source_Range = Source_SheetRangeArr[1];
  if(SourceTypeCheck >= 0)
  {
    var Load = SpreadsheetApp.openByUrl(Source_Key).getSheetByName(Source_Sheet).getRange(Source_Range).getValues();
    var Name = SpreadsheetApp.openByUrl(Source_Key).getName();
  }
  if(SourceTypeCheck == -1)
  {
    var Load = SpreadsheetApp.openById(Source_Key).getSheetByName(Source_Sheet).getRange(Source_Range).getValues();
    var Name = SpreadsheetApp.openById(Source_Key).getName();
  }
  
  if(!/^return$/i.test(SetSheetRange))
  {
    var SetSheetRangeArr = SetSheetRange.split("!");
    var Set_Sheet = SetSheetRangeArr[0];
    var Set_Range = SetSheetRangeArr[1];
    testOrCreateSheet_(Set_Sheet);                                         //testOrCreateSheet_() will autohide if the sheet does not exist already.  due to my liking of quick clean spreadsheet magic.
    var RowVal = SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(Set_Range).getRow();
    var ColVal = SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(Set_Range).getColumn();
    SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(RowVal,ColVal,Load.length,Load[0].length).setValues(Load);
    if(Add_Note.toUpperCase() == 'Y')
    {
      SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(RowVal,ColVal,1,1).setNote("Import Script Updated On: " + Utilities.formatDate(new Date(), "PST", "MM-dd-yyyy hh:mm a")+"\nSS Name: "+Name+"\nRange: "+Source_Sheet+"!"+Source_Range+"\nSS Key: "+ Source_Key);
    }
    SpreadsheetApp.flush();
    SpreadsheetApp.getActiveSpreadsheet().toast('At: '+SetSheetRange,'Import Completed:');
  }
  if(/^return$/i.test(SetSheetRange))
  {
    return Load;
  }
    
  
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`

