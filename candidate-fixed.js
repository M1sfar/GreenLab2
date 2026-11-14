/* Исправленная сборка поставщика (candidate-fixed.js).
   Устранены дефекты BUG-01 (R05), BUG-02 (R03) и BUG-03 (R09). */
(function(root){
const candidate={
  pumpStart: humidity => humidity < 35,
  hold: (previous, input) => previous.fault && !input.reset,
  order: () => ['vent', 'pump']
};
if(typeof module!=='undefined')module.exports=candidate;else root.CandidatePolicy=candidate;
})(typeof window!=='undefined'?window:globalThis);
