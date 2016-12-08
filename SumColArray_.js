
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//--//Dependent on cleanArray_()
// Array Col Sum Agent
function SumColArray_(sumagent)
{
    var newArray = new Array();
    for(var i = 0, sL = sumagent.length; i<sL; i++)
    {
       var totalsum = 0
       var CleanForSum = cleanArray_(sumagent[i]);
       for(var d = 0, CFSL = CleanForSum.length; d<CFSL; d++)
       {  
        totalsum += CleanForSum[d];
       }
      newArray.push(Math.round(totalsum));
    }
    return newArray;
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
