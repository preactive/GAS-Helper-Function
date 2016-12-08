//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//--//Dependent on isEmpty_()
// Blank Array Extractor/Rebuilder
// great resource @ http://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
function cleanArray_(actual)
{
    var newArray = new Array();
    for(var i = 0, aL = actual.length; i<aL; i++)
    {
        if (isEmpty_(actual[i]) == false)
        {
            newArray.push(actual[i]);
        }
    }
    return newArray;
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`

