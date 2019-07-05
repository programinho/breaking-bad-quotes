goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37876){
var map__37877 = p__37876;
var map__37877__$1 = (((((!((map__37877 == null))))?(((((map__37877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37877):map__37877);
var m = map__37877__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37879_38012 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37880_38013 = null;
var count__37881_38014 = (0);
var i__37882_38015 = (0);
while(true){
if((i__37882_38015 < count__37881_38014)){
var f_38016 = chunk__37880_38013.cljs$core$IIndexed$_nth$arity$2(null,i__37882_38015);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38016], 0));


var G__38017 = seq__37879_38012;
var G__38018 = chunk__37880_38013;
var G__38019 = count__37881_38014;
var G__38020 = (i__37882_38015 + (1));
seq__37879_38012 = G__38017;
chunk__37880_38013 = G__38018;
count__37881_38014 = G__38019;
i__37882_38015 = G__38020;
continue;
} else {
var temp__5720__auto___38021 = cljs.core.seq(seq__37879_38012);
if(temp__5720__auto___38021){
var seq__37879_38022__$1 = temp__5720__auto___38021;
if(cljs.core.chunked_seq_QMARK_(seq__37879_38022__$1)){
var c__4550__auto___38028 = cljs.core.chunk_first(seq__37879_38022__$1);
var G__38029 = cljs.core.chunk_rest(seq__37879_38022__$1);
var G__38030 = c__4550__auto___38028;
var G__38031 = cljs.core.count(c__4550__auto___38028);
var G__38032 = (0);
seq__37879_38012 = G__38029;
chunk__37880_38013 = G__38030;
count__37881_38014 = G__38031;
i__37882_38015 = G__38032;
continue;
} else {
var f_38039 = cljs.core.first(seq__37879_38022__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38039], 0));


var G__38040 = cljs.core.next(seq__37879_38022__$1);
var G__38041 = null;
var G__38042 = (0);
var G__38043 = (0);
seq__37879_38012 = G__38040;
chunk__37880_38013 = G__38041;
count__37881_38014 = G__38042;
i__37882_38015 = G__38043;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38047 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38047], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38047)))?cljs.core.second(arglists_38047):arglists_38047)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37883_38063 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37884_38064 = null;
var count__37885_38065 = (0);
var i__37886_38066 = (0);
while(true){
if((i__37886_38066 < count__37885_38065)){
var vec__37897_38080 = chunk__37884_38064.cljs$core$IIndexed$_nth$arity$2(null,i__37886_38066);
var name_38081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37897_38080,(0),null);
var map__37900_38082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37897_38080,(1),null);
var map__37900_38083__$1 = (((((!((map__37900_38082 == null))))?(((((map__37900_38082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37900_38082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37900_38082):map__37900_38082);
var doc_38084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37900_38083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37900_38083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38081], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38085], 0));

if(cljs.core.truth_(doc_38084)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38084], 0));
} else {
}


var G__38086 = seq__37883_38063;
var G__38087 = chunk__37884_38064;
var G__38088 = count__37885_38065;
var G__38089 = (i__37886_38066 + (1));
seq__37883_38063 = G__38086;
chunk__37884_38064 = G__38087;
count__37885_38065 = G__38088;
i__37886_38066 = G__38089;
continue;
} else {
var temp__5720__auto___38090 = cljs.core.seq(seq__37883_38063);
if(temp__5720__auto___38090){
var seq__37883_38091__$1 = temp__5720__auto___38090;
if(cljs.core.chunked_seq_QMARK_(seq__37883_38091__$1)){
var c__4550__auto___38092 = cljs.core.chunk_first(seq__37883_38091__$1);
var G__38093 = cljs.core.chunk_rest(seq__37883_38091__$1);
var G__38094 = c__4550__auto___38092;
var G__38095 = cljs.core.count(c__4550__auto___38092);
var G__38096 = (0);
seq__37883_38063 = G__38093;
chunk__37884_38064 = G__38094;
count__37885_38065 = G__38095;
i__37886_38066 = G__38096;
continue;
} else {
var vec__37902_38097 = cljs.core.first(seq__37883_38091__$1);
var name_38098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37902_38097,(0),null);
var map__37905_38099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37902_38097,(1),null);
var map__37905_38100__$1 = (((((!((map__37905_38099 == null))))?(((((map__37905_38099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37905_38099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37905_38099):map__37905_38099);
var doc_38101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37905_38100__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37905_38100__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38098], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38102], 0));

if(cljs.core.truth_(doc_38101)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38101], 0));
} else {
}


var G__38119 = cljs.core.next(seq__37883_38091__$1);
var G__38120 = null;
var G__38121 = (0);
var G__38122 = (0);
seq__37883_38063 = G__38119;
chunk__37884_38064 = G__38120;
count__37885_38065 = G__38121;
i__37886_38066 = G__38122;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37908 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37909 = null;
var count__37910 = (0);
var i__37911 = (0);
while(true){
if((i__37911 < count__37910)){
var role = chunk__37909.cljs$core$IIndexed$_nth$arity$2(null,i__37911);
var temp__5720__auto___38143__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38143__$1)){
var spec_38144 = temp__5720__auto___38143__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38144)], 0));
} else {
}


