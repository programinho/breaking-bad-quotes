goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34479){
var map__34480 = p__34479;
var map__34480__$1 = (((((!((map__34480 == null))))?(((((map__34480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34480):map__34480);
var m = map__34480__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34486_34857 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34487_34858 = null;
var count__34488_34859 = (0);
var i__34489_34860 = (0);
while(true){
if((i__34489_34860 < count__34488_34859)){
var f_34861 = chunk__34487_34858.cljs$core$IIndexed$_nth$arity$2(null,i__34489_34860);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34861], 0));


var G__34866 = seq__34486_34857;
var G__34867 = chunk__34487_34858;
var G__34868 = count__34488_34859;
var G__34869 = (i__34489_34860 + (1));
seq__34486_34857 = G__34866;
chunk__34487_34858 = G__34867;
count__34488_34859 = G__34868;
i__34489_34860 = G__34869;
continue;
} else {
var temp__5720__auto___34870 = cljs.core.seq(seq__34486_34857);
if(temp__5720__auto___34870){
var seq__34486_34871__$1 = temp__5720__auto___34870;
if(cljs.core.chunked_seq_QMARK_(seq__34486_34871__$1)){
var c__4550__auto___34873 = cljs.core.chunk_first(seq__34486_34871__$1);
var G__34874 = cljs.core.chunk_rest(seq__34486_34871__$1);
var G__34875 = c__4550__auto___34873;
var G__34876 = cljs.core.count(c__4550__auto___34873);
var G__34877 = (0);
seq__34486_34857 = G__34874;
chunk__34487_34858 = G__34875;
count__34488_34859 = G__34876;
i__34489_34860 = G__34877;
continue;
} else {
var f_34878 = cljs.core.first(seq__34486_34871__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34878], 0));


var G__34879 = cljs.core.next(seq__34486_34871__$1);
var G__34880 = null;
var G__34881 = (0);
var G__34882 = (0);
seq__34486_34857 = G__34879;
chunk__34487_34858 = G__34880;
count__34488_34859 = G__34881;
i__34489_34860 = G__34882;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34883 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34883], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34883)))?cljs.core.second(arglists_34883):arglists_34883)], 0));
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
var seq__34501_34892 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34502_34893 = null;
var count__34503_34894 = (0);
var i__34504_34895 = (0);
while(true){
if((i__34504_34895 < count__34503_34894)){
var vec__34523_34896 = chunk__34502_34893.cljs$core$IIndexed$_nth$arity$2(null,i__34504_34895);
var name_34897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523_34896,(0),null);
var map__34526_34898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523_34896,(1),null);
var map__34526_34899__$1 = (((((!((map__34526_34898 == null))))?(((((map__34526_34898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34526_34898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34526_34898):map__34526_34898);
var doc_34900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34526_34899__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34526_34899__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34897], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34901], 0));

if(cljs.core.truth_(doc_34900)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34900], 0));
} else {
}


var G__34913 = seq__34501_34892;
var G__34914 = chunk__34502_34893;
var G__34915 = count__34503_34894;
var G__34916 = (i__34504_34895 + (1));
seq__34501_34892 = G__34913;
chunk__34502_34893 = G__34914;
count__34503_34894 = G__34915;
i__34504_34895 = G__34916;
continue;
} else {
var temp__5720__auto___34917 = cljs.core.seq(seq__34501_34892);
if(temp__5720__auto___34917){
var seq__34501_34918__$1 = temp__5720__auto___34917;
if(cljs.core.chunked_seq_QMARK_(seq__34501_34918__$1)){
var c__4550__auto___34919 = cljs.core.chunk_first(seq__34501_34918__$1);
var G__34920 = cljs.core.chunk_rest(seq__34501_34918__$1);
var G__34921 = c__4550__auto___34919;
var G__34922 = cljs.core.count(c__4550__auto___34919);
var G__34923 = (0);
seq__34501_34892 = G__34920;
chunk__34502_34893 = G__34921;
count__34503_34894 = G__34922;
i__34504_34895 = G__34923;
continue;
} else {
var vec__34532_34925 = cljs.core.first(seq__34501_34918__$1);
var name_34926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34532_34925,(0),null);
var map__34535_34927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34532_34925,(1),null);
var map__34535_34928__$1 = (((((!((map__34535_34927 == null))))?(((((map__34535_34927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34535_34927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34535_34927):map__34535_34927);
var doc_34929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34535_34928__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34535_34928__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34926], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34930], 0));

if(cljs.core.truth_(doc_34929)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34929], 0));
} else {
}


var G__34938 = cljs.core.next(seq__34501_34918__$1);
var G__34939 = null;
var G__34940 = (0);
var G__34941 = (0);
seq__34501_34892 = G__34938;
chunk__34502_34893 = G__34939;
count__34503_34894 = G__34940;
i__34504_34895 = G__34941;
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

