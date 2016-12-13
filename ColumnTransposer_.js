function ColumnTransposer_() {
  var copyArray = [];
  for (var i=0, iL=arguments[0].length; i<iL; i++){
    var copyArrayRow = [];
    for (var a in arguments)
    {
      Logger.log(arguments[a][i].toString());
      copyArrayRow.push(arguments[a][i].toString());
    }
    copyArray.push(copyArrayRow);
  }
  return copyArray;
}
