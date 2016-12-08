//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`
// Checker for AS400 DB Showcase-query output for negative numbers
// Thanks Stephen Ewell for writing this one.
function queryNegetive_(value) {
  
  var pattern = /(^\d{1,})?(.)?(\d{1,})?(-)/
  var output = value.toString();
	check = output.match(pattern);
	if (check != null) {
		var a;
		if (check[1] != null) {
			a = check[1];
        } else if (check[2] != null && check[3] != null) {
          a = "0";
        }
		if (check[2] != null && check[3] != null) {
			a += check[2] + check[3];
		}
		a = 0.0 - Number(a)
		return Number(a);
	}
  
	return Number(value);
}
//~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`~,~`

