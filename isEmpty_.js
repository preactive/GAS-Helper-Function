
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
// Empty String Check
function isEmpty_(string) 
{
  if(Object.prototype.toString.call(string) === '[object Boolean]') return false;
  
  if(!string)             return true;         
  if(string == '')        return true;
  if(string === false)    return true; 
  if(string === null)     return true; 
  if(string == undefined) return true;
  string = string+' '; // check for a bunch of whitespace
  if('' == (string.replace(/^\s\s*/, '').replace(/\s\s*$/, ''))) return true;       
  
  return false;        
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`