var G__38146 = seq__37908;
var G__38147 = chunk__37909;
var G__38148 = count__37910;
var G__38149 = (i__37911 + (1));
seq__37908 = G__38146;
chunk__37909 = G__38147;
count__37910 = G__38148;
i__37911 = G__38149;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__37908);
if(temp__5720__auto____$1){
var seq__37908__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37908__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37908__$1);
var G__38150 = cljs.core.chunk_rest(seq__37908__$1);
var G__38151 = c__4550__auto__;
var G__38152 = cljs.core.count(c__4550__auto__);
var G__38153 = (0);
seq__37908 = G__38150;
chunk__37909 = G__38151;
count__37910 = G__38152;
i__37911 = G__38153;
continue;
} else {
var role = cljs.core.first(seq__37908__$1);
var temp__5720__auto___38154__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38154__$2)){
var spec_38155 = temp__5720__auto___38154__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38155)], 0));
} else {
}


var G__38156 = cljs.core.next(seq__37908__$1);
var G__38157 = null;
var G__38158 = (0);
var G__38159 = (0);
seq__37908 = G__38156;
chunk__37909 = G__38157;
count__37910 = G__38158;
i__37911 = G__38159;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38162 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38163 = cljs.core.ex_cause(t);
via = G__38162;
t = G__38163;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37915 = datafied_throwable;
var map__37915__$1 = (((((!((map__37915 == null))))?(((((map__37915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37915):map__37915);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37915__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37916 = cljs.core.last(via);
var map__37916__$1 = (((((!((map__37916 == null))))?(((((map__37916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37916):map__37916);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37917 = data;
var map__37917__$1 = (((((!((map__37917 == null))))?(((((map__37917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37917):map__37917);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37918 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37918__$1 = (((((!((map__37918 == null))))?(((((map__37918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37918):map__37918);
var top_data = map__37918__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37918__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37924 = phase;
var G__37924__$1 = (((G__37924 instanceof cljs.core.Keyword))?G__37924.fqn:null);
switch (G__37924__$1) {
case "read-source":
var map__37925 = data;
var map__37925__$1 = (((((!((map__37925 == null))))?(((((map__37925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37925):map__37925);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37925__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37927 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37927__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37927,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37927);
var G__37927__$2 = (cljs.core.truth_((function (){var fexpr__37928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37928.cljs$core$IFn$_invoke$arity$1 ? fexpr__37928.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37928.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37927__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37927__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37927__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37927__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37929 = top_data;
var G__37929__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37929,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37929);
var G__37929__$2 = (cljs.core.truth_((function (){var fexpr__37930 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37930.cljs$core$IFn$_invoke$arity$1 ? fexpr__37930.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37930.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37929__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37929__$1);
var G__37929__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37929__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37929__$2);
var G__37929__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37929__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37929__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37929__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37929__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37931 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37931,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37931,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37931,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37931,(3),null);
var G__37934 = top_data;
var G__37934__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37934,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37934);
var G__37934__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37934__$1);
var G__37934__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37934__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37934__$2);
var G__37934__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37934__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37934__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37934__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37934__$4;
}

break;
case "execution":
var vec__37939 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__37939,source__$1,method,file,line,G__37924,G__37924__$1,map__37915,map__37915__$1,via,trace,phase,map__37916,map__37916__$1,type,message,data,map__37917,map__37917__$1,problems,fn,caller,map__37918,map__37918__$1,top_data,source){
return (function (p1__37914_SHARP_){
var or__4131__auto__ = (p1__37914_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__37943 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37943.cljs$core$IFn$_invoke$arity$1 ? fexpr__37943.cljs$core$IFn$_invoke$arity$1(p1__37914_SHARP_) : fexpr__37943.call(null,p1__37914_SHARP_));
}
});})(vec__37939,source__$1,method,file,line,G__37924,G__37924__$1,map__37915,map__37915__$1,via,trace,phase,map__37916,map__37916__$1,type,message,data,map__37917,map__37917__$1,problems,fn,caller,map__37918,map__37918__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__37944 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37944__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37944,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37944);
var G__37944__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37944__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37944__$1);
var G__37944__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37944__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37944__$2);
var G__37944__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37944__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37944__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37944__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37944__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37924__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37948){
var map__37949 = p__37948;
var map__37949__$1 = (((((!((map__37949 == null))))?(((((map__37949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37949):map__37949);
var triage_data = map__37949__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37951 = phase;
var G__37951__$1 = (((G__37951 instanceof cljs.core.Keyword))?G__37951.fqn:null);
switch (G__37951__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37952 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37953 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37954 = loc;
var G__37955 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37956_38217 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37957_38218 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37958_38219 = true;
var _STAR_print_fn_STAR__temp_val__37959_38220 = ((function (_STAR_print_newline_STAR__orig_val__37956_38217,_STAR_print_fn_STAR__orig_val__37957_38218,_STAR_print_newline_STAR__temp_val__37958_38219,sb__4661__auto__,G__37952,G__37953,G__37954,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37956_38217,_STAR_print_fn_STAR__orig_val__37957_38218,_STAR_print_newline_STAR__temp_val__37958_38219,sb__4661__auto__,G__37952,G__37953,G__37954,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37958_38219;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37959_38220;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__37956_38217,_STAR_print_fn_STAR__orig_val__37957_38218,_STAR_print_newline_STAR__temp_val__37958_38219,_STAR_print_fn_STAR__temp_val__37959_38220,sb__4661__auto__,G__37952,G__37953,G__37954,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__37956_38217,_STAR_print_fn_STAR__orig_val__37957_38218,_STAR_print_newline_STAR__temp_val__37958_38219,_STAR_print_fn_STAR__temp_val__37959_38220,sb__4661__auto__,G__37952,G__37953,G__37954,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__37946_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37946_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__37956_38217,_STAR_print_fn_STAR__orig_val__37957_38218,_STAR_print_newline_STAR__temp_val__37958_38219,_STAR_print_fn_STAR__temp_val__37959_38220,sb__4661__auto__,G__37952,G__37953,G__37954,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__37956_38217,_STAR_print_fn_STAR__orig_val__37957_38218,_STAR_print_newline_STAR__temp_val__37958_38219,_STAR_print_fn_STAR__temp_val__37959_38220,sb__4661__auto__,G__37952,G__37953,G__37954,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37957_38218;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37956_38217;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37952,G__37953,G__37954,G__37955) : format.call(null,G__37952,G__37953,G__37954,G__37955));

break;
case "macroexpansion":
var G__37960 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37961 = cause_type;
var G__37962 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37963 = loc;
var G__37964 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37960,G__37961,G__37962,G__37963,G__37964) : format.call(null,G__37960,G__37961,G__37962,G__37963,G__37964));

break;
case "compile-syntax-check":
var G__37965 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37966 = cause_type;
var G__37967 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37968 = loc;
var G__37969 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37965,G__37966,G__37967,G__37968,G__37969) : format.call(null,G__37965,G__37966,G__37967,G__37968,G__37969));

break;
case "compilation":
var G__37970 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37971 = cause_type;
var G__37972 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37973 = loc;
var G__37974 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37970,G__37971,G__37972,G__37973,G__37974) : format.call(null,G__37970,G__37971,G__37972,G__37973,G__37974));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37979 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37980 = symbol;
var G__37981 = loc;
var G__37982 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37987_38245 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37988_38246 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37989_38247 = true;
var _STAR_print_fn_STAR__temp_val__37990_38248 = ((function (_STAR_print_newline_STAR__orig_val__37987_38245,_STAR_print_fn_STAR__orig_val__37988_38246,_STAR_print_newline_STAR__temp_val__37989_38247,sb__4661__auto__,G__37979,G__37980,G__37981,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37987_38245,_STAR_print_fn_STAR__orig_val__37988_38246,_STAR_print_newline_STAR__temp_val__37989_38247,sb__4661__auto__,G__37979,G__37980,G__37981,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37989_38247;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37990_38248;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__37987_38245,_STAR_print_fn_STAR__orig_val__37988_38246,_STAR_print_newline_STAR__temp_val__37989_38247,_STAR_print_fn_STAR__temp_val__37990_38248,sb__4661__auto__,G__37979,G__37980,G__37981,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__37987_38245,_STAR_print_fn_STAR__orig_val__37988_38246,_STAR_print_newline_STAR__temp_val__37989_38247,_STAR_print_fn_STAR__temp_val__37990_38248,sb__4661__auto__,G__37979,G__37980,G__37981,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__37947_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37947_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__37987_38245,_STAR_print_fn_STAR__orig_val__37988_38246,_STAR_print_newline_STAR__temp_val__37989_38247,_STAR_print_fn_STAR__temp_val__37990_38248,sb__4661__auto__,G__37979,G__37980,G__37981,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__37987_38245,_STAR_print_fn_STAR__orig_val__37988_38246,_STAR_print_newline_STAR__temp_val__37989_38247,_STAR_print_fn_STAR__temp_val__37990_38248,sb__4661__auto__,G__37979,G__37980,G__37981,G__37951,G__37951__$1,loc,class_name,simple_class,cause_type,format,map__37949,map__37949__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37988_38246;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37987_38245;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37979,G__37980,G__37981,G__37982) : format.call(null,G__37979,G__37980,G__37981,G__37982));
} else {
var G__38000 = "Execution error%s at %s(%s).\n%s\n";
var G__38001 = cause_type;
var G__38002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38003 = loc;
var G__38004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38000,G__38001,G__38002,G__38003,G__38004) : format.call(null,G__38000,G__38001,G__38002,G__38003,G__38004));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37951__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
