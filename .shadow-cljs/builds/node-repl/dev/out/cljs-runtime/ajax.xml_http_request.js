goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__38130 = e.target.readyState;
var fexpr__38129 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__38129.cljs$core$IFn$_invoke$arity$1 ? fexpr__38129.cljs$core$IFn$_invoke$arity$1(G__38130) : fexpr__38129.call(null,G__38130));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__38147,handler){
var map__38148 = p__38147;
var map__38148__$1 = (((((!((map__38148 == null))))?(((((map__38148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38148):map__38148);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38148__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38148__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38148__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38148__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38148__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38148__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38148__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__38148,map__38148__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__38138_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__38138_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__38148,map__38148__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___38201 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___38201)){
var response_type_38202 = temp__5720__auto___38201;
this$__$1.responseType = cljs.core.name(response_type_38202);
} else {
}

var seq__38151_38203 = cljs.core.seq(headers);
var chunk__38152_38204 = null;
var count__38153_38205 = (0);
var i__38154_38206 = (0);
while(true){
if((i__38154_38206 < count__38153_38205)){
var vec__38164_38207 = chunk__38152_38204.cljs$core$IIndexed$_nth$arity$2(null,i__38154_38206);
var k_38208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164_38207,(0),null);
var v_38209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38164_38207,(1),null);
this$__$1.setRequestHeader(k_38208,v_38209);


var G__38210 = seq__38151_38203;
var G__38211 = chunk__38152_38204;
var G__38212 = count__38153_38205;
var G__38213 = (i__38154_38206 + (1));
seq__38151_38203 = G__38210;
chunk__38152_38204 = G__38211;
count__38153_38205 = G__38212;
i__38154_38206 = G__38213;
continue;
} else {
var temp__5720__auto___38214 = cljs.core.seq(seq__38151_38203);
if(temp__5720__auto___38214){
var seq__38151_38215__$1 = temp__5720__auto___38214;
if(cljs.core.chunked_seq_QMARK_(seq__38151_38215__$1)){
var c__4550__auto___38216 = cljs.core.chunk_first(seq__38151_38215__$1);
var G__38217 = cljs.core.chunk_rest(seq__38151_38215__$1);
var G__38218 = c__4550__auto___38216;
var G__38219 = cljs.core.count(c__4550__auto___38216);
var G__38220 = (0);
seq__38151_38203 = G__38217;
chunk__38152_38204 = G__38218;
count__38153_38205 = G__38219;
i__38154_38206 = G__38220;
continue;
} else {
var vec__38173_38221 = cljs.core.first(seq__38151_38215__$1);
var k_38222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38173_38221,(0),null);
var v_38223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38173_38221,(1),null);
this$__$1.setRequestHeader(k_38222,v_38223);


var G__38224 = cljs.core.next(seq__38151_38215__$1);
var G__38225 = null;
var G__38226 = (0);
var G__38227 = (0);
seq__38151_38203 = G__38224;
chunk__38152_38204 = G__38225;
count__38153_38205 = G__38226;
i__38154_38206 = G__38227;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
