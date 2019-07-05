goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42193 = arguments.length;
var i__4731__auto___42194 = (0);
while(true){
if((i__4731__auto___42194 < len__4730__auto___42193)){
args__4736__auto__.push((arguments[i__4731__auto___42194]));

var G__42195 = (i__4731__auto___42194 + (1));
i__4731__auto___42194 = G__42195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42034){
var G__42035 = cljs.core.first(seq42034);
var seq42034__$1 = cljs.core.next(seq42034);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42035,seq42034__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__42045){
var map__42046 = p__42045;
var map__42046__$1 = (((((!((map__42046 == null))))?(((((map__42046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42046):map__42046);
var src = map__42046__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42046__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42046__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42048 = cljs.core.seq(sources);
var chunk__42049 = null;
var count__42050 = (0);
var i__42051 = (0);
while(true){
if((i__42051 < count__42050)){
var map__42056 = chunk__42049.cljs$core$IIndexed$_nth$arity$2(null,i__42051);
var map__42056__$1 = (((((!((map__42056 == null))))?(((((map__42056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42056):map__42056);
var src = map__42056__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42056__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42056__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42056__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42056__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__42196 = seq__42048;
var G__42197 = chunk__42049;
var G__42198 = count__42050;
var G__42199 = (i__42051 + (1));
seq__42048 = G__42196;
chunk__42049 = G__42197;
count__42050 = G__42198;
i__42051 = G__42199;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42048);
if(temp__5720__auto__){
var seq__42048__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42048__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42048__$1);
var G__42200 = cljs.core.chunk_rest(seq__42048__$1);
var G__42201 = c__4550__auto__;
var G__42202 = cljs.core.count(c__4550__auto__);
var G__42203 = (0);
seq__42048 = G__42200;
chunk__42049 = G__42201;
count__42050 = G__42202;
i__42051 = G__42203;
continue;
} else {
var map__42060 = cljs.core.first(seq__42048__$1);
var map__42060__$1 = (((((!((map__42060 == null))))?(((((map__42060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42060):map__42060);
var src = map__42060__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42060__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__42204 = cljs.core.next(seq__42048__$1);
var G__42205 = null;
var G__42206 = (0);
var G__42207 = (0);
seq__42048 = G__42204;
chunk__42049 = G__42205;
count__42050 = G__42206;
i__42051 = G__42207;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42063 = cljs.core.seq(js_requires);
var chunk__42064 = null;
var count__42065 = (0);
var i__42066 = (0);
while(true){
if((i__42066 < count__42065)){
var js_ns = chunk__42064.cljs$core$IIndexed$_nth$arity$2(null,i__42066);
var require_str_42208 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42208);


var G__42209 = seq__42063;
var G__42210 = chunk__42064;
var G__42211 = count__42065;
var G__42212 = (i__42066 + (1));
seq__42063 = G__42209;
chunk__42064 = G__42210;
count__42065 = G__42211;
i__42066 = G__42212;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42063);
if(temp__5720__auto__){
var seq__42063__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42063__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42063__$1);
var G__42213 = cljs.core.chunk_rest(seq__42063__$1);
var G__42214 = c__4550__auto__;
var G__42215 = cljs.core.count(c__4550__auto__);
var G__42216 = (0);
seq__42063 = G__42213;
chunk__42064 = G__42214;
count__42065 = G__42215;
i__42066 = G__42216;
continue;
} else {
var js_ns = cljs.core.first(seq__42063__$1);
var require_str_42217 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42217);


var G__42218 = cljs.core.next(seq__42063__$1);
var G__42219 = null;
var G__42220 = (0);
var G__42221 = (0);
seq__42063 = G__42218;
chunk__42064 = G__42219;
count__42065 = G__42220;
i__42066 = G__42221;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__42068 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__42068) : callback.call(null,G__42068));
} else {
var G__42069 = shadow.cljs.devtools.client.env.files_url();
var G__42070 = ((function (G__42069){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__42069))
;
var G__42071 = "POST";
var G__42072 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__42073 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42069,G__42070,G__42071,G__42072,G__42073);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__42075){
var map__42076 = p__42075;
var map__42076__$1 = (((((!((map__42076 == null))))?(((((map__42076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42076):map__42076);
var msg = map__42076__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42076__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42076__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__42078 = info;
var map__42078__$1 = (((((!((map__42078 == null))))?(((((map__42078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42078):map__42078);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42078__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42078__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__42078,map__42078__$1,sources,compiled,map__42076,map__42076__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42080(s__42081){
return (new cljs.core.LazySeq(null,((function (map__42078,map__42078__$1,sources,compiled,map__42076,map__42076__$1,msg,info,reload_info){
return (function (){
var s__42081__$1 = s__42081;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42081__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__42086 = cljs.core.first(xs__6277__auto__);
var map__42086__$1 = (((((!((map__42086 == null))))?(((((map__42086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42086):map__42086);
var src = map__42086__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42086__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42086__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__42081__$1,map__42086,map__42086__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__42078,map__42078__$1,sources,compiled,map__42076,map__42076__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42080_$_iter__42082(s__42083){
return (new cljs.core.LazySeq(null,((function (s__42081__$1,map__42086,map__42086__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__42078,map__42078__$1,sources,compiled,map__42076,map__42076__$1,msg,info,reload_info){
return (function (){
var s__42083__$1 = s__42083;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42083__$1);
if(temp__5720__auto____$1){
var s__42083__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42083__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42083__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42085 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42084 = (0);
while(true){
if((i__42084 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42084);
cljs.core.chunk_append(b__42085,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42222 = (i__42084 + (1));
i__42084 = G__42222;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42085),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42080_$_iter__42082(cljs.core.chunk_rest(s__42083__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42085),null);
}
} else {
var warning = cljs.core.first(s__42083__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42080_$_iter__42082(cljs.core.rest(s__42083__$2)));
}
} else {
return null;
}
break;
}
});})(s__42081__$1,map__42086,map__42086__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__42078,map__42078__$1,sources,compiled,map__42076,map__42076__$1,msg,info,reload_info))
,null,null));
});})(s__42081__$1,map__42086,map__42086__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__42078,map__42078__$1,sources,compiled,map__42076,map__42076__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42080(cljs.core.rest(s__42081__$1)));
} else {
var G__42223 = cljs.core.rest(s__42081__$1);
s__42081__$1 = G__42223;
continue;
}
} else {
var G__42224 = cljs.core.rest(s__42081__$1);
s__42081__$1 = G__42224;
continue;
}
} else {
return null;
}
break;
}
});})(map__42078,map__42078__$1,sources,compiled,map__42076,map__42076__$1,msg,info,reload_info))
,null,null));
});})(map__42078,map__42078__$1,sources,compiled,map__42076,map__42076__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__42088_42225 = cljs.core.seq(warnings);
var chunk__42089_42226 = null;
var count__42090_42227 = (0);
var i__42091_42228 = (0);
while(true){
if((i__42091_42228 < count__42090_42227)){
var map__42097_42229 = chunk__42089_42226.cljs$core$IIndexed$_nth$arity$2(null,i__42091_42228);
var map__42097_42230__$1 = (((((!((map__42097_42229 == null))))?(((((map__42097_42229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42097_42229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42097_42229):map__42097_42229);
var w_42231 = map__42097_42230__$1;
var msg_42232__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42097_42230__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42097_42230__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42097_42230__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42097_42230__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42235)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42233),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42234),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42232__$1)].join(''));


var G__42236 = seq__42088_42225;
var G__42237 = chunk__42089_42226;
var G__42238 = count__42090_42227;
var G__42239 = (i__42091_42228 + (1));
seq__42088_42225 = G__42236;
chunk__42089_42226 = G__42237;
count__42090_42227 = G__42238;
i__42091_42228 = G__42239;
continue;
} else {
var temp__5720__auto___42240 = cljs.core.seq(seq__42088_42225);
if(temp__5720__auto___42240){
var seq__42088_42241__$1 = temp__5720__auto___42240;
if(cljs.core.chunked_seq_QMARK_(seq__42088_42241__$1)){
var c__4550__auto___42242 = cljs.core.chunk_first(seq__42088_42241__$1);
var G__42243 = cljs.core.chunk_rest(seq__42088_42241__$1);
var G__42244 = c__4550__auto___42242;
var G__42245 = cljs.core.count(c__4550__auto___42242);
var G__42246 = (0);
seq__42088_42225 = G__42243;
chunk__42089_42226 = G__42244;
count__42090_42227 = G__42245;
i__42091_42228 = G__42246;
continue;
} else {
var map__42100_42247 = cljs.core.first(seq__42088_42241__$1);
var map__42100_42248__$1 = (((((!((map__42100_42247 == null))))?(((((map__42100_42247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42100_42247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42100_42247):map__42100_42247);
var w_42249 = map__42100_42248__$1;
var msg_42250__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100_42248__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100_42248__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100_42248__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42100_42248__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42253)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42251),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42252),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42250__$1)].join(''));


var G__42254 = cljs.core.next(seq__42088_42241__$1);
var G__42255 = null;
var G__42256 = (0);
var G__42257 = (0);
seq__42088_42225 = G__42254;
chunk__42089_42226 = G__42255;
count__42090_42227 = G__42256;
i__42091_42228 = G__42257;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42078,map__42078__$1,sources,compiled,warnings,map__42076,map__42076__$1,msg,info,reload_info){
return (function (p__42102){
var map__42103 = p__42102;
var map__42103__$1 = (((((!((map__42103 == null))))?(((((map__42103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42103):map__42103);
var src = map__42103__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42103__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__42078,map__42078__$1,sources,compiled,warnings,map__42076,map__42076__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__42078,map__42078__$1,sources,compiled,warnings,map__42076,map__42076__$1,msg,info,reload_info){
return (function (p__42105){
var map__42106 = p__42105;
var map__42106__$1 = (((((!((map__42106 == null))))?(((((map__42106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42106):map__42106);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42106__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__42078,map__42078__$1,sources,compiled,warnings,map__42076,map__42076__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42078,map__42078__$1,sources,compiled,warnings,map__42076,map__42076__$1,msg,info,reload_info){
return (function (p__42108){
var map__42109 = p__42108;
var map__42109__$1 = (((((!((map__42109 == null))))?(((((map__42109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42109):map__42109);
var rc = map__42109__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42109__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__42078,map__42078__$1,sources,compiled,warnings,map__42076,map__42076__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__42078,map__42078__$1,sources,compiled,warnings,map__42076,map__42076__$1,msg,info,reload_info){
return (function (p1__42074_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42074_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__42078,map__42078__$1,sources,compiled,warnings,map__42076,map__42076__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__42111){
var map__42112 = p__42111;
var map__42112__$1 = (((((!((map__42112 == null))))?(((((map__42112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42112):map__42112);
var msg = map__42112__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42112__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42114 = cljs.core.seq(updates);
var chunk__42116 = null;
var count__42117 = (0);
var i__42118 = (0);
while(true){
if((i__42118 < count__42117)){
var path = chunk__42116.cljs$core$IIndexed$_nth$arity$2(null,i__42118);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42144_42258 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42147_42259 = null;
var count__42148_42260 = (0);
var i__42149_42261 = (0);
while(true){
if((i__42149_42261 < count__42148_42260)){
var node_42262 = chunk__42147_42259.cljs$core$IIndexed$_nth$arity$2(null,i__42149_42261);
var path_match_42263 = shadow.cljs.devtools.client.browser.match_paths(node_42262.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42263)){
var new_link_42264 = (function (){var G__42154 = node_42262.cloneNode(true);
G__42154.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42263),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42154;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42263], 0));

goog.dom.insertSiblingAfter(new_link_42264,node_42262);

goog.dom.removeNode(node_42262);


var G__42265 = seq__42144_42258;
var G__42266 = chunk__42147_42259;
var G__42267 = count__42148_42260;
var G__42268 = (i__42149_42261 + (1));
seq__42144_42258 = G__42265;
chunk__42147_42259 = G__42266;
count__42148_42260 = G__42267;
i__42149_42261 = G__42268;
continue;
} else {
var G__42269 = seq__42144_42258;
var G__42270 = chunk__42147_42259;
var G__42271 = count__42148_42260;
var G__42272 = (i__42149_42261 + (1));
seq__42144_42258 = G__42269;
chunk__42147_42259 = G__42270;
count__42148_42260 = G__42271;
i__42149_42261 = G__42272;
continue;
}
} else {
var temp__5720__auto___42273 = cljs.core.seq(seq__42144_42258);
if(temp__5720__auto___42273){
var seq__42144_42274__$1 = temp__5720__auto___42273;
if(cljs.core.chunked_seq_QMARK_(seq__42144_42274__$1)){
var c__4550__auto___42275 = cljs.core.chunk_first(seq__42144_42274__$1);
var G__42276 = cljs.core.chunk_rest(seq__42144_42274__$1);
var G__42277 = c__4550__auto___42275;
var G__42278 = cljs.core.count(c__4550__auto___42275);
var G__42279 = (0);
seq__42144_42258 = G__42276;
chunk__42147_42259 = G__42277;
count__42148_42260 = G__42278;
i__42149_42261 = G__42279;
continue;
} else {
var node_42280 = cljs.core.first(seq__42144_42274__$1);
var path_match_42281 = shadow.cljs.devtools.client.browser.match_paths(node_42280.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42281)){
var new_link_42282 = (function (){var G__42155 = node_42280.cloneNode(true);
G__42155.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42281),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42155;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42281], 0));

goog.dom.insertSiblingAfter(new_link_42282,node_42280);

goog.dom.removeNode(node_42280);


var G__42283 = cljs.core.next(seq__42144_42274__$1);
var G__42284 = null;
var G__42285 = (0);
var G__42286 = (0);
seq__42144_42258 = G__42283;
chunk__42147_42259 = G__42284;
count__42148_42260 = G__42285;
i__42149_42261 = G__42286;
continue;
} else {
var G__42287 = cljs.core.next(seq__42144_42274__$1);
var G__42288 = null;
var G__42289 = (0);
var G__42290 = (0);
seq__42144_42258 = G__42287;
chunk__42147_42259 = G__42288;
count__42148_42260 = G__42289;
i__42149_42261 = G__42290;
continue;
}
}
} else {
}
}
break;
}


var G__42291 = seq__42114;
var G__42292 = chunk__42116;
var G__42293 = count__42117;
var G__42294 = (i__42118 + (1));
seq__42114 = G__42291;
chunk__42116 = G__42292;
count__42117 = G__42293;
i__42118 = G__42294;
continue;
} else {
var G__42295 = seq__42114;
var G__42296 = chunk__42116;
var G__42297 = count__42117;
var G__42298 = (i__42118 + (1));
seq__42114 = G__42295;
chunk__42116 = G__42296;
count__42117 = G__42297;
i__42118 = G__42298;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__42114);
if(temp__5720__auto__){
var seq__42114__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42114__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42114__$1);
var G__42299 = cljs.core.chunk_rest(seq__42114__$1);
var G__42300 = c__4550__auto__;
var G__42301 = cljs.core.count(c__4550__auto__);
var G__42302 = (0);
seq__42114 = G__42299;
chunk__42116 = G__42300;
count__42117 = G__42301;
i__42118 = G__42302;
continue;
} else {
var path = cljs.core.first(seq__42114__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42156_42303 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42159_42304 = null;
var count__42160_42305 = (0);
var i__42161_42306 = (0);
while(true){
if((i__42161_42306 < count__42160_42305)){
var node_42307 = chunk__42159_42304.cljs$core$IIndexed$_nth$arity$2(null,i__42161_42306);
var path_match_42308 = shadow.cljs.devtools.client.browser.match_paths(node_42307.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42308)){
var new_link_42309 = (function (){var G__42166 = node_42307.cloneNode(true);
G__42166.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42308),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42166;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42308], 0));

goog.dom.insertSiblingAfter(new_link_42309,node_42307);

goog.dom.removeNode(node_42307);


var G__42310 = seq__42156_42303;
var G__42311 = chunk__42159_42304;
var G__42312 = count__42160_42305;
var G__42313 = (i__42161_42306 + (1));
seq__42156_42303 = G__42310;
chunk__42159_42304 = G__42311;
count__42160_42305 = G__42312;
i__42161_42306 = G__42313;
continue;
} else {
var G__42314 = seq__42156_42303;
var G__42315 = chunk__42159_42304;
var G__42316 = count__42160_42305;
var G__42317 = (i__42161_42306 + (1));
seq__42156_42303 = G__42314;
chunk__42159_42304 = G__42315;
count__42160_42305 = G__42316;
i__42161_42306 = G__42317;
continue;
}
} else {
var temp__5720__auto___42318__$1 = cljs.core.seq(seq__42156_42303);
if(temp__5720__auto___42318__$1){
var seq__42156_42319__$1 = temp__5720__auto___42318__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42156_42319__$1)){
var c__4550__auto___42320 = cljs.core.chunk_first(seq__42156_42319__$1);
var G__42321 = cljs.core.chunk_rest(seq__42156_42319__$1);
var G__42322 = c__4550__auto___42320;
var G__42323 = cljs.core.count(c__4550__auto___42320);
var G__42324 = (0);
seq__42156_42303 = G__42321;
chunk__42159_42304 = G__42322;
count__42160_42305 = G__42323;
i__42161_42306 = G__42324;
continue;
} else {
var node_42325 = cljs.core.first(seq__42156_42319__$1);
var path_match_42326 = shadow.cljs.devtools.client.browser.match_paths(node_42325.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42326)){
var new_link_42327 = (function (){var G__42167 = node_42325.cloneNode(true);
G__42167.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42326),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42167;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42326], 0));

goog.dom.insertSiblingAfter(new_link_42327,node_42325);

goog.dom.removeNode(node_42325);


var G__42328 = cljs.core.next(seq__42156_42319__$1);
var G__42329 = null;
var G__42330 = (0);
var G__42331 = (0);
seq__42156_42303 = G__42328;
chunk__42159_42304 = G__42329;
count__42160_42305 = G__42330;
i__42161_42306 = G__42331;
continue;
} else {
var G__42332 = cljs.core.next(seq__42156_42319__$1);
var G__42333 = null;
var G__42334 = (0);
var G__42335 = (0);
seq__42156_42303 = G__42332;
chunk__42159_42304 = G__42333;
count__42160_42305 = G__42334;
i__42161_42306 = G__42335;
continue;
}
}
} else {
}
}
break;
}


var G__42336 = cljs.core.next(seq__42114__$1);
var G__42337 = null;
var G__42338 = (0);
var G__42339 = (0);
seq__42114 = G__42336;
chunk__42116 = G__42337;
count__42117 = G__42338;
i__42118 = G__42339;
continue;
} else {
var G__42340 = cljs.core.next(seq__42114__$1);
var G__42341 = null;
var G__42342 = (0);
var G__42343 = (0);
seq__42114 = G__42340;
chunk__42116 = G__42341;
count__42117 = G__42342;
i__42118 = G__42343;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__42168){
var map__42169 = p__42168;
var map__42169__$1 = (((((!((map__42169 == null))))?(((((map__42169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42169):map__42169);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42169__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42169__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__42169,map__42169__$1,id,js){
return (function (){
return eval(js);
});})(map__42169,map__42169__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__42171){
var map__42172 = p__42171;
var map__42172__$1 = (((((!((map__42172 == null))))?(((((map__42172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42172):map__42172);
var msg = map__42172__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__42172,map__42172__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__42174){
var map__42175 = p__42174;
var map__42175__$1 = (((((!((map__42175 == null))))?(((((map__42175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42175):map__42175);
var src = map__42175__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42175__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__42172,map__42172__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__42172,map__42172__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__42172,map__42172__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__42177){
var map__42178 = p__42177;
var map__42178__$1 = (((((!((map__42178 == null))))?(((((map__42178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42178):map__42178);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42178__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42178__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__42178,map__42178__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__42178,map__42178__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__42180){
var map__42181 = p__42180;
var map__42181__$1 = (((((!((map__42181 == null))))?(((((map__42181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42181):map__42181);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42181__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42181__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__42183){
var map__42184 = p__42183;
var map__42184__$1 = (((((!((map__42184 == null))))?(((((map__42184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42184):map__42184);
var msg = map__42184__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42184__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__42186 = type;
var G__42186__$1 = (((G__42186 instanceof cljs.core.Keyword))?G__42186.fqn:null);
switch (G__42186__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__42187 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__42188 = ((function (G__42187){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__42187))
;
var G__42189 = "POST";
var G__42190 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__42191 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42187,G__42188,G__42189,G__42190,G__42191);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e42192){var e = e42192;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___42345 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___42345)){
var s_42346 = temp__5720__auto___42345;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_42346.onclose = ((function (s_42346,temp__5720__auto___42345){
return (function (e){
return null;
});})(s_42346,temp__5720__auto___42345))
;

s_42346.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
