goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31604){
var map__31605 = p__31604;
var map__31605__$1 = (((((!((map__31605 == null))))?(((((map__31605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31605):map__31605);
var m = map__31605__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31605__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31607_31842 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31608_31843 = null;
var count__31609_31844 = (0);
var i__31610_31845 = (0);
while(true){
if((i__31610_31845 < count__31609_31844)){
var f_31846 = chunk__31608_31843.cljs$core$IIndexed$_nth$arity$2(null,i__31610_31845);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31846], 0));


var G__31847 = seq__31607_31842;
var G__31848 = chunk__31608_31843;
var G__31849 = count__31609_31844;
var G__31850 = (i__31610_31845 + (1));
seq__31607_31842 = G__31847;
chunk__31608_31843 = G__31848;
count__31609_31844 = G__31849;
i__31610_31845 = G__31850;
continue;
} else {
var temp__5720__auto___31851 = cljs.core.seq(seq__31607_31842);
if(temp__5720__auto___31851){
var seq__31607_31852__$1 = temp__5720__auto___31851;
if(cljs.core.chunked_seq_QMARK_(seq__31607_31852__$1)){
var c__4550__auto___31853 = cljs.core.chunk_first(seq__31607_31852__$1);
var G__31854 = cljs.core.chunk_rest(seq__31607_31852__$1);
var G__31855 = c__4550__auto___31853;
var G__31856 = cljs.core.count(c__4550__auto___31853);
var G__31857 = (0);
seq__31607_31842 = G__31854;
chunk__31608_31843 = G__31855;
count__31609_31844 = G__31856;
i__31610_31845 = G__31857;
continue;
} else {
var f_31859 = cljs.core.first(seq__31607_31852__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31859], 0));


var G__31861 = cljs.core.next(seq__31607_31852__$1);
var G__31862 = null;
var G__31863 = (0);
var G__31864 = (0);
seq__31607_31842 = G__31861;
chunk__31608_31843 = G__31862;
count__31609_31844 = G__31863;
i__31610_31845 = G__31864;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31866 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31866], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31866)))?cljs.core.second(arglists_31866):arglists_31866)], 0));
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
var seq__31625_31869 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31626_31870 = null;
var count__31627_31871 = (0);
var i__31628_31872 = (0);
while(true){
if((i__31628_31872 < count__31627_31871)){
var vec__31646_31873 = chunk__31626_31870.cljs$core$IIndexed$_nth$arity$2(null,i__31628_31872);
var name_31874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31646_31873,(0),null);
var map__31649_31875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31646_31873,(1),null);
var map__31649_31876__$1 = (((((!((map__31649_31875 == null))))?(((((map__31649_31875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31649_31875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31649_31875):map__31649_31875);
var doc_31877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31649_31876__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31649_31876__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31874], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31878], 0));

if(cljs.core.truth_(doc_31877)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31877], 0));
} else {
}


var G__31884 = seq__31625_31869;
var G__31885 = chunk__31626_31870;
var G__31886 = count__31627_31871;
var G__31887 = (i__31628_31872 + (1));
seq__31625_31869 = G__31884;
chunk__31626_31870 = G__31885;
count__31627_31871 = G__31886;
i__31628_31872 = G__31887;
continue;
} else {
var temp__5720__auto___31888 = cljs.core.seq(seq__31625_31869);
if(temp__5720__auto___31888){
var seq__31625_31889__$1 = temp__5720__auto___31888;
if(cljs.core.chunked_seq_QMARK_(seq__31625_31889__$1)){
var c__4550__auto___31890 = cljs.core.chunk_first(seq__31625_31889__$1);
var G__31891 = cljs.core.chunk_rest(seq__31625_31889__$1);
var G__31892 = c__4550__auto___31890;
var G__31893 = cljs.core.count(c__4550__auto___31890);
var G__31894 = (0);
seq__31625_31869 = G__31891;
chunk__31626_31870 = G__31892;
count__31627_31871 = G__31893;
i__31628_31872 = G__31894;
continue;
} else {
var vec__31652_31895 = cljs.core.first(seq__31625_31889__$1);
var name_31896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31652_31895,(0),null);
var map__31655_31897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31652_31895,(1),null);
var map__31655_31898__$1 = (((((!((map__31655_31897 == null))))?(((((map__31655_31897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31655_31897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31655_31897):map__31655_31897);
var doc_31899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31655_31898__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31655_31898__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31896], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31900], 0));

if(cljs.core.truth_(doc_31899)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31899], 0));
} else {
}


var G__31901 = cljs.core.next(seq__31625_31889__$1);
var G__31902 = null;
var G__31903 = (0);
var G__31904 = (0);
seq__31625_31869 = G__31901;
chunk__31626_31870 = G__31902;
count__31627_31871 = G__31903;
i__31628_31872 = G__31904;
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