var seq__34538 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34539 = null;
var count__34540 = (0);
var i__34541 = (0);
while(true){
if((i__34541 < count__34540)){
var role = chunk__34539.cljs$core$IIndexed$_nth$arity$2(null,i__34541);
var temp__5720__auto___34946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___34946__$1)){
var spec_34947 = temp__5720__auto___34946__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34947)], 0));
} else {
}


var G__34949 = seq__34538;
var G__34950 = chunk__34539;
var G__34951 = count__34540;
var G__34952 = (i__34541 + (1));
seq__34538 = G__34949;
chunk__34539 = G__34950;
count__34540 = G__34951;
i__34541 = G__34952;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__34538);
if(temp__5720__auto____$1){
var seq__34538__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34538__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34538__$1);
var G__34953 = cljs.core.chunk_rest(seq__34538__$1);
var G__34954 = c__4550__auto__;
var G__34955 = cljs.core.count(c__4550__auto__);
var G__34956 = (0);
seq__34538 = G__34953;
chunk__34539 = G__34954;
count__34540 = G__34955;
i__34541 = G__34956;
continue;
} else {
var role = cljs.core.first(seq__34538__$1);
var temp__5720__auto___34961__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___34961__$2)){
var spec_34963 = temp__5720__auto___34961__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34963)], 0));
} else {
}


