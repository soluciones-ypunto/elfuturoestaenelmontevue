/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 458, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         $("head").append('<link rel="stylesheet" type="text/css" href="css/custom.css">');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'sprite-ave_symbol_1'
   (function(symbolName) {   
   
   })("sprite-ave_symbol_1");
   //Edge symbol end:'sprite-ave_symbol_1'

   //=========================================================
   
   //Edge symbol: 'sprite-ave-2_symbol_1'
   (function(symbolName) {   
   
   })("sprite-ave-2_symbol_1");
   //Edge symbol end:'sprite-ave-2_symbol_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-87349064");