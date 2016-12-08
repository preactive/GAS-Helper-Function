
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
//--//Dependent on pad_()

//Build a list of warehouse / depot email address.

//example 'var CHeckMails = WhseEmailPasser_("W",LocNum,["MGR","ADM","PHM"],"@example.com");'
//would output "d01111mgr@example.com,d01111adm@example.com,d01111phm@example.com,"

function WhseEmailPasser_(WorD, IncomingWhseNum, WhseEmails, Domain)
{
  var EmailArray = [];  
  if (IncomingWhseNum < 1000)
  {
    var PadWhseNum = pad_(IncomingWhseNum,3);
  }
  else if (IncomingWhseNum >= 1000)
  {
    var PadWhseNum = pad_(IncomingWhseNum,5);
  }
  for(var w=0, wL = WhseEmails.length; w<wL; w++)
  {
    var CurrentEmail = WhseEmails[w].toUpperCase();
    if(CurrentEmail=="HP")
    {
      var Email = CurrentEmail + PadWhseNum + "@COSTCO.COM"; 
      EmailArray.push(Email);
      continue;
    }
    var Email = WorD + PadWhseNum + CurrentEmail + "@" + Domain;
    EmailArray.push(Email);
  }
  EmailArray.push("");  //Needed for the last comma when used in emailer function.
  return EmailArray.toString();
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