var G__34966 = cljs.core.next(seq__34538__$1);
var G__34967 = null;
var G__34968 = (0);
var G__34969 = (0);
seq__34538 = G__34966;
chunk__34539 = G__34967;
count__34540 = G__34968;
i__34541 = G__34969;
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
var G__34972 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34973 = cljs.core.ex_cause(t);
via = G__34972;
t = G__34973;
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
var map__34586 = datafied_throwable;
var map__34586__$1 = (((((!((map__34586 == null))))?(((((map__34586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34586):map__34586);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34586__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34586__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34586__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34587 = cljs.core.last(via);
var map__34587__$1 = (((((!((map__34587 == null))))?(((((map__34587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34587):map__34587);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34587__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34587__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34587__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34588 = data;
var map__34588__$1 = (((((!((map__34588 == null))))?(((((map__34588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34588):map__34588);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34588__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34588__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34588__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34589 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34589__$1 = (((((!((map__34589 == null))))?(((((map__34589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34589):map__34589);
var top_data = map__34589__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34618 = phase;
var G__34618__$1 = (((G__34618 instanceof cljs.core.Keyword))?G__34618.fqn:null);
switch (G__34618__$1) {
case "read-source":
var map__34619 = data;
var map__34619__$1 = (((((!((map__34619 == null))))?(((((map__34619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34619):map__34619);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34631 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34631__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34631,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34631);
var G__34631__$2 = (cljs.core.truth_((function (){var fexpr__34639 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34639.cljs$core$IFn$_invoke$arity$1 ? fexpr__34639.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34639.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34631__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34631__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34631__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34631__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34643 = top_data;
var G__34643__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34643,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34643);
var G__34643__$2 = (cljs.core.truth_((function (){var fexpr__34652 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34652.cljs$core$IFn$_invoke$arity$1 ? fexpr__34652.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34652.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34643__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34643__$1);
var G__34643__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34643__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34643__$2);
var G__34643__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34643__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34643__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34643__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34643__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34672 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34672,(3),null);
var G__34679 = top_data;
var G__34679__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34679,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34679);
var G__34679__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34679__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34679__$1);
var G__34679__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34679__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34679__$2);
var G__34679__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34679__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34679__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34679__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34679__$4;
}

break;
case "execution":
var vec__34684 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34684,source__$1,method,file,line,G__34618,G__34618__$1,map__34586,map__34586__$1,via,trace,phase,map__34587,map__34587__$1,type,message,data,map__34588,map__34588__$1,problems,fn,caller,map__34589,map__34589__$1,top_data,source){
return (function (p1__34580_SHARP_){
var or__4131__auto__ = (p1__34580_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__34688 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34688.cljs$core$IFn$_invoke$arity$1 ? fexpr__34688.cljs$core$IFn$_invoke$arity$1(p1__34580_SHARP_) : fexpr__34688.call(null,p1__34580_SHARP_));
}
});})(vec__34684,source__$1,method,file,line,G__34618,G__34618__$1,map__34586,map__34586__$1,via,trace,phase,map__34587,map__34587__$1,type,message,data,map__34588,map__34588__$1,problems,fn,caller,map__34589,map__34589__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__34689 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34689__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34689,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34689);
var G__34689__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34689__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34689__$1);
var G__34689__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34689__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34689__$2);
var G__34689__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34689__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34689__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34689__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34689__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34618__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34727){
var map__34730 = p__34727;
var map__34730__$1 = (((((!((map__34730 == null))))?(((((map__34730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34730):map__34730);
var triage_data = map__34730__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34730__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__34766 = phase;
var G__34766__$1 = (((G__34766 instanceof cljs.core.Keyword))?G__34766.fqn:null);
switch (G__34766__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34767 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34768 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34769 = loc;
var G__34770 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34771_35085 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34772_35086 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34773_35087 = true;
var _STAR_print_fn_STAR__temp_val__34774_35088 = ((function (_STAR_print_newline_STAR__orig_val__34771_35085,_STAR_print_fn_STAR__orig_val__34772_35086,_STAR_print_newline_STAR__temp_val__34773_35087,sb__4661__auto__,G__34767,G__34768,G__34769,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34771_35085,_STAR_print_fn_STAR__orig_val__34772_35086,_STAR_print_newline_STAR__temp_val__34773_35087,sb__4661__auto__,G__34767,G__34768,G__34769,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34773_35087;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34774_35088;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34771_35085,_STAR_print_fn_STAR__orig_val__34772_35086,_STAR_print_newline_STAR__temp_val__34773_35087,_STAR_print_fn_STAR__temp_val__34774_35088,sb__4661__auto__,G__34767,G__34768,G__34769,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__34771_35085,_STAR_print_fn_STAR__orig_val__34772_35086,_STAR_print_newline_STAR__temp_val__34773_35087,_STAR_print_fn_STAR__temp_val__34774_35088,sb__4661__auto__,G__34767,G__34768,G__34769,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34709_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34709_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34771_35085,_STAR_print_fn_STAR__orig_val__34772_35086,_STAR_print_newline_STAR__temp_val__34773_35087,_STAR_print_fn_STAR__temp_val__34774_35088,sb__4661__auto__,G__34767,G__34768,G__34769,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34771_35085,_STAR_print_fn_STAR__orig_val__34772_35086,_STAR_print_newline_STAR__temp_val__34773_35087,_STAR_print_fn_STAR__temp_val__34774_35088,sb__4661__auto__,G__34767,G__34768,G__34769,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34772_35086;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34771_35085;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34767,G__34768,G__34769,G__34770) : format.call(null,G__34767,G__34768,G__34769,G__34770));

break;
case "macroexpansion":
var G__34792 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34793 = cause_type;
var G__34794 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34795 = loc;
var G__34796 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34792,G__34793,G__34794,G__34795,G__34796) : format.call(null,G__34792,G__34793,G__34794,G__34795,G__34796));

break;
case "compile-syntax-check":
var G__34797 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34798 = cause_type;
var G__34799 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34800 = loc;
var G__34801 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34797,G__34798,G__34799,G__34800,G__34801) : format.call(null,G__34797,G__34798,G__34799,G__34800,G__34801));

break;
case "compilation":
var G__34803 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34806 = cause_type;
var G__34808 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34809 = loc;
var G__34810 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34803,G__34806,G__34808,G__34809,G__34810) : format.call(null,G__34803,G__34806,G__34808,G__34809,G__34810));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34813 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34814 = symbol;
var G__34815 = loc;
var G__34816 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34822_35128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34823_35129 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34824_35130 = true;
var _STAR_print_fn_STAR__temp_val__34825_35131 = ((function (_STAR_print_newline_STAR__orig_val__34822_35128,_STAR_print_fn_STAR__orig_val__34823_35129,_STAR_print_newline_STAR__temp_val__34824_35130,sb__4661__auto__,G__34813,G__34814,G__34815,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34822_35128,_STAR_print_fn_STAR__orig_val__34823_35129,_STAR_print_newline_STAR__temp_val__34824_35130,sb__4661__auto__,G__34813,G__34814,G__34815,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34824_35130;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34825_35131;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34822_35128,_STAR_print_fn_STAR__orig_val__34823_35129,_STAR_print_newline_STAR__temp_val__34824_35130,_STAR_print_fn_STAR__temp_val__34825_35131,sb__4661__auto__,G__34813,G__34814,G__34815,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__34822_35128,_STAR_print_fn_STAR__orig_val__34823_35129,_STAR_print_newline_STAR__temp_val__34824_35130,_STAR_print_fn_STAR__temp_val__34825_35131,sb__4661__auto__,G__34813,G__34814,G__34815,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34717_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34717_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34822_35128,_STAR_print_fn_STAR__orig_val__34823_35129,_STAR_print_newline_STAR__temp_val__34824_35130,_STAR_print_fn_STAR__temp_val__34825_35131,sb__4661__auto__,G__34813,G__34814,G__34815,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34822_35128,_STAR_print_fn_STAR__orig_val__34823_35129,_STAR_print_newline_STAR__temp_val__34824_35130,_STAR_print_fn_STAR__temp_val__34825_35131,sb__4661__auto__,G__34813,G__34814,G__34815,G__34766,G__34766__$1,loc,class_name,simple_class,cause_type,format,map__34730,map__34730__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34823_35129;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34822_35128;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34813,G__34814,G__34815,G__34816) : format.call(null,G__34813,G__34814,G__34815,G__34816));
} else {
var G__34830 = "Execution error%s at %s(%s).\n%s\n";
var G__34831 = cause_type;
var G__34832 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34833 = loc;
var G__34834 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34830,G__34831,G__34832,G__34833,G__34834) : format.call(null,G__34830,G__34831,G__34832,G__34833,G__34834));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34766__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
