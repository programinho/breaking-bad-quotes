goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36179__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36193__i = 0, G__36193__a = new Array(arguments.length -  0);
while (G__36193__i < G__36193__a.length) {G__36193__a[G__36193__i] = arguments[G__36193__i + 0]; ++G__36193__i;}
  args = new cljs.core.IndexedSeq(G__36193__a,0,null);
} 
return G__36179__delegate.call(this,args);};
G__36179.cljs$lang$maxFixedArity = 0;
G__36179.cljs$lang$applyTo = (function (arglist__36198){
var args = cljs.core.seq(arglist__36198);
return G__36179__delegate(args);
});
G__36179.cljs$core$IFn$_invoke$arity$variadic = G__36179__delegate;
return G__36179;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36200__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36207__i = 0, G__36207__a = new Array(arguments.length -  0);
while (G__36207__i < G__36207__a.length) {G__36207__a[G__36207__i] = arguments[G__36207__i + 0]; ++G__36207__i;}
  args = new cljs.core.IndexedSeq(G__36207__a,0,null);
} 
return G__36200__delegate.call(this,args);};
G__36200.cljs$lang$maxFixedArity = 0;
G__36200.cljs$lang$applyTo = (function (arglist__36209){
var args = cljs.core.seq(arglist__36209);
return G__36200__delegate(args);
});
G__36200.cljs$core$IFn$_invoke$arity$variadic = G__36200__delegate;
return G__36200;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