var seq__31657 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31658 = null;
var count__31659 = (0);
var i__31660 = (0);
while(true){
if((i__31660 < count__31659)){
var role = chunk__31658.cljs$core$IIndexed$_nth$arity$2(null,i__31660);
var temp__5720__auto___31905__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31905__$1)){
var spec_31906 = temp__5720__auto___31905__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31906)], 0));
} else {
}


var G__31907 = seq__31657;
var G__31908 = chunk__31658;
var G__31909 = count__31659;
var G__31910 = (i__31660 + (1));
seq__31657 = G__31907;
chunk__31658 = G__31908;
count__31659 = G__31909;
i__31660 = G__31910;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31657);
if(temp__5720__auto____$1){
var seq__31657__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31657__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31657__$1);
var G__31911 = cljs.core.chunk_rest(seq__31657__$1);
var G__31912 = c__4550__auto__;
var G__31913 = cljs.core.count(c__4550__auto__);
var G__31914 = (0);
seq__31657 = G__31911;
chunk__31658 = G__31912;
count__31659 = G__31913;
i__31660 = G__31914;
continue;
} else {
var role = cljs.core.first(seq__31657__$1);
var temp__5720__auto___31915__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31915__$2)){
var spec_31916 = temp__5720__auto___31915__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31916)], 0));
} else {
}


