//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//--//Dependent on isEmpty_()
// Script Look-up
/*
Benefit of this script is:
-That google sheets will not continually do lookups on data that is not changing with using this function as it is set with hard values until script is kicked off again.
-Unlike Vlookup you can have it look at for reference data at any Column in the row.  Does not have to be in the first column for it to work like Vlookup.
-You can return the Lookup to Memory for further processing by other functions

Useage:

Lookup_(SheetinfoArray,"Sheet1!A:B",0,[1],"Sheet1!I1","n","y","n");
//or
Lookup_(Sheetinfo,"Sheet1!A:B",0,[1],"return","n","n","y");
//or
Lookup_(SheetinfoArray,"Sheet1!A:B",0,[0,1],"return","n","n","y");
//or
Lookup_(Sheetinfo,"Sheet1!A:B",1,[1,3,0,2],"return","y","n","n");
//or
Lookup_("female","Sheet1!A:G",4,[2],"Database!A1","y","y","y");
//or
Lookup_(Sheetinfo,LocationsArr,4,[0],"return","y","n","y");
//or
Lookup_(/RegEx+/i,LocationsArr,4,[0],"return","y","n","y");

Parameters Explaination:
"Search_Key" - Can be be a string, array, or regex to lookup multiple things at once

"RefSheetRange" - The Reference source of information.  Can be local sheet reference and range or an array of data from a variable.

"SearchKey_RefMatch_IndexOffSet" - What column of information you are referencing of 'Search_Key' to 'RefSheetRange' data.

"IndexOffSetForReturn" - Once a 'Search_Key' match has been found what columns of data will be returned from 'RefSheetRange'.

"SetSheetRange" - Where are you going to put the chosen information from 'RefSheetRange' that matched 'Search_Key' OR you can use 'return' and when the function finishes it will return so you can output the function to a variable.

"ReturnMultiResults" - If 'Y' Say you 'Search_Key' is 'NW' and you want to find every store in a chain that falls under the northwest in your dataset. So declaring 'Y' wont stop after it finds the first match it will keep searching throught the rest of the data.

"Add_Note" - If 'Y' you are setting the results to a spreadsheet and not returning it to memory then it will set the first cell in the 'SetSheetRange' with a note of what and when.

"Has_NAs" - If  'Y' it will put in '#N/A' the column where it did not find data for 'Search_Key' other wise it will leave the column blank.


Todo: refactor (ReturnMultiResults,Add_Note,Has_NAs) into Object via single paramerter and add debug for build in logger output.  ex (  {returnMultiResults:True,addNote:False,hasNAs:True,debug:True}   )
default will be false but can be declaired specific as well with no ill effect.
*/

