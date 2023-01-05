// JavaScript Document
function ManageTabPanelDisplay() {
//
// Between the parenthesis, list the id's of the div's that 
//     will be affected when tabs are clicked. List in any 
//     order. Put the id's in single quotes (apostrophes) 
//     and separate them with a comma -- all one line.
//
var idlist = new Array('tab1','tab2','tab3','tab4');

// No other customizations are necessary.
if(arguments.length < 1) { return; }
for(var i = 0; i < idlist.length; i++) {
   var block = false;
   for(var ii = 0; ii < arguments.length; ii++) {
      if(idlist[i] == arguments[ii]) {
         block = true;
         break;
         }
      }
   if(block) { document.getElementById(idlist[i]).style.display = "block"; }
   else { document.getElementById(idlist[i]).style.display = "none"; }
   }
}