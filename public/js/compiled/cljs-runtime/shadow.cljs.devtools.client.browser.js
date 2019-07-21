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
var len__4730__auto___37377 = arguments.length;
var i__4731__auto___37378 = (0);
while(true){
if((i__4731__auto___37378 < len__4730__auto___37377)){
args__4736__auto__.push((arguments[i__4731__auto___37378]));

var G__37379 = (i__4731__auto___37378 + (1));
i__4731__auto___37378 = G__37379;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37151){
var G__37152 = cljs.core.first(seq37151);
var seq37151__$1 = cljs.core.next(seq37151);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37152,seq37151__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37167){
var map__37168 = p__37167;
var map__37168__$1 = (((((!((map__37168 == null))))?(((((map__37168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37168):map__37168);
var src = map__37168__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37168__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__37178 = cljs.core.seq(sources);
var chunk__37179 = null;
var count__37180 = (0);
var i__37181 = (0);
while(true){
if((i__37181 < count__37180)){
var map__37188 = chunk__37179.cljs$core$IIndexed$_nth$arity$2(null,i__37181);
var map__37188__$1 = (((((!((map__37188 == null))))?(((((map__37188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37188):map__37188);
var src = map__37188__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37380 = seq__37178;
var G__37381 = chunk__37179;
var G__37382 = count__37180;
var G__37383 = (i__37181 + (1));
seq__37178 = G__37380;
chunk__37179 = G__37381;
count__37180 = G__37382;
i__37181 = G__37383;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37178);
if(temp__5720__auto__){
var seq__37178__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37178__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37178__$1);
var G__37384 = cljs.core.chunk_rest(seq__37178__$1);
var G__37385 = c__4550__auto__;
var G__37386 = cljs.core.count(c__4550__auto__);
var G__37387 = (0);
seq__37178 = G__37384;
chunk__37179 = G__37385;
count__37180 = G__37386;
i__37181 = G__37387;
continue;
} else {
var map__37190 = cljs.core.first(seq__37178__$1);
var map__37190__$1 = (((((!((map__37190 == null))))?(((((map__37190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37190):map__37190);
var src = map__37190__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37190__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37190__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37190__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37190__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37388 = cljs.core.next(seq__37178__$1);
var G__37389 = null;
var G__37390 = (0);
var G__37391 = (0);
seq__37178 = G__37388;
chunk__37179 = G__37389;
count__37180 = G__37390;
i__37181 = G__37391;
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
var seq__37198 = cljs.core.seq(js_requires);
var chunk__37199 = null;
var count__37200 = (0);
var i__37201 = (0);
while(true){
if((i__37201 < count__37200)){
var js_ns = chunk__37199.cljs$core$IIndexed$_nth$arity$2(null,i__37201);
var require_str_37392 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37392);


var G__37393 = seq__37198;
var G__37394 = chunk__37199;
var G__37395 = count__37200;
var G__37396 = (i__37201 + (1));
seq__37198 = G__37393;
chunk__37199 = G__37394;
count__37200 = G__37395;
i__37201 = G__37396;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37198);
if(temp__5720__auto__){
var seq__37198__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37198__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37198__$1);
var G__37397 = cljs.core.chunk_rest(seq__37198__$1);
var G__37398 = c__4550__auto__;
var G__37399 = cljs.core.count(c__4550__auto__);
var G__37400 = (0);
seq__37198 = G__37397;
chunk__37199 = G__37398;
count__37200 = G__37399;
i__37201 = G__37400;
continue;
} else {
var js_ns = cljs.core.first(seq__37198__$1);
var require_str_37401 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37401);


var G__37402 = cljs.core.next(seq__37198__$1);
var G__37403 = null;
var G__37404 = (0);
var G__37405 = (0);
seq__37198 = G__37402;
chunk__37199 = G__37403;
count__37200 = G__37404;
i__37201 = G__37405;
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
var G__37206 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37206) : callback.call(null,G__37206));
} else {
var G__37207 = shadow.cljs.devtools.client.env.files_url();
var G__37208 = ((function (G__37207){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37207))
;
var G__37209 = "POST";
var G__37210 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37211 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37207,G__37208,G__37209,G__37210,G__37211);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37215){
var map__37216 = p__37215;
var map__37216__$1 = (((((!((map__37216 == null))))?(((((map__37216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37216):map__37216);
var msg = map__37216__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37216__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37218 = info;
var map__37218__$1 = (((((!((map__37218 == null))))?(((((map__37218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37218):map__37218);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37218__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37218__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37218,map__37218__$1,sources,compiled,map__37216,map__37216__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37221(s__37222){
return (new cljs.core.LazySeq(null,((function (map__37218,map__37218__$1,sources,compiled,map__37216,map__37216__$1,msg,info,reload_info){
return (function (){
var s__37222__$1 = s__37222;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37222__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37227 = cljs.core.first(xs__6277__auto__);
var map__37227__$1 = (((((!((map__37227 == null))))?(((((map__37227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37227):map__37227);
var src = map__37227__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37227__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37222__$1,map__37227,map__37227__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37218,map__37218__$1,sources,compiled,map__37216,map__37216__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37221_$_iter__37223(s__37224){
return (new cljs.core.LazySeq(null,((function (s__37222__$1,map__37227,map__37227__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37218,map__37218__$1,sources,compiled,map__37216,map__37216__$1,msg,info,reload_info){
return (function (){
var s__37224__$1 = s__37224;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37224__$1);
if(temp__5720__auto____$1){
var s__37224__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37224__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37224__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37226 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37225 = (0);
while(true){
if((i__37225 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37225);
cljs.core.chunk_append(b__37226,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37412 = (i__37225 + (1));
i__37225 = G__37412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37226),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37221_$_iter__37223(cljs.core.chunk_rest(s__37224__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37226),null);
}
} else {
var warning = cljs.core.first(s__37224__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37221_$_iter__37223(cljs.core.rest(s__37224__$2)));
}
} else {
return null;
}
break;
}
});})(s__37222__$1,map__37227,map__37227__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37218,map__37218__$1,sources,compiled,map__37216,map__37216__$1,msg,info,reload_info))
,null,null));
});})(s__37222__$1,map__37227,map__37227__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37218,map__37218__$1,sources,compiled,map__37216,map__37216__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37221(cljs.core.rest(s__37222__$1)));
} else {
var G__37414 = cljs.core.rest(s__37222__$1);
s__37222__$1 = G__37414;
continue;
}
} else {
var G__37415 = cljs.core.rest(s__37222__$1);
s__37222__$1 = G__37415;
continue;
}
} else {
return null;
}
break;
}
});})(map__37218,map__37218__$1,sources,compiled,map__37216,map__37216__$1,msg,info,reload_info))
,null,null));
});})(map__37218,map__37218__$1,sources,compiled,map__37216,map__37216__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37234_37417 = cljs.core.seq(warnings);
var chunk__37235_37418 = null;
var count__37236_37419 = (0);
var i__37237_37420 = (0);
while(true){
if((i__37237_37420 < count__37236_37419)){
var map__37246_37421 = chunk__37235_37418.cljs$core$IIndexed$_nth$arity$2(null,i__37237_37420);
var map__37246_37422__$1 = (((((!((map__37246_37421 == null))))?(((((map__37246_37421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37246_37421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37246_37421):map__37246_37421);
var w_37423 = map__37246_37422__$1;
var msg_37424__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37246_37422__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37246_37422__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37246_37422__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37246_37422__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37427)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37425),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37426),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37424__$1)].join(''));


var G__37430 = seq__37234_37417;
var G__37431 = chunk__37235_37418;
var G__37432 = count__37236_37419;
var G__37433 = (i__37237_37420 + (1));
seq__37234_37417 = G__37430;
chunk__37235_37418 = G__37431;
count__37236_37419 = G__37432;
i__37237_37420 = G__37433;
continue;
} else {
var temp__5720__auto___37434 = cljs.core.seq(seq__37234_37417);
if(temp__5720__auto___37434){
var seq__37234_37435__$1 = temp__5720__auto___37434;
if(cljs.core.chunked_seq_QMARK_(seq__37234_37435__$1)){
var c__4550__auto___37436 = cljs.core.chunk_first(seq__37234_37435__$1);
var G__37437 = cljs.core.chunk_rest(seq__37234_37435__$1);
var G__37438 = c__4550__auto___37436;
var G__37439 = cljs.core.count(c__4550__auto___37436);
var G__37440 = (0);
seq__37234_37417 = G__37437;
chunk__37235_37418 = G__37438;
count__37236_37419 = G__37439;
i__37237_37420 = G__37440;
continue;
} else {
var map__37248_37442 = cljs.core.first(seq__37234_37435__$1);
var map__37248_37443__$1 = (((((!((map__37248_37442 == null))))?(((((map__37248_37442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37248_37442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37248_37442):map__37248_37442);
var w_37444 = map__37248_37443__$1;
var msg_37445__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37248_37443__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37248_37443__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37248_37443__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37248_37443__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37448)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37446),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37447),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37445__$1)].join(''));


var G__37450 = cljs.core.next(seq__37234_37435__$1);
var G__37451 = null;
var G__37452 = (0);
var G__37453 = (0);
seq__37234_37417 = G__37450;
chunk__37235_37418 = G__37451;
count__37236_37419 = G__37452;
i__37237_37420 = G__37453;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37218,map__37218__$1,sources,compiled,warnings,map__37216,map__37216__$1,msg,info,reload_info){
return (function (p__37252){
var map__37253 = p__37252;
var map__37253__$1 = (((((!((map__37253 == null))))?(((((map__37253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37253):map__37253);
var src = map__37253__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37253__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37253__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37218,map__37218__$1,sources,compiled,warnings,map__37216,map__37216__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37218,map__37218__$1,sources,compiled,warnings,map__37216,map__37216__$1,msg,info,reload_info){
return (function (p__37255){
var map__37256 = p__37255;
var map__37256__$1 = (((((!((map__37256 == null))))?(((((map__37256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37256):map__37256);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37256__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37218,map__37218__$1,sources,compiled,warnings,map__37216,map__37216__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37218,map__37218__$1,sources,compiled,warnings,map__37216,map__37216__$1,msg,info,reload_info){
return (function (p__37258){
var map__37259 = p__37258;
var map__37259__$1 = (((((!((map__37259 == null))))?(((((map__37259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37259):map__37259);
var rc = map__37259__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37259__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37218,map__37218__$1,sources,compiled,warnings,map__37216,map__37216__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37218,map__37218__$1,sources,compiled,warnings,map__37216,map__37216__$1,msg,info,reload_info){
return (function (p1__37212_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37212_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37218,map__37218__$1,sources,compiled,warnings,map__37216,map__37216__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37261){
var map__37262 = p__37261;
var map__37262__$1 = (((((!((map__37262 == null))))?(((((map__37262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37262):map__37262);
var msg = map__37262__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37264 = cljs.core.seq(updates);
var chunk__37266 = null;
var count__37267 = (0);
var i__37268 = (0);
while(true){
if((i__37268 < count__37267)){
var path = chunk__37266.cljs$core$IIndexed$_nth$arity$2(null,i__37268);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37306_37464 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37309_37465 = null;
var count__37310_37466 = (0);
var i__37311_37467 = (0);
while(true){
if((i__37311_37467 < count__37310_37466)){
var node_37468 = chunk__37309_37465.cljs$core$IIndexed$_nth$arity$2(null,i__37311_37467);
var path_match_37469 = shadow.cljs.devtools.client.browser.match_paths(node_37468.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37469)){
var new_link_37470 = (function (){var G__37316 = node_37468.cloneNode(true);
G__37316.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37469),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37316;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37469], 0));

goog.dom.insertSiblingAfter(new_link_37470,node_37468);

goog.dom.removeNode(node_37468);


var G__37471 = seq__37306_37464;
var G__37472 = chunk__37309_37465;
var G__37473 = count__37310_37466;
var G__37474 = (i__37311_37467 + (1));
seq__37306_37464 = G__37471;
chunk__37309_37465 = G__37472;
count__37310_37466 = G__37473;
i__37311_37467 = G__37474;
continue;
} else {
var G__37475 = seq__37306_37464;
var G__37476 = chunk__37309_37465;
var G__37477 = count__37310_37466;
var G__37478 = (i__37311_37467 + (1));
seq__37306_37464 = G__37475;
chunk__37309_37465 = G__37476;
count__37310_37466 = G__37477;
i__37311_37467 = G__37478;
continue;
}
} else {
var temp__5720__auto___37479 = cljs.core.seq(seq__37306_37464);
if(temp__5720__auto___37479){
var seq__37306_37480__$1 = temp__5720__auto___37479;
if(cljs.core.chunked_seq_QMARK_(seq__37306_37480__$1)){
var c__4550__auto___37481 = cljs.core.chunk_first(seq__37306_37480__$1);
var G__37482 = cljs.core.chunk_rest(seq__37306_37480__$1);
var G__37483 = c__4550__auto___37481;
var G__37484 = cljs.core.count(c__4550__auto___37481);
var G__37485 = (0);
seq__37306_37464 = G__37482;
chunk__37309_37465 = G__37483;
count__37310_37466 = G__37484;
i__37311_37467 = G__37485;
continue;
} else {
var node_37486 = cljs.core.first(seq__37306_37480__$1);
var path_match_37487 = shadow.cljs.devtools.client.browser.match_paths(node_37486.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37487)){
var new_link_37489 = (function (){var G__37318 = node_37486.cloneNode(true);
G__37318.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37487),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37318;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37487], 0));

goog.dom.insertSiblingAfter(new_link_37489,node_37486);

goog.dom.removeNode(node_37486);


var G__37493 = cljs.core.next(seq__37306_37480__$1);
var G__37494 = null;
var G__37495 = (0);
var G__37496 = (0);
seq__37306_37464 = G__37493;
chunk__37309_37465 = G__37494;
count__37310_37466 = G__37495;
i__37311_37467 = G__37496;
continue;
} else {
var G__37497 = cljs.core.next(seq__37306_37480__$1);
var G__37498 = null;
var G__37499 = (0);
var G__37500 = (0);
seq__37306_37464 = G__37497;
chunk__37309_37465 = G__37498;
count__37310_37466 = G__37499;
i__37311_37467 = G__37500;
continue;
}
}
} else {
}
}
break;
}


var G__37501 = seq__37264;
var G__37502 = chunk__37266;
var G__37503 = count__37267;
var G__37504 = (i__37268 + (1));
seq__37264 = G__37501;
chunk__37266 = G__37502;
count__37267 = G__37503;
i__37268 = G__37504;
continue;
} else {
var G__37505 = seq__37264;
var G__37506 = chunk__37266;
var G__37507 = count__37267;
var G__37508 = (i__37268 + (1));
seq__37264 = G__37505;
chunk__37266 = G__37506;
count__37267 = G__37507;
i__37268 = G__37508;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37264);
if(temp__5720__auto__){
var seq__37264__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37264__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37264__$1);
var G__37509 = cljs.core.chunk_rest(seq__37264__$1);
var G__37510 = c__4550__auto__;
var G__37511 = cljs.core.count(c__4550__auto__);
var G__37512 = (0);
seq__37264 = G__37509;
chunk__37266 = G__37510;
count__37267 = G__37511;
i__37268 = G__37512;
continue;
} else {
var path = cljs.core.first(seq__37264__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37322_37516 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37325_37517 = null;
var count__37326_37518 = (0);
var i__37327_37519 = (0);
while(true){
if((i__37327_37519 < count__37326_37518)){
var node_37520 = chunk__37325_37517.cljs$core$IIndexed$_nth$arity$2(null,i__37327_37519);
var path_match_37521 = shadow.cljs.devtools.client.browser.match_paths(node_37520.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37521)){
var new_link_37522 = (function (){var G__37332 = node_37520.cloneNode(true);
G__37332.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37521),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37332;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37521], 0));

goog.dom.insertSiblingAfter(new_link_37522,node_37520);

goog.dom.removeNode(node_37520);


var G__37523 = seq__37322_37516;
var G__37524 = chunk__37325_37517;
var G__37525 = count__37326_37518;
var G__37526 = (i__37327_37519 + (1));
seq__37322_37516 = G__37523;
chunk__37325_37517 = G__37524;
count__37326_37518 = G__37525;
i__37327_37519 = G__37526;
continue;
} else {
var G__37527 = seq__37322_37516;
var G__37528 = chunk__37325_37517;
var G__37529 = count__37326_37518;
var G__37530 = (i__37327_37519 + (1));
seq__37322_37516 = G__37527;
chunk__37325_37517 = G__37528;
count__37326_37518 = G__37529;
i__37327_37519 = G__37530;
continue;
}
} else {
var temp__5720__auto___37531__$1 = cljs.core.seq(seq__37322_37516);
if(temp__5720__auto___37531__$1){
var seq__37322_37532__$1 = temp__5720__auto___37531__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37322_37532__$1)){
var c__4550__auto___37533 = cljs.core.chunk_first(seq__37322_37532__$1);
var G__37534 = cljs.core.chunk_rest(seq__37322_37532__$1);
var G__37535 = c__4550__auto___37533;
var G__37536 = cljs.core.count(c__4550__auto___37533);
var G__37537 = (0);
seq__37322_37516 = G__37534;
chunk__37325_37517 = G__37535;
count__37326_37518 = G__37536;
i__37327_37519 = G__37537;
continue;
} else {
var node_37538 = cljs.core.first(seq__37322_37532__$1);
var path_match_37539 = shadow.cljs.devtools.client.browser.match_paths(node_37538.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37539)){
var new_link_37541 = (function (){var G__37337 = node_37538.cloneNode(true);
G__37337.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37539),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37337;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37539], 0));

goog.dom.insertSiblingAfter(new_link_37541,node_37538);

goog.dom.removeNode(node_37538);


var G__37542 = cljs.core.next(seq__37322_37532__$1);
var G__37543 = null;
var G__37544 = (0);
var G__37545 = (0);
seq__37322_37516 = G__37542;
chunk__37325_37517 = G__37543;
count__37326_37518 = G__37544;
i__37327_37519 = G__37545;
continue;
} else {
var G__37546 = cljs.core.next(seq__37322_37532__$1);
var G__37547 = null;
var G__37548 = (0);
var G__37549 = (0);
seq__37322_37516 = G__37546;
chunk__37325_37517 = G__37547;
count__37326_37518 = G__37548;
i__37327_37519 = G__37549;
continue;
}
}
} else {
}
}
break;
}


var G__37550 = cljs.core.next(seq__37264__$1);
var G__37551 = null;
var G__37552 = (0);
var G__37553 = (0);
seq__37264 = G__37550;
chunk__37266 = G__37551;
count__37267 = G__37552;
i__37268 = G__37553;
continue;
} else {
var G__37554 = cljs.core.next(seq__37264__$1);
var G__37555 = null;
var G__37556 = (0);
var G__37557 = (0);
seq__37264 = G__37554;
chunk__37266 = G__37555;
count__37267 = G__37556;
i__37268 = G__37557;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37339){
var map__37341 = p__37339;
var map__37341__$1 = (((((!((map__37341 == null))))?(((((map__37341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37341):map__37341);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37341__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37341__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37341,map__37341__$1,id,js){
return (function (){
return eval(js);
});})(map__37341,map__37341__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37348){
var map__37349 = p__37348;
var map__37349__$1 = (((((!((map__37349 == null))))?(((((map__37349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37349):map__37349);
var msg = map__37349__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37349__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37349,map__37349__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37351){
var map__37352 = p__37351;
var map__37352__$1 = (((((!((map__37352 == null))))?(((((map__37352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37352):map__37352);
var src = map__37352__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37349,map__37349__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37349,map__37349__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37349,map__37349__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37354){
var map__37355 = p__37354;
var map__37355__$1 = (((((!((map__37355 == null))))?(((((map__37355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37355):map__37355);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37355__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37355__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37355,map__37355__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37355,map__37355__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37357){
var map__37358 = p__37357;
var map__37358__$1 = (((((!((map__37358 == null))))?(((((map__37358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37358):map__37358);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37360){
var map__37361 = p__37360;
var map__37361__$1 = (((((!((map__37361 == null))))?(((((map__37361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37361):map__37361);
var msg = map__37361__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37361__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37363 = type;
var G__37363__$1 = (((G__37363 instanceof cljs.core.Keyword))?G__37363.fqn:null);
switch (G__37363__$1) {
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
var G__37366 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37367 = ((function (G__37366){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37366))
;
var G__37368 = "POST";
var G__37369 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37370 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37366,G__37367,G__37368,G__37369,G__37370);
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
}catch (e37374){var e = e37374;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37589 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37589)){
var s_37594 = temp__5720__auto___37589;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37594.onclose = ((function (s_37594,temp__5720__auto___37589){
return (function (e){
return null;
});})(s_37594,temp__5720__auto___37589))
;

s_37594.close();

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