function Lookup_(Search_Key,RefSheetRange,SearchKey_RefMatch_IndexOffSet,IndexOffSetForReturn,SetSheetRange,ReturnMultiResults,Add_Note,Has_NAs)   
{
  if(/^y$/i.test(Has_NAs))
  {
    var NALoad = "#N/A";
  }
  else
  {
    var NALoad = "";
  }
  
  var SK_type = Object.prototype.toString.call(Search_Key);
  
  if(Object.prototype.toString.call(Search_Key) === '[object Array]')
  {
    var SKL = Search_Key.length;
  }
  
  if(Object.prototype.toString.call(Search_Key) === '[object String]')
  {
    var Search_Key = new Array(Search_Key);
    var SKL = Search_Key.length;
  }
  
  if(Object.prototype.toString.call(Search_Key) === '[object RegExp]')
  {
    var SKL = 1;
  }
  
  if(Object.prototype.toString.call(IndexOffSetForReturn) === '[object Number]')
  {
    var IndexOffSetForReturn = new Array(IndexOffSetForReturn.toString());
  }
  
  if(Object.prototype.toString.call(RefSheetRange) === '[object String]')
  {
    var RefSheetRangeArr = RefSheetRange.split("!");
    var Ref_Sheet = RefSheetRangeArr[0];
    var Ref_Range = RefSheetRangeArr[1];
    var data = SpreadsheetApp.getActive().getSheetByName(Ref_Sheet).getRange(Ref_Range).getValues();         //Syncs sheet by name and range into var
  }
  
  if(Object.prototype.toString.call(RefSheetRange) === '[object Array]')
  {
    var data = RefSheetRange;
  }
  
  if(!/^return$/i.test(SetSheetRange))
  {
  var SetSheetRangeArr = SetSheetRange.split("!");
  var Set_Sheet = SetSheetRangeArr[0];
  var Set_Range = SetSheetRangeArr[1];
  var RowVal = SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(Set_Range).getRow();
  var ColVal = SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(Set_Range).getColumn();
  }
  
  var twoDimensionalArray = [];
  for (var i = 0, Il=SKL; i<Il; i++)                                                         // i = number of rows to index and search  
  {
    var Sending = [];                                                                                      //Making a Blank Array
    var newArray = [];                                                                                     //Making a Blank Array
    var Found ="";
    for (var nn=0, NNL=data.length; nn<NNL; nn++)                                                                 //nn = will be the number of row that the data is found at
    {
      var SK_Pass = false;                                                                                         // resets SK_pass for looping check.
      if(Found==1 && /^n$/i.test(ReturnMultiResults))                                                                                         //if statement for found if found = 1 it will to stop all other logic in nn loop from running
      {
        break;                                                                                             //Breaking nn loop once found
      }
      
      if (SK_type === '[object RegExp]')
      {
        if (Search_Key.test(data[nn][SearchKey_RefMatch_IndexOffSet]))                                              //if statement is triggered when the search_key is found.
        {
          var SK_Pass = true; 
        }
      }
      if (SK_type === '[object String]' || SK_type === '[object Array]')
      {
        if (data[nn][SearchKey_RefMatch_IndexOffSet]==Search_Key[i])                                              //if statement is triggered when the search_key is found.
        {
          var SK_Pass = true; 
        }
      }
      if (SK_Pass)                                              //if statement is triggered when the search_key is found.
      {
        var newArray = [];
        for (var cc=0, CCL=IndexOffSetForReturn.length; cc<CCL; cc++)                                         //cc = numbers of columns to referance
        {
          var iosr = IndexOffSetForReturn[cc];                                                             //Loading the value of current cc
          var Sending = data[nn][iosr];                                                                    //Loading data of Level nn offset by value of cc
          if(isEmpty_(Sending))                                                                            //if statement for if one of the returned Column level cells are blank
          {
            var Sending =  NALoad;                                                                           //Sets #N/A on all column levels that are blank
          }
          if (CCL>1)                                                                                       //if statement for multi-Column returns
          {
            newArray.push(Sending);
            if(CCL-1 == cc)                                                                                //if statement for pulling all columns into larger array
            {
              twoDimensionalArray.push(newArray);
              var Found = 1;                                                                              //Modifying found to 1 if found to stop all other logic in nn loop
              break;                                                                                      //Breaking cc loop once found
            }
          }
          else if (CCL<=1)                                                                                 //if statement for single-Column returns
          {
            twoDimensionalArray.push(Sending);
            var Found = 1;                                                                                 //Modifying found to 1 if found to stop all other logic in nn loop
            break;                                                                                         //Breaking cc loop once found
          }
        }
      }
      if(NNL-1==nn && isEmpty_(Sending))                                                             //following if statement is for if the current item in lookup array is not found.  Nessessary for data structure.
      {
        for(var na=0,NAL=IndexOffSetForReturn.length;na<NAL;na++)                                          //looping for the number of columns to place "#N/A" in to preserve data structure
        {
          if (NAL<=1)                                                                                      //checks to see if it's a single column return
          {
            var Sending = NALoad;
            twoDimensionalArray.push(Sending);
          }
          else if (NAL>1)                                                                                  //checks to see if it's a Multi column return
          {
            var Sending = NALoad;
            newArray.push(Sending);
          }
        }
        if (NAL>1)                                                                                         //checks to see if it's a Multi column return
        {
          twoDimensionalArray.push(newArray);  
        }
      }
    }
  }
  if(!/^return$/i.test(SetSheetRange))
  {
    if (CCL<=1)                                                                                            //checks to see if it's a single column return for running setValue
    {
      var singleArrayForm = [];
      for (var l = 0,lL=twoDimensionalArray.length; l<lL; l++)                                                          //Builds 2d Looping-Array to allow choosing of columns at a future point
      {
        singleArrayForm.push([twoDimensionalArray[l]]);
      }
      SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(RowVal,ColVal,singleArrayForm.length,singleArrayForm[0].length).setValues(singleArrayForm);
    }
    if (CCL>1)                                                                                             //checks to see if it's a multi column return for running setValues
    {
      SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(RowVal,ColVal,twoDimensionalArray.length,twoDimensionalArray[0].length).setValues(twoDimensionalArray);
    }
    if(/^y$/i.test(Add_Note))
    {
      if(Object.prototype.toString.call(RefSheetRange) === '[object Array]')
      {
        SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(RowVal,ColVal,1,1).setNote("VLookup Script Ran On: " + Utilities.formatDate(new Date(), "PST", "MM-dd-yyyy hh:mm a") + "\nRange: Origin Variable" );      
      }
      if(Object.prototype.toString.call(RefSheetRange) === '[object String]')
      {
        SpreadsheetApp.getActive().getSheetByName(Set_Sheet).getRange(RowVal,ColVal,1,1).setNote("VLookup Script Ran On: " + Utilities.formatDate(new Date(), "PST", "MM-dd-yyyy hh:mm a") + "\nRange: " + RefSheetRange);      
      }
    }
    SpreadsheetApp.flush();
    SpreadsheetApp.getActiveSpreadsheet().toast('At: '+SetSheetRange,'Lookup Completed:');
  }
  if(/^return$/i.test(SetSheetRange))
  {
    return twoDimensionalArray
  }
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
