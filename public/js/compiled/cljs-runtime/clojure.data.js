goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25754){
var vec__25756 = p__25754;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25756,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25756,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25764 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25764,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25764,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25764,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25795 = arguments.length;
switch (G__25795) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__25847_26112 = clojure.data.equality_partition;
var G__25848_26113 = "null";
var G__25849_26114 = ((function (G__25847_26112,G__25848_26113){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25847_26112,G__25848_26113))
;
goog.object.set(G__25847_26112,G__25848_26113,G__25849_26114);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25853_26118 = clojure.data.equality_partition;
var G__25854_26119 = "string";
var G__25855_26120 = ((function (G__25853_26118,G__25854_26119){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25853_26118,G__25854_26119))
;
goog.object.set(G__25853_26118,G__25854_26119,G__25855_26120);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25861_26129 = clojure.data.equality_partition;
var G__25862_26130 = "number";
var G__25864_26131 = ((function (G__25861_26129,G__25862_26130){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25861_26129,G__25862_26130))
;
goog.object.set(G__25861_26129,G__25862_26130,G__25864_26131);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25874_26135 = clojure.data.equality_partition;
var G__25875_26136 = "array";
var G__25876_26137 = ((function (G__25874_26135,G__25875_26136){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__25874_26135,G__25875_26136))
;
goog.object.set(G__25874_26135,G__25875_26136,G__25876_26137);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25879_26140 = clojure.data.equality_partition;
var G__25880_26141 = "function";
var G__25881_26142 = ((function (G__25879_26140,G__25880_26141){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25879_26140,G__25880_26141))
;
goog.object.set(G__25879_26140,G__25880_26141,G__25881_26142);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25885_26147 = clojure.data.equality_partition;
var G__25886_26148 = "boolean";
var G__25887_26150 = ((function (G__25885_26147,G__25886_26148){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25885_26147,G__25886_26148))
;
goog.object.set(G__25885_26147,G__25886_26148,G__25887_26150);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25894_26157 = clojure.data.equality_partition;
var G__25895_26158 = "_";
var G__25896_26159 = ((function (G__25894_26157,G__25895_26158){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__25894_26157,G__25895_26158))
;
goog.object.set(G__25894_26157,G__25895_26158,G__25896_26159);
goog.object.set(clojure.data.Diff,"null",true);

var G__25932_26177 = clojure.data.diff_similar;
var G__25933_26178 = "null";
var G__25934_26179 = ((function (G__25932_26177,G__25933_26178){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25932_26177,G__25933_26178))
;
goog.object.set(G__25932_26177,G__25933_26178,G__25934_26179);

goog.object.set(clojure.data.Diff,"string",true);

var G__25947_26187 = clojure.data.diff_similar;
var G__25948_26188 = "string";
var G__25949_26189 = ((function (G__25947_26187,G__25948_26188){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25947_26187,G__25948_26188))
;
goog.object.set(G__25947_26187,G__25948_26188,G__25949_26189);

goog.object.set(clojure.data.Diff,"number",true);

var G__25952_26197 = clojure.data.diff_similar;
var G__25953_26198 = "number";
var G__25954_26199 = ((function (G__25952_26197,G__25953_26198){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25952_26197,G__25953_26198))
;
goog.object.set(G__25952_26197,G__25953_26198,G__25954_26199);

goog.object.set(clojure.data.Diff,"array",true);

var G__25958_26206 = clojure.data.diff_similar;
var G__25960_26207 = "array";
var G__25961_26208 = ((function (G__25958_26206,G__25960_26207){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__25958_26206,G__25960_26207))
;
goog.object.set(G__25958_26206,G__25960_26207,G__25961_26208);

goog.object.set(clojure.data.Diff,"function",true);

var G__25968_26212 = clojure.data.diff_similar;
var G__25969_26214 = "function";
var G__25970_26215 = ((function (G__25968_26212,G__25969_26214){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25968_26212,G__25969_26214))
;
goog.object.set(G__25968_26212,G__25969_26214,G__25970_26215);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__25975_26223 = clojure.data.diff_similar;
var G__25976_26224 = "boolean";
var G__25977_26225 = ((function (G__25975_26223,G__25976_26224){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25975_26223,G__25976_26224))
;
goog.object.set(G__25975_26223,G__25976_26224,G__25977_26225);

goog.object.set(clojure.data.Diff,"_",true);

var G__25984_26228 = clojure.data.diff_similar;
var G__25985_26229 = "_";
var G__25986_26230 = ((function (G__25984_26228,G__25985_26229){
return (function (a,b){
var fexpr__26002 = (function (){var G__26003 = clojure.data.equality_partition(a);
var G__26003__$1 = (((G__26003 instanceof cljs.core.Keyword))?G__26003.fqn:null);
switch (G__26003__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26003__$1)].join('')));

}
})();
return (fexpr__26002.cljs$core$IFn$_invoke$arity$2 ? fexpr__26002.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26002.call(null,a,b));
});})(G__25984_26228,G__25985_26229))
;
goog.object.set(G__25984_26228,G__25985_26229,G__25986_26230);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
