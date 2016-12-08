
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//--//Dependent on getColumnOffsetOfCurrentParameter_()
//Script version to conditional Formatting.
//e.g. 'setRowColors_('Status',0);'
function setRowColors_(TargetColumnHeaderContent,TargetRowForHeader)
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = SpreadsheetApp.getActiveSheet().getDataRange();
  var TargetColumnOffset = getColumnOffsetOfCurrentParameter_(TargetColumnHeaderContent,sheet);
  if (typeof TargetColumnOffset === 'undefined')
  {
    Logger.log("Column Header not found");
    return
  }
  for (var i = range.getRow(); i < range.getLastRow(); i++) 
  {
    var rowRange = range.offset(i, 0, 1);
    var status = rowRange.offset(0, TargetColumnOffset).getValue();
    if (status == 'Completed')
    {
      rowRange.setBackgroundColor("#DEAD01");  //goldenRod
    }
    else if (status == 'In Progress')
    {
      rowRange.setBackgroundColor("#FFDD88");  //Dim Yellow
    }
    else if (status == 'Not Started')
    {
      rowRange.setBackgroundColor("#CC6666");  //maroon 
    }
  }
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
