goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34999 = coll;
var G__35000 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34999,G__35000) : shadow.dom.lazy_native_coll_seq.call(null,G__34999,G__35000));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35027 = arguments.length;
switch (G__35027) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35032 = arguments.length;
switch (G__35032) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35035 = arguments.length;
switch (G__35035) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35038 = arguments.length;
switch (G__35038) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35045 = arguments.length;
switch (G__35045) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35048 = document;
var G__35049 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35048,G__35049);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35051 = shadow.dom.dom_node(parent);
var G__35052 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35051,G__35052);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35053 = shadow.dom.dom_node(el);
var G__35054 = cls;
return goog.dom.classlist.add(G__35053,G__35054);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35055 = shadow.dom.dom_node(el);
var G__35056 = cls;
return goog.dom.classlist.remove(G__35055,G__35056);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35062 = arguments.length;
switch (G__35062) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35064 = shadow.dom.dom_node(el);
var G__35065 = cls;
return goog.dom.classlist.toggle(G__35064,G__35065);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35068){if((e35068 instanceof Object)){
var e = e35068;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35068;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35071 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35072 = null;
var count__35073 = (0);
var i__35074 = (0);
while(true){
if((i__35074 < count__35073)){
var el = chunk__35072.cljs$core$IIndexed$_nth$arity$2(null,i__35074);
var handler_35626__$1 = ((function (seq__35071,chunk__35072,count__35073,i__35074,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35071,chunk__35072,count__35073,i__35074,el))
;
var G__35087_35627 = el;
var G__35088_35628 = cljs.core.name(ev);
var G__35089_35629 = handler_35626__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35087_35627,G__35088_35628,G__35089_35629) : shadow.dom.dom_listen.call(null,G__35087_35627,G__35088_35628,G__35089_35629));


var G__35630 = seq__35071;
var G__35631 = chunk__35072;
var G__35632 = count__35073;
var G__35633 = (i__35074 + (1));
seq__35071 = G__35630;
chunk__35072 = G__35631;
count__35073 = G__35632;
i__35074 = G__35633;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35071);
if(temp__5720__auto__){
var seq__35071__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35071__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35071__$1);
var G__35635 = cljs.core.chunk_rest(seq__35071__$1);
var G__35636 = c__4550__auto__;
var G__35637 = cljs.core.count(c__4550__auto__);
var G__35638 = (0);
seq__35071 = G__35635;
chunk__35072 = G__35636;
count__35073 = G__35637;
i__35074 = G__35638;
continue;
} else {
var el = cljs.core.first(seq__35071__$1);
var handler_35640__$1 = ((function (seq__35071,chunk__35072,count__35073,i__35074,el,seq__35071__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35071,chunk__35072,count__35073,i__35074,el,seq__35071__$1,temp__5720__auto__))
;
var G__35092_35643 = el;
var G__35093_35644 = cljs.core.name(ev);
var G__35094_35645 = handler_35640__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35092_35643,G__35093_35644,G__35094_35645) : shadow.dom.dom_listen.call(null,G__35092_35643,G__35093_35644,G__35094_35645));


var G__35646 = cljs.core.next(seq__35071__$1);
var G__35647 = null;
var G__35648 = (0);
var G__35649 = (0);
seq__35071 = G__35646;
chunk__35072 = G__35647;
count__35073 = G__35648;
i__35074 = G__35649;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35099 = arguments.length;
switch (G__35099) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35102 = shadow.dom.dom_node(el);
var G__35103 = cljs.core.name(ev);
var G__35104 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35102,G__35103,G__35104) : shadow.dom.dom_listen.call(null,G__35102,G__35103,G__35104));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35106 = shadow.dom.dom_node(el);
var G__35107 = cljs.core.name(ev);
var G__35108 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35106,G__35107,G__35108) : shadow.dom.dom_listen_remove.call(null,G__35106,G__35107,G__35108));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35110 = cljs.core.seq(events);
var chunk__35111 = null;
var count__35112 = (0);
var i__35113 = (0);
while(true){
if((i__35113 < count__35112)){
var vec__35121 = chunk__35111.cljs$core$IIndexed$_nth$arity$2(null,i__35113);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35659 = seq__35110;
var G__35660 = chunk__35111;
var G__35661 = count__35112;
var G__35662 = (i__35113 + (1));
seq__35110 = G__35659;
chunk__35111 = G__35660;
count__35112 = G__35661;
i__35113 = G__35662;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35110);
if(temp__5720__auto__){
var seq__35110__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35110__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35110__$1);
var G__35664 = cljs.core.chunk_rest(seq__35110__$1);
var G__35665 = c__4550__auto__;
var G__35666 = cljs.core.count(c__4550__auto__);
var G__35667 = (0);
seq__35110 = G__35664;
chunk__35111 = G__35665;
count__35112 = G__35666;
i__35113 = G__35667;
continue;
} else {
var vec__35125 = cljs.core.first(seq__35110__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35125,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35669 = cljs.core.next(seq__35110__$1);
var G__35670 = null;
var G__35671 = (0);
var G__35672 = (0);
seq__35110 = G__35669;
chunk__35111 = G__35670;
count__35112 = G__35671;
i__35113 = G__35672;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35130 = cljs.core.seq(styles);
var chunk__35131 = null;
var count__35132 = (0);
var i__35133 = (0);
while(true){
if((i__35133 < count__35132)){
var vec__35151 = chunk__35131.cljs$core$IIndexed$_nth$arity$2(null,i__35133);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151,(1),null);
var G__35154_35676 = dom;
var G__35155_35677 = cljs.core.name(k);
var G__35156_35678 = (((v == null))?"":v);
goog.style.setStyle(G__35154_35676,G__35155_35677,G__35156_35678);


var G__35680 = seq__35130;
var G__35681 = chunk__35131;
var G__35682 = count__35132;
var G__35683 = (i__35133 + (1));
seq__35130 = G__35680;
chunk__35131 = G__35681;
count__35132 = G__35682;
i__35133 = G__35683;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35130);
if(temp__5720__auto__){
var seq__35130__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35130__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35130__$1);
var G__35684 = cljs.core.chunk_rest(seq__35130__$1);
var G__35685 = c__4550__auto__;
var G__35686 = cljs.core.count(c__4550__auto__);
var G__35687 = (0);
seq__35130 = G__35684;
chunk__35131 = G__35685;
count__35132 = G__35686;
i__35133 = G__35687;
continue;
} else {
var vec__35159 = cljs.core.first(seq__35130__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35159,(1),null);
var G__35162_35689 = dom;
var G__35163_35690 = cljs.core.name(k);
var G__35164_35691 = (((v == null))?"":v);
goog.style.setStyle(G__35162_35689,G__35163_35690,G__35164_35691);


var G__35693 = cljs.core.next(seq__35130__$1);
var G__35694 = null;
var G__35695 = (0);
var G__35696 = (0);
seq__35130 = G__35693;
chunk__35131 = G__35694;
count__35132 = G__35695;
i__35133 = G__35696;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35168_35699 = key;
var G__35168_35700__$1 = (((G__35168_35699 instanceof cljs.core.Keyword))?G__35168_35699.fqn:null);
switch (G__35168_35700__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35704 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35704,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35704,"aria-");
}
})())){
el.setAttribute(ks_35704,value);
} else {
(el[ks_35704] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35177 = shadow.dom.dom_node(el);
var G__35178 = cls;
return goog.dom.classlist.contains(G__35177,G__35178);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35183){
var map__35184 = p__35183;
var map__35184__$1 = (((((!((map__35184 == null))))?(((((map__35184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35184):map__35184);
var props = map__35184__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35186 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35186,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35189 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35189,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35189;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35192 = arguments.length;
switch (G__35192) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35198){
var vec__35200 = p__35198;
var seq__35201 = cljs.core.seq(vec__35200);
var first__35202 = cljs.core.first(seq__35201);
var seq__35201__$1 = cljs.core.next(seq__35201);
var nn = first__35202;
var first__35202__$1 = cljs.core.first(seq__35201__$1);
var seq__35201__$2 = cljs.core.next(seq__35201__$1);
var np = first__35202__$1;
var nc = seq__35201__$2;
var node = vec__35200;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35205 = nn;
var G__35206 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35205,G__35206) : create_fn.call(null,G__35205,G__35206));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35207 = nn;
var G__35208 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35207,G__35208) : create_fn.call(null,G__35207,G__35208));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35210 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35210,(1),null);
var seq__35214_35727 = cljs.core.seq(node_children);
var chunk__35215_35728 = null;
var count__35216_35729 = (0);
var i__35217_35730 = (0);
while(true){
if((i__35217_35730 < count__35216_35729)){
var child_struct_35732 = chunk__35215_35728.cljs$core$IIndexed$_nth$arity$2(null,i__35217_35730);
var children_35733 = shadow.dom.dom_node(child_struct_35732);
if(cljs.core.seq_QMARK_(children_35733)){
var seq__35241_35734 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35733));
var chunk__35243_35735 = null;
var count__35244_35736 = (0);
var i__35245_35737 = (0);
while(true){
if((i__35245_35737 < count__35244_35736)){
var child_35742 = chunk__35243_35735.cljs$core$IIndexed$_nth$arity$2(null,i__35245_35737);
if(cljs.core.truth_(child_35742)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35742);


var G__35744 = seq__35241_35734;
var G__35745 = chunk__35243_35735;
var G__35746 = count__35244_35736;
var G__35747 = (i__35245_35737 + (1));
seq__35241_35734 = G__35744;
chunk__35243_35735 = G__35745;
count__35244_35736 = G__35746;
i__35245_35737 = G__35747;
continue;
} else {
var G__35748 = seq__35241_35734;
var G__35749 = chunk__35243_35735;
var G__35750 = count__35244_35736;
var G__35751 = (i__35245_35737 + (1));
seq__35241_35734 = G__35748;
chunk__35243_35735 = G__35749;
count__35244_35736 = G__35750;
i__35245_35737 = G__35751;
continue;
}
} else {
var temp__5720__auto___35752 = cljs.core.seq(seq__35241_35734);
if(temp__5720__auto___35752){
var seq__35241_35753__$1 = temp__5720__auto___35752;
if(cljs.core.chunked_seq_QMARK_(seq__35241_35753__$1)){
var c__4550__auto___35755 = cljs.core.chunk_first(seq__35241_35753__$1);
var G__35757 = cljs.core.chunk_rest(seq__35241_35753__$1);
var G__35758 = c__4550__auto___35755;
var G__35759 = cljs.core.count(c__4550__auto___35755);
var G__35760 = (0);
seq__35241_35734 = G__35757;
chunk__35243_35735 = G__35758;
count__35244_35736 = G__35759;
i__35245_35737 = G__35760;
continue;
} else {
var child_35761 = cljs.core.first(seq__35241_35753__$1);
if(cljs.core.truth_(child_35761)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35761);


var G__35762 = cljs.core.next(seq__35241_35753__$1);
var G__35763 = null;
var G__35764 = (0);
var G__35765 = (0);
seq__35241_35734 = G__35762;
chunk__35243_35735 = G__35763;
count__35244_35736 = G__35764;
i__35245_35737 = G__35765;
continue;
} else {
var G__35766 = cljs.core.next(seq__35241_35753__$1);
var G__35767 = null;
var G__35768 = (0);
var G__35769 = (0);
seq__35241_35734 = G__35766;
chunk__35243_35735 = G__35767;
count__35244_35736 = G__35768;
i__35245_35737 = G__35769;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35733);
}


var G__35771 = seq__35214_35727;
var G__35772 = chunk__35215_35728;
var G__35773 = count__35216_35729;
var G__35774 = (i__35217_35730 + (1));
seq__35214_35727 = G__35771;
chunk__35215_35728 = G__35772;
count__35216_35729 = G__35773;
i__35217_35730 = G__35774;
continue;
} else {
var temp__5720__auto___35778 = cljs.core.seq(seq__35214_35727);
if(temp__5720__auto___35778){
var seq__35214_35779__$1 = temp__5720__auto___35778;
if(cljs.core.chunked_seq_QMARK_(seq__35214_35779__$1)){
var c__4550__auto___35780 = cljs.core.chunk_first(seq__35214_35779__$1);
var G__35781 = cljs.core.chunk_rest(seq__35214_35779__$1);
var G__35782 = c__4550__auto___35780;
var G__35783 = cljs.core.count(c__4550__auto___35780);
var G__35784 = (0);
seq__35214_35727 = G__35781;
chunk__35215_35728 = G__35782;
count__35216_35729 = G__35783;
i__35217_35730 = G__35784;
continue;
} else {
var child_struct_35785 = cljs.core.first(seq__35214_35779__$1);
var children_35786 = shadow.dom.dom_node(child_struct_35785);
if(cljs.core.seq_QMARK_(children_35786)){
var seq__35253_35787 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35786));
var chunk__35255_35788 = null;
var count__35256_35789 = (0);
var i__35257_35790 = (0);
while(true){
if((i__35257_35790 < count__35256_35789)){
var child_35792 = chunk__35255_35788.cljs$core$IIndexed$_nth$arity$2(null,i__35257_35790);
if(cljs.core.truth_(child_35792)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35792);


var G__35793 = seq__35253_35787;
var G__35794 = chunk__35255_35788;
var G__35795 = count__35256_35789;
var G__35796 = (i__35257_35790 + (1));
seq__35253_35787 = G__35793;
chunk__35255_35788 = G__35794;
count__35256_35789 = G__35795;
i__35257_35790 = G__35796;
continue;
} else {
var G__35798 = seq__35253_35787;
var G__35799 = chunk__35255_35788;
var G__35800 = count__35256_35789;
var G__35801 = (i__35257_35790 + (1));
seq__35253_35787 = G__35798;
chunk__35255_35788 = G__35799;
count__35256_35789 = G__35800;
i__35257_35790 = G__35801;
continue;
}
} else {
var temp__5720__auto___35802__$1 = cljs.core.seq(seq__35253_35787);
if(temp__5720__auto___35802__$1){
var seq__35253_35803__$1 = temp__5720__auto___35802__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35253_35803__$1)){
var c__4550__auto___35804 = cljs.core.chunk_first(seq__35253_35803__$1);
var G__35805 = cljs.core.chunk_rest(seq__35253_35803__$1);
var G__35806 = c__4550__auto___35804;
var G__35807 = cljs.core.count(c__4550__auto___35804);
var G__35808 = (0);
seq__35253_35787 = G__35805;
chunk__35255_35788 = G__35806;
count__35256_35789 = G__35807;
i__35257_35790 = G__35808;
continue;
} else {
var child_35809 = cljs.core.first(seq__35253_35803__$1);
if(cljs.core.truth_(child_35809)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35809);


var G__35810 = cljs.core.next(seq__35253_35803__$1);
var G__35811 = null;
var G__35812 = (0);
var G__35813 = (0);
seq__35253_35787 = G__35810;
chunk__35255_35788 = G__35811;
count__35256_35789 = G__35812;
i__35257_35790 = G__35813;
continue;
} else {
var G__35818 = cljs.core.next(seq__35253_35803__$1);
var G__35819 = null;
var G__35820 = (0);
var G__35821 = (0);
seq__35253_35787 = G__35818;
chunk__35255_35788 = G__35819;
count__35256_35789 = G__35820;
i__35257_35790 = G__35821;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35786);
}


var G__35822 = cljs.core.next(seq__35214_35779__$1);
var G__35823 = null;
var G__35824 = (0);
var G__35825 = (0);
seq__35214_35727 = G__35822;
chunk__35215_35728 = G__35823;
count__35216_35729 = G__35824;
i__35217_35730 = G__35825;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35264 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35264);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35268 = cljs.core.seq(node);
var chunk__35269 = null;
var count__35270 = (0);
var i__35271 = (0);
while(true){
if((i__35271 < count__35270)){
var n = chunk__35269.cljs$core$IIndexed$_nth$arity$2(null,i__35271);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35832 = seq__35268;
var G__35833 = chunk__35269;
var G__35834 = count__35270;
var G__35835 = (i__35271 + (1));
seq__35268 = G__35832;
chunk__35269 = G__35833;
count__35270 = G__35834;
i__35271 = G__35835;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35268);
if(temp__5720__auto__){
var seq__35268__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35268__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35268__$1);
var G__35837 = cljs.core.chunk_rest(seq__35268__$1);
var G__35838 = c__4550__auto__;
var G__35839 = cljs.core.count(c__4550__auto__);
var G__35840 = (0);
seq__35268 = G__35837;
chunk__35269 = G__35838;
count__35270 = G__35839;
i__35271 = G__35840;
continue;
} else {
var n = cljs.core.first(seq__35268__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35841 = cljs.core.next(seq__35268__$1);
var G__35842 = null;
var G__35843 = (0);
var G__35844 = (0);
seq__35268 = G__35841;
chunk__35269 = G__35842;
count__35270 = G__35843;
i__35271 = G__35844;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35280 = shadow.dom.dom_node(new$);
var G__35281 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35280,G__35281);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35286 = arguments.length;
switch (G__35286) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35290 = arguments.length;
switch (G__35290) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35293 = arguments.length;
switch (G__35293) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35859 = arguments.length;
var i__4731__auto___35861 = (0);
while(true){
if((i__4731__auto___35861 < len__4730__auto___35859)){
args__4736__auto__.push((arguments[i__4731__auto___35861]));

var G__35862 = (i__4731__auto___35861 + (1));
i__4731__auto___35861 = G__35862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35295_35864 = cljs.core.seq(nodes);
var chunk__35296_35865 = null;
var count__35297_35866 = (0);
var i__35298_35867 = (0);
while(true){
if((i__35298_35867 < count__35297_35866)){
var node_35868 = chunk__35296_35865.cljs$core$IIndexed$_nth$arity$2(null,i__35298_35867);
fragment.appendChild(shadow.dom._to_dom(node_35868));


var G__35870 = seq__35295_35864;
var G__35871 = chunk__35296_35865;
var G__35872 = count__35297_35866;
var G__35873 = (i__35298_35867 + (1));
seq__35295_35864 = G__35870;
chunk__35296_35865 = G__35871;
count__35297_35866 = G__35872;
i__35298_35867 = G__35873;
continue;
} else {
var temp__5720__auto___35874 = cljs.core.seq(seq__35295_35864);
if(temp__5720__auto___35874){
var seq__35295_35879__$1 = temp__5720__auto___35874;
if(cljs.core.chunked_seq_QMARK_(seq__35295_35879__$1)){
var c__4550__auto___35880 = cljs.core.chunk_first(seq__35295_35879__$1);
var G__35881 = cljs.core.chunk_rest(seq__35295_35879__$1);
var G__35882 = c__4550__auto___35880;
var G__35883 = cljs.core.count(c__4550__auto___35880);
var G__35884 = (0);
seq__35295_35864 = G__35881;
chunk__35296_35865 = G__35882;
count__35297_35866 = G__35883;
i__35298_35867 = G__35884;
continue;
} else {
var node_35888 = cljs.core.first(seq__35295_35879__$1);
fragment.appendChild(shadow.dom._to_dom(node_35888));


var G__35889 = cljs.core.next(seq__35295_35879__$1);
var G__35890 = null;
var G__35891 = (0);
var G__35892 = (0);
seq__35295_35864 = G__35889;
chunk__35296_35865 = G__35890;
count__35297_35866 = G__35891;
i__35298_35867 = G__35892;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35294){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35294));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35303_35893 = cljs.core.seq(scripts);
var chunk__35304_35894 = null;
var count__35305_35895 = (0);
var i__35306_35896 = (0);
while(true){
if((i__35306_35896 < count__35305_35895)){
var vec__35316_35897 = chunk__35304_35894.cljs$core$IIndexed$_nth$arity$2(null,i__35306_35896);
var script_tag_35898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316_35897,(0),null);
var script_body_35899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35316_35897,(1),null);
eval(script_body_35899);


var G__35901 = seq__35303_35893;
var G__35902 = chunk__35304_35894;
var G__35903 = count__35305_35895;
var G__35904 = (i__35306_35896 + (1));
seq__35303_35893 = G__35901;
chunk__35304_35894 = G__35902;
count__35305_35895 = G__35903;
i__35306_35896 = G__35904;
continue;
} else {
var temp__5720__auto___35905 = cljs.core.seq(seq__35303_35893);
if(temp__5720__auto___35905){
var seq__35303_35906__$1 = temp__5720__auto___35905;
if(cljs.core.chunked_seq_QMARK_(seq__35303_35906__$1)){
var c__4550__auto___35907 = cljs.core.chunk_first(seq__35303_35906__$1);
var G__35908 = cljs.core.chunk_rest(seq__35303_35906__$1);
var G__35909 = c__4550__auto___35907;
var G__35910 = cljs.core.count(c__4550__auto___35907);
var G__35911 = (0);
seq__35303_35893 = G__35908;
chunk__35304_35894 = G__35909;
count__35305_35895 = G__35910;
i__35306_35896 = G__35911;
continue;
} else {
var vec__35321_35913 = cljs.core.first(seq__35303_35906__$1);
var script_tag_35914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35321_35913,(0),null);
var script_body_35915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35321_35913,(1),null);
eval(script_body_35915);


var G__35919 = cljs.core.next(seq__35303_35906__$1);
var G__35920 = null;
var G__35921 = (0);
var G__35922 = (0);
seq__35303_35893 = G__35919;
chunk__35304_35894 = G__35920;
count__35305_35895 = G__35921;
i__35306_35896 = G__35922;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35325){
var vec__35327 = p__35325;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35327,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35327,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35332 = shadow.dom.dom_node(el);
var G__35333 = cls;
return goog.dom.getAncestorByClass(G__35332,G__35333);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35336 = arguments.length;
switch (G__35336) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35337 = shadow.dom.dom_node(el);
var G__35338 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35337,G__35338);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35339 = shadow.dom.dom_node(el);
var G__35340 = cljs.core.name(tag);
var G__35341 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35339,G__35340,G__35341);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35343 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35343);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35346 = shadow.dom.dom_node(dom);
var G__35347 = value;
return goog.dom.forms.setValue(G__35346,G__35347);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35352 = cljs.core.seq(style_keys);
var chunk__35353 = null;
var count__35354 = (0);
var i__35355 = (0);
while(true){
if((i__35355 < count__35354)){
var it = chunk__35353.cljs$core$IIndexed$_nth$arity$2(null,i__35355);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35934 = seq__35352;
var G__35935 = chunk__35353;
var G__35936 = count__35354;
var G__35937 = (i__35355 + (1));
seq__35352 = G__35934;
chunk__35353 = G__35935;
count__35354 = G__35936;
i__35355 = G__35937;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35352);
if(temp__5720__auto__){
var seq__35352__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35352__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35352__$1);
var G__35938 = cljs.core.chunk_rest(seq__35352__$1);
var G__35939 = c__4550__auto__;
var G__35940 = cljs.core.count(c__4550__auto__);
var G__35941 = (0);
seq__35352 = G__35938;
chunk__35353 = G__35939;
count__35354 = G__35940;
i__35355 = G__35941;
continue;
} else {
var it = cljs.core.first(seq__35352__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35942 = cljs.core.next(seq__35352__$1);
var G__35943 = null;
var G__35944 = (0);
var G__35945 = (0);
seq__35352 = G__35942;
chunk__35353 = G__35943;
count__35354 = G__35944;
i__35355 = G__35945;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35361,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35371 = k35361;
var G__35371__$1 = (((G__35371 instanceof cljs.core.Keyword))?G__35371.fqn:null);
switch (G__35371__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35361,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35374){
var vec__35375 = p__35374;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35375,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35360){
var self__ = this;
var G__35360__$1 = this;
return (new cljs.core.RecordIter((0),G__35360__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35384 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35384(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35362,other35363){
var self__ = this;
var this35362__$1 = this;
return (((!((other35363 == null)))) && ((this35362__$1.constructor === other35363.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35362__$1.x,other35363.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35362__$1.y,other35363.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35362__$1.__extmap,other35363.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35360){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35391 = cljs.core.keyword_identical_QMARK_;
var expr__35392 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35395 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35396 = expr__35392;
return (pred__35391.cljs$core$IFn$_invoke$arity$2 ? pred__35391.cljs$core$IFn$_invoke$arity$2(G__35395,G__35396) : pred__35391.call(null,G__35395,G__35396));
})())){
return (new shadow.dom.Coordinate(G__35360,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35397 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35398 = expr__35392;
return (pred__35391.cljs$core$IFn$_invoke$arity$2 ? pred__35391.cljs$core$IFn$_invoke$arity$2(G__35397,G__35398) : pred__35391.call(null,G__35397,G__35398));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35360,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35360),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35360){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35360,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35365){
var extmap__4424__auto__ = (function (){var G__35406 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35365,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35365)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35406);
} else {
return G__35406;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35365),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35365),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35409 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35409);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35410 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35410);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35413 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35413);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35415,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35420 = k35415;
var G__35420__$1 = (((G__35420 instanceof cljs.core.Keyword))?G__35420.fqn:null);
switch (G__35420__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35415,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35421){
var vec__35422 = p__35421;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35422,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35422,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35414){
var self__ = this;
var G__35414__$1 = this;
return (new cljs.core.RecordIter((0),G__35414__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35425 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35425(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35416,other35417){
var self__ = this;
var this35416__$1 = this;
return (((!((other35417 == null)))) && ((this35416__$1.constructor === other35417.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35416__$1.w,other35417.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35416__$1.h,other35417.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35416__$1.__extmap,other35417.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35414){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35429 = cljs.core.keyword_identical_QMARK_;
var expr__35430 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35433 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35434 = expr__35430;
return (pred__35429.cljs$core$IFn$_invoke$arity$2 ? pred__35429.cljs$core$IFn$_invoke$arity$2(G__35433,G__35434) : pred__35429.call(null,G__35433,G__35434));
})())){
return (new shadow.dom.Size(G__35414,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35435 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35436 = expr__35430;
return (pred__35429.cljs$core$IFn$_invoke$arity$2 ? pred__35429.cljs$core$IFn$_invoke$arity$2(G__35435,G__35436) : pred__35429.call(null,G__35435,G__35436));
})())){
return (new shadow.dom.Size(self__.w,G__35414,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35414),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35414){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35414,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35419){
var extmap__4424__auto__ = (function (){var G__35439 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35419,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35419)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35439);
} else {
return G__35439;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35419),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35419),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35440 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35440);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36057 = (i + (1));
var G__36058 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36057;
ret = G__36058;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35445){
var vec__35446 = p__35445;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35446,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35450 = arguments.length;
switch (G__35450) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35459_36076 = new_node;
var G__35460_36077 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35459_36076,G__35460_36077);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35465_36082 = new_node;
var G__35466_36083 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35465_36082,G__35466_36083);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36091 = ps;
var G__36092 = (i + (1));
el__$1 = G__36091;
i = G__36092;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35470 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35470);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35475 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35475);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35478 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35478);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35481 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35481,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35481,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35481,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35485_36111 = cljs.core.seq(props);
var chunk__35486_36112 = null;
var count__35487_36113 = (0);
var i__35488_36114 = (0);
while(true){
if((i__35488_36114 < count__35487_36113)){
var vec__35500_36115 = chunk__35486_36112.cljs$core$IIndexed$_nth$arity$2(null,i__35488_36114);
var k_36116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500_36115,(0),null);
var v_36117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35500_36115,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_36116);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36116),v_36117);


var G__36128 = seq__35485_36111;
var G__36129 = chunk__35486_36112;
var G__36130 = count__35487_36113;
var G__36131 = (i__35488_36114 + (1));
seq__35485_36111 = G__36128;
chunk__35486_36112 = G__36129;
count__35487_36113 = G__36130;
i__35488_36114 = G__36131;
continue;
} else {
var temp__5720__auto___36132 = cljs.core.seq(seq__35485_36111);
if(temp__5720__auto___36132){
var seq__35485_36133__$1 = temp__5720__auto___36132;
if(cljs.core.chunked_seq_QMARK_(seq__35485_36133__$1)){
var c__4550__auto___36134 = cljs.core.chunk_first(seq__35485_36133__$1);
var G__36135 = cljs.core.chunk_rest(seq__35485_36133__$1);
var G__36136 = c__4550__auto___36134;
var G__36137 = cljs.core.count(c__4550__auto___36134);
var G__36138 = (0);
seq__35485_36111 = G__36135;
chunk__35486_36112 = G__36136;
count__35487_36113 = G__36137;
i__35488_36114 = G__36138;
continue;
} else {
var vec__35507_36139 = cljs.core.first(seq__35485_36133__$1);
var k_36140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507_36139,(0),null);
var v_36141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35507_36139,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_36140);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36140),v_36141);


