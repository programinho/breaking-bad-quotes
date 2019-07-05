goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.client_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5724__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5724__auto__ == null)){
return null;
} else {
var tcp = temp__5724__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5724__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5724__auto__ == null)){
return null;
} else {
var ws = temp__5724__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),((function (ws,temp__5724__auto__){
return (function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
});})(ws,temp__5724__auto__))
);
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__36038){
var map__36039 = p__36038;
var map__36039__$1 = (((((!((map__36039 == null))))?(((((map__36039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36039):map__36039);
var msg = map__36039__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36039__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36039__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__36045){
var map__36046 = p__36045;
var map__36046__$1 = (((((!((map__36046 == null))))?(((((map__36046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36046):map__36046);
var msg = map__36046__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36046__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__36048 = repl_state;
var map__36048__$1 = (((((!((map__36048 == null))))?(((((map__36048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36048):map__36048);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36048__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__36051_36171 = cljs.core.seq(repl_sources);
var chunk__36053_36172 = null;
var count__36054_36173 = (0);
var i__36055_36174 = (0);
while(true){
if((i__36055_36174 < count__36054_36173)){
var map__36066_36175 = chunk__36053_36172.cljs$core$IIndexed$_nth$arity$2(null,i__36055_36174);
var map__36066_36176__$1 = (((((!((map__36066_36175 == null))))?(((((map__36066_36175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36066_36175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36066_36175):map__36066_36175);
var src_36177 = map__36066_36176__$1;
var output_name_36178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36066_36176__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_36178)))){
shadow.cljs.devtools.client.node.closure_import(output_name_36178);


var G__36179 = seq__36051_36171;
var G__36180 = chunk__36053_36172;
var G__36181 = count__36054_36173;
var G__36182 = (i__36055_36174 + (1));
seq__36051_36171 = G__36179;
chunk__36053_36172 = G__36180;
count__36054_36173 = G__36181;
i__36055_36174 = G__36182;
continue;
} else {
var G__36183 = seq__36051_36171;
var G__36184 = chunk__36053_36172;
var G__36185 = count__36054_36173;
var G__36186 = (i__36055_36174 + (1));
seq__36051_36171 = G__36183;
chunk__36053_36172 = G__36184;
count__36054_36173 = G__36185;
i__36055_36174 = G__36186;
continue;
}
} else {
var temp__5720__auto___36190 = cljs.core.seq(seq__36051_36171);
if(temp__5720__auto___36190){
var seq__36051_36191__$1 = temp__5720__auto___36190;
if(cljs.core.chunked_seq_QMARK_(seq__36051_36191__$1)){
var c__4550__auto___36192 = cljs.core.chunk_first(seq__36051_36191__$1);
var G__36193 = cljs.core.chunk_rest(seq__36051_36191__$1);
var G__36194 = c__4550__auto___36192;
var G__36195 = cljs.core.count(c__4550__auto___36192);
var G__36196 = (0);
seq__36051_36171 = G__36193;
chunk__36053_36172 = G__36194;
count__36054_36173 = G__36195;
i__36055_36174 = G__36196;
continue;
} else {
var map__36069_36197 = cljs.core.first(seq__36051_36191__$1);
var map__36069_36198__$1 = (((((!((map__36069_36197 == null))))?(((((map__36069_36197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36069_36197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36069_36197):map__36069_36197);
var src_36199 = map__36069_36198__$1;
var output_name_36200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36069_36198__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_36200)))){
shadow.cljs.devtools.client.node.closure_import(output_name_36200);


var G__36201 = cljs.core.next(seq__36051_36191__$1);
var G__36202 = null;
var G__36203 = (0);
var G__36204 = (0);
seq__36051_36171 = G__36201;
chunk__36053_36172 = G__36202;
count__36054_36173 = G__36203;
i__36055_36174 = G__36204;
continue;
} else {
var G__36205 = cljs.core.next(seq__36051_36191__$1);
var G__36206 = null;
var G__36207 = (0);
var G__36208 = (0);
seq__36051_36171 = G__36205;
chunk__36053_36172 = G__36206;
count__36054_36173 = G__36207;
i__36055_36174 = G__36208;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__36071){
var map__36076 = p__36071;
var map__36076__$1 = (((((!((map__36076 == null))))?(((((map__36076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36076):map__36076);
var msg = map__36076__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36076__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__36076,map__36076__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__36076,map__36076__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__36087){
var map__36088 = p__36087;
var map__36088__$1 = (((((!((map__36088 == null))))?(((((map__36088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36088):map__36088);
var msg = map__36088__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36088__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__36100){
var map__36101 = p__36100;
var map__36101__$1 = (((((!((map__36101 == null))))?(((((map__36101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36101):map__36101);
var msg = map__36101__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36101__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36101__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36101__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__36109_36214 = cljs.core.seq(sources);
var chunk__36110_36215 = null;
var count__36111_36216 = (0);
var i__36112_36217 = (0);
while(true){
if((i__36112_36217 < count__36111_36216)){
var map__36124_36220 = chunk__36110_36215.cljs$core$IIndexed$_nth$arity$2(null,i__36112_36217);
var map__36124_36221__$1 = (((((!((map__36124_36220 == null))))?(((((map__36124_36220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36124_36220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36124_36220):map__36124_36220);
var src_36222 = map__36124_36221__$1;
var provides_36223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36124_36221__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_36224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36124_36221__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_36224)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_36223);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_36224);
} else {
}


var G__36225 = seq__36109_36214;
var G__36226 = chunk__36110_36215;
var G__36227 = count__36111_36216;
var G__36228 = (i__36112_36217 + (1));
seq__36109_36214 = G__36225;
chunk__36110_36215 = G__36226;
count__36111_36216 = G__36227;
i__36112_36217 = G__36228;
continue;
} else {
var temp__5720__auto___36229 = cljs.core.seq(seq__36109_36214);
if(temp__5720__auto___36229){
var seq__36109_36230__$1 = temp__5720__auto___36229;
if(cljs.core.chunked_seq_QMARK_(seq__36109_36230__$1)){
var c__4550__auto___36231 = cljs.core.chunk_first(seq__36109_36230__$1);
var G__36232 = cljs.core.chunk_rest(seq__36109_36230__$1);
var G__36233 = c__4550__auto___36231;
var G__36234 = cljs.core.count(c__4550__auto___36231);
var G__36235 = (0);
seq__36109_36214 = G__36232;
chunk__36110_36215 = G__36233;
count__36111_36216 = G__36234;
i__36112_36217 = G__36235;
continue;
} else {
var map__36126_36236 = cljs.core.first(seq__36109_36230__$1);
var map__36126_36237__$1 = (((((!((map__36126_36236 == null))))?(((((map__36126_36236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36126_36236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36126_36236):map__36126_36236);
var src_36238 = map__36126_36237__$1;
var provides_36239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36126_36237__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_36240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36126_36237__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_36240)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_36239);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_36240);
} else {
}


var G__36241 = cljs.core.next(seq__36109_36230__$1);
var G__36242 = null;
var G__36243 = (0);
var G__36244 = (0);
seq__36109_36214 = G__36241;
chunk__36110_36215 = G__36242;
count__36111_36216 = G__36243;
i__36112_36217 = G__36244;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36108){var e = e36108;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__36129){
var map__36130 = p__36129;
var map__36130__$1 = (((((!((map__36130 == null))))?(((((map__36130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36130):map__36130);
var msg = map__36130__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__36132 = info;
var map__36132__$1 = (((((!((map__36132 == null))))?(((((map__36132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36132):map__36132);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36132__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__36132,map__36132__$1,sources,compiled,map__36130,map__36130__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__36134(s__36135){
return (new cljs.core.LazySeq(null,((function (map__36132,map__36132__$1,sources,compiled,map__36130,map__36130__$1,msg,info,reload_info){
return (function (){
var s__36135__$1 = s__36135;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36135__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__36140 = cljs.core.first(xs__6277__auto__);
var map__36140__$1 = (((((!((map__36140 == null))))?(((((map__36140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36140):map__36140);
var src = map__36140__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36140__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__36135__$1,map__36140,map__36140__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36132,map__36132__$1,sources,compiled,map__36130,map__36130__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__36134_$_iter__36136(s__36137){
return (new cljs.core.LazySeq(null,((function (s__36135__$1,map__36140,map__36140__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36132,map__36132__$1,sources,compiled,map__36130,map__36130__$1,msg,info,reload_info){
return (function (){
var s__36137__$1 = s__36137;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__36137__$1);
if(temp__5720__auto____$1){
var s__36137__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36137__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36137__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36139 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36138 = (0);
while(true){
if((i__36138 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36138);
cljs.core.chunk_append(b__36139,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36245 = (i__36138 + (1));
i__36138 = G__36245;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36139),shadow$cljs$devtools$client$node$build_complete_$_iter__36134_$_iter__36136(cljs.core.chunk_rest(s__36137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36139),null);
}
} else {
var warning = cljs.core.first(s__36137__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__36134_$_iter__36136(cljs.core.rest(s__36137__$2)));
}
} else {
return null;
}
break;
}
});})(s__36135__$1,map__36140,map__36140__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36132,map__36132__$1,sources,compiled,map__36130,map__36130__$1,msg,info,reload_info))
,null,null));
});})(s__36135__$1,map__36140,map__36140__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__36132,map__36132__$1,sources,compiled,map__36130,map__36130__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__36134(cljs.core.rest(s__36135__$1)));
} else {
var G__36250 = cljs.core.rest(s__36135__$1);
s__36135__$1 = G__36250;
continue;
}
} else {
var G__36251 = cljs.core.rest(s__36135__$1);
s__36135__$1 = G__36251;
continue;
}
} else {
return null;
}
break;
}
});})(map__36132,map__36132__$1,sources,compiled,map__36130,map__36130__$1,msg,info,reload_info))
,null,null));
});})(map__36132,map__36132__$1,sources,compiled,map__36130,map__36130__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__36146 = info;
var map__36146__$1 = (((((!((map__36146 == null))))?(((((map__36146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36146):map__36146);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__36146,map__36146__$1,sources__$1,compiled__$1,map__36132,map__36132__$1,sources,compiled,warnings,map__36130,map__36130__$1,msg,info,reload_info){
return (function (p__36148){
var map__36149 = p__36148;
var map__36149__$1 = (((((!((map__36149 == null))))?(((((map__36149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36149):map__36149);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36149__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__36146,map__36146__$1,sources__$1,compiled__$1,map__36132,map__36132__$1,sources,compiled,warnings,map__36130,map__36130__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__36146,map__36146__$1,sources__$1,compiled__$1,map__36132,map__36132__$1,sources,compiled,warnings,map__36130,map__36130__$1,msg,info,reload_info){
return (function (p__36151){
var map__36152 = p__36151;
var map__36152__$1 = (((((!((map__36152 == null))))?(((((map__36152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36152):map__36152);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__36146,map__36146__$1,sources__$1,compiled__$1,map__36132,map__36132__$1,sources,compiled,warnings,map__36130,map__36130__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__36146,map__36146__$1,sources__$1,compiled__$1,files_to_require,map__36132,map__36132__$1,sources,compiled,warnings,map__36130,map__36130__$1,msg,info,reload_info){
return (function (){
var seq__36154 = cljs.core.seq(files_to_require);
var chunk__36155 = null;
var count__36156 = (0);
var i__36157 = (0);
while(true){
if((i__36157 < count__36156)){
var src = chunk__36155.cljs$core$IIndexed$_nth$arity$2(null,i__36157);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__36262 = seq__36154;
var G__36263 = chunk__36155;
var G__36264 = count__36156;
var G__36265 = (i__36157 + (1));
seq__36154 = G__36262;
chunk__36155 = G__36263;
count__36156 = G__36264;
i__36157 = G__36265;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36154);
if(temp__5720__auto__){
var seq__36154__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36154__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36154__$1);
var G__36268 = cljs.core.chunk_rest(seq__36154__$1);
var G__36269 = c__4550__auto__;
var G__36270 = cljs.core.count(c__4550__auto__);
var G__36271 = (0);
seq__36154 = G__36268;
chunk__36155 = G__36269;
count__36156 = G__36270;
i__36157 = G__36271;
continue;
} else {
var src = cljs.core.first(seq__36154__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__36272 = cljs.core.next(seq__36154__$1);
var G__36273 = null;
var G__36274 = (0);
var G__36275 = (0);
seq__36154 = G__36272;
chunk__36155 = G__36273;
count__36156 = G__36274;
i__36157 = G__36275;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__36146,map__36146__$1,sources__$1,compiled__$1,files_to_require,map__36132,map__36132__$1,sources,compiled,warnings,map__36130,map__36130__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__36160){
var map__36162 = p__36160;
var map__36162__$1 = (((((!((map__36162 == null))))?(((((map__36162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36162):map__36162);
var msg = map__36162__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__36164 = type;
var G__36164__$1 = (((G__36164 instanceof cljs.core.Keyword))?G__36164.fqn:null);
switch (G__36164__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-configure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "build-failure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",((function (url,client){
return (function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
});})(url,client))
);

client.on("unexpected-response",((function (url,client){
return (function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
});})(url,client))
);

client.on("message",((function (url,client){
return (function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e36169){var e = e36169;
return console.error("failed to process message",data,e);
}});})(url,client))
);

client.on("close",((function (url,client){
return (function (){
return console.log("REPL client disconnected");
});})(url,client))
);

return client.on("error",((function (url,client){
return (function (err){
return console.log("REPL client error",err);
});})(url,client))
);
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
