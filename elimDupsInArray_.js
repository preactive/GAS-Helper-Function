//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//Elimnates Duplicates in one or two dimensional array 
function elimDupsInArray_(arr) 
{
  if(!Array.isArray(arr))
  {
    Logger.log("Inbound Parameter 'arr' is not an Array.  Returning"); 
    return
  }
  var out=[];
  var obj={};
  for (var i=0, vL=arr.length; i<vL; i++) 
  {
    obj[arr[i]]=0;
  }
  for (var i in obj) 
  {
    if(Array.isArray(arr[0]))
    {
      out.push(i.split(','));
    }
    else
    {
      out.push([i]);
    }
  }
  return out;
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
