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
return cljs.core.cons((coll[idx]),(function (){var G__40032 = coll;
var G__40033 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40032,G__40033) : shadow.dom.lazy_native_coll_seq.call(null,G__40032,G__40033));
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
var G__40052 = arguments.length;
switch (G__40052) {
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
var G__40054 = arguments.length;
switch (G__40054) {
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
var G__40060 = arguments.length;
switch (G__40060) {
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
var G__40066 = arguments.length;
switch (G__40066) {
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
var G__40075 = arguments.length;
switch (G__40075) {
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
var G__40079 = document;
var G__40080 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40079,G__40080);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__40083 = shadow.dom.dom_node(parent);
var G__40084 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40083,G__40084);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__40087 = shadow.dom.dom_node(el);
var G__40088 = cls;
return goog.dom.classlist.add(G__40087,G__40088);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__40090 = shadow.dom.dom_node(el);
var G__40091 = cls;
return goog.dom.classlist.remove(G__40090,G__40091);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40095 = arguments.length;
switch (G__40095) {
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
var G__40098 = shadow.dom.dom_node(el);
var G__40099 = cls;
return goog.dom.classlist.toggle(G__40098,G__40099);
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
}catch (e40107){if((e40107 instanceof Object)){
var e = e40107;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40107;

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
var seq__40110 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40111 = null;
var count__40112 = (0);
var i__40113 = (0);
while(true){
if((i__40113 < count__40112)){
var el = chunk__40111.cljs$core$IIndexed$_nth$arity$2(null,i__40113);
var handler_40714__$1 = ((function (seq__40110,chunk__40111,count__40112,i__40113,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40110,chunk__40111,count__40112,i__40113,el))
;
var G__40121_40715 = el;
var G__40122_40716 = cljs.core.name(ev);
var G__40123_40717 = handler_40714__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40121_40715,G__40122_40716,G__40123_40717) : shadow.dom.dom_listen.call(null,G__40121_40715,G__40122_40716,G__40123_40717));


var G__40719 = seq__40110;
var G__40720 = chunk__40111;
var G__40721 = count__40112;
var G__40722 = (i__40113 + (1));
seq__40110 = G__40719;
chunk__40111 = G__40720;
count__40112 = G__40721;
i__40113 = G__40722;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40110);
if(temp__5720__auto__){
var seq__40110__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40110__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40110__$1);
var G__40725 = cljs.core.chunk_rest(seq__40110__$1);
var G__40726 = c__4550__auto__;
var G__40727 = cljs.core.count(c__4550__auto__);
var G__40728 = (0);
seq__40110 = G__40725;
chunk__40111 = G__40726;
count__40112 = G__40727;
i__40113 = G__40728;
continue;
} else {
var el = cljs.core.first(seq__40110__$1);
var handler_40730__$1 = ((function (seq__40110,chunk__40111,count__40112,i__40113,el,seq__40110__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40110,chunk__40111,count__40112,i__40113,el,seq__40110__$1,temp__5720__auto__))
;
var G__40126_40731 = el;
var G__40127_40732 = cljs.core.name(ev);
var G__40128_40733 = handler_40730__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40126_40731,G__40127_40732,G__40128_40733) : shadow.dom.dom_listen.call(null,G__40126_40731,G__40127_40732,G__40128_40733));


var G__40735 = cljs.core.next(seq__40110__$1);
var G__40736 = null;
var G__40737 = (0);
var G__40738 = (0);
seq__40110 = G__40735;
chunk__40111 = G__40736;
count__40112 = G__40737;
i__40113 = G__40738;
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
var G__40134 = arguments.length;
switch (G__40134) {
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
var G__40141 = shadow.dom.dom_node(el);
var G__40142 = cljs.core.name(ev);
var G__40143 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40141,G__40142,G__40143) : shadow.dom.dom_listen.call(null,G__40141,G__40142,G__40143));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__40146 = shadow.dom.dom_node(el);
var G__40147 = cljs.core.name(ev);
var G__40148 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__40146,G__40147,G__40148) : shadow.dom.dom_listen_remove.call(null,G__40146,G__40147,G__40148));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40149 = cljs.core.seq(events);
var chunk__40150 = null;
var count__40151 = (0);
var i__40152 = (0);
while(true){
if((i__40152 < count__40151)){
var vec__40163 = chunk__40150.cljs$core$IIndexed$_nth$arity$2(null,i__40152);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40163,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40163,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40747 = seq__40149;
var G__40748 = chunk__40150;
var G__40749 = count__40151;
var G__40750 = (i__40152 + (1));
seq__40149 = G__40747;
chunk__40150 = G__40748;
count__40151 = G__40749;
i__40152 = G__40750;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40149);
if(temp__5720__auto__){
var seq__40149__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40149__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40149__$1);
var G__40753 = cljs.core.chunk_rest(seq__40149__$1);
var G__40754 = c__4550__auto__;
var G__40755 = cljs.core.count(c__4550__auto__);
var G__40756 = (0);
seq__40149 = G__40753;
chunk__40150 = G__40754;
count__40151 = G__40755;
i__40152 = G__40756;
continue;
} else {
var vec__40168 = cljs.core.first(seq__40149__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40168,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40168,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40759 = cljs.core.next(seq__40149__$1);
var G__40761 = null;
var G__40762 = (0);
var G__40763 = (0);
seq__40149 = G__40759;
chunk__40150 = G__40761;
count__40151 = G__40762;
i__40152 = G__40763;
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
var seq__40174 = cljs.core.seq(styles);
var chunk__40175 = null;
var count__40176 = (0);
var i__40177 = (0);
while(true){
if((i__40177 < count__40176)){
var vec__40195 = chunk__40175.cljs$core$IIndexed$_nth$arity$2(null,i__40177);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40195,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40195,(1),null);
var G__40199_40767 = dom;
var G__40200_40768 = cljs.core.name(k);
var G__40201_40769 = (((v == null))?"":v);
goog.style.setStyle(G__40199_40767,G__40200_40768,G__40201_40769);


var G__40770 = seq__40174;
var G__40771 = chunk__40175;
var G__40772 = count__40176;
var G__40773 = (i__40177 + (1));
seq__40174 = G__40770;
chunk__40175 = G__40771;
count__40176 = G__40772;
i__40177 = G__40773;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40174);
if(temp__5720__auto__){
var seq__40174__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40174__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40174__$1);
var G__40774 = cljs.core.chunk_rest(seq__40174__$1);
var G__40775 = c__4550__auto__;
var G__40776 = cljs.core.count(c__4550__auto__);
var G__40777 = (0);
seq__40174 = G__40774;
chunk__40175 = G__40775;
count__40176 = G__40776;
i__40177 = G__40777;
continue;
} else {
var vec__40204 = cljs.core.first(seq__40174__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40204,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40204,(1),null);
var G__40207_40780 = dom;
var G__40208_40781 = cljs.core.name(k);
var G__40209_40782 = (((v == null))?"":v);
goog.style.setStyle(G__40207_40780,G__40208_40781,G__40209_40782);


var G__40783 = cljs.core.next(seq__40174__$1);
var G__40784 = null;
var G__40785 = (0);
var G__40786 = (0);
seq__40174 = G__40783;
chunk__40175 = G__40784;
count__40176 = G__40785;
i__40177 = G__40786;
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
var G__40212_40787 = key;
var G__40212_40788__$1 = (((G__40212_40787 instanceof cljs.core.Keyword))?G__40212_40787.fqn:null);
switch (G__40212_40788__$1) {
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
var ks_40793 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_40793,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_40793,"aria-");
}
})())){
el.setAttribute(ks_40793,value);
} else {
(el[ks_40793] = value);
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
var G__40222 = shadow.dom.dom_node(el);
var G__40223 = cls;
return goog.dom.classlist.contains(G__40222,G__40223);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40236){
var map__40237 = p__40236;
var map__40237__$1 = (((((!((map__40237 == null))))?(((((map__40237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40237):map__40237);
var props = map__40237__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40237__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40240 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40240,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40243 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40243,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40243;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40247 = arguments.length;
switch (G__40247) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40250){
var vec__40251 = p__40250;
var seq__40252 = cljs.core.seq(vec__40251);
var first__40253 = cljs.core.first(seq__40252);
var seq__40252__$1 = cljs.core.next(seq__40252);
var nn = first__40253;
var first__40253__$1 = cljs.core.first(seq__40252__$1);
var seq__40252__$2 = cljs.core.next(seq__40252__$1);
var np = first__40253__$1;
var nc = seq__40252__$2;
var node = vec__40251;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40254 = nn;
var G__40255 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40254,G__40255) : create_fn.call(null,G__40254,G__40255));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40256 = nn;
var G__40257 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40256,G__40257) : create_fn.call(null,G__40256,G__40257));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40259 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40259,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40259,(1),null);
var seq__40263_40805 = cljs.core.seq(node_children);
var chunk__40264_40806 = null;
var count__40265_40807 = (0);
var i__40266_40808 = (0);
while(true){
if((i__40266_40808 < count__40265_40807)){
var child_struct_40809 = chunk__40264_40806.cljs$core$IIndexed$_nth$arity$2(null,i__40266_40808);
var children_40810 = shadow.dom.dom_node(child_struct_40809);
if(cljs.core.seq_QMARK_(children_40810)){
var seq__40295_40811 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40810));
var chunk__40297_40812 = null;
var count__40298_40813 = (0);
var i__40299_40814 = (0);
while(true){
if((i__40299_40814 < count__40298_40813)){
var child_40815 = chunk__40297_40812.cljs$core$IIndexed$_nth$arity$2(null,i__40299_40814);
if(cljs.core.truth_(child_40815)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40815);


var G__40816 = seq__40295_40811;
var G__40817 = chunk__40297_40812;
var G__40818 = count__40298_40813;
var G__40819 = (i__40299_40814 + (1));
seq__40295_40811 = G__40816;
chunk__40297_40812 = G__40817;
count__40298_40813 = G__40818;
i__40299_40814 = G__40819;
continue;
} else {
var G__40820 = seq__40295_40811;
var G__40821 = chunk__40297_40812;
var G__40822 = count__40298_40813;
var G__40823 = (i__40299_40814 + (1));
seq__40295_40811 = G__40820;
chunk__40297_40812 = G__40821;
count__40298_40813 = G__40822;
i__40299_40814 = G__40823;
continue;
}
} else {
var temp__5720__auto___40828 = cljs.core.seq(seq__40295_40811);
if(temp__5720__auto___40828){
var seq__40295_40829__$1 = temp__5720__auto___40828;
if(cljs.core.chunked_seq_QMARK_(seq__40295_40829__$1)){
var c__4550__auto___40830 = cljs.core.chunk_first(seq__40295_40829__$1);
var G__40831 = cljs.core.chunk_rest(seq__40295_40829__$1);
var G__40832 = c__4550__auto___40830;
var G__40833 = cljs.core.count(c__4550__auto___40830);
var G__40834 = (0);
seq__40295_40811 = G__40831;
chunk__40297_40812 = G__40832;
count__40298_40813 = G__40833;
i__40299_40814 = G__40834;
continue;
} else {
var child_40836 = cljs.core.first(seq__40295_40829__$1);
if(cljs.core.truth_(child_40836)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40836);


var G__40837 = cljs.core.next(seq__40295_40829__$1);
var G__40838 = null;
var G__40839 = (0);
var G__40840 = (0);
seq__40295_40811 = G__40837;
chunk__40297_40812 = G__40838;
count__40298_40813 = G__40839;
i__40299_40814 = G__40840;
continue;
} else {
var G__40841 = cljs.core.next(seq__40295_40829__$1);
var G__40842 = null;
var G__40843 = (0);
var G__40844 = (0);
seq__40295_40811 = G__40841;
chunk__40297_40812 = G__40842;
count__40298_40813 = G__40843;
i__40299_40814 = G__40844;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40810);
}


var G__40845 = seq__40263_40805;
var G__40846 = chunk__40264_40806;
var G__40847 = count__40265_40807;
var G__40848 = (i__40266_40808 + (1));
seq__40263_40805 = G__40845;
chunk__40264_40806 = G__40846;
count__40265_40807 = G__40847;
i__40266_40808 = G__40848;
continue;
} else {
var temp__5720__auto___40850 = cljs.core.seq(seq__40263_40805);
if(temp__5720__auto___40850){
var seq__40263_40851__$1 = temp__5720__auto___40850;
if(cljs.core.chunked_seq_QMARK_(seq__40263_40851__$1)){
var c__4550__auto___40852 = cljs.core.chunk_first(seq__40263_40851__$1);
var G__40853 = cljs.core.chunk_rest(seq__40263_40851__$1);
var G__40854 = c__4550__auto___40852;
var G__40855 = cljs.core.count(c__4550__auto___40852);
var G__40856 = (0);
seq__40263_40805 = G__40853;
chunk__40264_40806 = G__40854;
count__40265_40807 = G__40855;
i__40266_40808 = G__40856;
continue;
} else {
var child_struct_40858 = cljs.core.first(seq__40263_40851__$1);
var children_40859 = shadow.dom.dom_node(child_struct_40858);
if(cljs.core.seq_QMARK_(children_40859)){
var seq__40311_40861 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40859));
var chunk__40313_40862 = null;
var count__40314_40863 = (0);
var i__40315_40864 = (0);
while(true){
if((i__40315_40864 < count__40314_40863)){
var child_40865 = chunk__40313_40862.cljs$core$IIndexed$_nth$arity$2(null,i__40315_40864);
if(cljs.core.truth_(child_40865)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40865);


var G__40866 = seq__40311_40861;
var G__40867 = chunk__40313_40862;
var G__40868 = count__40314_40863;
var G__40869 = (i__40315_40864 + (1));
seq__40311_40861 = G__40866;
chunk__40313_40862 = G__40867;
count__40314_40863 = G__40868;
i__40315_40864 = G__40869;
continue;
} else {
var G__40871 = seq__40311_40861;
var G__40872 = chunk__40313_40862;
var G__40873 = count__40314_40863;
var G__40874 = (i__40315_40864 + (1));
seq__40311_40861 = G__40871;
chunk__40313_40862 = G__40872;
count__40314_40863 = G__40873;
i__40315_40864 = G__40874;
continue;
}
} else {
var temp__5720__auto___40876__$1 = cljs.core.seq(seq__40311_40861);
if(temp__5720__auto___40876__$1){
var seq__40311_40877__$1 = temp__5720__auto___40876__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40311_40877__$1)){
var c__4550__auto___40882 = cljs.core.chunk_first(seq__40311_40877__$1);
var G__40884 = cljs.core.chunk_rest(seq__40311_40877__$1);
var G__40885 = c__4550__auto___40882;
var G__40886 = cljs.core.count(c__4550__auto___40882);
var G__40887 = (0);
seq__40311_40861 = G__40884;
chunk__40313_40862 = G__40885;
count__40314_40863 = G__40886;
i__40315_40864 = G__40887;
continue;
} else {
var child_40889 = cljs.core.first(seq__40311_40877__$1);
if(cljs.core.truth_(child_40889)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40889);


var G__40890 = cljs.core.next(seq__40311_40877__$1);
var G__40891 = null;
var G__40892 = (0);
var G__40893 = (0);
seq__40311_40861 = G__40890;
chunk__40313_40862 = G__40891;
count__40314_40863 = G__40892;
i__40315_40864 = G__40893;
continue;
} else {
var G__40894 = cljs.core.next(seq__40311_40877__$1);
var G__40895 = null;
var G__40896 = (0);
var G__40897 = (0);
seq__40311_40861 = G__40894;
chunk__40313_40862 = G__40895;
count__40314_40863 = G__40896;
i__40315_40864 = G__40897;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40859);
}


var G__40899 = cljs.core.next(seq__40263_40851__$1);
var G__40900 = null;
var G__40901 = (0);
var G__40902 = (0);
seq__40263_40805 = G__40899;
chunk__40264_40806 = G__40900;
count__40265_40807 = G__40901;
i__40266_40808 = G__40902;
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
var G__40324 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__40324);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40329 = cljs.core.seq(node);
var chunk__40330 = null;
var count__40331 = (0);
var i__40332 = (0);
while(true){
if((i__40332 < count__40331)){
var n = chunk__40330.cljs$core$IIndexed$_nth$arity$2(null,i__40332);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40911 = seq__40329;
var G__40912 = chunk__40330;
var G__40913 = count__40331;
var G__40914 = (i__40332 + (1));
seq__40329 = G__40911;
chunk__40330 = G__40912;
count__40331 = G__40913;
i__40332 = G__40914;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40329);
if(temp__5720__auto__){
var seq__40329__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40329__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40329__$1);
var G__40916 = cljs.core.chunk_rest(seq__40329__$1);
var G__40917 = c__4550__auto__;
var G__40918 = cljs.core.count(c__4550__auto__);
var G__40919 = (0);
seq__40329 = G__40916;
chunk__40330 = G__40917;
count__40331 = G__40918;
i__40332 = G__40919;
continue;
} else {
var n = cljs.core.first(seq__40329__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40923 = cljs.core.next(seq__40329__$1);
var G__40924 = null;
var G__40925 = (0);
var G__40926 = (0);
seq__40329 = G__40923;
chunk__40330 = G__40924;
count__40331 = G__40925;
i__40332 = G__40926;
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
var G__40342 = shadow.dom.dom_node(new$);
var G__40343 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__40342,G__40343);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40345 = arguments.length;
switch (G__40345) {
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
var G__40349 = arguments.length;
switch (G__40349) {
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
var G__40351 = arguments.length;
switch (G__40351) {
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
var len__4730__auto___40944 = arguments.length;
var i__4731__auto___40945 = (0);
while(true){
if((i__4731__auto___40945 < len__4730__auto___40944)){
args__4736__auto__.push((arguments[i__4731__auto___40945]));

var G__40946 = (i__4731__auto___40945 + (1));
i__4731__auto___40945 = G__40946;
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
var seq__40362_40948 = cljs.core.seq(nodes);
var chunk__40363_40949 = null;
var count__40364_40950 = (0);
var i__40365_40951 = (0);
while(true){
if((i__40365_40951 < count__40364_40950)){
var node_40953 = chunk__40363_40949.cljs$core$IIndexed$_nth$arity$2(null,i__40365_40951);
fragment.appendChild(shadow.dom._to_dom(node_40953));


var G__40955 = seq__40362_40948;
var G__40956 = chunk__40363_40949;
var G__40957 = count__40364_40950;
var G__40958 = (i__40365_40951 + (1));
seq__40362_40948 = G__40955;
chunk__40363_40949 = G__40956;
count__40364_40950 = G__40957;
i__40365_40951 = G__40958;
continue;
} else {
var temp__5720__auto___40959 = cljs.core.seq(seq__40362_40948);
if(temp__5720__auto___40959){
var seq__40362_40960__$1 = temp__5720__auto___40959;
if(cljs.core.chunked_seq_QMARK_(seq__40362_40960__$1)){
var c__4550__auto___40961 = cljs.core.chunk_first(seq__40362_40960__$1);
var G__40965 = cljs.core.chunk_rest(seq__40362_40960__$1);
var G__40966 = c__4550__auto___40961;
var G__40967 = cljs.core.count(c__4550__auto___40961);
var G__40968 = (0);
seq__40362_40948 = G__40965;
chunk__40363_40949 = G__40966;
count__40364_40950 = G__40967;
i__40365_40951 = G__40968;
continue;
} else {
var node_40970 = cljs.core.first(seq__40362_40960__$1);
fragment.appendChild(shadow.dom._to_dom(node_40970));


var G__40971 = cljs.core.next(seq__40362_40960__$1);
var G__40972 = null;
var G__40973 = (0);
var G__40974 = (0);
seq__40362_40948 = G__40971;
chunk__40363_40949 = G__40972;
count__40364_40950 = G__40973;
i__40365_40951 = G__40974;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq40357){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40357));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40371_40978 = cljs.core.seq(scripts);
var chunk__40372_40979 = null;
var count__40373_40980 = (0);
var i__40374_40981 = (0);
while(true){
if((i__40374_40981 < count__40373_40980)){
var vec__40383_40983 = chunk__40372_40979.cljs$core$IIndexed$_nth$arity$2(null,i__40374_40981);
var script_tag_40984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40383_40983,(0),null);
var script_body_40985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40383_40983,(1),null);
eval(script_body_40985);


var G__40987 = seq__40371_40978;
var G__40988 = chunk__40372_40979;
var G__40989 = count__40373_40980;
var G__40990 = (i__40374_40981 + (1));
seq__40371_40978 = G__40987;
chunk__40372_40979 = G__40988;
count__40373_40980 = G__40989;
i__40374_40981 = G__40990;
continue;
} else {
var temp__5720__auto___40992 = cljs.core.seq(seq__40371_40978);
if(temp__5720__auto___40992){
var seq__40371_40994__$1 = temp__5720__auto___40992;
if(cljs.core.chunked_seq_QMARK_(seq__40371_40994__$1)){
var c__4550__auto___40995 = cljs.core.chunk_first(seq__40371_40994__$1);
var G__40996 = cljs.core.chunk_rest(seq__40371_40994__$1);
var G__40997 = c__4550__auto___40995;
var G__40998 = cljs.core.count(c__4550__auto___40995);
var G__40999 = (0);
seq__40371_40978 = G__40996;
chunk__40372_40979 = G__40997;
count__40373_40980 = G__40998;
i__40374_40981 = G__40999;
continue;
} else {
var vec__40389_41001 = cljs.core.first(seq__40371_40994__$1);
var script_tag_41002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40389_41001,(0),null);
var script_body_41003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40389_41001,(1),null);
eval(script_body_41003);


var G__41004 = cljs.core.next(seq__40371_40994__$1);
var G__41005 = null;
var G__41006 = (0);
var G__41007 = (0);
seq__40371_40978 = G__41004;
chunk__40372_40979 = G__41005;
count__40373_40980 = G__41006;
i__40374_40981 = G__41007;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__40392){
var vec__40394 = p__40392;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40394,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40394,(1),null);
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
var G__40399 = shadow.dom.dom_node(el);
var G__40400 = cls;
return goog.dom.getAncestorByClass(G__40399,G__40400);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40404 = arguments.length;
switch (G__40404) {
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
var G__40406 = shadow.dom.dom_node(el);
var G__40407 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__40406,G__40407);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__40409 = shadow.dom.dom_node(el);
var G__40410 = cljs.core.name(tag);
var G__40411 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__40409,G__40410,G__40411);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__40414 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__40414);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__40419 = shadow.dom.dom_node(dom);
var G__40420 = value;
return goog.dom.forms.setValue(G__40419,G__40420);
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
var seq__40428 = cljs.core.seq(style_keys);
var chunk__40429 = null;
var count__40430 = (0);
var i__40431 = (0);
while(true){
if((i__40431 < count__40430)){
var it = chunk__40429.cljs$core$IIndexed$_nth$arity$2(null,i__40431);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41028 = seq__40428;
var G__41029 = chunk__40429;
var G__41030 = count__40430;
var G__41031 = (i__40431 + (1));
seq__40428 = G__41028;
chunk__40429 = G__41029;
count__40430 = G__41030;
i__40431 = G__41031;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__40428);
if(temp__5720__auto__){
var seq__40428__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40428__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40428__$1);
var G__41033 = cljs.core.chunk_rest(seq__40428__$1);
var G__41034 = c__4550__auto__;
var G__41035 = cljs.core.count(c__4550__auto__);
var G__41036 = (0);
seq__40428 = G__41033;
chunk__40429 = G__41034;
count__40430 = G__41035;
i__40431 = G__41036;
continue;
} else {
var it = cljs.core.first(seq__40428__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41037 = cljs.core.next(seq__40428__$1);
var G__41038 = null;
var G__41039 = (0);
var G__41040 = (0);
seq__40428 = G__41037;
chunk__40429 = G__41038;
count__40430 = G__41039;
i__40431 = G__41040;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k40441,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__40449 = k40441;
var G__40449__$1 = (((G__40449 instanceof cljs.core.Keyword))?G__40449.fqn:null);
switch (G__40449__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40441,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__40452){
var vec__40453 = p__40452;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40453,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40453,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40440){
var self__ = this;
var G__40440__$1 = this;
return (new cljs.core.RecordIter((0),G__40440__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__40461 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__40461(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40442,other40443){
var self__ = this;
var this40442__$1 = this;
return (((!((other40443 == null)))) && ((this40442__$1.constructor === other40443.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40442__$1.x,other40443.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40442__$1.y,other40443.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40442__$1.__extmap,other40443.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__40440){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__40462 = cljs.core.keyword_identical_QMARK_;
var expr__40463 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__40465 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__40466 = expr__40463;
return (pred__40462.cljs$core$IFn$_invoke$arity$2 ? pred__40462.cljs$core$IFn$_invoke$arity$2(G__40465,G__40466) : pred__40462.call(null,G__40465,G__40466));
})())){
return (new shadow.dom.Coordinate(G__40440,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40467 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__40468 = expr__40463;
return (pred__40462.cljs$core$IFn$_invoke$arity$2 ? pred__40462.cljs$core$IFn$_invoke$arity$2(G__40467,G__40468) : pred__40462.call(null,G__40467,G__40468));
})())){
return (new shadow.dom.Coordinate(self__.x,G__40440,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__40440),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__40440){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40440,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40445){
var extmap__4424__auto__ = (function (){var G__40472 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40445,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40445)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40472);
} else {
return G__40472;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40445),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40445),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__40476 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__40476);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__40477 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__40477);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__40478 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__40478);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k40480,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__40484 = k40480;
var G__40484__$1 = (((G__40484 instanceof cljs.core.Keyword))?G__40484.fqn:null);
switch (G__40484__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40480,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__40485){
var vec__40486 = p__40485;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40479){
var self__ = this;
var G__40479__$1 = this;
return (new cljs.core.RecordIter((0),G__40479__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__40489 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__40489(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40481,other40482){
var self__ = this;
var this40481__$1 = this;
return (((!((other40482 == null)))) && ((this40481__$1.constructor === other40482.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40481__$1.w,other40482.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40481__$1.h,other40482.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40481__$1.__extmap,other40482.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__40479){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__40498 = cljs.core.keyword_identical_QMARK_;
var expr__40499 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__40501 = new cljs.core.Keyword(null,"w","w",354169001);
var G__40502 = expr__40499;
return (pred__40498.cljs$core$IFn$_invoke$arity$2 ? pred__40498.cljs$core$IFn$_invoke$arity$2(G__40501,G__40502) : pred__40498.call(null,G__40501,G__40502));
})())){
return (new shadow.dom.Size(G__40479,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40504 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__40505 = expr__40499;
return (pred__40498.cljs$core$IFn$_invoke$arity$2 ? pred__40498.cljs$core$IFn$_invoke$arity$2(G__40504,G__40505) : pred__40498.call(null,G__40504,G__40505));
})())){
return (new shadow.dom.Size(self__.w,G__40479,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__40479),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__40479){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40479,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40483){
var extmap__4424__auto__ = (function (){var G__40511 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40483,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40483)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40511);
} else {
return G__40511;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40483),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40483),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__40517 = shadow.dom.dom_node(el);
return goog.style.getSize(G__40517);
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
var G__41103 = (i + (1));
var G__41104 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41103;
ret = G__41104;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40535){
var vec__40536 = p__40535;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40536,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40543 = arguments.length;
switch (G__40543) {
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
var G__40551_41111 = new_node;
var G__40552_41112 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__40551_41111,G__40552_41112);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__40554_41114 = new_node;
var G__40555_41115 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__40554_41114,G__40555_41115);

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
var G__41123 = ps;
var G__41124 = (i + (1));
el__$1 = G__41123;
i = G__41124;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__40560 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__40560);
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
var G__40563 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__40563);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__40564 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__40564);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40565 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40565,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40568_41130 = cljs.core.seq(props);
var chunk__40569_41131 = null;
var count__40570_41132 = (0);
var i__40571_41133 = (0);
while(true){
if((i__40571_41133 < count__40570_41132)){
var vec__40579_41134 = chunk__40569_41131.cljs$core$IIndexed$_nth$arity$2(null,i__40571_41133);
var k_41135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579_41134,(0),null);
var v_41136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40579_41134,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_41135);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41135),v_41136);


var G__41139 = seq__40568_41130;
var G__41140 = chunk__40569_41131;
var G__41141 = count__40570_41132;
var G__41142 = (i__40571_41133 + (1));
seq__40568_41130 = G__41139;
chunk__40569_41131 = G__41140;
count__40570_41132 = G__41141;
i__40571_41133 = G__41142;
continue;
} else {
var temp__5720__auto___41144 = cljs.core.seq(seq__40568_41130);
if(temp__5720__auto___41144){
var seq__40568_41145__$1 = temp__5720__auto___41144;
if(cljs.core.chunked_seq_QMARK_(seq__40568_41145__$1)){
var c__4550__auto___41146 = cljs.core.chunk_first(seq__40568_41145__$1);
var G__41147 = cljs.core.chunk_rest(seq__40568_41145__$1);
var G__41148 = c__4550__auto___41146;
var G__41149 = cljs.core.count(c__4550__auto___41146);
var G__41150 = (0);
seq__40568_41130 = G__41147;
chunk__40569_41131 = G__41148;
count__40570_41132 = G__41149;
i__40571_41133 = G__41150;
continue;
} else {
var vec__40583_41151 = cljs.core.first(seq__40568_41145__$1);
var k_41152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40583_41151,(0),null);
var v_41153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40583_41151,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_41152);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41152),v_41153);


var G__41155 = cljs.core.next(seq__40568_41145__$1);
var G__41156 = null;
var G__41157 = (0);
var G__41158 = (0);
seq__40568_41130 = G__41155;
chunk__40569_41131 = G__41156;
count__40570_41132 = G__41157;
i__40571_41133 = G__41158;
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
var vec__40587 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40587,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40587,(1),null);
var seq__40590_41159 = cljs.core.seq(node_children);
var chunk__40592_41160 = null;
var count__40593_41161 = (0);
var i__40594_41162 = (0);
while(true){
if((i__40594_41162 < count__40593_41161)){
var child_struct_41163 = chunk__40592_41160.cljs$core$IIndexed$_nth$arity$2(null,i__40594_41162);
if((!((child_struct_41163 == null)))){
if(typeof child_struct_41163 === 'string'){
var text_41164 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41164),child_struct_41163].join(''));
} else {
var children_41165 = shadow.dom.svg_node(child_struct_41163);
if(cljs.core.seq_QMARK_(children_41165)){
var seq__40623_41166 = cljs.core.seq(children_41165);
var chunk__40625_41167 = null;
var count__40626_41168 = (0);
var i__40627_41169 = (0);
while(true){
if((i__40627_41169 < count__40626_41168)){
var child_41170 = chunk__40625_41167.cljs$core$IIndexed$_nth$arity$2(null,i__40627_41169);
if(cljs.core.truth_(child_41170)){
node.appendChild(child_41170);


var G__41171 = seq__40623_41166;
var G__41172 = chunk__40625_41167;
var G__41173 = count__40626_41168;
var G__41174 = (i__40627_41169 + (1));
seq__40623_41166 = G__41171;
chunk__40625_41167 = G__41172;
count__40626_41168 = G__41173;
i__40627_41169 = G__41174;
continue;
} else {
var G__41175 = seq__40623_41166;
var G__41176 = chunk__40625_41167;
var G__41177 = count__40626_41168;
var G__41178 = (i__40627_41169 + (1));
seq__40623_41166 = G__41175;
chunk__40625_41167 = G__41176;
count__40626_41168 = G__41177;
i__40627_41169 = G__41178;
continue;
}
} else {
var temp__5720__auto___41179 = cljs.core.seq(seq__40623_41166);
if(temp__5720__auto___41179){
var seq__40623_41180__$1 = temp__5720__auto___41179;
if(cljs.core.chunked_seq_QMARK_(seq__40623_41180__$1)){
var c__4550__auto___41181 = cljs.core.chunk_first(seq__40623_41180__$1);
var G__41182 = cljs.core.chunk_rest(seq__40623_41180__$1);
var G__41183 = c__4550__auto___41181;
var G__41184 = cljs.core.count(c__4550__auto___41181);
var G__41185 = (0);
seq__40623_41166 = G__41182;
chunk__40625_41167 = G__41183;
count__40626_41168 = G__41184;
i__40627_41169 = G__41185;
continue;
} else {
var child_41186 = cljs.core.first(seq__40623_41180__$1);
if(cljs.core.truth_(child_41186)){
node.appendChild(child_41186);


var G__41187 = cljs.core.next(seq__40623_41180__$1);
var G__41188 = null;
var G__41189 = (0);
var G__41190 = (0);
seq__40623_41166 = G__41187;
chunk__40625_41167 = G__41188;
count__40626_41168 = G__41189;
i__40627_41169 = G__41190;
continue;
} else {
var G__41191 = cljs.core.next(seq__40623_41180__$1);
var G__41192 = null;
var G__41193 = (0);
var G__41194 = (0);
seq__40623_41166 = G__41191;
chunk__40625_41167 = G__41192;
count__40626_41168 = G__41193;
i__40627_41169 = G__41194;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41165);
}
}


var G__41195 = seq__40590_41159;
var G__41196 = chunk__40592_41160;
var G__41197 = count__40593_41161;
var G__41198 = (i__40594_41162 + (1));
seq__40590_41159 = G__41195;
chunk__40592_41160 = G__41196;
count__40593_41161 = G__41197;
i__40594_41162 = G__41198;
continue;
} else {
var G__41199 = seq__40590_41159;
var G__41200 = chunk__40592_41160;
var G__41201 = count__40593_41161;
var G__41202 = (i__40594_41162 + (1));
seq__40590_41159 = G__41199;
chunk__40592_41160 = G__41200;
count__40593_41161 = G__41201;
i__40594_41162 = G__41202;
continue;
}
} else {
var temp__5720__auto___41203 = cljs.core.seq(seq__40590_41159);
if(temp__5720__auto___41203){
var seq__40590_41204__$1 = temp__5720__auto___41203;
if(cljs.core.chunked_seq_QMARK_(seq__40590_41204__$1)){
var c__4550__auto___41205 = cljs.core.chunk_first(seq__40590_41204__$1);
var G__41206 = cljs.core.chunk_rest(seq__40590_41204__$1);
var G__41207 = c__4550__auto___41205;
var G__41208 = cljs.core.count(c__4550__auto___41205);
var G__41209 = (0);
seq__40590_41159 = G__41206;
chunk__40592_41160 = G__41207;
count__40593_41161 = G__41208;
i__40594_41162 = G__41209;
continue;
} else {
var child_struct_41210 = cljs.core.first(seq__40590_41204__$1);
if((!((child_struct_41210 == null)))){
if(typeof child_struct_41210 === 'string'){
var text_41211 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41211),child_struct_41210].join(''));
} else {
var children_41212 = shadow.dom.svg_node(child_struct_41210);
if(cljs.core.seq_QMARK_(children_41212)){
var seq__40636_41213 = cljs.core.seq(children_41212);
var chunk__40638_41214 = null;
var count__40639_41215 = (0);
var i__40640_41216 = (0);
while(true){
if((i__40640_41216 < count__40639_41215)){
var child_41217 = chunk__40638_41214.cljs$core$IIndexed$_nth$arity$2(null,i__40640_41216);
if(cljs.core.truth_(child_41217)){
node.appendChild(child_41217);


var G__41218 = seq__40636_41213;
var G__41219 = chunk__40638_41214;
var G__41220 = count__40639_41215;
var G__41221 = (i__40640_41216 + (1));
seq__40636_41213 = G__41218;
chunk__40638_41214 = G__41219;
count__40639_41215 = G__41220;
i__40640_41216 = G__41221;
continue;
} else {
var G__41222 = seq__40636_41213;
var G__41223 = chunk__40638_41214;
var G__41224 = count__40639_41215;
var G__41225 = (i__40640_41216 + (1));
seq__40636_41213 = G__41222;
chunk__40638_41214 = G__41223;
count__40639_41215 = G__41224;
i__40640_41216 = G__41225;
continue;
}
} else {
var temp__5720__auto___41226__$1 = cljs.core.seq(seq__40636_41213);
if(temp__5720__auto___41226__$1){
var seq__40636_41227__$1 = temp__5720__auto___41226__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40636_41227__$1)){
var c__4550__auto___41228 = cljs.core.chunk_first(seq__40636_41227__$1);
var G__41229 = cljs.core.chunk_rest(seq__40636_41227__$1);
var G__41230 = c__4550__auto___41228;
var G__41231 = cljs.core.count(c__4550__auto___41228);
var G__41232 = (0);
seq__40636_41213 = G__41229;
chunk__40638_41214 = G__41230;
count__40639_41215 = G__41231;
i__40640_41216 = G__41232;
continue;
} else {
var child_41233 = cljs.core.first(seq__40636_41227__$1);
if(cljs.core.truth_(child_41233)){
node.appendChild(child_41233);


var G__41234 = cljs.core.next(seq__40636_41227__$1);
var G__41235 = null;
var G__41236 = (0);
var G__41237 = (0);
seq__40636_41213 = G__41234;
chunk__40638_41214 = G__41235;
count__40639_41215 = G__41236;
i__40640_41216 = G__41237;
continue;
} else {
var G__41242 = cljs.core.next(seq__40636_41227__$1);
var G__41243 = null;
var G__41244 = (0);
var G__41245 = (0);
seq__40636_41213 = G__41242;
chunk__40638_41214 = G__41243;
count__40639_41215 = G__41244;
i__40640_41216 = G__41245;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41212);
}
}


var G__41247 = cljs.core.next(seq__40590_41204__$1);
var G__41248 = null;
var G__41249 = (0);
var G__41250 = (0);
seq__40590_41159 = G__41247;
chunk__40592_41160 = G__41248;
count__40593_41161 = G__41249;
i__40594_41162 = G__41250;
continue;
} else {
var G__41252 = cljs.core.next(seq__40590_41204__$1);
var G__41253 = null;
var G__41254 = (0);
var G__41255 = (0);
seq__40590_41159 = G__41252;
chunk__40592_41160 = G__41253;
count__40593_41161 = G__41254;
i__40594_41162 = G__41255;
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

var G__40645_41256 = shadow.dom._to_svg;
var G__40646_41257 = "string";
var G__40647_41258 = ((function (G__40645_41256,G__40646_41257){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__40645_41256,G__40646_41257))
;
goog.object.set(G__40645_41256,G__40646_41257,G__40647_41258);

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

var G__40652_41259 = shadow.dom._to_svg;
var G__40653_41260 = "null";
var G__40654_41261 = ((function (G__40652_41259,G__40653_41260){
return (function (_){
return null;
});})(G__40652_41259,G__40653_41260))
;
goog.object.set(G__40652_41259,G__40653_41260,G__40654_41261);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41264 = arguments.length;
var i__4731__auto___41265 = (0);
while(true){
if((i__4731__auto___41265 < len__4730__auto___41264)){
args__4736__auto__.push((arguments[i__4731__auto___41265]));

var G__41266 = (i__4731__auto___41265 + (1));
i__4731__auto___41265 = G__41266;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq40655){
var G__40656 = cljs.core.first(seq40655);
var seq40655__$1 = cljs.core.next(seq40655);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40656,seq40655__$1);
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
var G__40662 = arguments.length;
switch (G__40662) {
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
var G__40664_41272 = shadow.dom.dom_node(el);
var G__40665_41273 = cljs.core.name(event);
var G__40666_41274 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40664_41272,G__40665_41273,G__40666_41274) : shadow.dom.dom_listen.call(null,G__40664_41272,G__40665_41273,G__40666_41274));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__26130__auto___41279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___41279,buf,chan,event_fn){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___41279,buf,chan,event_fn){
return (function (state_40672){
var state_val_40673 = (state_40672[(1)]);
if((state_val_40673 === (1))){
var state_40672__$1 = state_40672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40672__$1,(2),once_or_cleanup);
} else {
if((state_val_40673 === (2))){
var inst_40669 = (state_40672[(2)]);
var inst_40670 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40672__$1 = (function (){var statearr_40678 = state_40672;
(statearr_40678[(7)] = inst_40669);

return statearr_40678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40672__$1,inst_40670);
} else {
return null;
}
}
});})(c__26130__auto___41279,buf,chan,event_fn))
;
return ((function (switch__26085__auto__,c__26130__auto___41279,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__26086__auto__ = null;
var shadow$dom$state_machine__26086__auto____0 = (function (){
var statearr_40680 = [null,null,null,null,null,null,null,null];
(statearr_40680[(0)] = shadow$dom$state_machine__26086__auto__);

(statearr_40680[(1)] = (1));

return statearr_40680;
});
var shadow$dom$state_machine__26086__auto____1 = (function (state_40672){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_40672);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e40682){if((e40682 instanceof Object)){
var ex__26089__auto__ = e40682;
var statearr_40684_41280 = state_40672;
(statearr_40684_41280[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41281 = state_40672;
state_40672 = G__41281;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
shadow$dom$state_machine__26086__auto__ = function(state_40672){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26086__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26086__auto____1.call(this,state_40672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26086__auto____0;
shadow$dom$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26086__auto____1;
return shadow$dom$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___41279,buf,chan,event_fn))
})();
var state__26132__auto__ = (function (){var statearr_40685 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_40685[(6)] = c__26130__auto___41279);

return statearr_40685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___41279,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
