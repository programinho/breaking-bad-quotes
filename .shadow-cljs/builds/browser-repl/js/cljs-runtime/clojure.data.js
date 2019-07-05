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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__32736){
var vec__32738 = p__32736;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32738,(1),null);
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
var vec__32757 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32757,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32757,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32757,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__32783 = arguments.length;
switch (G__32783) {
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

var G__32859_33054 = clojure.data.equality_partition;
var G__32860_33055 = "null";
var G__32861_33056 = ((function (G__32859_33054,G__32860_33055){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32859_33054,G__32860_33055))
;
goog.object.set(G__32859_33054,G__32860_33055,G__32861_33056);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__32865_33059 = clojure.data.equality_partition;
var G__32866_33060 = "string";
var G__32867_33061 = ((function (G__32865_33059,G__32866_33060){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32865_33059,G__32866_33060))
;
goog.object.set(G__32865_33059,G__32866_33060,G__32867_33061);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__32871_33065 = clojure.data.equality_partition;
var G__32872_33066 = "number";
var G__32873_33067 = ((function (G__32871_33065,G__32872_33066){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32871_33065,G__32872_33066))
;
goog.object.set(G__32871_33065,G__32872_33066,G__32873_33067);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__32880_33070 = clojure.data.equality_partition;
var G__32881_33071 = "array";
var G__32882_33072 = ((function (G__32880_33070,G__32881_33071){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__32880_33070,G__32881_33071))
;
goog.object.set(G__32880_33070,G__32881_33071,G__32882_33072);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__32887_33080 = clojure.data.equality_partition;
var G__32888_33081 = "function";
var G__32889_33082 = ((function (G__32887_33080,G__32888_33081){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32887_33080,G__32888_33081))
;
goog.object.set(G__32887_33080,G__32888_33081,G__32889_33082);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__32892_33084 = clojure.data.equality_partition;
var G__32893_33085 = "boolean";
var G__32894_33086 = ((function (G__32892_33084,G__32893_33085){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32892_33084,G__32893_33085))
;
goog.object.set(G__32892_33084,G__32893_33085,G__32894_33086);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__32905_33089 = clojure.data.equality_partition;
var G__32906_33090 = "_";
var G__32907_33091 = ((function (G__32905_33089,G__32906_33090){
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
});})(G__32905_33089,G__32906_33090))
;
goog.object.set(G__32905_33089,G__32906_33090,G__32907_33091);
goog.object.set(clojure.data.Diff,"null",true);

var G__32929_33110 = clojure.data.diff_similar;
var G__32930_33111 = "null";
var G__32931_33112 = ((function (G__32929_33110,G__32930_33111){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32929_33110,G__32930_33111))
;
goog.object.set(G__32929_33110,G__32930_33111,G__32931_33112);

goog.object.set(clojure.data.Diff,"string",true);

var G__32935_33117 = clojure.data.diff_similar;
var G__32936_33118 = "string";
var G__32937_33119 = ((function (G__32935_33117,G__32936_33118){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32935_33117,G__32936_33118))
;
goog.object.set(G__32935_33117,G__32936_33118,G__32937_33119);

goog.object.set(clojure.data.Diff,"number",true);

var G__32941_33122 = clojure.data.diff_similar;
var G__32942_33123 = "number";
var G__32943_33124 = ((function (G__32941_33122,G__32942_33123){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32941_33122,G__32942_33123))
;
goog.object.set(G__32941_33122,G__32942_33123,G__32943_33124);

goog.object.set(clojure.data.Diff,"array",true);

var G__32946_33132 = clojure.data.diff_similar;
var G__32947_33133 = "array";
var G__32948_33134 = ((function (G__32946_33132,G__32947_33133){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__32946_33132,G__32947_33133))
;
goog.object.set(G__32946_33132,G__32947_33133,G__32948_33134);

goog.object.set(clojure.data.Diff,"function",true);

var G__32960_33136 = clojure.data.diff_similar;
var G__32961_33137 = "function";
var G__32962_33138 = ((function (G__32960_33136,G__32961_33137){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32960_33136,G__32961_33137))
;
goog.object.set(G__32960_33136,G__32961_33137,G__32962_33138);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__32966_33150 = clojure.data.diff_similar;
var G__32967_33151 = "boolean";
var G__32968_33152 = ((function (G__32966_33150,G__32967_33151){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32966_33150,G__32967_33151))
;
goog.object.set(G__32966_33150,G__32967_33151,G__32968_33152);

goog.object.set(clojure.data.Diff,"_",true);

var G__32976_33155 = clojure.data.diff_similar;
var G__32977_33156 = "_";
var G__32978_33157 = ((function (G__32976_33155,G__32977_33156){
return (function (a,b){
var fexpr__32982 = (function (){var G__32983 = clojure.data.equality_partition(a);
var G__32983__$1 = (((G__32983 instanceof cljs.core.Keyword))?G__32983.fqn:null);
switch (G__32983__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32983__$1)].join('')));

}
})();
return (fexpr__32982.cljs$core$IFn$_invoke$arity$2 ? fexpr__32982.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__32982.call(null,a,b));
});})(G__32976_33155,G__32977_33156))
;
goog.object.set(G__32976_33155,G__32977_33156,G__32978_33157);
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