var G__31917 = cljs.core.next(seq__31657__$1);
var G__31918 = null;
var G__31919 = (0);
var G__31920 = (0);
seq__31657 = G__31917;
chunk__31658 = G__31918;
count__31659 = G__31919;
i__31660 = G__31920;
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
var G__31929 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31930 = cljs.core.ex_cause(t);
via = G__31929;
t = G__31930;
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
var map__31692 = datafied_throwable;
var map__31692__$1 = (((((!((map__31692 == null))))?(((((map__31692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31692):map__31692);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31692__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31692__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31692__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31693 = cljs.core.last(via);
var map__31693__$1 = (((((!((map__31693 == null))))?(((((map__31693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31693):map__31693);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31693__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31693__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31693__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31694 = data;
var map__31694__$1 = (((((!((map__31694 == null))))?(((((map__31694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31694):map__31694);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31694__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31694__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31694__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31695 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31695__$1 = (((((!((map__31695 == null))))?(((((map__31695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31695):map__31695);
var top_data = map__31695__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31695__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31709 = phase;
var G__31709__$1 = (((G__31709 instanceof cljs.core.Keyword))?G__31709.fqn:null);
switch (G__31709__$1) {
case "read-source":
var map__31710 = data;
var map__31710__$1 = (((((!((map__31710 == null))))?(((((map__31710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31710):map__31710);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31710__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31710__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31712 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31712__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31712,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31712);
var G__31712__$2 = (cljs.core.truth_((function (){var fexpr__31713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31713.cljs$core$IFn$_invoke$arity$1 ? fexpr__31713.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31713.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31712__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31712__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31712__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31712__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31717 = top_data;
var G__31717__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31717,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31717);
var G__31717__$2 = (cljs.core.truth_((function (){var fexpr__31718 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31718.cljs$core$IFn$_invoke$arity$1 ? fexpr__31718.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31718.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31717__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31717__$1);
var G__31717__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31717__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31717__$2);
var G__31717__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31717__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31717__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31717__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31717__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31719 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31719,(3),null);
var G__31722 = top_data;
var G__31722__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31722,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31722);
var G__31722__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31722__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31722__$1);
var G__31722__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31722__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31722__$2);
var G__31722__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31722__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31722__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31722__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31722__$4;
}

break;
case "execution":
var vec__31726 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31726,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31726,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31726,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31726,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31726,source__$1,method,file,line,G__31709,G__31709__$1,map__31692,map__31692__$1,via,trace,phase,map__31693,map__31693__$1,type,message,data,map__31694,map__31694__$1,problems,fn,caller,map__31695,map__31695__$1,top_data,source){
return (function (p1__31690_SHARP_){
var or__4131__auto__ = (p1__31690_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31734 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31734.cljs$core$IFn$_invoke$arity$1 ? fexpr__31734.cljs$core$IFn$_invoke$arity$1(p1__31690_SHARP_) : fexpr__31734.call(null,p1__31690_SHARP_));
}
});})(vec__31726,source__$1,method,file,line,G__31709,G__31709__$1,map__31692,map__31692__$1,via,trace,phase,map__31693,map__31693__$1,type,message,data,map__31694,map__31694__$1,problems,fn,caller,map__31695,map__31695__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31735 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31735__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31735,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31735);
var G__31735__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31735__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31735__$1);
var G__31735__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31735__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31735__$2);
var G__31735__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31735__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31735__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31735__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31735__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31709__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31740){
var map__31741 = p__31740;
var map__31741__$1 = (((((!((map__31741 == null))))?(((((map__31741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31741):map__31741);
var triage_data = map__31741__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31741__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__31771 = phase;
var G__31771__$1 = (((G__31771 instanceof cljs.core.Keyword))?G__31771.fqn:null);
switch (G__31771__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31772 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31773 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31774 = loc;
var G__31775 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31780_31965 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31781_31966 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31782_31967 = true;
var _STAR_print_fn_STAR__temp_val__31783_31968 = ((function (_STAR_print_newline_STAR__orig_val__31780_31965,_STAR_print_fn_STAR__orig_val__31781_31966,_STAR_print_newline_STAR__temp_val__31782_31967,sb__4661__auto__,G__31772,G__31773,G__31774,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31780_31965,_STAR_print_fn_STAR__orig_val__31781_31966,_STAR_print_newline_STAR__temp_val__31782_31967,sb__4661__auto__,G__31772,G__31773,G__31774,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31782_31967;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31783_31968;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31780_31965,_STAR_print_fn_STAR__orig_val__31781_31966,_STAR_print_newline_STAR__temp_val__31782_31967,_STAR_print_fn_STAR__temp_val__31783_31968,sb__4661__auto__,G__31772,G__31773,G__31774,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31780_31965,_STAR_print_fn_STAR__orig_val__31781_31966,_STAR_print_newline_STAR__temp_val__31782_31967,_STAR_print_fn_STAR__temp_val__31783_31968,sb__4661__auto__,G__31772,G__31773,G__31774,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31738_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31738_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31780_31965,_STAR_print_fn_STAR__orig_val__31781_31966,_STAR_print_newline_STAR__temp_val__31782_31967,_STAR_print_fn_STAR__temp_val__31783_31968,sb__4661__auto__,G__31772,G__31773,G__31774,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31780_31965,_STAR_print_fn_STAR__orig_val__31781_31966,_STAR_print_newline_STAR__temp_val__31782_31967,_STAR_print_fn_STAR__temp_val__31783_31968,sb__4661__auto__,G__31772,G__31773,G__31774,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31781_31966;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31780_31965;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31772,G__31773,G__31774,G__31775) : format.call(null,G__31772,G__31773,G__31774,G__31775));

break;
case "macroexpansion":
var G__31793 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31794 = cause_type;
var G__31795 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31796 = loc;
var G__31797 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31793,G__31794,G__31795,G__31796,G__31797) : format.call(null,G__31793,G__31794,G__31795,G__31796,G__31797));

break;
case "compile-syntax-check":
var G__31803 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31804 = cause_type;
var G__31805 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31806 = loc;
var G__31807 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31803,G__31804,G__31805,G__31806,G__31807) : format.call(null,G__31803,G__31804,G__31805,G__31806,G__31807));

break;
case "compilation":
var G__31814 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31815 = cause_type;
var G__31816 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31817 = loc;
var G__31818 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31814,G__31815,G__31816,G__31817,G__31818) : format.call(null,G__31814,G__31815,G__31816,G__31817,G__31818));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31820 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31821 = symbol;
var G__31822 = loc;
var G__31823 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31828_31976 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31829_31977 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31830_31978 = true;
var _STAR_print_fn_STAR__temp_val__31831_31979 = ((function (_STAR_print_newline_STAR__orig_val__31828_31976,_STAR_print_fn_STAR__orig_val__31829_31977,_STAR_print_newline_STAR__temp_val__31830_31978,sb__4661__auto__,G__31820,G__31821,G__31822,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31828_31976,_STAR_print_fn_STAR__orig_val__31829_31977,_STAR_print_newline_STAR__temp_val__31830_31978,sb__4661__auto__,G__31820,G__31821,G__31822,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31830_31978;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31831_31979;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31828_31976,_STAR_print_fn_STAR__orig_val__31829_31977,_STAR_print_newline_STAR__temp_val__31830_31978,_STAR_print_fn_STAR__temp_val__31831_31979,sb__4661__auto__,G__31820,G__31821,G__31822,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31828_31976,_STAR_print_fn_STAR__orig_val__31829_31977,_STAR_print_newline_STAR__temp_val__31830_31978,_STAR_print_fn_STAR__temp_val__31831_31979,sb__4661__auto__,G__31820,G__31821,G__31822,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31739_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31739_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31828_31976,_STAR_print_fn_STAR__orig_val__31829_31977,_STAR_print_newline_STAR__temp_val__31830_31978,_STAR_print_fn_STAR__temp_val__31831_31979,sb__4661__auto__,G__31820,G__31821,G__31822,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31828_31976,_STAR_print_fn_STAR__orig_val__31829_31977,_STAR_print_newline_STAR__temp_val__31830_31978,_STAR_print_fn_STAR__temp_val__31831_31979,sb__4661__auto__,G__31820,G__31821,G__31822,G__31771,G__31771__$1,loc,class_name,simple_class,cause_type,format,map__31741,map__31741__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31829_31977;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31828_31976;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31820,G__31821,G__31822,G__31823) : format.call(null,G__31820,G__31821,G__31822,G__31823));
} else {
var G__31832 = "Execution error%s at %s(%s).\n%s\n";
var G__31833 = cause_type;
var G__31834 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31835 = loc;
var G__31836 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31832,G__31833,G__31834,G__31835,G__31836) : format.call(null,G__31832,G__31833,G__31834,G__31835,G__31836));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31771__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