var G__36143 = cljs.core.next(seq__35485_36133__$1);
var G__36144 = null;
var G__36145 = (0);
var G__36146 = (0);
seq__35485_36111 = G__36143;
chunk__35486_36112 = G__36144;
count__35487_36113 = G__36145;
i__35488_36114 = G__36146;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35517 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35517,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35517,(1),null);
var seq__35521_36148 = cljs.core.seq(node_children);
var chunk__35523_36149 = null;
var count__35524_36150 = (0);
var i__35525_36151 = (0);
while(true){
if((i__35525_36151 < count__35524_36150)){
var child_struct_36152 = chunk__35523_36149.cljs$core$IIndexed$_nth$arity$2(null,i__35525_36151);
if((!((child_struct_36152 == null)))){
if(typeof child_struct_36152 === 'string'){
var text_36153 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36153),child_struct_36152].join(''));
} else {
var children_36155 = shadow.dom.svg_node(child_struct_36152);
if(cljs.core.seq_QMARK_(children_36155)){
var seq__35548_36156 = cljs.core.seq(children_36155);
var chunk__35550_36157 = null;
var count__35551_36158 = (0);
var i__35552_36159 = (0);
while(true){
if((i__35552_36159 < count__35551_36158)){
var child_36160 = chunk__35550_36157.cljs$core$IIndexed$_nth$arity$2(null,i__35552_36159);
if(cljs.core.truth_(child_36160)){
node.appendChild(child_36160);


var G__36161 = seq__35548_36156;
var G__36162 = chunk__35550_36157;
var G__36163 = count__35551_36158;
var G__36164 = (i__35552_36159 + (1));
seq__35548_36156 = G__36161;
chunk__35550_36157 = G__36162;
count__35551_36158 = G__36163;
i__35552_36159 = G__36164;
continue;
} else {
var G__36165 = seq__35548_36156;
var G__36166 = chunk__35550_36157;
var G__36167 = count__35551_36158;
var G__36168 = (i__35552_36159 + (1));
seq__35548_36156 = G__36165;
chunk__35550_36157 = G__36166;
count__35551_36158 = G__36167;
i__35552_36159 = G__36168;
continue;
}
} else {
var temp__5720__auto___36169 = cljs.core.seq(seq__35548_36156);
if(temp__5720__auto___36169){
var seq__35548_36170__$1 = temp__5720__auto___36169;
if(cljs.core.chunked_seq_QMARK_(seq__35548_36170__$1)){
var c__4550__auto___36172 = cljs.core.chunk_first(seq__35548_36170__$1);
var G__36173 = cljs.core.chunk_rest(seq__35548_36170__$1);
var G__36174 = c__4550__auto___36172;
var G__36175 = cljs.core.count(c__4550__auto___36172);
var G__36176 = (0);
seq__35548_36156 = G__36173;
chunk__35550_36157 = G__36174;
count__35551_36158 = G__36175;
i__35552_36159 = G__36176;
continue;
} else {
var child_36178 = cljs.core.first(seq__35548_36170__$1);
if(cljs.core.truth_(child_36178)){
node.appendChild(child_36178);


var G__36181 = cljs.core.next(seq__35548_36170__$1);
var G__36182 = null;
var G__36183 = (0);
var G__36184 = (0);
seq__35548_36156 = G__36181;
chunk__35550_36157 = G__36182;
count__35551_36158 = G__36183;
i__35552_36159 = G__36184;
continue;
} else {
var G__36185 = cljs.core.next(seq__35548_36170__$1);
var G__36186 = null;
var G__36187 = (0);
var G__36188 = (0);
seq__35548_36156 = G__36185;
chunk__35550_36157 = G__36186;
count__35551_36158 = G__36187;
i__35552_36159 = G__36188;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36155);
}
}


var G__36189 = seq__35521_36148;
var G__36190 = chunk__35523_36149;
var G__36191 = count__35524_36150;
var G__36192 = (i__35525_36151 + (1));
seq__35521_36148 = G__36189;
chunk__35523_36149 = G__36190;
count__35524_36150 = G__36191;
i__35525_36151 = G__36192;
continue;
} else {
var G__36194 = seq__35521_36148;
var G__36195 = chunk__35523_36149;
var G__36196 = count__35524_36150;
var G__36197 = (i__35525_36151 + (1));
seq__35521_36148 = G__36194;
chunk__35523_36149 = G__36195;
count__35524_36150 = G__36196;
i__35525_36151 = G__36197;
continue;
}
} else {
var temp__5720__auto___36199 = cljs.core.seq(seq__35521_36148);
if(temp__5720__auto___36199){
var seq__35521_36201__$1 = temp__5720__auto___36199;
if(cljs.core.chunked_seq_QMARK_(seq__35521_36201__$1)){
var c__4550__auto___36202 = cljs.core.chunk_first(seq__35521_36201__$1);
var G__36203 = cljs.core.chunk_rest(seq__35521_36201__$1);
var G__36204 = c__4550__auto___36202;
var G__36205 = cljs.core.count(c__4550__auto___36202);
var G__36206 = (0);
seq__35521_36148 = G__36203;
chunk__35523_36149 = G__36204;
count__35524_36150 = G__36205;
i__35525_36151 = G__36206;
continue;
} else {
var child_struct_36208 = cljs.core.first(seq__35521_36201__$1);
if((!((child_struct_36208 == null)))){
if(typeof child_struct_36208 === 'string'){
var text_36211 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36211),child_struct_36208].join(''));
} else {
var children_36213 = shadow.dom.svg_node(child_struct_36208);
if(cljs.core.seq_QMARK_(children_36213)){
var seq__35554_36215 = cljs.core.seq(children_36213);
var chunk__35556_36216 = null;
var count__35557_36217 = (0);
var i__35558_36218 = (0);
while(true){
if((i__35558_36218 < count__35557_36217)){
var child_36220 = chunk__35556_36216.cljs$core$IIndexed$_nth$arity$2(null,i__35558_36218);
if(cljs.core.truth_(child_36220)){
node.appendChild(child_36220);


var G__36221 = seq__35554_36215;
var G__36222 = chunk__35556_36216;
var G__36223 = count__35557_36217;
var G__36224 = (i__35558_36218 + (1));
seq__35554_36215 = G__36221;
chunk__35556_36216 = G__36222;
count__35557_36217 = G__36223;
i__35558_36218 = G__36224;
continue;
} else {
var G__36225 = seq__35554_36215;
var G__36226 = chunk__35556_36216;
var G__36227 = count__35557_36217;
var G__36228 = (i__35558_36218 + (1));
seq__35554_36215 = G__36225;
chunk__35556_36216 = G__36226;
count__35557_36217 = G__36227;
i__35558_36218 = G__36228;
continue;
}
} else {
var temp__5720__auto___36230__$1 = cljs.core.seq(seq__35554_36215);
if(temp__5720__auto___36230__$1){
var seq__35554_36231__$1 = temp__5720__auto___36230__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35554_36231__$1)){
var c__4550__auto___36232 = cljs.core.chunk_first(seq__35554_36231__$1);
var G__36234 = cljs.core.chunk_rest(seq__35554_36231__$1);
var G__36235 = c__4550__auto___36232;
var G__36236 = cljs.core.count(c__4550__auto___36232);
var G__36237 = (0);
seq__35554_36215 = G__36234;
chunk__35556_36216 = G__36235;
count__35557_36217 = G__36236;
i__35558_36218 = G__36237;
continue;
} else {
var child_36239 = cljs.core.first(seq__35554_36231__$1);
if(cljs.core.truth_(child_36239)){
node.appendChild(child_36239);


var G__36240 = cljs.core.next(seq__35554_36231__$1);
var G__36241 = null;
var G__36242 = (0);
var G__36243 = (0);
seq__35554_36215 = G__36240;
chunk__35556_36216 = G__36241;
count__35557_36217 = G__36242;
i__35558_36218 = G__36243;
continue;
} else {
var G__36246 = cljs.core.next(seq__35554_36231__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__35554_36215 = G__36246;
chunk__35556_36216 = G__36247;
count__35557_36217 = G__36248;
i__35558_36218 = G__36249;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36213);
}
}


var G__36251 = cljs.core.next(seq__35521_36201__$1);
var G__36252 = null;
var G__36253 = (0);
var G__36254 = (0);
seq__35521_36148 = G__36251;
chunk__35523_36149 = G__36252;
count__35524_36150 = G__36253;
i__35525_36151 = G__36254;
continue;
} else {
var G__36255 = cljs.core.next(seq__35521_36201__$1);
var G__36256 = null;
var G__36257 = (0);
var G__36258 = (0);
seq__35521_36148 = G__36255;
chunk__35523_36149 = G__36256;
count__35524_36150 = G__36257;
i__35525_36151 = G__36258;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35561_36259 = shadow.dom._to_svg;
var G__35562_36260 = "string";
var G__35563_36261 = ((function (G__35561_36259,G__35562_36260){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35561_36259,G__35562_36260))
;
goog.object.set(G__35561_36259,G__35562_36260,G__35563_36261);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35565_36263 = shadow.dom._to_svg;
var G__35566_36264 = "null";
var G__35567_36265 = ((function (G__35565_36263,G__35566_36264){
return (function (_){
return null;
});})(G__35565_36263,G__35566_36264))
;
goog.object.set(G__35565_36263,G__35566_36264,G__35567_36265);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36269 = arguments.length;
var i__4731__auto___36270 = (0);
while(true){
if((i__4731__auto___36270 < len__4730__auto___36269)){
args__4736__auto__.push((arguments[i__4731__auto___36270]));

var G__36271 = (i__4731__auto___36270 + (1));
i__4731__auto___36270 = G__36271;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35568){
var G__35569 = cljs.core.first(seq35568);
var seq35568__$1 = cljs.core.next(seq35568);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35569,seq35568__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35571 = arguments.length;
switch (G__35571) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35572_36281 = shadow.dom.dom_node(el);
var G__35573_36282 = cljs.core.name(event);
var G__35574_36283 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35572_36281,G__35573_36282,G__35574_36283) : shadow.dom.dom_listen.call(null,G__35572_36281,G__35573_36282,G__35574_36283));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33398__auto___36292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33398__auto___36292,buf,chan,event_fn){
return (function (){
var f__33399__auto__ = (function (){var switch__33298__auto__ = ((function (c__33398__auto___36292,buf,chan,event_fn){
return (function (state_35579){
var state_val_35580 = (state_35579[(1)]);
if((state_val_35580 === (1))){
var state_35579__$1 = state_35579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35579__$1,(2),once_or_cleanup);
} else {
if((state_val_35580 === (2))){
var inst_35576 = (state_35579[(2)]);
var inst_35577 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35579__$1 = (function (){var statearr_35583 = state_35579;
(statearr_35583[(7)] = inst_35576);

return statearr_35583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35579__$1,inst_35577);
} else {
return null;
}
}
});})(c__33398__auto___36292,buf,chan,event_fn))
;
return ((function (switch__33298__auto__,c__33398__auto___36292,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33299__auto__ = null;
var shadow$dom$state_machine__33299__auto____0 = (function (){
var statearr_35585 = [null,null,null,null,null,null,null,null];
(statearr_35585[(0)] = shadow$dom$state_machine__33299__auto__);

(statearr_35585[(1)] = (1));

return statearr_35585;
});
var shadow$dom$state_machine__33299__auto____1 = (function (state_35579){
while(true){
var ret_value__33300__auto__ = (function (){try{while(true){
var result__33301__auto__ = switch__33298__auto__(state_35579);
if(cljs.core.keyword_identical_QMARK_(result__33301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33301__auto__;
}
break;
}
}catch (e35587){if((e35587 instanceof Object)){
var ex__33302__auto__ = e35587;
var statearr_35588_36307 = state_35579;
(statearr_35588_36307[(5)] = ex__33302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36309 = state_35579;
state_35579 = G__36309;
continue;
} else {
return ret_value__33300__auto__;
}
break;
}
});
shadow$dom$state_machine__33299__auto__ = function(state_35579){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33299__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33299__auto____1.call(this,state_35579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33299__auto____0;
shadow$dom$state_machine__33299__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33299__auto____1;
return shadow$dom$state_machine__33299__auto__;
})()
;})(switch__33298__auto__,c__33398__auto___36292,buf,chan,event_fn))
})();
var state__33400__auto__ = (function (){var statearr_35590 = (f__33399__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33399__auto__.cljs$core$IFn$_invoke$arity$0() : f__33399__auto__.call(null));
(statearr_35590[(6)] = c__33398__auto___36292);

return statearr_35590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33400__auto__);
});})(c__33398__auto___36292,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
