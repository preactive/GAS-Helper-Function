//--//Dependent on testOrCreateSheet_() 
//Script Based ExportRange based off of the conecpts of importrange

//Example exportRange_('Sheet1!A:G','0AodPsggrbsh1dDNH....................','Main4NS!A2','y')
//Example exportRange_(TwoD_Array,'0AodPodlvjtx1dDNH....................','Main4NS!C7','y')

//Explanation exportRange_('Source Spreadsheet Tab Name and Range','Exporting Spreadsheet Key or URL','Exporting Spreadsheet Tab Name and placing cell','Will add note to the first cell of import')


function exportRange_(Source_Data,Destination_key,Destination_SheetRange,Add_Note) 
{  
  
  var Source_SheetRangeArr = Source_Data.split("!");
  var Source_Sheet = Source_SheetRangeArr[0];
  var Source_Range = Source_SheetRangeArr[1];
  
  var Destination_SheetRangeArr = Destination_SheetRange.split("!");
  var Destination_Sheet = Destination_SheetRangeArr[0];
  var Destination_Range = Destination_SheetRangeArr[1];
  
  try 
  {
    if(Object.prototype.toString.call(Source_Data) === '[object String]')
    {
      var Source_Load = SpreadsheetApp.getActive().getSheetByName(Source_Sheet).getRange(Source_Range).getValues();
    }
    if(Object.prototype.toString.call(Source_Data) === '[object Array]')
    {
      var Source_Load = Source_Data
    }
    
    var DestTypeCheck = Destination_key.indexOf("https://"); 
    if(DestTypeCheck >= 0)
    { 
      var ssOpen = SpreadsheetApp.openByUrl(Destination_key)
      }
    if(DestTypeCheck == -1)
    {
      var ssOpen = SpreadsheetApp.openById(Destination_key) 
      }
  }
  catch(e)
  {
    Logger.log(e)
    return
  }
  
  testOrCreateSheet_(Destination_Sheet,Destination_key);
  
  var Destination_RowVal = ssOpen.getSheetByName(Destination_Sheet).getRange(Destination_Range).getRow();
  var Destination_ColVal = ssOpen.getSheetByName(Destination_Sheet).getRange(Destination_Range).getColumn();
  
  ssOpen.getSheetByName(Destination_Sheet).getRange(Destination_RowVal,Destination_ColVal,Source_Load.length,Source_Load[0].length).setValues(Source_Load);
  if(Add_Note.toUpperCase() == 'Y')
  {
    var Source_Key = SpreadsheetApp.getActiveSpreadsheet().getId();
    var Source_Name = SpreadsheetApp.getActiveSpreadsheet().getName();
    
    ssOpen.getSheetByName(Destination_Sheet).getRange(Destination_RowVal,Destination_ColVal,1,1).setNote("Export Script Updated On: " + Utilities.formatDate(new Date(), "PST", "MM-dd-yyyy hh:mm a")+"\nSS Name: "+Source_Name+"\nRange: "+Source_Sheet+"!"+Source_Range+"\nSS Key: "+ Source_Key);
  }
  SpreadsheetApp.flush();
  SpreadsheetApp.getActiveSpreadsheet().toast('At: '+Source_SheetRange,'Export Completed to: '+ ssOpen.getName());    
}
