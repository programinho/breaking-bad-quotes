goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38532 = arguments.length;
switch (G__38532) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38539 = (function (f,blockable,meta38540){
this.f = f;
this.blockable = blockable;
this.meta38540 = meta38540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38541,meta38540__$1){
var self__ = this;
var _38541__$1 = this;
return (new cljs.core.async.t_cljs$core$async38539(self__.f,self__.blockable,meta38540__$1));
});

cljs.core.async.t_cljs$core$async38539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38541){
var self__ = this;
var _38541__$1 = this;
return self__.meta38540;
});

cljs.core.async.t_cljs$core$async38539.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38540","meta38540",1011234309,null)], null);
});

cljs.core.async.t_cljs$core$async38539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38539";

cljs.core.async.t_cljs$core$async38539.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38539");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38539.
 */
cljs.core.async.__GT_t_cljs$core$async38539 = (function cljs$core$async$__GT_t_cljs$core$async38539(f__$1,blockable__$1,meta38540){
return (new cljs.core.async.t_cljs$core$async38539(f__$1,blockable__$1,meta38540));
});

}

return (new cljs.core.async.t_cljs$core$async38539(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38558 = arguments.length;
switch (G__38558) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38564 = arguments.length;
switch (G__38564) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38566 = arguments.length;
switch (G__38566) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_40035 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40035) : fn1.call(null,val_40035));
} else {
cljs.core.async.impl.dispatch.run(((function (val_40035,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40035) : fn1.call(null,val_40035));
});})(val_40035,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38568 = arguments.length;
switch (G__38568) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___40046 = n;
var x_40047 = (0);
while(true){
if((x_40047 < n__4607__auto___40046)){
(a[x_40047] = (0));

var G__40048 = (x_40047 + (1));
x_40047 = G__40048;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__40049 = (i + (1));
i = G__40049;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38569 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38569 = (function (flag,meta38570){
this.flag = flag;
this.meta38570 = meta38570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38571,meta38570__$1){
var self__ = this;
var _38571__$1 = this;
return (new cljs.core.async.t_cljs$core$async38569(self__.flag,meta38570__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38571){
var self__ = this;
var _38571__$1 = this;
return self__.meta38570;
});})(flag))
;

cljs.core.async.t_cljs$core$async38569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38569.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38570","meta38570",-1181132645,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38569";

cljs.core.async.t_cljs$core$async38569.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38569");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38569.
 */
cljs.core.async.__GT_t_cljs$core$async38569 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38569(flag__$1,meta38570){
return (new cljs.core.async.t_cljs$core$async38569(flag__$1,meta38570));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38569(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38572 = (function (flag,cb,meta38573){
this.flag = flag;
this.cb = cb;
this.meta38573 = meta38573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38574,meta38573__$1){
var self__ = this;
var _38574__$1 = this;
return (new cljs.core.async.t_cljs$core$async38572(self__.flag,self__.cb,meta38573__$1));
});

cljs.core.async.t_cljs$core$async38572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38574){
var self__ = this;
var _38574__$1 = this;
return self__.meta38573;
});

cljs.core.async.t_cljs$core$async38572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async38572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38573","meta38573",1837062348,null)], null);
});

cljs.core.async.t_cljs$core$async38572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38572";

cljs.core.async.t_cljs$core$async38572.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38572");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38572.
 */
cljs.core.async.__GT_t_cljs$core$async38572 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38572(flag__$1,cb__$1,meta38573){
return (new cljs.core.async.t_cljs$core$async38572(flag__$1,cb__$1,meta38573));
});

}

return (new cljs.core.async.t_cljs$core$async38572(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38577_SHARP_){
var G__38579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38577_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38579) : fret.call(null,G__38579));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38578_SHARP_){
var G__38580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38578_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38580) : fret.call(null,G__38580));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40063 = (i + (1));
i = G__40063;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40067 = arguments.length;
var i__4731__auto___40068 = (0);
while(true){
if((i__4731__auto___40068 < len__4730__auto___40067)){
args__4736__auto__.push((arguments[i__4731__auto___40068]));

var G__40069 = (i__4731__auto___40068 + (1));
i__4731__auto___40068 = G__40069;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38584){
var map__38585 = p__38584;
var map__38585__$1 = (((((!((map__38585 == null))))?(((((map__38585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38585):map__38585);
var opts = map__38585__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38581){
var G__38582 = cljs.core.first(seq38581);
var seq38581__$1 = cljs.core.next(seq38581);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38582,seq38581__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38588 = arguments.length;
switch (G__38588) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26130__auto___40082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40082){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40082){
return (function (state_38612){
var state_val_38613 = (state_38612[(1)]);
if((state_val_38613 === (7))){
var inst_38608 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38617_40085 = state_38612__$1;
(statearr_38617_40085[(2)] = inst_38608);

(statearr_38617_40085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (1))){
var state_38612__$1 = state_38612;
var statearr_38618_40086 = state_38612__$1;
(statearr_38618_40086[(2)] = null);

(statearr_38618_40086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (4))){
var inst_38591 = (state_38612[(7)]);
var inst_38591__$1 = (state_38612[(2)]);
var inst_38592 = (inst_38591__$1 == null);
var state_38612__$1 = (function (){var statearr_38620 = state_38612;
(statearr_38620[(7)] = inst_38591__$1);

return statearr_38620;
})();
if(cljs.core.truth_(inst_38592)){
var statearr_38621_40089 = state_38612__$1;
(statearr_38621_40089[(1)] = (5));

} else {
var statearr_38622_40092 = state_38612__$1;
(statearr_38622_40092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (13))){
var state_38612__$1 = state_38612;
var statearr_38625_40093 = state_38612__$1;
(statearr_38625_40093[(2)] = null);

(statearr_38625_40093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (6))){
var inst_38591 = (state_38612[(7)]);
var state_38612__$1 = state_38612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38612__$1,(11),to,inst_38591);
} else {
if((state_val_38613 === (3))){
var inst_38610 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38612__$1,inst_38610);
} else {
if((state_val_38613 === (12))){
var state_38612__$1 = state_38612;
var statearr_38626_40096 = state_38612__$1;
(statearr_38626_40096[(2)] = null);

(statearr_38626_40096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (2))){
var state_38612__$1 = state_38612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38612__$1,(4),from);
} else {
if((state_val_38613 === (11))){
var inst_38601 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
if(cljs.core.truth_(inst_38601)){
var statearr_38627_40097 = state_38612__$1;
(statearr_38627_40097[(1)] = (12));

} else {
var statearr_38631_40100 = state_38612__$1;
(statearr_38631_40100[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (9))){
var state_38612__$1 = state_38612;
var statearr_38632_40101 = state_38612__$1;
(statearr_38632_40101[(2)] = null);

(statearr_38632_40101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (5))){
var state_38612__$1 = state_38612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38633_40102 = state_38612__$1;
(statearr_38633_40102[(1)] = (8));

} else {
var statearr_38634_40103 = state_38612__$1;
(statearr_38634_40103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (14))){
var inst_38606 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38635_40104 = state_38612__$1;
(statearr_38635_40104[(2)] = inst_38606);

(statearr_38635_40104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (10))){
var inst_38598 = (state_38612[(2)]);
var state_38612__$1 = state_38612;
var statearr_38636_40105 = state_38612__$1;
(statearr_38636_40105[(2)] = inst_38598);

(statearr_38636_40105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38613 === (8))){
var inst_38595 = cljs.core.async.close_BANG_(to);
var state_38612__$1 = state_38612;
var statearr_38637_40106 = state_38612__$1;
(statearr_38637_40106[(2)] = inst_38595);

(statearr_38637_40106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40082))
;
return ((function (switch__26085__auto__,c__26130__auto___40082){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_38638 = [null,null,null,null,null,null,null,null];
(statearr_38638[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_38638[(1)] = (1));

return statearr_38638;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_38612){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38612);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38639){if((e38639 instanceof Object)){
var ex__26089__auto__ = e38639;
var statearr_38640_40108 = state_38612;
(statearr_38640_40108[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40109 = state_38612;
state_38612 = G__40109;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_38612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_38612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40082))
})();
var state__26132__auto__ = (function (){var statearr_38641 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38641[(6)] = c__26130__auto___40082);

return statearr_38641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40082))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__38642){
var vec__38643 = p__38642;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38643,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38643,(1),null);
var job = vec__38643;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26130__auto___40117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40117,res,vec__38643,v,p,job,jobs,results){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40117,res,vec__38643,v,p,job,jobs,results){
return (function (state_38650){
var state_val_38651 = (state_38650[(1)]);
if((state_val_38651 === (1))){
var state_38650__$1 = state_38650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38650__$1,(2),res,v);
} else {
if((state_val_38651 === (2))){
var inst_38647 = (state_38650[(2)]);
var inst_38648 = cljs.core.async.close_BANG_(res);
var state_38650__$1 = (function (){var statearr_38652 = state_38650;
(statearr_38652[(7)] = inst_38647);

return statearr_38652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38650__$1,inst_38648);
} else {
return null;
}
}
});})(c__26130__auto___40117,res,vec__38643,v,p,job,jobs,results))
;
return ((function (switch__26085__auto__,c__26130__auto___40117,res,vec__38643,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0 = (function (){
var statearr_38653 = [null,null,null,null,null,null,null,null];
(statearr_38653[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__);

(statearr_38653[(1)] = (1));

return statearr_38653;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1 = (function (state_38650){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38650);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38654){if((e38654 instanceof Object)){
var ex__26089__auto__ = e38654;
var statearr_38655_40124 = state_38650;
(statearr_38655_40124[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38654;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40125 = state_38650;
state_38650 = G__40125;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = function(state_38650){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1.call(this,state_38650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40117,res,vec__38643,v,p,job,jobs,results))
})();
var state__26132__auto__ = (function (){var statearr_38656 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38656[(6)] = c__26130__auto___40117);

return statearr_38656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40117,res,vec__38643,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38657){
var vec__38658 = p__38657;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38658,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38658,(1),null);
var job = vec__38658;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___40129 = n;
var __40131 = (0);
while(true){
if((__40131 < n__4607__auto___40129)){
var G__38661_40132 = type;
var G__38661_40133__$1 = (((G__38661_40132 instanceof cljs.core.Keyword))?G__38661_40132.fqn:null);
switch (G__38661_40133__$1) {
case "compute":
var c__26130__auto___40136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40131,c__26130__auto___40136,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (__40131,c__26130__auto___40136,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async){
return (function (state_38674){
var state_val_38675 = (state_38674[(1)]);
if((state_val_38675 === (1))){
var state_38674__$1 = state_38674;
var statearr_38676_40137 = state_38674__$1;
(statearr_38676_40137[(2)] = null);

(statearr_38676_40137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38675 === (2))){
var state_38674__$1 = state_38674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38674__$1,(4),jobs);
} else {
if((state_val_38675 === (3))){
var inst_38672 = (state_38674[(2)]);
var state_38674__$1 = state_38674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38674__$1,inst_38672);
} else {
if((state_val_38675 === (4))){
var inst_38664 = (state_38674[(2)]);
var inst_38665 = process(inst_38664);
var state_38674__$1 = state_38674;
if(cljs.core.truth_(inst_38665)){
var statearr_38677_40138 = state_38674__$1;
(statearr_38677_40138[(1)] = (5));

} else {
var statearr_38678_40139 = state_38674__$1;
(statearr_38678_40139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38675 === (5))){
var state_38674__$1 = state_38674;
var statearr_38679_40140 = state_38674__$1;
(statearr_38679_40140[(2)] = null);

(statearr_38679_40140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38675 === (6))){
var state_38674__$1 = state_38674;
var statearr_38682_40144 = state_38674__$1;
(statearr_38682_40144[(2)] = null);

(statearr_38682_40144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38675 === (7))){
var inst_38670 = (state_38674[(2)]);
var state_38674__$1 = state_38674;
var statearr_38684_40145 = state_38674__$1;
(statearr_38684_40145[(2)] = inst_38670);

(statearr_38684_40145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40131,c__26130__auto___40136,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async))
;
return ((function (__40131,switch__26085__auto__,c__26130__auto___40136,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0 = (function (){
var statearr_38685 = [null,null,null,null,null,null,null];
(statearr_38685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__);

(statearr_38685[(1)] = (1));

return statearr_38685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1 = (function (state_38674){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38674);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38686){if((e38686 instanceof Object)){
var ex__26089__auto__ = e38686;
var statearr_38687_40153 = state_38674;
(statearr_38687_40153[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38686;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40157 = state_38674;
state_38674 = G__40157;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = function(state_38674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1.call(this,state_38674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__;
})()
;})(__40131,switch__26085__auto__,c__26130__auto___40136,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async))
})();
var state__26132__auto__ = (function (){var statearr_38688 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38688[(6)] = c__26130__auto___40136);

return statearr_38688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(__40131,c__26130__auto___40136,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async))
);


break;
case "async":
var c__26130__auto___40158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40131,c__26130__auto___40158,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (__40131,c__26130__auto___40158,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async){
return (function (state_38701){
var state_val_38702 = (state_38701[(1)]);
if((state_val_38702 === (1))){
var state_38701__$1 = state_38701;
var statearr_38703_40162 = state_38701__$1;
(statearr_38703_40162[(2)] = null);

(statearr_38703_40162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (2))){
var state_38701__$1 = state_38701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38701__$1,(4),jobs);
} else {
if((state_val_38702 === (3))){
var inst_38699 = (state_38701[(2)]);
var state_38701__$1 = state_38701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38701__$1,inst_38699);
} else {
if((state_val_38702 === (4))){
var inst_38691 = (state_38701[(2)]);
var inst_38692 = async(inst_38691);
var state_38701__$1 = state_38701;
if(cljs.core.truth_(inst_38692)){
var statearr_38704_40166 = state_38701__$1;
(statearr_38704_40166[(1)] = (5));

} else {
var statearr_38705_40167 = state_38701__$1;
(statearr_38705_40167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (5))){
var state_38701__$1 = state_38701;
var statearr_38706_40171 = state_38701__$1;
(statearr_38706_40171[(2)] = null);

(statearr_38706_40171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (6))){
var state_38701__$1 = state_38701;
var statearr_38707_40172 = state_38701__$1;
(statearr_38707_40172[(2)] = null);

(statearr_38707_40172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38702 === (7))){
var inst_38697 = (state_38701[(2)]);
var state_38701__$1 = state_38701;
var statearr_38708_40173 = state_38701__$1;
(statearr_38708_40173[(2)] = inst_38697);

(statearr_38708_40173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__40131,c__26130__auto___40158,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async))
;
return ((function (__40131,switch__26085__auto__,c__26130__auto___40158,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0 = (function (){
var statearr_38709 = [null,null,null,null,null,null,null];
(statearr_38709[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__);

(statearr_38709[(1)] = (1));

return statearr_38709;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1 = (function (state_38701){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38701);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38710){if((e38710 instanceof Object)){
var ex__26089__auto__ = e38710;
var statearr_38711_40184 = state_38701;
(statearr_38711_40184[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40185 = state_38701;
state_38701 = G__40185;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = function(state_38701){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1.call(this,state_38701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__;
})()
;})(__40131,switch__26085__auto__,c__26130__auto___40158,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async))
})();
var state__26132__auto__ = (function (){var statearr_38712 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38712[(6)] = c__26130__auto___40158);

return statearr_38712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(__40131,c__26130__auto___40158,G__38661_40132,G__38661_40133__$1,n__4607__auto___40129,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38661_40133__$1)].join('')));

}

var G__40186 = (__40131 + (1));
__40131 = G__40186;
continue;
} else {
}
break;
}

var c__26130__auto___40190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40190,jobs,results,process,async){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40190,jobs,results,process,async){
return (function (state_38734){
var state_val_38735 = (state_38734[(1)]);
if((state_val_38735 === (7))){
var inst_38730 = (state_38734[(2)]);
var state_38734__$1 = state_38734;
var statearr_38739_40194 = state_38734__$1;
(statearr_38739_40194[(2)] = inst_38730);

(statearr_38739_40194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (1))){
var state_38734__$1 = state_38734;
var statearr_38740_40198 = state_38734__$1;
(statearr_38740_40198[(2)] = null);

(statearr_38740_40198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (4))){
var inst_38715 = (state_38734[(7)]);
var inst_38715__$1 = (state_38734[(2)]);
var inst_38716 = (inst_38715__$1 == null);
var state_38734__$1 = (function (){var statearr_38741 = state_38734;
(statearr_38741[(7)] = inst_38715__$1);

return statearr_38741;
})();
if(cljs.core.truth_(inst_38716)){
var statearr_38742_40202 = state_38734__$1;
(statearr_38742_40202[(1)] = (5));

} else {
var statearr_38743_40203 = state_38734__$1;
(statearr_38743_40203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (6))){
var inst_38715 = (state_38734[(7)]);
var inst_38720 = (state_38734[(8)]);
var inst_38720__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38722 = [inst_38715,inst_38720__$1];
var inst_38723 = (new cljs.core.PersistentVector(null,2,(5),inst_38721,inst_38722,null));
var state_38734__$1 = (function (){var statearr_38744 = state_38734;
(statearr_38744[(8)] = inst_38720__$1);

return statearr_38744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38734__$1,(8),jobs,inst_38723);
} else {
if((state_val_38735 === (3))){
var inst_38732 = (state_38734[(2)]);
var state_38734__$1 = state_38734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38734__$1,inst_38732);
} else {
if((state_val_38735 === (2))){
var state_38734__$1 = state_38734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38734__$1,(4),from);
} else {
if((state_val_38735 === (9))){
var inst_38727 = (state_38734[(2)]);
var state_38734__$1 = (function (){var statearr_38745 = state_38734;
(statearr_38745[(9)] = inst_38727);

return statearr_38745;
})();
var statearr_38746_40210 = state_38734__$1;
(statearr_38746_40210[(2)] = null);

(statearr_38746_40210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (5))){
var inst_38718 = cljs.core.async.close_BANG_(jobs);
var state_38734__$1 = state_38734;
var statearr_38747_40211 = state_38734__$1;
(statearr_38747_40211[(2)] = inst_38718);

(statearr_38747_40211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38735 === (8))){
var inst_38720 = (state_38734[(8)]);
var inst_38725 = (state_38734[(2)]);
var state_38734__$1 = (function (){var statearr_38748 = state_38734;
(statearr_38748[(10)] = inst_38725);

return statearr_38748;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38734__$1,(9),results,inst_38720);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40190,jobs,results,process,async))
;
return ((function (switch__26085__auto__,c__26130__auto___40190,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0 = (function (){
var statearr_38749 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38749[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__);

(statearr_38749[(1)] = (1));

return statearr_38749;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1 = (function (state_38734){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38734);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38750){if((e38750 instanceof Object)){
var ex__26089__auto__ = e38750;
var statearr_38751_40213 = state_38734;
(statearr_38751_40213[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38750;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40214 = state_38734;
state_38734 = G__40214;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = function(state_38734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1.call(this,state_38734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40190,jobs,results,process,async))
})();
var state__26132__auto__ = (function (){var statearr_38752 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38752[(6)] = c__26130__auto___40190);

return statearr_38752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40190,jobs,results,process,async))
);


var c__26130__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto__,jobs,results,process,async){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto__,jobs,results,process,async){
return (function (state_38790){
var state_val_38791 = (state_38790[(1)]);
if((state_val_38791 === (7))){
var inst_38786 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38792_40215 = state_38790__$1;
(statearr_38792_40215[(2)] = inst_38786);

(statearr_38792_40215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (20))){
var state_38790__$1 = state_38790;
var statearr_38793_40216 = state_38790__$1;
(statearr_38793_40216[(2)] = null);

(statearr_38793_40216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (1))){
var state_38790__$1 = state_38790;
var statearr_38794_40217 = state_38790__$1;
(statearr_38794_40217[(2)] = null);

(statearr_38794_40217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (4))){
var inst_38755 = (state_38790[(7)]);
var inst_38755__$1 = (state_38790[(2)]);
var inst_38756 = (inst_38755__$1 == null);
var state_38790__$1 = (function (){var statearr_38795 = state_38790;
(statearr_38795[(7)] = inst_38755__$1);

return statearr_38795;
})();
if(cljs.core.truth_(inst_38756)){
var statearr_38796_40218 = state_38790__$1;
(statearr_38796_40218[(1)] = (5));

} else {
var statearr_38797_40219 = state_38790__$1;
(statearr_38797_40219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (15))){
var inst_38768 = (state_38790[(8)]);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38790__$1,(18),to,inst_38768);
} else {
if((state_val_38791 === (21))){
var inst_38781 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38798_40220 = state_38790__$1;
(statearr_38798_40220[(2)] = inst_38781);

(statearr_38798_40220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (13))){
var inst_38783 = (state_38790[(2)]);
var state_38790__$1 = (function (){var statearr_38799 = state_38790;
(statearr_38799[(9)] = inst_38783);

return statearr_38799;
})();
var statearr_38800_40221 = state_38790__$1;
(statearr_38800_40221[(2)] = null);

(statearr_38800_40221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (6))){
var inst_38755 = (state_38790[(7)]);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38790__$1,(11),inst_38755);
} else {
if((state_val_38791 === (17))){
var inst_38776 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38776)){
var statearr_38801_40224 = state_38790__$1;
(statearr_38801_40224[(1)] = (19));

} else {
var statearr_38802_40225 = state_38790__$1;
(statearr_38802_40225[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (3))){
var inst_38788 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38790__$1,inst_38788);
} else {
if((state_val_38791 === (12))){
var inst_38765 = (state_38790[(10)]);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38790__$1,(14),inst_38765);
} else {
if((state_val_38791 === (2))){
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38790__$1,(4),results);
} else {
if((state_val_38791 === (19))){
var state_38790__$1 = state_38790;
var statearr_38803_40226 = state_38790__$1;
(statearr_38803_40226[(2)] = null);

(statearr_38803_40226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (11))){
var inst_38765 = (state_38790[(2)]);
var state_38790__$1 = (function (){var statearr_38804 = state_38790;
(statearr_38804[(10)] = inst_38765);

return statearr_38804;
})();
var statearr_38805_40227 = state_38790__$1;
(statearr_38805_40227[(2)] = null);

(statearr_38805_40227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (9))){
var state_38790__$1 = state_38790;
var statearr_38806_40228 = state_38790__$1;
(statearr_38806_40228[(2)] = null);

(statearr_38806_40228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (5))){
var state_38790__$1 = state_38790;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38807_40229 = state_38790__$1;
(statearr_38807_40229[(1)] = (8));

} else {
var statearr_38808_40230 = state_38790__$1;
(statearr_38808_40230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (14))){
var inst_38770 = (state_38790[(11)]);
var inst_38768 = (state_38790[(8)]);
var inst_38768__$1 = (state_38790[(2)]);
var inst_38769 = (inst_38768__$1 == null);
var inst_38770__$1 = cljs.core.not(inst_38769);
var state_38790__$1 = (function (){var statearr_38809 = state_38790;
(statearr_38809[(11)] = inst_38770__$1);

(statearr_38809[(8)] = inst_38768__$1);

return statearr_38809;
})();
if(inst_38770__$1){
var statearr_38810_40231 = state_38790__$1;
(statearr_38810_40231[(1)] = (15));

} else {
var statearr_38811_40232 = state_38790__$1;
(statearr_38811_40232[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (16))){
var inst_38770 = (state_38790[(11)]);
var state_38790__$1 = state_38790;
var statearr_38812_40233 = state_38790__$1;
(statearr_38812_40233[(2)] = inst_38770);

(statearr_38812_40233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (10))){
var inst_38762 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38813_40234 = state_38790__$1;
(statearr_38813_40234[(2)] = inst_38762);

(statearr_38813_40234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (18))){
var inst_38773 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38814_40235 = state_38790__$1;
(statearr_38814_40235[(2)] = inst_38773);

(statearr_38814_40235[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (8))){
var inst_38759 = cljs.core.async.close_BANG_(to);
var state_38790__$1 = state_38790;
var statearr_38815_40239 = state_38790__$1;
(statearr_38815_40239[(2)] = inst_38759);

(statearr_38815_40239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto__,jobs,results,process,async))
;
return ((function (switch__26085__auto__,c__26130__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0 = (function (){
var statearr_38816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38816[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__);

(statearr_38816[(1)] = (1));

return statearr_38816;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1 = (function (state_38790){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38790);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38817){if((e38817 instanceof Object)){
var ex__26089__auto__ = e38817;
var statearr_38818_40244 = state_38790;
(statearr_38818_40244[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38817;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40245 = state_38790;
state_38790 = G__40245;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__ = function(state_38790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1.call(this,state_38790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26086__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto__,jobs,results,process,async))
})();
var state__26132__auto__ = (function (){var statearr_38819 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38819[(6)] = c__26130__auto__);

return statearr_38819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto__,jobs,results,process,async))
);

return c__26130__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38821 = arguments.length;
switch (G__38821) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__38823 = arguments.length;
switch (G__38823) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__38825 = arguments.length;
switch (G__38825) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26130__auto___40262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40262,tc,fc){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40262,tc,fc){
return (function (state_38851){
var state_val_38852 = (state_38851[(1)]);
if((state_val_38852 === (7))){
var inst_38847 = (state_38851[(2)]);
var state_38851__$1 = state_38851;
var statearr_38853_40267 = state_38851__$1;
(statearr_38853_40267[(2)] = inst_38847);

(statearr_38853_40267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (1))){
var state_38851__$1 = state_38851;
var statearr_38854_40274 = state_38851__$1;
(statearr_38854_40274[(2)] = null);

(statearr_38854_40274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (4))){
var inst_38828 = (state_38851[(7)]);
var inst_38828__$1 = (state_38851[(2)]);
var inst_38829 = (inst_38828__$1 == null);
var state_38851__$1 = (function (){var statearr_38855 = state_38851;
(statearr_38855[(7)] = inst_38828__$1);

return statearr_38855;
})();
if(cljs.core.truth_(inst_38829)){
var statearr_38856_40275 = state_38851__$1;
(statearr_38856_40275[(1)] = (5));

} else {
var statearr_38857_40276 = state_38851__$1;
(statearr_38857_40276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (13))){
var state_38851__$1 = state_38851;
var statearr_38858_40277 = state_38851__$1;
(statearr_38858_40277[(2)] = null);

(statearr_38858_40277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (6))){
var inst_38828 = (state_38851[(7)]);
var inst_38834 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38828) : p.call(null,inst_38828));
var state_38851__$1 = state_38851;
if(cljs.core.truth_(inst_38834)){
var statearr_38859_40278 = state_38851__$1;
(statearr_38859_40278[(1)] = (9));

} else {
var statearr_38860_40279 = state_38851__$1;
(statearr_38860_40279[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (3))){
var inst_38849 = (state_38851[(2)]);
var state_38851__$1 = state_38851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38851__$1,inst_38849);
} else {
if((state_val_38852 === (12))){
var state_38851__$1 = state_38851;
var statearr_38861_40280 = state_38851__$1;
(statearr_38861_40280[(2)] = null);

(statearr_38861_40280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (2))){
var state_38851__$1 = state_38851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38851__$1,(4),ch);
} else {
if((state_val_38852 === (11))){
var inst_38828 = (state_38851[(7)]);
var inst_38838 = (state_38851[(2)]);
var state_38851__$1 = state_38851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38851__$1,(8),inst_38838,inst_38828);
} else {
if((state_val_38852 === (9))){
var state_38851__$1 = state_38851;
var statearr_38862_40281 = state_38851__$1;
(statearr_38862_40281[(2)] = tc);

(statearr_38862_40281[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (5))){
var inst_38831 = cljs.core.async.close_BANG_(tc);
var inst_38832 = cljs.core.async.close_BANG_(fc);
var state_38851__$1 = (function (){var statearr_38863 = state_38851;
(statearr_38863[(8)] = inst_38831);

return statearr_38863;
})();
var statearr_38864_40288 = state_38851__$1;
(statearr_38864_40288[(2)] = inst_38832);

(statearr_38864_40288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (14))){
var inst_38845 = (state_38851[(2)]);
var state_38851__$1 = state_38851;
var statearr_38865_40289 = state_38851__$1;
(statearr_38865_40289[(2)] = inst_38845);

(statearr_38865_40289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (10))){
var state_38851__$1 = state_38851;
var statearr_38866_40290 = state_38851__$1;
(statearr_38866_40290[(2)] = fc);

(statearr_38866_40290[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38852 === (8))){
var inst_38840 = (state_38851[(2)]);
var state_38851__$1 = state_38851;
if(cljs.core.truth_(inst_38840)){
var statearr_38867_40291 = state_38851__$1;
(statearr_38867_40291[(1)] = (12));

} else {
var statearr_38868_40292 = state_38851__$1;
(statearr_38868_40292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40262,tc,fc))
;
return ((function (switch__26085__auto__,c__26130__auto___40262,tc,fc){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_38869 = [null,null,null,null,null,null,null,null,null];
(statearr_38869[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_38869[(1)] = (1));

return statearr_38869;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_38851){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38851);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38870){if((e38870 instanceof Object)){
var ex__26089__auto__ = e38870;
var statearr_38871_40293 = state_38851;
(statearr_38871_40293[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40294 = state_38851;
state_38851 = G__40294;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_38851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_38851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40262,tc,fc))
})();
var state__26132__auto__ = (function (){var statearr_38872 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38872[(6)] = c__26130__auto___40262);

return statearr_38872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40262,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26130__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto__){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto__){
return (function (state_38893){
var state_val_38894 = (state_38893[(1)]);
if((state_val_38894 === (7))){
var inst_38889 = (state_38893[(2)]);
var state_38893__$1 = state_38893;
var statearr_38895_40301 = state_38893__$1;
(statearr_38895_40301[(2)] = inst_38889);

(statearr_38895_40301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38894 === (1))){
var inst_38873 = init;
var state_38893__$1 = (function (){var statearr_38896 = state_38893;
(statearr_38896[(7)] = inst_38873);

return statearr_38896;
})();
var statearr_38897_40302 = state_38893__$1;
(statearr_38897_40302[(2)] = null);

(statearr_38897_40302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38894 === (4))){
var inst_38876 = (state_38893[(8)]);
var inst_38876__$1 = (state_38893[(2)]);
var inst_38877 = (inst_38876__$1 == null);
var state_38893__$1 = (function (){var statearr_38898 = state_38893;
(statearr_38898[(8)] = inst_38876__$1);

return statearr_38898;
})();
if(cljs.core.truth_(inst_38877)){
var statearr_38899_40303 = state_38893__$1;
(statearr_38899_40303[(1)] = (5));

} else {
var statearr_38900_40304 = state_38893__$1;
(statearr_38900_40304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38894 === (6))){
var inst_38873 = (state_38893[(7)]);
var inst_38880 = (state_38893[(9)]);
var inst_38876 = (state_38893[(8)]);
var inst_38880__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38873,inst_38876) : f.call(null,inst_38873,inst_38876));
var inst_38881 = cljs.core.reduced_QMARK_(inst_38880__$1);
var state_38893__$1 = (function (){var statearr_38901 = state_38893;
(statearr_38901[(9)] = inst_38880__$1);

return statearr_38901;
})();
if(inst_38881){
var statearr_38902_40305 = state_38893__$1;
(statearr_38902_40305[(1)] = (8));

} else {
var statearr_38903_40306 = state_38893__$1;
(statearr_38903_40306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38894 === (3))){
var inst_38891 = (state_38893[(2)]);
var state_38893__$1 = state_38893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38893__$1,inst_38891);
} else {
if((state_val_38894 === (2))){
var state_38893__$1 = state_38893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38893__$1,(4),ch);
} else {
if((state_val_38894 === (9))){
var inst_38880 = (state_38893[(9)]);
var inst_38873 = inst_38880;
var state_38893__$1 = (function (){var statearr_38904 = state_38893;
(statearr_38904[(7)] = inst_38873);

return statearr_38904;
})();
var statearr_38905_40307 = state_38893__$1;
(statearr_38905_40307[(2)] = null);

(statearr_38905_40307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38894 === (5))){
var inst_38873 = (state_38893[(7)]);
var state_38893__$1 = state_38893;
var statearr_38906_40308 = state_38893__$1;
(statearr_38906_40308[(2)] = inst_38873);

(statearr_38906_40308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38894 === (10))){
var inst_38887 = (state_38893[(2)]);
var state_38893__$1 = state_38893;
var statearr_38907_40309 = state_38893__$1;
(statearr_38907_40309[(2)] = inst_38887);

(statearr_38907_40309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38894 === (8))){
var inst_38880 = (state_38893[(9)]);
var inst_38883 = cljs.core.deref(inst_38880);
var state_38893__$1 = state_38893;
var statearr_38908_40310 = state_38893__$1;
(statearr_38908_40310[(2)] = inst_38883);

(statearr_38908_40310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto__))
;
return ((function (switch__26085__auto__,c__26130__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26086__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26086__auto____0 = (function (){
var statearr_38909 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38909[(0)] = cljs$core$async$reduce_$_state_machine__26086__auto__);

(statearr_38909[(1)] = (1));

return statearr_38909;
});
var cljs$core$async$reduce_$_state_machine__26086__auto____1 = (function (state_38893){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38893);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38910){if((e38910 instanceof Object)){
var ex__26089__auto__ = e38910;
var statearr_38911_40317 = state_38893;
(statearr_38911_40317[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38910;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40318 = state_38893;
state_38893 = G__40318;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26086__auto__ = function(state_38893){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26086__auto____1.call(this,state_38893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26086__auto____0;
cljs$core$async$reduce_$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26086__auto____1;
return cljs$core$async$reduce_$_state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto__))
})();
var state__26132__auto__ = (function (){var statearr_38912 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38912[(6)] = c__26130__auto__);

return statearr_38912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto__))
);

return c__26130__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26130__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto__,f__$1){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto__,f__$1){
return (function (state_38918){
var state_val_38919 = (state_38918[(1)]);
if((state_val_38919 === (1))){
var inst_38913 = cljs.core.async.reduce(f__$1,init,ch);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38918__$1,(2),inst_38913);
} else {
if((state_val_38919 === (2))){
var inst_38915 = (state_38918[(2)]);
var inst_38916 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38915) : f__$1.call(null,inst_38915));
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38918__$1,inst_38916);
} else {
return null;
}
}
});})(c__26130__auto__,f__$1))
;
return ((function (switch__26085__auto__,c__26130__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26086__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26086__auto____0 = (function (){
var statearr_38920 = [null,null,null,null,null,null,null];
(statearr_38920[(0)] = cljs$core$async$transduce_$_state_machine__26086__auto__);

(statearr_38920[(1)] = (1));

return statearr_38920;
});
var cljs$core$async$transduce_$_state_machine__26086__auto____1 = (function (state_38918){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38918);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38923){if((e38923 instanceof Object)){
var ex__26089__auto__ = e38923;
var statearr_38924_40319 = state_38918;
(statearr_38924_40319[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40320 = state_38918;
state_38918 = G__40320;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26086__auto__ = function(state_38918){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26086__auto____1.call(this,state_38918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26086__auto____0;
cljs$core$async$transduce_$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26086__auto____1;
return cljs$core$async$transduce_$_state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto__,f__$1))
})();
var state__26132__auto__ = (function (){var statearr_38925 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38925[(6)] = c__26130__auto__);

return statearr_38925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto__,f__$1))
);

return c__26130__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38930 = arguments.length;
switch (G__38930) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26130__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto__){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto__){
return (function (state_38955){
var state_val_38956 = (state_38955[(1)]);
if((state_val_38956 === (7))){
var inst_38937 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38957_40322 = state_38955__$1;
(statearr_38957_40322[(2)] = inst_38937);

(statearr_38957_40322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (1))){
var inst_38931 = cljs.core.seq(coll);
var inst_38932 = inst_38931;
var state_38955__$1 = (function (){var statearr_38958 = state_38955;
(statearr_38958[(7)] = inst_38932);

return statearr_38958;
})();
var statearr_38959_40323 = state_38955__$1;
(statearr_38959_40323[(2)] = null);

(statearr_38959_40323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (4))){
var inst_38932 = (state_38955[(7)]);
var inst_38935 = cljs.core.first(inst_38932);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38955__$1,(7),ch,inst_38935);
} else {
if((state_val_38956 === (13))){
var inst_38949 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38960_40325 = state_38955__$1;
(statearr_38960_40325[(2)] = inst_38949);

(statearr_38960_40325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (6))){
var inst_38940 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
if(cljs.core.truth_(inst_38940)){
var statearr_38961_40327 = state_38955__$1;
(statearr_38961_40327[(1)] = (8));

} else {
var statearr_38962_40328 = state_38955__$1;
(statearr_38962_40328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (3))){
var inst_38953 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38955__$1,inst_38953);
} else {
if((state_val_38956 === (12))){
var state_38955__$1 = state_38955;
var statearr_38963_40333 = state_38955__$1;
(statearr_38963_40333[(2)] = null);

(statearr_38963_40333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (2))){
var inst_38932 = (state_38955[(7)]);
var state_38955__$1 = state_38955;
if(cljs.core.truth_(inst_38932)){
var statearr_38964_40334 = state_38955__$1;
(statearr_38964_40334[(1)] = (4));

} else {
var statearr_38965_40335 = state_38955__$1;
(statearr_38965_40335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (11))){
var inst_38946 = cljs.core.async.close_BANG_(ch);
var state_38955__$1 = state_38955;
var statearr_38966_40336 = state_38955__$1;
(statearr_38966_40336[(2)] = inst_38946);

(statearr_38966_40336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (9))){
var state_38955__$1 = state_38955;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38967_40337 = state_38955__$1;
(statearr_38967_40337[(1)] = (11));

} else {
var statearr_38968_40338 = state_38955__$1;
(statearr_38968_40338[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (5))){
var inst_38932 = (state_38955[(7)]);
var state_38955__$1 = state_38955;
var statearr_38969_40339 = state_38955__$1;
(statearr_38969_40339[(2)] = inst_38932);

(statearr_38969_40339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (10))){
var inst_38951 = (state_38955[(2)]);
var state_38955__$1 = state_38955;
var statearr_38970_40340 = state_38955__$1;
(statearr_38970_40340[(2)] = inst_38951);

(statearr_38970_40340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38956 === (8))){
var inst_38932 = (state_38955[(7)]);
var inst_38942 = cljs.core.next(inst_38932);
var inst_38932__$1 = inst_38942;
var state_38955__$1 = (function (){var statearr_38971 = state_38955;
(statearr_38971[(7)] = inst_38932__$1);

return statearr_38971;
})();
var statearr_38972_40341 = state_38955__$1;
(statearr_38972_40341[(2)] = null);

(statearr_38972_40341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto__))
;
return ((function (switch__26085__auto__,c__26130__auto__){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_38973 = [null,null,null,null,null,null,null,null];
(statearr_38973[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_38973[(1)] = (1));

return statearr_38973;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_38955){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_38955);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e38974){if((e38974 instanceof Object)){
var ex__26089__auto__ = e38974;
var statearr_38975_40346 = state_38955;
(statearr_38975_40346[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38974;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40347 = state_38955;
state_38955 = G__40347;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_38955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_38955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto__))
})();
var state__26132__auto__ = (function (){var statearr_38976 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_38976[(6)] = c__26130__auto__);

return statearr_38976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto__))
);

return c__26130__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38977 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38977 = (function (ch,cs,meta38978){
this.ch = ch;
this.cs = cs;
this.meta38978 = meta38978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38979,meta38978__$1){
var self__ = this;
var _38979__$1 = this;
return (new cljs.core.async.t_cljs$core$async38977(self__.ch,self__.cs,meta38978__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38979){
var self__ = this;
var _38979__$1 = this;
return self__.meta38978;
});})(cs))
;

cljs.core.async.t_cljs$core$async38977.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38977.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38977.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38977.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38977.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38977.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38978","meta38978",-1247064170,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38977";

cljs.core.async.t_cljs$core$async38977.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38977");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38977.
 */
cljs.core.async.__GT_t_cljs$core$async38977 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38977(ch__$1,cs__$1,meta38978){
return (new cljs.core.async.t_cljs$core$async38977(ch__$1,cs__$1,meta38978));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38977(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26130__auto___40352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40352,cs,m,dchan,dctr,done){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40352,cs,m,dchan,dctr,done){
return (function (state_39121){
var state_val_39122 = (state_39121[(1)]);
if((state_val_39122 === (7))){
var inst_39117 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39123_40353 = state_39121__$1;
(statearr_39123_40353[(2)] = inst_39117);

(statearr_39123_40353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (20))){
var inst_39020 = (state_39121[(7)]);
var inst_39032 = cljs.core.first(inst_39020);
var inst_39033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39032,(0),null);
var inst_39034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39032,(1),null);
var state_39121__$1 = (function (){var statearr_39124 = state_39121;
(statearr_39124[(8)] = inst_39033);

return statearr_39124;
})();
if(cljs.core.truth_(inst_39034)){
var statearr_39125_40354 = state_39121__$1;
(statearr_39125_40354[(1)] = (22));

} else {
var statearr_39126_40355 = state_39121__$1;
(statearr_39126_40355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (27))){
var inst_39069 = (state_39121[(9)]);
var inst_39064 = (state_39121[(10)]);
var inst_39062 = (state_39121[(11)]);
var inst_38982 = (state_39121[(12)]);
var inst_39069__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39062,inst_39064);
var inst_39070 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39069__$1,inst_38982,done);
var state_39121__$1 = (function (){var statearr_39127 = state_39121;
(statearr_39127[(9)] = inst_39069__$1);

return statearr_39127;
})();
if(cljs.core.truth_(inst_39070)){
var statearr_39128_40356 = state_39121__$1;
(statearr_39128_40356[(1)] = (30));

} else {
var statearr_39129_40358 = state_39121__$1;
(statearr_39129_40358[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (1))){
var state_39121__$1 = state_39121;
var statearr_39130_40359 = state_39121__$1;
(statearr_39130_40359[(2)] = null);

(statearr_39130_40359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (24))){
var inst_39020 = (state_39121[(7)]);
var inst_39039 = (state_39121[(2)]);
var inst_39040 = cljs.core.next(inst_39020);
var inst_38992 = inst_39040;
var inst_38993 = null;
var inst_38994 = (0);
var inst_38995 = (0);
var state_39121__$1 = (function (){var statearr_39131 = state_39121;
(statearr_39131[(13)] = inst_38993);

(statearr_39131[(14)] = inst_38992);

(statearr_39131[(15)] = inst_38995);

(statearr_39131[(16)] = inst_38994);

(statearr_39131[(17)] = inst_39039);

return statearr_39131;
})();
var statearr_39132_40360 = state_39121__$1;
(statearr_39132_40360[(2)] = null);

(statearr_39132_40360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (39))){
var state_39121__$1 = state_39121;
var statearr_39136_40361 = state_39121__$1;
(statearr_39136_40361[(2)] = null);

(statearr_39136_40361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (4))){
var inst_38982 = (state_39121[(12)]);
var inst_38982__$1 = (state_39121[(2)]);
var inst_38983 = (inst_38982__$1 == null);
var state_39121__$1 = (function (){var statearr_39137 = state_39121;
(statearr_39137[(12)] = inst_38982__$1);

return statearr_39137;
})();
if(cljs.core.truth_(inst_38983)){
var statearr_39138_40366 = state_39121__$1;
(statearr_39138_40366[(1)] = (5));

} else {
var statearr_39139_40367 = state_39121__$1;
(statearr_39139_40367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (15))){
var inst_38993 = (state_39121[(13)]);
var inst_38992 = (state_39121[(14)]);
var inst_38995 = (state_39121[(15)]);
var inst_38994 = (state_39121[(16)]);
var inst_39016 = (state_39121[(2)]);
var inst_39017 = (inst_38995 + (1));
var tmp39133 = inst_38993;
var tmp39134 = inst_38992;
var tmp39135 = inst_38994;
var inst_38992__$1 = tmp39134;
var inst_38993__$1 = tmp39133;
var inst_38994__$1 = tmp39135;
var inst_38995__$1 = inst_39017;
var state_39121__$1 = (function (){var statearr_39140 = state_39121;
(statearr_39140[(13)] = inst_38993__$1);

(statearr_39140[(14)] = inst_38992__$1);

(statearr_39140[(15)] = inst_38995__$1);

(statearr_39140[(16)] = inst_38994__$1);

(statearr_39140[(18)] = inst_39016);

return statearr_39140;
})();
var statearr_39141_40368 = state_39121__$1;
(statearr_39141_40368[(2)] = null);

(statearr_39141_40368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (21))){
var inst_39043 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39145_40369 = state_39121__$1;
(statearr_39145_40369[(2)] = inst_39043);

(statearr_39145_40369[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (31))){
var inst_39069 = (state_39121[(9)]);
var inst_39073 = done(null);
var inst_39074 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39069);
var state_39121__$1 = (function (){var statearr_39146 = state_39121;
(statearr_39146[(19)] = inst_39073);

return statearr_39146;
})();
var statearr_39147_40370 = state_39121__$1;
(statearr_39147_40370[(2)] = inst_39074);

(statearr_39147_40370[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (32))){
var inst_39064 = (state_39121[(10)]);
var inst_39063 = (state_39121[(20)]);
var inst_39061 = (state_39121[(21)]);
var inst_39062 = (state_39121[(11)]);
var inst_39076 = (state_39121[(2)]);
var inst_39077 = (inst_39064 + (1));
var tmp39142 = inst_39063;
var tmp39143 = inst_39061;
var tmp39144 = inst_39062;
var inst_39061__$1 = tmp39143;
var inst_39062__$1 = tmp39144;
var inst_39063__$1 = tmp39142;
var inst_39064__$1 = inst_39077;
var state_39121__$1 = (function (){var statearr_39148 = state_39121;
(statearr_39148[(10)] = inst_39064__$1);

(statearr_39148[(20)] = inst_39063__$1);

(statearr_39148[(21)] = inst_39061__$1);

(statearr_39148[(11)] = inst_39062__$1);

(statearr_39148[(22)] = inst_39076);

return statearr_39148;
})();
var statearr_39149_40378 = state_39121__$1;
(statearr_39149_40378[(2)] = null);

(statearr_39149_40378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (40))){
var inst_39089 = (state_39121[(23)]);
var inst_39093 = done(null);
var inst_39094 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39089);
var state_39121__$1 = (function (){var statearr_39150 = state_39121;
(statearr_39150[(24)] = inst_39093);

return statearr_39150;
})();
var statearr_39151_40382 = state_39121__$1;
(statearr_39151_40382[(2)] = inst_39094);

(statearr_39151_40382[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (33))){
var inst_39080 = (state_39121[(25)]);
var inst_39082 = cljs.core.chunked_seq_QMARK_(inst_39080);
var state_39121__$1 = state_39121;
if(inst_39082){
var statearr_39152_40386 = state_39121__$1;
(statearr_39152_40386[(1)] = (36));

} else {
var statearr_39153_40387 = state_39121__$1;
(statearr_39153_40387[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (13))){
var inst_39009 = (state_39121[(26)]);
var inst_39013 = cljs.core.async.close_BANG_(inst_39009);
var state_39121__$1 = state_39121;
var statearr_39154_40388 = state_39121__$1;
(statearr_39154_40388[(2)] = inst_39013);

(statearr_39154_40388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (22))){
var inst_39033 = (state_39121[(8)]);
var inst_39036 = cljs.core.async.close_BANG_(inst_39033);
var state_39121__$1 = state_39121;
var statearr_39155_40393 = state_39121__$1;
(statearr_39155_40393[(2)] = inst_39036);

(statearr_39155_40393[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (36))){
var inst_39080 = (state_39121[(25)]);
var inst_39084 = cljs.core.chunk_first(inst_39080);
var inst_39085 = cljs.core.chunk_rest(inst_39080);
var inst_39086 = cljs.core.count(inst_39084);
var inst_39061 = inst_39085;
var inst_39062 = inst_39084;
var inst_39063 = inst_39086;
var inst_39064 = (0);
var state_39121__$1 = (function (){var statearr_39156 = state_39121;
(statearr_39156[(10)] = inst_39064);

(statearr_39156[(20)] = inst_39063);

(statearr_39156[(21)] = inst_39061);

(statearr_39156[(11)] = inst_39062);

return statearr_39156;
})();
var statearr_39157_40397 = state_39121__$1;
(statearr_39157_40397[(2)] = null);

(statearr_39157_40397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (41))){
var inst_39080 = (state_39121[(25)]);
var inst_39096 = (state_39121[(2)]);
var inst_39097 = cljs.core.next(inst_39080);
var inst_39061 = inst_39097;
var inst_39062 = null;
var inst_39063 = (0);
var inst_39064 = (0);
var state_39121__$1 = (function (){var statearr_39158 = state_39121;
(statearr_39158[(10)] = inst_39064);

(statearr_39158[(20)] = inst_39063);

(statearr_39158[(21)] = inst_39061);

(statearr_39158[(27)] = inst_39096);

(statearr_39158[(11)] = inst_39062);

return statearr_39158;
})();
var statearr_39159_40398 = state_39121__$1;
(statearr_39159_40398[(2)] = null);

(statearr_39159_40398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (43))){
var state_39121__$1 = state_39121;
var statearr_39160_40401 = state_39121__$1;
(statearr_39160_40401[(2)] = null);

(statearr_39160_40401[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (29))){
var inst_39105 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39161_40402 = state_39121__$1;
(statearr_39161_40402[(2)] = inst_39105);

(statearr_39161_40402[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (44))){
var inst_39114 = (state_39121[(2)]);
var state_39121__$1 = (function (){var statearr_39162 = state_39121;
(statearr_39162[(28)] = inst_39114);

return statearr_39162;
})();
var statearr_39163_40405 = state_39121__$1;
(statearr_39163_40405[(2)] = null);

(statearr_39163_40405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (6))){
var inst_39053 = (state_39121[(29)]);
var inst_39052 = cljs.core.deref(cs);
var inst_39053__$1 = cljs.core.keys(inst_39052);
var inst_39054 = cljs.core.count(inst_39053__$1);
var inst_39055 = cljs.core.reset_BANG_(dctr,inst_39054);
var inst_39060 = cljs.core.seq(inst_39053__$1);
var inst_39061 = inst_39060;
var inst_39062 = null;
var inst_39063 = (0);
var inst_39064 = (0);
var state_39121__$1 = (function (){var statearr_39164 = state_39121;
(statearr_39164[(10)] = inst_39064);

(statearr_39164[(20)] = inst_39063);

(statearr_39164[(21)] = inst_39061);

(statearr_39164[(29)] = inst_39053__$1);

(statearr_39164[(11)] = inst_39062);

(statearr_39164[(30)] = inst_39055);

return statearr_39164;
})();
var statearr_39165_40408 = state_39121__$1;
(statearr_39165_40408[(2)] = null);

(statearr_39165_40408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (28))){
var inst_39061 = (state_39121[(21)]);
var inst_39080 = (state_39121[(25)]);
var inst_39080__$1 = cljs.core.seq(inst_39061);
var state_39121__$1 = (function (){var statearr_39166 = state_39121;
(statearr_39166[(25)] = inst_39080__$1);

return statearr_39166;
})();
if(inst_39080__$1){
var statearr_39167_40412 = state_39121__$1;
(statearr_39167_40412[(1)] = (33));

} else {
var statearr_39168_40413 = state_39121__$1;
(statearr_39168_40413[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (25))){
var inst_39064 = (state_39121[(10)]);
var inst_39063 = (state_39121[(20)]);
var inst_39066 = (inst_39064 < inst_39063);
var inst_39067 = inst_39066;
var state_39121__$1 = state_39121;
if(cljs.core.truth_(inst_39067)){
var statearr_39169_40415 = state_39121__$1;
(statearr_39169_40415[(1)] = (27));

} else {
var statearr_39170_40416 = state_39121__$1;
(statearr_39170_40416[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (34))){
var state_39121__$1 = state_39121;
var statearr_39171_40417 = state_39121__$1;
(statearr_39171_40417[(2)] = null);

(statearr_39171_40417[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (17))){
var state_39121__$1 = state_39121;
var statearr_39172_40418 = state_39121__$1;
(statearr_39172_40418[(2)] = null);

(statearr_39172_40418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (3))){
var inst_39119 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39121__$1,inst_39119);
} else {
if((state_val_39122 === (12))){
var inst_39048 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39174_40421 = state_39121__$1;
(statearr_39174_40421[(2)] = inst_39048);

(statearr_39174_40421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (2))){
var state_39121__$1 = state_39121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39121__$1,(4),ch);
} else {
if((state_val_39122 === (23))){
var state_39121__$1 = state_39121;
var statearr_39175_40422 = state_39121__$1;
(statearr_39175_40422[(2)] = null);

(statearr_39175_40422[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (35))){
var inst_39103 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39176_40423 = state_39121__$1;
(statearr_39176_40423[(2)] = inst_39103);

(statearr_39176_40423[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (19))){
var inst_39020 = (state_39121[(7)]);
var inst_39024 = cljs.core.chunk_first(inst_39020);
var inst_39025 = cljs.core.chunk_rest(inst_39020);
var inst_39026 = cljs.core.count(inst_39024);
var inst_38992 = inst_39025;
var inst_38993 = inst_39024;
var inst_38994 = inst_39026;
var inst_38995 = (0);
var state_39121__$1 = (function (){var statearr_39177 = state_39121;
(statearr_39177[(13)] = inst_38993);

(statearr_39177[(14)] = inst_38992);

(statearr_39177[(15)] = inst_38995);

(statearr_39177[(16)] = inst_38994);

return statearr_39177;
})();
var statearr_39178_40424 = state_39121__$1;
(statearr_39178_40424[(2)] = null);

(statearr_39178_40424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (11))){
var inst_38992 = (state_39121[(14)]);
var inst_39020 = (state_39121[(7)]);
var inst_39020__$1 = cljs.core.seq(inst_38992);
var state_39121__$1 = (function (){var statearr_39179 = state_39121;
(statearr_39179[(7)] = inst_39020__$1);

return statearr_39179;
})();
if(inst_39020__$1){
var statearr_39180_40425 = state_39121__$1;
(statearr_39180_40425[(1)] = (16));

} else {
var statearr_39181_40426 = state_39121__$1;
(statearr_39181_40426[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (9))){
var inst_39050 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39182_40427 = state_39121__$1;
(statearr_39182_40427[(2)] = inst_39050);

(statearr_39182_40427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (5))){
var inst_38989 = cljs.core.deref(cs);
var inst_38990 = cljs.core.seq(inst_38989);
var inst_38992 = inst_38990;
var inst_38993 = null;
var inst_38994 = (0);
var inst_38995 = (0);
var state_39121__$1 = (function (){var statearr_39183 = state_39121;
(statearr_39183[(13)] = inst_38993);

(statearr_39183[(14)] = inst_38992);

(statearr_39183[(15)] = inst_38995);

(statearr_39183[(16)] = inst_38994);

return statearr_39183;
})();
var statearr_39184_40432 = state_39121__$1;
(statearr_39184_40432[(2)] = null);

(statearr_39184_40432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (14))){
var state_39121__$1 = state_39121;
var statearr_39185_40433 = state_39121__$1;
(statearr_39185_40433[(2)] = null);

(statearr_39185_40433[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (45))){
var inst_39111 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39186_40434 = state_39121__$1;
(statearr_39186_40434[(2)] = inst_39111);

(statearr_39186_40434[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (26))){
var inst_39053 = (state_39121[(29)]);
var inst_39107 = (state_39121[(2)]);
var inst_39108 = cljs.core.seq(inst_39053);
var state_39121__$1 = (function (){var statearr_39187 = state_39121;
(statearr_39187[(31)] = inst_39107);

return statearr_39187;
})();
if(inst_39108){
var statearr_39188_40435 = state_39121__$1;
(statearr_39188_40435[(1)] = (42));

} else {
var statearr_39193_40436 = state_39121__$1;
(statearr_39193_40436[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (16))){
var inst_39020 = (state_39121[(7)]);
var inst_39022 = cljs.core.chunked_seq_QMARK_(inst_39020);
var state_39121__$1 = state_39121;
if(inst_39022){
var statearr_39194_40437 = state_39121__$1;
(statearr_39194_40437[(1)] = (19));

} else {
var statearr_39195_40438 = state_39121__$1;
(statearr_39195_40438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (38))){
var inst_39100 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39196_40439 = state_39121__$1;
(statearr_39196_40439[(2)] = inst_39100);

(statearr_39196_40439[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (30))){
var state_39121__$1 = state_39121;
var statearr_39197_40444 = state_39121__$1;
(statearr_39197_40444[(2)] = null);

(statearr_39197_40444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (10))){
var inst_38993 = (state_39121[(13)]);
var inst_38995 = (state_39121[(15)]);
var inst_39008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38993,inst_38995);
var inst_39009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39008,(0),null);
var inst_39011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39008,(1),null);
var state_39121__$1 = (function (){var statearr_39198 = state_39121;
(statearr_39198[(26)] = inst_39009);

return statearr_39198;
})();
if(cljs.core.truth_(inst_39011)){
var statearr_39199_40446 = state_39121__$1;
(statearr_39199_40446[(1)] = (13));

} else {
var statearr_39200_40447 = state_39121__$1;
(statearr_39200_40447[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (18))){
var inst_39046 = (state_39121[(2)]);
var state_39121__$1 = state_39121;
var statearr_39201_40448 = state_39121__$1;
(statearr_39201_40448[(2)] = inst_39046);

(statearr_39201_40448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (42))){
var state_39121__$1 = state_39121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39121__$1,(45),dchan);
} else {
if((state_val_39122 === (37))){
var inst_39089 = (state_39121[(23)]);
var inst_39080 = (state_39121[(25)]);
var inst_38982 = (state_39121[(12)]);
var inst_39089__$1 = cljs.core.first(inst_39080);
var inst_39090 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39089__$1,inst_38982,done);
var state_39121__$1 = (function (){var statearr_39202 = state_39121;
(statearr_39202[(23)] = inst_39089__$1);

return statearr_39202;
})();
if(cljs.core.truth_(inst_39090)){
var statearr_39203_40450 = state_39121__$1;
(statearr_39203_40450[(1)] = (39));

} else {
var statearr_39204_40451 = state_39121__$1;
(statearr_39204_40451[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39122 === (8))){
var inst_38995 = (state_39121[(15)]);
var inst_38994 = (state_39121[(16)]);
var inst_39001 = (inst_38995 < inst_38994);
var inst_39002 = inst_39001;
var state_39121__$1 = state_39121;
if(cljs.core.truth_(inst_39002)){
var statearr_39205_40456 = state_39121__$1;
(statearr_39205_40456[(1)] = (10));

} else {
var statearr_39206_40457 = state_39121__$1;
(statearr_39206_40457[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40352,cs,m,dchan,dctr,done))
;
return ((function (switch__26085__auto__,c__26130__auto___40352,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26086__auto__ = null;
var cljs$core$async$mult_$_state_machine__26086__auto____0 = (function (){
var statearr_39207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39207[(0)] = cljs$core$async$mult_$_state_machine__26086__auto__);

(statearr_39207[(1)] = (1));

return statearr_39207;
});
var cljs$core$async$mult_$_state_machine__26086__auto____1 = (function (state_39121){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39121);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39208){if((e39208 instanceof Object)){
var ex__26089__auto__ = e39208;
var statearr_39209_40458 = state_39121;
(statearr_39209_40458[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40459 = state_39121;
state_39121 = G__40459;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26086__auto__ = function(state_39121){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26086__auto____1.call(this,state_39121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26086__auto____0;
cljs$core$async$mult_$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26086__auto____1;
return cljs$core$async$mult_$_state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40352,cs,m,dchan,dctr,done))
})();
var state__26132__auto__ = (function (){var statearr_39210 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39210[(6)] = c__26130__auto___40352);

return statearr_39210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40352,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39212 = arguments.length;
switch (G__39212) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40469 = arguments.length;
var i__4731__auto___40470 = (0);
while(true){
if((i__4731__auto___40470 < len__4730__auto___40469)){
args__4736__auto__.push((arguments[i__4731__auto___40470]));

var G__40471 = (i__4731__auto___40470 + (1));
i__4731__auto___40470 = G__40471;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39217){
var map__39218 = p__39217;
var map__39218__$1 = (((((!((map__39218 == null))))?(((((map__39218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39218):map__39218);
var opts = map__39218__$1;
var statearr_39220_40473 = state;
(statearr_39220_40473[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__39218,map__39218__$1,opts){
return (function (val){
var statearr_39221_40474 = state;
(statearr_39221_40474[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__39218,map__39218__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_39222_40475 = state;
(statearr_39222_40475[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39213){
var G__39214 = cljs.core.first(seq39213);
var seq39213__$1 = cljs.core.next(seq39213);
var G__39215 = cljs.core.first(seq39213__$1);
var seq39213__$2 = cljs.core.next(seq39213__$1);
var G__39216 = cljs.core.first(seq39213__$2);
var seq39213__$3 = cljs.core.next(seq39213__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39214,G__39215,G__39216,seq39213__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39223 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39223 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39224){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39224 = meta39224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39225,meta39224__$1){
var self__ = this;
var _39225__$1 = this;
return (new cljs.core.async.t_cljs$core$async39223(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39224__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39225){
var self__ = this;
var _39225__$1 = this;
return self__.meta39224;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39224","meta39224",-575765436,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39223";

cljs.core.async.t_cljs$core$async39223.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39223");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39223.
 */
cljs.core.async.__GT_t_cljs$core$async39223 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39223(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39224){
return (new cljs.core.async.t_cljs$core$async39223(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39224));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39223(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26130__auto___40490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39327){
var state_val_39328 = (state_39327[(1)]);
if((state_val_39328 === (7))){
var inst_39242 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39329_40491 = state_39327__$1;
(statearr_39329_40491[(2)] = inst_39242);

(statearr_39329_40491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (20))){
var inst_39254 = (state_39327[(7)]);
var state_39327__$1 = state_39327;
var statearr_39330_40492 = state_39327__$1;
(statearr_39330_40492[(2)] = inst_39254);

(statearr_39330_40492[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (27))){
var state_39327__$1 = state_39327;
var statearr_39331_40493 = state_39327__$1;
(statearr_39331_40493[(2)] = null);

(statearr_39331_40493[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (1))){
var inst_39229 = (state_39327[(8)]);
var inst_39229__$1 = calc_state();
var inst_39231 = (inst_39229__$1 == null);
var inst_39232 = cljs.core.not(inst_39231);
var state_39327__$1 = (function (){var statearr_39332 = state_39327;
(statearr_39332[(8)] = inst_39229__$1);

return statearr_39332;
})();
if(inst_39232){
var statearr_39333_40494 = state_39327__$1;
(statearr_39333_40494[(1)] = (2));

} else {
var statearr_39334_40495 = state_39327__$1;
(statearr_39334_40495[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (24))){
var inst_39301 = (state_39327[(9)]);
var inst_39287 = (state_39327[(10)]);
var inst_39278 = (state_39327[(11)]);
var inst_39301__$1 = (inst_39278.cljs$core$IFn$_invoke$arity$1 ? inst_39278.cljs$core$IFn$_invoke$arity$1(inst_39287) : inst_39278.call(null,inst_39287));
var state_39327__$1 = (function (){var statearr_39335 = state_39327;
(statearr_39335[(9)] = inst_39301__$1);

return statearr_39335;
})();
if(cljs.core.truth_(inst_39301__$1)){
var statearr_39336_40496 = state_39327__$1;
(statearr_39336_40496[(1)] = (29));

} else {
var statearr_39337_40497 = state_39327__$1;
(statearr_39337_40497[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (4))){
var inst_39245 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
if(cljs.core.truth_(inst_39245)){
var statearr_39338_40503 = state_39327__$1;
(statearr_39338_40503[(1)] = (8));

} else {
var statearr_39339_40506 = state_39327__$1;
(statearr_39339_40506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (15))){
var inst_39272 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
if(cljs.core.truth_(inst_39272)){
var statearr_39340_40507 = state_39327__$1;
(statearr_39340_40507[(1)] = (19));

} else {
var statearr_39341_40508 = state_39327__$1;
(statearr_39341_40508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (21))){
var inst_39277 = (state_39327[(12)]);
var inst_39277__$1 = (state_39327[(2)]);
var inst_39278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39277__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39277__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39277__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39327__$1 = (function (){var statearr_39342 = state_39327;
(statearr_39342[(12)] = inst_39277__$1);

(statearr_39342[(11)] = inst_39278);

(statearr_39342[(13)] = inst_39279);

return statearr_39342;
})();
return cljs.core.async.ioc_alts_BANG_(state_39327__$1,(22),inst_39280);
} else {
if((state_val_39328 === (31))){
var inst_39309 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
if(cljs.core.truth_(inst_39309)){
var statearr_39343_40509 = state_39327__$1;
(statearr_39343_40509[(1)] = (32));

} else {
var statearr_39344_40510 = state_39327__$1;
(statearr_39344_40510[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (32))){
var inst_39286 = (state_39327[(14)]);
var state_39327__$1 = state_39327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39327__$1,(35),out,inst_39286);
} else {
if((state_val_39328 === (33))){
var inst_39277 = (state_39327[(12)]);
var inst_39254 = inst_39277;
var state_39327__$1 = (function (){var statearr_39345 = state_39327;
(statearr_39345[(7)] = inst_39254);

return statearr_39345;
})();
var statearr_39346_40512 = state_39327__$1;
(statearr_39346_40512[(2)] = null);

(statearr_39346_40512[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (13))){
var inst_39254 = (state_39327[(7)]);
var inst_39261 = inst_39254.cljs$lang$protocol_mask$partition0$;
var inst_39262 = (inst_39261 & (64));
var inst_39263 = inst_39254.cljs$core$ISeq$;
var inst_39264 = (cljs.core.PROTOCOL_SENTINEL === inst_39263);
var inst_39265 = ((inst_39262) || (inst_39264));
var state_39327__$1 = state_39327;
if(cljs.core.truth_(inst_39265)){
var statearr_39347_40513 = state_39327__$1;
(statearr_39347_40513[(1)] = (16));

} else {
var statearr_39348_40514 = state_39327__$1;
(statearr_39348_40514[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (22))){
var inst_39286 = (state_39327[(14)]);
var inst_39287 = (state_39327[(10)]);
var inst_39285 = (state_39327[(2)]);
var inst_39286__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39285,(0),null);
var inst_39287__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39285,(1),null);
var inst_39288 = (inst_39286__$1 == null);
var inst_39289 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39287__$1,change);
var inst_39290 = ((inst_39288) || (inst_39289));
var state_39327__$1 = (function (){var statearr_39349 = state_39327;
(statearr_39349[(14)] = inst_39286__$1);

(statearr_39349[(10)] = inst_39287__$1);

return statearr_39349;
})();
if(cljs.core.truth_(inst_39290)){
var statearr_39350_40515 = state_39327__$1;
(statearr_39350_40515[(1)] = (23));

} else {
var statearr_39351_40516 = state_39327__$1;
(statearr_39351_40516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (36))){
var inst_39277 = (state_39327[(12)]);
var inst_39254 = inst_39277;
var state_39327__$1 = (function (){var statearr_39352 = state_39327;
(statearr_39352[(7)] = inst_39254);

return statearr_39352;
})();
var statearr_39353_40518 = state_39327__$1;
(statearr_39353_40518[(2)] = null);

(statearr_39353_40518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (29))){
var inst_39301 = (state_39327[(9)]);
var state_39327__$1 = state_39327;
var statearr_39354_40519 = state_39327__$1;
(statearr_39354_40519[(2)] = inst_39301);

(statearr_39354_40519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (6))){
var state_39327__$1 = state_39327;
var statearr_39355_40520 = state_39327__$1;
(statearr_39355_40520[(2)] = false);

(statearr_39355_40520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (28))){
var inst_39297 = (state_39327[(2)]);
var inst_39298 = calc_state();
var inst_39254 = inst_39298;
var state_39327__$1 = (function (){var statearr_39356 = state_39327;
(statearr_39356[(7)] = inst_39254);

(statearr_39356[(15)] = inst_39297);

return statearr_39356;
})();
var statearr_39357_40521 = state_39327__$1;
(statearr_39357_40521[(2)] = null);

(statearr_39357_40521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (25))){
var inst_39323 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39358_40522 = state_39327__$1;
(statearr_39358_40522[(2)] = inst_39323);

(statearr_39358_40522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (34))){
var inst_39321 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39359_40523 = state_39327__$1;
(statearr_39359_40523[(2)] = inst_39321);

(statearr_39359_40523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (17))){
var state_39327__$1 = state_39327;
var statearr_39360_40524 = state_39327__$1;
(statearr_39360_40524[(2)] = false);

(statearr_39360_40524[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (3))){
var state_39327__$1 = state_39327;
var statearr_39361_40525 = state_39327__$1;
(statearr_39361_40525[(2)] = false);

(statearr_39361_40525[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (12))){
var inst_39325 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39327__$1,inst_39325);
} else {
if((state_val_39328 === (2))){
var inst_39229 = (state_39327[(8)]);
var inst_39234 = inst_39229.cljs$lang$protocol_mask$partition0$;
var inst_39235 = (inst_39234 & (64));
var inst_39236 = inst_39229.cljs$core$ISeq$;
var inst_39237 = (cljs.core.PROTOCOL_SENTINEL === inst_39236);
var inst_39238 = ((inst_39235) || (inst_39237));
var state_39327__$1 = state_39327;
if(cljs.core.truth_(inst_39238)){
var statearr_39362_40526 = state_39327__$1;
(statearr_39362_40526[(1)] = (5));

} else {
var statearr_39363_40527 = state_39327__$1;
(statearr_39363_40527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (23))){
var inst_39286 = (state_39327[(14)]);
var inst_39292 = (inst_39286 == null);
var state_39327__$1 = state_39327;
if(cljs.core.truth_(inst_39292)){
var statearr_39364_40528 = state_39327__$1;
(statearr_39364_40528[(1)] = (26));

} else {
var statearr_39365_40530 = state_39327__$1;
(statearr_39365_40530[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (35))){
var inst_39312 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
if(cljs.core.truth_(inst_39312)){
var statearr_39366_40534 = state_39327__$1;
(statearr_39366_40534[(1)] = (36));

} else {
var statearr_39367_40539 = state_39327__$1;
(statearr_39367_40539[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (19))){
var inst_39254 = (state_39327[(7)]);
var inst_39274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39254);
var state_39327__$1 = state_39327;
var statearr_39368_40540 = state_39327__$1;
(statearr_39368_40540[(2)] = inst_39274);

(statearr_39368_40540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (11))){
var inst_39254 = (state_39327[(7)]);
var inst_39258 = (inst_39254 == null);
var inst_39259 = cljs.core.not(inst_39258);
var state_39327__$1 = state_39327;
if(inst_39259){
var statearr_39369_40542 = state_39327__$1;
(statearr_39369_40542[(1)] = (13));

} else {
var statearr_39370_40544 = state_39327__$1;
(statearr_39370_40544[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (9))){
var inst_39229 = (state_39327[(8)]);
var state_39327__$1 = state_39327;
var statearr_39371_40545 = state_39327__$1;
(statearr_39371_40545[(2)] = inst_39229);

(statearr_39371_40545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (5))){
var state_39327__$1 = state_39327;
var statearr_39372_40546 = state_39327__$1;
(statearr_39372_40546[(2)] = true);

(statearr_39372_40546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (14))){
var state_39327__$1 = state_39327;
var statearr_39373_40547 = state_39327__$1;
(statearr_39373_40547[(2)] = false);

(statearr_39373_40547[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (26))){
var inst_39287 = (state_39327[(10)]);
var inst_39294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39287);
var state_39327__$1 = state_39327;
var statearr_39374_40548 = state_39327__$1;
(statearr_39374_40548[(2)] = inst_39294);

(statearr_39374_40548[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (16))){
var state_39327__$1 = state_39327;
var statearr_39375_40549 = state_39327__$1;
(statearr_39375_40549[(2)] = true);

(statearr_39375_40549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (38))){
var inst_39317 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39376_40550 = state_39327__$1;
(statearr_39376_40550[(2)] = inst_39317);

(statearr_39376_40550[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (30))){
var inst_39287 = (state_39327[(10)]);
var inst_39278 = (state_39327[(11)]);
var inst_39279 = (state_39327[(13)]);
var inst_39304 = cljs.core.empty_QMARK_(inst_39278);
var inst_39305 = (inst_39279.cljs$core$IFn$_invoke$arity$1 ? inst_39279.cljs$core$IFn$_invoke$arity$1(inst_39287) : inst_39279.call(null,inst_39287));
var inst_39306 = cljs.core.not(inst_39305);
var inst_39307 = ((inst_39304) && (inst_39306));
var state_39327__$1 = state_39327;
var statearr_39377_40553 = state_39327__$1;
(statearr_39377_40553[(2)] = inst_39307);

(statearr_39377_40553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (10))){
var inst_39229 = (state_39327[(8)]);
var inst_39250 = (state_39327[(2)]);
var inst_39251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39250,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39250,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39250,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39254 = inst_39229;
var state_39327__$1 = (function (){var statearr_39378 = state_39327;
(statearr_39378[(7)] = inst_39254);

(statearr_39378[(16)] = inst_39251);

(statearr_39378[(17)] = inst_39253);

(statearr_39378[(18)] = inst_39252);

return statearr_39378;
})();
var statearr_39379_40556 = state_39327__$1;
(statearr_39379_40556[(2)] = null);

(statearr_39379_40556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (18))){
var inst_39269 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39380_40557 = state_39327__$1;
(statearr_39380_40557[(2)] = inst_39269);

(statearr_39380_40557[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (37))){
var state_39327__$1 = state_39327;
var statearr_39381_40558 = state_39327__$1;
(statearr_39381_40558[(2)] = null);

(statearr_39381_40558[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (8))){
var inst_39229 = (state_39327[(8)]);
var inst_39247 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39229);
var state_39327__$1 = state_39327;
var statearr_39382_40559 = state_39327__$1;
(statearr_39382_40559[(2)] = inst_39247);

(statearr_39382_40559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26085__auto__,c__26130__auto___40490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26086__auto__ = null;
var cljs$core$async$mix_$_state_machine__26086__auto____0 = (function (){
var statearr_39383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39383[(0)] = cljs$core$async$mix_$_state_machine__26086__auto__);

(statearr_39383[(1)] = (1));

return statearr_39383;
});
var cljs$core$async$mix_$_state_machine__26086__auto____1 = (function (state_39327){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39327);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39384){if((e39384 instanceof Object)){
var ex__26089__auto__ = e39384;
var statearr_39385_40561 = state_39327;
(statearr_39385_40561[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40562 = state_39327;
state_39327 = G__40562;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26086__auto__ = function(state_39327){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26086__auto____1.call(this,state_39327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26086__auto____0;
cljs$core$async$mix_$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26086__auto____1;
return cljs$core$async$mix_$_state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26132__auto__ = (function (){var statearr_39386 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39386[(6)] = c__26130__auto___40490);

return statearr_39386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40490,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39388 = arguments.length;
switch (G__39388) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39391 = arguments.length;
switch (G__39391) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__39389_SHARP_){
if(cljs.core.truth_((p1__39389_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39389_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39389_SHARP_.call(null,topic)))){
return p1__39389_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39389_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39392 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39393){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39393 = meta39393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39394,meta39393__$1){
var self__ = this;
var _39394__$1 = this;
return (new cljs.core.async.t_cljs$core$async39392(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39393__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39394){
var self__ = this;
var _39394__$1 = this;
return self__.meta39393;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39392.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39393","meta39393",-1858819382,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39392";

cljs.core.async.t_cljs$core$async39392.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39392");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39392.
 */
cljs.core.async.__GT_t_cljs$core$async39392 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39392(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39393){
return (new cljs.core.async.t_cljs$core$async39392(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39393));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39392(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26130__auto___40602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40602,mults,ensure_mult,p){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40602,mults,ensure_mult,p){
return (function (state_39466){
var state_val_39467 = (state_39466[(1)]);
if((state_val_39467 === (7))){
var inst_39462 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39468_40603 = state_39466__$1;
(statearr_39468_40603[(2)] = inst_39462);

(statearr_39468_40603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (20))){
var state_39466__$1 = state_39466;
var statearr_39469_40604 = state_39466__$1;
(statearr_39469_40604[(2)] = null);

(statearr_39469_40604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (1))){
var state_39466__$1 = state_39466;
var statearr_39470_40605 = state_39466__$1;
(statearr_39470_40605[(2)] = null);

(statearr_39470_40605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (24))){
var inst_39445 = (state_39466[(7)]);
var inst_39454 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39445);
var state_39466__$1 = state_39466;
var statearr_39471_40606 = state_39466__$1;
(statearr_39471_40606[(2)] = inst_39454);

(statearr_39471_40606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (4))){
var inst_39397 = (state_39466[(8)]);
var inst_39397__$1 = (state_39466[(2)]);
var inst_39398 = (inst_39397__$1 == null);
var state_39466__$1 = (function (){var statearr_39472 = state_39466;
(statearr_39472[(8)] = inst_39397__$1);

return statearr_39472;
})();
if(cljs.core.truth_(inst_39398)){
var statearr_39473_40613 = state_39466__$1;
(statearr_39473_40613[(1)] = (5));

} else {
var statearr_39474_40614 = state_39466__$1;
(statearr_39474_40614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (15))){
var inst_39439 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39475_40615 = state_39466__$1;
(statearr_39475_40615[(2)] = inst_39439);

(statearr_39475_40615[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (21))){
var inst_39459 = (state_39466[(2)]);
var state_39466__$1 = (function (){var statearr_39476 = state_39466;
(statearr_39476[(9)] = inst_39459);

return statearr_39476;
})();
var statearr_39477_40616 = state_39466__$1;
(statearr_39477_40616[(2)] = null);

(statearr_39477_40616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (13))){
var inst_39421 = (state_39466[(10)]);
var inst_39423 = cljs.core.chunked_seq_QMARK_(inst_39421);
var state_39466__$1 = state_39466;
if(inst_39423){
var statearr_39478_40617 = state_39466__$1;
(statearr_39478_40617[(1)] = (16));

} else {
var statearr_39479_40618 = state_39466__$1;
(statearr_39479_40618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (22))){
var inst_39451 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
if(cljs.core.truth_(inst_39451)){
var statearr_39480_40619 = state_39466__$1;
(statearr_39480_40619[(1)] = (23));

} else {
var statearr_39481_40620 = state_39466__$1;
(statearr_39481_40620[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (6))){
var inst_39445 = (state_39466[(7)]);
var inst_39397 = (state_39466[(8)]);
var inst_39447 = (state_39466[(11)]);
var inst_39445__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39397) : topic_fn.call(null,inst_39397));
var inst_39446 = cljs.core.deref(mults);
var inst_39447__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39446,inst_39445__$1);
var state_39466__$1 = (function (){var statearr_39482 = state_39466;
(statearr_39482[(7)] = inst_39445__$1);

(statearr_39482[(11)] = inst_39447__$1);

return statearr_39482;
})();
if(cljs.core.truth_(inst_39447__$1)){
var statearr_39483_40621 = state_39466__$1;
(statearr_39483_40621[(1)] = (19));

} else {
var statearr_39484_40622 = state_39466__$1;
(statearr_39484_40622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (25))){
var inst_39456 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39485_40629 = state_39466__$1;
(statearr_39485_40629[(2)] = inst_39456);

(statearr_39485_40629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (17))){
var inst_39421 = (state_39466[(10)]);
var inst_39430 = cljs.core.first(inst_39421);
var inst_39431 = cljs.core.async.muxch_STAR_(inst_39430);
var inst_39432 = cljs.core.async.close_BANG_(inst_39431);
var inst_39433 = cljs.core.next(inst_39421);
var inst_39407 = inst_39433;
var inst_39408 = null;
var inst_39409 = (0);
var inst_39410 = (0);
var state_39466__$1 = (function (){var statearr_39486 = state_39466;
(statearr_39486[(12)] = inst_39432);

(statearr_39486[(13)] = inst_39407);

(statearr_39486[(14)] = inst_39410);

(statearr_39486[(15)] = inst_39409);

(statearr_39486[(16)] = inst_39408);

return statearr_39486;
})();
var statearr_39487_40630 = state_39466__$1;
(statearr_39487_40630[(2)] = null);

(statearr_39487_40630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (3))){
var inst_39464 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39466__$1,inst_39464);
} else {
if((state_val_39467 === (12))){
var inst_39441 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39488_40631 = state_39466__$1;
(statearr_39488_40631[(2)] = inst_39441);

(statearr_39488_40631[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (2))){
var state_39466__$1 = state_39466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39466__$1,(4),ch);
} else {
if((state_val_39467 === (23))){
var state_39466__$1 = state_39466;
var statearr_39489_40632 = state_39466__$1;
(statearr_39489_40632[(2)] = null);

(statearr_39489_40632[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (19))){
var inst_39397 = (state_39466[(8)]);
var inst_39447 = (state_39466[(11)]);
var inst_39449 = cljs.core.async.muxch_STAR_(inst_39447);
var state_39466__$1 = state_39466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39466__$1,(22),inst_39449,inst_39397);
} else {
if((state_val_39467 === (11))){
var inst_39407 = (state_39466[(13)]);
var inst_39421 = (state_39466[(10)]);
var inst_39421__$1 = cljs.core.seq(inst_39407);
var state_39466__$1 = (function (){var statearr_39490 = state_39466;
(statearr_39490[(10)] = inst_39421__$1);

return statearr_39490;
})();
if(inst_39421__$1){
var statearr_39491_40633 = state_39466__$1;
(statearr_39491_40633[(1)] = (13));

} else {
var statearr_39492_40634 = state_39466__$1;
(statearr_39492_40634[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (9))){
var inst_39443 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39493_40635 = state_39466__$1;
(statearr_39493_40635[(2)] = inst_39443);

(statearr_39493_40635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (5))){
var inst_39404 = cljs.core.deref(mults);
var inst_39405 = cljs.core.vals(inst_39404);
var inst_39406 = cljs.core.seq(inst_39405);
var inst_39407 = inst_39406;
var inst_39408 = null;
var inst_39409 = (0);
var inst_39410 = (0);
var state_39466__$1 = (function (){var statearr_39494 = state_39466;
(statearr_39494[(13)] = inst_39407);

(statearr_39494[(14)] = inst_39410);

(statearr_39494[(15)] = inst_39409);

(statearr_39494[(16)] = inst_39408);

return statearr_39494;
})();
var statearr_39495_40642 = state_39466__$1;
(statearr_39495_40642[(2)] = null);

(statearr_39495_40642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (14))){
var state_39466__$1 = state_39466;
var statearr_39499_40643 = state_39466__$1;
(statearr_39499_40643[(2)] = null);

(statearr_39499_40643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (16))){
var inst_39421 = (state_39466[(10)]);
var inst_39425 = cljs.core.chunk_first(inst_39421);
var inst_39426 = cljs.core.chunk_rest(inst_39421);
var inst_39427 = cljs.core.count(inst_39425);
var inst_39407 = inst_39426;
var inst_39408 = inst_39425;
var inst_39409 = inst_39427;
var inst_39410 = (0);
var state_39466__$1 = (function (){var statearr_39500 = state_39466;
(statearr_39500[(13)] = inst_39407);

(statearr_39500[(14)] = inst_39410);

(statearr_39500[(15)] = inst_39409);

(statearr_39500[(16)] = inst_39408);

return statearr_39500;
})();
var statearr_39501_40644 = state_39466__$1;
(statearr_39501_40644[(2)] = null);

(statearr_39501_40644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (10))){
var inst_39407 = (state_39466[(13)]);
var inst_39410 = (state_39466[(14)]);
var inst_39409 = (state_39466[(15)]);
var inst_39408 = (state_39466[(16)]);
var inst_39415 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39408,inst_39410);
var inst_39416 = cljs.core.async.muxch_STAR_(inst_39415);
var inst_39417 = cljs.core.async.close_BANG_(inst_39416);
var inst_39418 = (inst_39410 + (1));
var tmp39496 = inst_39407;
var tmp39497 = inst_39409;
var tmp39498 = inst_39408;
var inst_39407__$1 = tmp39496;
var inst_39408__$1 = tmp39498;
var inst_39409__$1 = tmp39497;
var inst_39410__$1 = inst_39418;
var state_39466__$1 = (function (){var statearr_39502 = state_39466;
(statearr_39502[(13)] = inst_39407__$1);

(statearr_39502[(14)] = inst_39410__$1);

(statearr_39502[(15)] = inst_39409__$1);

(statearr_39502[(16)] = inst_39408__$1);

(statearr_39502[(17)] = inst_39417);

return statearr_39502;
})();
var statearr_39503_40648 = state_39466__$1;
(statearr_39503_40648[(2)] = null);

(statearr_39503_40648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (18))){
var inst_39436 = (state_39466[(2)]);
var state_39466__$1 = state_39466;
var statearr_39504_40649 = state_39466__$1;
(statearr_39504_40649[(2)] = inst_39436);

(statearr_39504_40649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39467 === (8))){
var inst_39410 = (state_39466[(14)]);
var inst_39409 = (state_39466[(15)]);
var inst_39412 = (inst_39410 < inst_39409);
var inst_39413 = inst_39412;
var state_39466__$1 = state_39466;
if(cljs.core.truth_(inst_39413)){
var statearr_39505_40650 = state_39466__$1;
(statearr_39505_40650[(1)] = (10));

} else {
var statearr_39506_40651 = state_39466__$1;
(statearr_39506_40651[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40602,mults,ensure_mult,p))
;
return ((function (switch__26085__auto__,c__26130__auto___40602,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_39507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39507[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_39507[(1)] = (1));

return statearr_39507;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_39466){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39466);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39508){if((e39508 instanceof Object)){
var ex__26089__auto__ = e39508;
var statearr_39509_40657 = state_39466;
(statearr_39509_40657[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40658 = state_39466;
state_39466 = G__40658;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_39466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_39466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40602,mults,ensure_mult,p))
})();
var state__26132__auto__ = (function (){var statearr_39510 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39510[(6)] = c__26130__auto___40602);

return statearr_39510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40602,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39512 = arguments.length;
switch (G__39512) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39514 = arguments.length;
switch (G__39514) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__39516 = arguments.length;
switch (G__39516) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__26130__auto___40667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39555){
var state_val_39556 = (state_39555[(1)]);
if((state_val_39556 === (7))){
var state_39555__$1 = state_39555;
var statearr_39557_40674 = state_39555__$1;
(statearr_39557_40674[(2)] = null);

(statearr_39557_40674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (1))){
var state_39555__$1 = state_39555;
var statearr_39558_40675 = state_39555__$1;
(statearr_39558_40675[(2)] = null);

(statearr_39558_40675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (4))){
var inst_39519 = (state_39555[(7)]);
var inst_39521 = (inst_39519 < cnt);
var state_39555__$1 = state_39555;
if(cljs.core.truth_(inst_39521)){
var statearr_39559_40676 = state_39555__$1;
(statearr_39559_40676[(1)] = (6));

} else {
var statearr_39560_40677 = state_39555__$1;
(statearr_39560_40677[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (15))){
var inst_39551 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39561_40679 = state_39555__$1;
(statearr_39561_40679[(2)] = inst_39551);

(statearr_39561_40679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (13))){
var inst_39544 = cljs.core.async.close_BANG_(out);
var state_39555__$1 = state_39555;
var statearr_39562_40681 = state_39555__$1;
(statearr_39562_40681[(2)] = inst_39544);

(statearr_39562_40681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (6))){
var state_39555__$1 = state_39555;
var statearr_39563_40683 = state_39555__$1;
(statearr_39563_40683[(2)] = null);

(statearr_39563_40683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (3))){
var inst_39553 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39555__$1,inst_39553);
} else {
if((state_val_39556 === (12))){
var inst_39541 = (state_39555[(8)]);
var inst_39541__$1 = (state_39555[(2)]);
var inst_39542 = cljs.core.some(cljs.core.nil_QMARK_,inst_39541__$1);
var state_39555__$1 = (function (){var statearr_39564 = state_39555;
(statearr_39564[(8)] = inst_39541__$1);

return statearr_39564;
})();
if(cljs.core.truth_(inst_39542)){
var statearr_39565_40686 = state_39555__$1;
(statearr_39565_40686[(1)] = (13));

} else {
var statearr_39566_40687 = state_39555__$1;
(statearr_39566_40687[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (2))){
var inst_39518 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39519 = (0);
var state_39555__$1 = (function (){var statearr_39567 = state_39555;
(statearr_39567[(7)] = inst_39519);

(statearr_39567[(9)] = inst_39518);

return statearr_39567;
})();
var statearr_39568_40688 = state_39555__$1;
(statearr_39568_40688[(2)] = null);

(statearr_39568_40688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (11))){
var inst_39519 = (state_39555[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39555,(10),Object,null,(9));
var inst_39528 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39519) : chs__$1.call(null,inst_39519));
var inst_39529 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39519) : done.call(null,inst_39519));
var inst_39530 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39528,inst_39529);
var state_39555__$1 = state_39555;
var statearr_39569_40689 = state_39555__$1;
(statearr_39569_40689[(2)] = inst_39530);


cljs.core.async.impl.ioc_helpers.process_exception(state_39555__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (9))){
var inst_39519 = (state_39555[(7)]);
var inst_39532 = (state_39555[(2)]);
var inst_39533 = (inst_39519 + (1));
var inst_39519__$1 = inst_39533;
var state_39555__$1 = (function (){var statearr_39570 = state_39555;
(statearr_39570[(10)] = inst_39532);

(statearr_39570[(7)] = inst_39519__$1);

return statearr_39570;
})();
var statearr_39571_40690 = state_39555__$1;
(statearr_39571_40690[(2)] = null);

(statearr_39571_40690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (5))){
var inst_39539 = (state_39555[(2)]);
var state_39555__$1 = (function (){var statearr_39572 = state_39555;
(statearr_39572[(11)] = inst_39539);

return statearr_39572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39555__$1,(12),dchan);
} else {
if((state_val_39556 === (14))){
var inst_39541 = (state_39555[(8)]);
var inst_39546 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39541);
var state_39555__$1 = state_39555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39555__$1,(16),out,inst_39546);
} else {
if((state_val_39556 === (16))){
var inst_39548 = (state_39555[(2)]);
var state_39555__$1 = (function (){var statearr_39573 = state_39555;
(statearr_39573[(12)] = inst_39548);

return statearr_39573;
})();
var statearr_39574_40691 = state_39555__$1;
(statearr_39574_40691[(2)] = null);

(statearr_39574_40691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (10))){
var inst_39523 = (state_39555[(2)]);
var inst_39524 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39555__$1 = (function (){var statearr_39575 = state_39555;
(statearr_39575[(13)] = inst_39523);

return statearr_39575;
})();
var statearr_39576_40692 = state_39555__$1;
(statearr_39576_40692[(2)] = inst_39524);


cljs.core.async.impl.ioc_helpers.process_exception(state_39555__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39556 === (8))){
var inst_39537 = (state_39555[(2)]);
var state_39555__$1 = state_39555;
var statearr_39577_40693 = state_39555__$1;
(statearr_39577_40693[(2)] = inst_39537);

(statearr_39577_40693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40667,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26085__auto__,c__26130__auto___40667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_39578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39578[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_39578[(1)] = (1));

return statearr_39578;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_39555){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39555);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39579){if((e39579 instanceof Object)){
var ex__26089__auto__ = e39579;
var statearr_39580_40694 = state_39555;
(statearr_39580_40694[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40696 = state_39555;
state_39555 = G__40696;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_39555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_39555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40667,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26132__auto__ = (function (){var statearr_39581 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39581[(6)] = c__26130__auto___40667);

return statearr_39581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40667,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39584 = arguments.length;
switch (G__39584) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26130__auto___40700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40700,out){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40700,out){
return (function (state_39616){
var state_val_39617 = (state_39616[(1)]);
if((state_val_39617 === (7))){
var inst_39595 = (state_39616[(7)]);
var inst_39596 = (state_39616[(8)]);
var inst_39595__$1 = (state_39616[(2)]);
var inst_39596__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39595__$1,(0),null);
var inst_39597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39595__$1,(1),null);
var inst_39598 = (inst_39596__$1 == null);
var state_39616__$1 = (function (){var statearr_39618 = state_39616;
(statearr_39618[(9)] = inst_39597);

(statearr_39618[(7)] = inst_39595__$1);

(statearr_39618[(8)] = inst_39596__$1);

return statearr_39618;
})();
if(cljs.core.truth_(inst_39598)){
var statearr_39619_40702 = state_39616__$1;
(statearr_39619_40702[(1)] = (8));

} else {
var statearr_39620_40703 = state_39616__$1;
(statearr_39620_40703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (1))){
var inst_39585 = cljs.core.vec(chs);
var inst_39586 = inst_39585;
var state_39616__$1 = (function (){var statearr_39621 = state_39616;
(statearr_39621[(10)] = inst_39586);

return statearr_39621;
})();
var statearr_39622_40704 = state_39616__$1;
(statearr_39622_40704[(2)] = null);

(statearr_39622_40704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (4))){
var inst_39586 = (state_39616[(10)]);
var state_39616__$1 = state_39616;
return cljs.core.async.ioc_alts_BANG_(state_39616__$1,(7),inst_39586);
} else {
if((state_val_39617 === (6))){
var inst_39612 = (state_39616[(2)]);
var state_39616__$1 = state_39616;
var statearr_39623_40705 = state_39616__$1;
(statearr_39623_40705[(2)] = inst_39612);

(statearr_39623_40705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (3))){
var inst_39614 = (state_39616[(2)]);
var state_39616__$1 = state_39616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39616__$1,inst_39614);
} else {
if((state_val_39617 === (2))){
var inst_39586 = (state_39616[(10)]);
var inst_39588 = cljs.core.count(inst_39586);
var inst_39589 = (inst_39588 > (0));
var state_39616__$1 = state_39616;
if(cljs.core.truth_(inst_39589)){
var statearr_39625_40707 = state_39616__$1;
(statearr_39625_40707[(1)] = (4));

} else {
var statearr_39626_40708 = state_39616__$1;
(statearr_39626_40708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (11))){
var inst_39586 = (state_39616[(10)]);
var inst_39605 = (state_39616[(2)]);
var tmp39624 = inst_39586;
var inst_39586__$1 = tmp39624;
var state_39616__$1 = (function (){var statearr_39627 = state_39616;
(statearr_39627[(10)] = inst_39586__$1);

(statearr_39627[(11)] = inst_39605);

return statearr_39627;
})();
var statearr_39628_40709 = state_39616__$1;
(statearr_39628_40709[(2)] = null);

(statearr_39628_40709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (9))){
var inst_39596 = (state_39616[(8)]);
var state_39616__$1 = state_39616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39616__$1,(11),out,inst_39596);
} else {
if((state_val_39617 === (5))){
var inst_39610 = cljs.core.async.close_BANG_(out);
var state_39616__$1 = state_39616;
var statearr_39629_40711 = state_39616__$1;
(statearr_39629_40711[(2)] = inst_39610);

(statearr_39629_40711[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (10))){
var inst_39608 = (state_39616[(2)]);
var state_39616__$1 = state_39616;
var statearr_39630_40712 = state_39616__$1;
(statearr_39630_40712[(2)] = inst_39608);

(statearr_39630_40712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (8))){
var inst_39586 = (state_39616[(10)]);
var inst_39597 = (state_39616[(9)]);
var inst_39595 = (state_39616[(7)]);
var inst_39596 = (state_39616[(8)]);
var inst_39600 = (function (){var cs = inst_39586;
var vec__39591 = inst_39595;
var v = inst_39596;
var c = inst_39597;
return ((function (cs,vec__39591,v,c,inst_39586,inst_39597,inst_39595,inst_39596,state_val_39617,c__26130__auto___40700,out){
return (function (p1__39582_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39582_SHARP_);
});
;})(cs,vec__39591,v,c,inst_39586,inst_39597,inst_39595,inst_39596,state_val_39617,c__26130__auto___40700,out))
})();
var inst_39601 = cljs.core.filterv(inst_39600,inst_39586);
var inst_39586__$1 = inst_39601;
var state_39616__$1 = (function (){var statearr_39631 = state_39616;
(statearr_39631[(10)] = inst_39586__$1);

return statearr_39631;
})();
var statearr_39632_40713 = state_39616__$1;
(statearr_39632_40713[(2)] = null);

(statearr_39632_40713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40700,out))
;
return ((function (switch__26085__auto__,c__26130__auto___40700,out){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_39633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39633[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_39633[(1)] = (1));

return statearr_39633;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_39616){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39616);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39634){if((e39634 instanceof Object)){
var ex__26089__auto__ = e39634;
var statearr_39635_40724 = state_39616;
(statearr_39635_40724[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40729 = state_39616;
state_39616 = G__40729;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_39616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_39616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40700,out))
})();
var state__26132__auto__ = (function (){var statearr_39636 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39636[(6)] = c__26130__auto___40700);

return statearr_39636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40700,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39638 = arguments.length;
switch (G__39638) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26130__auto___40740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40740,out){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40740,out){
return (function (state_39662){
var state_val_39663 = (state_39662[(1)]);
if((state_val_39663 === (7))){
var inst_39644 = (state_39662[(7)]);
var inst_39644__$1 = (state_39662[(2)]);
var inst_39645 = (inst_39644__$1 == null);
var inst_39646 = cljs.core.not(inst_39645);
var state_39662__$1 = (function (){var statearr_39664 = state_39662;
(statearr_39664[(7)] = inst_39644__$1);

return statearr_39664;
})();
if(inst_39646){
var statearr_39665_40741 = state_39662__$1;
(statearr_39665_40741[(1)] = (8));

} else {
var statearr_39666_40742 = state_39662__$1;
(statearr_39666_40742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39663 === (1))){
var inst_39639 = (0);
var state_39662__$1 = (function (){var statearr_39667 = state_39662;
(statearr_39667[(8)] = inst_39639);

return statearr_39667;
})();
var statearr_39668_40743 = state_39662__$1;
(statearr_39668_40743[(2)] = null);

(statearr_39668_40743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39663 === (4))){
var state_39662__$1 = state_39662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39662__$1,(7),ch);
} else {
if((state_val_39663 === (6))){
var inst_39657 = (state_39662[(2)]);
var state_39662__$1 = state_39662;
var statearr_39669_40745 = state_39662__$1;
(statearr_39669_40745[(2)] = inst_39657);

(statearr_39669_40745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39663 === (3))){
var inst_39659 = (state_39662[(2)]);
var inst_39660 = cljs.core.async.close_BANG_(out);
var state_39662__$1 = (function (){var statearr_39670 = state_39662;
(statearr_39670[(9)] = inst_39659);

return statearr_39670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39662__$1,inst_39660);
} else {
if((state_val_39663 === (2))){
var inst_39639 = (state_39662[(8)]);
var inst_39641 = (inst_39639 < n);
var state_39662__$1 = state_39662;
if(cljs.core.truth_(inst_39641)){
var statearr_39671_40751 = state_39662__$1;
(statearr_39671_40751[(1)] = (4));

} else {
var statearr_39672_40752 = state_39662__$1;
(statearr_39672_40752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39663 === (11))){
var inst_39639 = (state_39662[(8)]);
var inst_39649 = (state_39662[(2)]);
var inst_39650 = (inst_39639 + (1));
var inst_39639__$1 = inst_39650;
var state_39662__$1 = (function (){var statearr_39673 = state_39662;
(statearr_39673[(8)] = inst_39639__$1);

(statearr_39673[(10)] = inst_39649);

return statearr_39673;
})();
var statearr_39674_40758 = state_39662__$1;
(statearr_39674_40758[(2)] = null);

(statearr_39674_40758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39663 === (9))){
var state_39662__$1 = state_39662;
var statearr_39675_40760 = state_39662__$1;
(statearr_39675_40760[(2)] = null);

(statearr_39675_40760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39663 === (5))){
var state_39662__$1 = state_39662;
var statearr_39676_40765 = state_39662__$1;
(statearr_39676_40765[(2)] = null);

(statearr_39676_40765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39663 === (10))){
var inst_39654 = (state_39662[(2)]);
var state_39662__$1 = state_39662;
var statearr_39677_40766 = state_39662__$1;
(statearr_39677_40766[(2)] = inst_39654);

(statearr_39677_40766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39663 === (8))){
var inst_39644 = (state_39662[(7)]);
var state_39662__$1 = state_39662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39662__$1,(11),out,inst_39644);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40740,out))
;
return ((function (switch__26085__auto__,c__26130__auto___40740,out){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_39678 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39678[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_39678[(1)] = (1));

return statearr_39678;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_39662){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39662);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39679){if((e39679 instanceof Object)){
var ex__26089__auto__ = e39679;
var statearr_39680_40778 = state_39662;
(statearr_39680_40778[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40779 = state_39662;
state_39662 = G__40779;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_39662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_39662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40740,out))
})();
var state__26132__auto__ = (function (){var statearr_39681 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39681[(6)] = c__26130__auto___40740);

return statearr_39681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40740,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39683 = (function (f,ch,meta39684){
this.f = f;
this.ch = ch;
this.meta39684 = meta39684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39685,meta39684__$1){
var self__ = this;
var _39685__$1 = this;
return (new cljs.core.async.t_cljs$core$async39683(self__.f,self__.ch,meta39684__$1));
});

cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39685){
var self__ = this;
var _39685__$1 = this;
return self__.meta39684;
});

cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39686 = (function (f,ch,meta39684,_,fn1,meta39687){
this.f = f;
this.ch = ch;
this.meta39684 = meta39684;
this._ = _;
this.fn1 = fn1;
this.meta39687 = meta39687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39688,meta39687__$1){
var self__ = this;
var _39688__$1 = this;
return (new cljs.core.async.t_cljs$core$async39686(self__.f,self__.ch,self__.meta39684,self__._,self__.fn1,meta39687__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39688){
var self__ = this;
var _39688__$1 = this;
return self__.meta39687;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39682_SHARP_){
var G__39689 = (((p1__39682_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39682_SHARP_) : self__.f.call(null,p1__39682_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39689) : f1.call(null,G__39689));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39686.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39684","meta39684",316910557,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39683","cljs.core.async/t_cljs$core$async39683",-1717233830,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39687","meta39687",-1414389556,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39686.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39686";

cljs.core.async.t_cljs$core$async39686.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39686");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39686.
 */
cljs.core.async.__GT_t_cljs$core$async39686 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39686(f__$1,ch__$1,meta39684__$1,___$2,fn1__$1,meta39687){
return (new cljs.core.async.t_cljs$core$async39686(f__$1,ch__$1,meta39684__$1,___$2,fn1__$1,meta39687));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39686(self__.f,self__.ch,self__.meta39684,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39690 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39690) : self__.f.call(null,G__39690));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39683.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39684","meta39684",316910557,null)], null);
});

cljs.core.async.t_cljs$core$async39683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39683";

cljs.core.async.t_cljs$core$async39683.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39683");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39683.
 */
cljs.core.async.__GT_t_cljs$core$async39683 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39683(f__$1,ch__$1,meta39684){
return (new cljs.core.async.t_cljs$core$async39683(f__$1,ch__$1,meta39684));
});

}

return (new cljs.core.async.t_cljs$core$async39683(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39691 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39691 = (function (f,ch,meta39692){
this.f = f;
this.ch = ch;
this.meta39692 = meta39692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39693,meta39692__$1){
var self__ = this;
var _39693__$1 = this;
return (new cljs.core.async.t_cljs$core$async39691(self__.f,self__.ch,meta39692__$1));
});

cljs.core.async.t_cljs$core$async39691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39693){
var self__ = this;
var _39693__$1 = this;
return self__.meta39692;
});

cljs.core.async.t_cljs$core$async39691.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async39691.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39691.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async39691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39692","meta39692",416728973,null)], null);
});

cljs.core.async.t_cljs$core$async39691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39691";

cljs.core.async.t_cljs$core$async39691.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39691");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39691.
 */
cljs.core.async.__GT_t_cljs$core$async39691 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39691(f__$1,ch__$1,meta39692){
return (new cljs.core.async.t_cljs$core$async39691(f__$1,ch__$1,meta39692));
});

}

return (new cljs.core.async.t_cljs$core$async39691(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39694 = (function (p,ch,meta39695){
this.p = p;
this.ch = ch;
this.meta39695 = meta39695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39696,meta39695__$1){
var self__ = this;
var _39696__$1 = this;
return (new cljs.core.async.t_cljs$core$async39694(self__.p,self__.ch,meta39695__$1));
});

cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39696){
var self__ = this;
var _39696__$1 = this;
return self__.meta39695;
});

cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39694.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39695","meta39695",722104318,null)], null);
});

cljs.core.async.t_cljs$core$async39694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39694";

cljs.core.async.t_cljs$core$async39694.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39694");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39694.
 */
cljs.core.async.__GT_t_cljs$core$async39694 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39694(p__$1,ch__$1,meta39695){
return (new cljs.core.async.t_cljs$core$async39694(p__$1,ch__$1,meta39695));
});

}

return (new cljs.core.async.t_cljs$core$async39694(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39698 = arguments.length;
switch (G__39698) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26130__auto___40849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___40849,out){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___40849,out){
return (function (state_39719){
var state_val_39720 = (state_39719[(1)]);
if((state_val_39720 === (7))){
var inst_39715 = (state_39719[(2)]);
var state_39719__$1 = state_39719;
var statearr_39721_40857 = state_39719__$1;
(statearr_39721_40857[(2)] = inst_39715);

(statearr_39721_40857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39720 === (1))){
var state_39719__$1 = state_39719;
var statearr_39722_40860 = state_39719__$1;
(statearr_39722_40860[(2)] = null);

(statearr_39722_40860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39720 === (4))){
var inst_39701 = (state_39719[(7)]);
var inst_39701__$1 = (state_39719[(2)]);
var inst_39702 = (inst_39701__$1 == null);
var state_39719__$1 = (function (){var statearr_39723 = state_39719;
(statearr_39723[(7)] = inst_39701__$1);

return statearr_39723;
})();
if(cljs.core.truth_(inst_39702)){
var statearr_39724_40870 = state_39719__$1;
(statearr_39724_40870[(1)] = (5));

} else {
var statearr_39725_40875 = state_39719__$1;
(statearr_39725_40875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39720 === (6))){
var inst_39701 = (state_39719[(7)]);
var inst_39706 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39701) : p.call(null,inst_39701));
var state_39719__$1 = state_39719;
if(cljs.core.truth_(inst_39706)){
var statearr_39726_40883 = state_39719__$1;
(statearr_39726_40883[(1)] = (8));

} else {
var statearr_39727_40888 = state_39719__$1;
(statearr_39727_40888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39720 === (3))){
var inst_39717 = (state_39719[(2)]);
var state_39719__$1 = state_39719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39719__$1,inst_39717);
} else {
if((state_val_39720 === (2))){
var state_39719__$1 = state_39719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39719__$1,(4),ch);
} else {
if((state_val_39720 === (11))){
var inst_39709 = (state_39719[(2)]);
var state_39719__$1 = state_39719;
var statearr_39728_40898 = state_39719__$1;
(statearr_39728_40898[(2)] = inst_39709);

(statearr_39728_40898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39720 === (9))){
var state_39719__$1 = state_39719;
var statearr_39729_40903 = state_39719__$1;
(statearr_39729_40903[(2)] = null);

(statearr_39729_40903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39720 === (5))){
var inst_39704 = cljs.core.async.close_BANG_(out);
var state_39719__$1 = state_39719;
var statearr_39730_40904 = state_39719__$1;
(statearr_39730_40904[(2)] = inst_39704);

(statearr_39730_40904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39720 === (10))){
var inst_39712 = (state_39719[(2)]);
var state_39719__$1 = (function (){var statearr_39731 = state_39719;
(statearr_39731[(8)] = inst_39712);

return statearr_39731;
})();
var statearr_39732_40905 = state_39719__$1;
(statearr_39732_40905[(2)] = null);

(statearr_39732_40905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39720 === (8))){
var inst_39701 = (state_39719[(7)]);
var state_39719__$1 = state_39719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39719__$1,(11),out,inst_39701);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___40849,out))
;
return ((function (switch__26085__auto__,c__26130__auto___40849,out){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_39733 = [null,null,null,null,null,null,null,null,null];
(statearr_39733[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_39733[(1)] = (1));

return statearr_39733;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_39719){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39719);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39734){if((e39734 instanceof Object)){
var ex__26089__auto__ = e39734;
var statearr_39735_40909 = state_39719;
(statearr_39735_40909[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40910 = state_39719;
state_39719 = G__40910;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_39719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_39719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___40849,out))
})();
var state__26132__auto__ = (function (){var statearr_39736 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39736[(6)] = c__26130__auto___40849);

return statearr_39736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___40849,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39738 = arguments.length;
switch (G__39738) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26130__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto__){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto__){
return (function (state_39800){
var state_val_39801 = (state_39800[(1)]);
if((state_val_39801 === (7))){
var inst_39796 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39802_40927 = state_39800__$1;
(statearr_39802_40927[(2)] = inst_39796);

(statearr_39802_40927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (20))){
var inst_39766 = (state_39800[(7)]);
var inst_39777 = (state_39800[(2)]);
var inst_39778 = cljs.core.next(inst_39766);
var inst_39752 = inst_39778;
var inst_39753 = null;
var inst_39754 = (0);
var inst_39755 = (0);
var state_39800__$1 = (function (){var statearr_39803 = state_39800;
(statearr_39803[(8)] = inst_39752);

(statearr_39803[(9)] = inst_39754);

(statearr_39803[(10)] = inst_39755);

(statearr_39803[(11)] = inst_39753);

(statearr_39803[(12)] = inst_39777);

return statearr_39803;
})();
var statearr_39804_40929 = state_39800__$1;
(statearr_39804_40929[(2)] = null);

(statearr_39804_40929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (1))){
var state_39800__$1 = state_39800;
var statearr_39805_40931 = state_39800__$1;
(statearr_39805_40931[(2)] = null);

(statearr_39805_40931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (4))){
var inst_39741 = (state_39800[(13)]);
var inst_39741__$1 = (state_39800[(2)]);
var inst_39742 = (inst_39741__$1 == null);
var state_39800__$1 = (function (){var statearr_39806 = state_39800;
(statearr_39806[(13)] = inst_39741__$1);

return statearr_39806;
})();
if(cljs.core.truth_(inst_39742)){
var statearr_39807_40935 = state_39800__$1;
(statearr_39807_40935[(1)] = (5));

} else {
var statearr_39808_40936 = state_39800__$1;
(statearr_39808_40936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (15))){
var state_39800__$1 = state_39800;
var statearr_39812_40937 = state_39800__$1;
(statearr_39812_40937[(2)] = null);

(statearr_39812_40937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (21))){
var state_39800__$1 = state_39800;
var statearr_39813_40938 = state_39800__$1;
(statearr_39813_40938[(2)] = null);

(statearr_39813_40938[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (13))){
var inst_39752 = (state_39800[(8)]);
var inst_39754 = (state_39800[(9)]);
var inst_39755 = (state_39800[(10)]);
var inst_39753 = (state_39800[(11)]);
var inst_39762 = (state_39800[(2)]);
var inst_39763 = (inst_39755 + (1));
var tmp39809 = inst_39752;
var tmp39810 = inst_39754;
var tmp39811 = inst_39753;
var inst_39752__$1 = tmp39809;
var inst_39753__$1 = tmp39811;
var inst_39754__$1 = tmp39810;
var inst_39755__$1 = inst_39763;
var state_39800__$1 = (function (){var statearr_39814 = state_39800;
(statearr_39814[(8)] = inst_39752__$1);

(statearr_39814[(9)] = inst_39754__$1);

(statearr_39814[(10)] = inst_39755__$1);

(statearr_39814[(14)] = inst_39762);

(statearr_39814[(11)] = inst_39753__$1);

return statearr_39814;
})();
var statearr_39815_40940 = state_39800__$1;
(statearr_39815_40940[(2)] = null);

(statearr_39815_40940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (22))){
var state_39800__$1 = state_39800;
var statearr_39816_40941 = state_39800__$1;
(statearr_39816_40941[(2)] = null);

(statearr_39816_40941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (6))){
var inst_39741 = (state_39800[(13)]);
var inst_39750 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39741) : f.call(null,inst_39741));
var inst_39751 = cljs.core.seq(inst_39750);
var inst_39752 = inst_39751;
var inst_39753 = null;
var inst_39754 = (0);
var inst_39755 = (0);
var state_39800__$1 = (function (){var statearr_39817 = state_39800;
(statearr_39817[(8)] = inst_39752);

(statearr_39817[(9)] = inst_39754);

(statearr_39817[(10)] = inst_39755);

(statearr_39817[(11)] = inst_39753);

return statearr_39817;
})();
var statearr_39818_40942 = state_39800__$1;
(statearr_39818_40942[(2)] = null);

(statearr_39818_40942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (17))){
var inst_39766 = (state_39800[(7)]);
var inst_39770 = cljs.core.chunk_first(inst_39766);
var inst_39771 = cljs.core.chunk_rest(inst_39766);
var inst_39772 = cljs.core.count(inst_39770);
var inst_39752 = inst_39771;
var inst_39753 = inst_39770;
var inst_39754 = inst_39772;
var inst_39755 = (0);
var state_39800__$1 = (function (){var statearr_39819 = state_39800;
(statearr_39819[(8)] = inst_39752);

(statearr_39819[(9)] = inst_39754);

(statearr_39819[(10)] = inst_39755);

(statearr_39819[(11)] = inst_39753);

return statearr_39819;
})();
var statearr_39820_40943 = state_39800__$1;
(statearr_39820_40943[(2)] = null);

(statearr_39820_40943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (3))){
var inst_39798 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39800__$1,inst_39798);
} else {
if((state_val_39801 === (12))){
var inst_39786 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39821_40947 = state_39800__$1;
(statearr_39821_40947[(2)] = inst_39786);

(statearr_39821_40947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (2))){
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39800__$1,(4),in$);
} else {
if((state_val_39801 === (23))){
var inst_39794 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39822_40952 = state_39800__$1;
(statearr_39822_40952[(2)] = inst_39794);

(statearr_39822_40952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (19))){
var inst_39781 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39823_40954 = state_39800__$1;
(statearr_39823_40954[(2)] = inst_39781);

(statearr_39823_40954[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (11))){
var inst_39752 = (state_39800[(8)]);
var inst_39766 = (state_39800[(7)]);
var inst_39766__$1 = cljs.core.seq(inst_39752);
var state_39800__$1 = (function (){var statearr_39824 = state_39800;
(statearr_39824[(7)] = inst_39766__$1);

return statearr_39824;
})();
if(inst_39766__$1){
var statearr_39825_40962 = state_39800__$1;
(statearr_39825_40962[(1)] = (14));

} else {
var statearr_39826_40969 = state_39800__$1;
(statearr_39826_40969[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (9))){
var inst_39788 = (state_39800[(2)]);
var inst_39789 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39800__$1 = (function (){var statearr_39827 = state_39800;
(statearr_39827[(15)] = inst_39788);

return statearr_39827;
})();
if(cljs.core.truth_(inst_39789)){
var statearr_39828_40975 = state_39800__$1;
(statearr_39828_40975[(1)] = (21));

} else {
var statearr_39829_40976 = state_39800__$1;
(statearr_39829_40976[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (5))){
var inst_39744 = cljs.core.async.close_BANG_(out);
var state_39800__$1 = state_39800;
var statearr_39830_40986 = state_39800__$1;
(statearr_39830_40986[(2)] = inst_39744);

(statearr_39830_40986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (14))){
var inst_39766 = (state_39800[(7)]);
var inst_39768 = cljs.core.chunked_seq_QMARK_(inst_39766);
var state_39800__$1 = state_39800;
if(inst_39768){
var statearr_39831_40991 = state_39800__$1;
(statearr_39831_40991[(1)] = (17));

} else {
var statearr_39832_40993 = state_39800__$1;
(statearr_39832_40993[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (16))){
var inst_39784 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39833_41000 = state_39800__$1;
(statearr_39833_41000[(2)] = inst_39784);

(statearr_39833_41000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (10))){
var inst_39755 = (state_39800[(10)]);
var inst_39753 = (state_39800[(11)]);
var inst_39760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39753,inst_39755);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39800__$1,(13),out,inst_39760);
} else {
if((state_val_39801 === (18))){
var inst_39766 = (state_39800[(7)]);
var inst_39775 = cljs.core.first(inst_39766);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39800__$1,(20),out,inst_39775);
} else {
if((state_val_39801 === (8))){
var inst_39754 = (state_39800[(9)]);
var inst_39755 = (state_39800[(10)]);
var inst_39757 = (inst_39755 < inst_39754);
var inst_39758 = inst_39757;
var state_39800__$1 = state_39800;
if(cljs.core.truth_(inst_39758)){
var statearr_39834_41012 = state_39800__$1;
(statearr_39834_41012[(1)] = (10));

} else {
var statearr_39835_41016 = state_39800__$1;
(statearr_39835_41016[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto__))
;
return ((function (switch__26085__auto__,c__26130__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26086__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26086__auto____0 = (function (){
var statearr_39836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39836[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26086__auto__);

(statearr_39836[(1)] = (1));

return statearr_39836;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26086__auto____1 = (function (state_39800){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39800);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39837){if((e39837 instanceof Object)){
var ex__26089__auto__ = e39837;
var statearr_39838_41018 = state_39800;
(statearr_39838_41018[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41019 = state_39800;
state_39800 = G__41019;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26086__auto__ = function(state_39800){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26086__auto____1.call(this,state_39800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26086__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26086__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto__))
})();
var state__26132__auto__ = (function (){var statearr_39839 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39839[(6)] = c__26130__auto__);

return statearr_39839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto__))
);

return c__26130__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39841 = arguments.length;
switch (G__39841) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39843 = arguments.length;
switch (G__39843) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39845 = arguments.length;
switch (G__39845) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26130__auto___41041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___41041,out){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___41041,out){
return (function (state_39869){
var state_val_39870 = (state_39869[(1)]);
if((state_val_39870 === (7))){
var inst_39864 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
var statearr_39871_41045 = state_39869__$1;
(statearr_39871_41045[(2)] = inst_39864);

(statearr_39871_41045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (1))){
var inst_39846 = null;
var state_39869__$1 = (function (){var statearr_39872 = state_39869;
(statearr_39872[(7)] = inst_39846);

return statearr_39872;
})();
var statearr_39873_41047 = state_39869__$1;
(statearr_39873_41047[(2)] = null);

(statearr_39873_41047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (4))){
var inst_39849 = (state_39869[(8)]);
var inst_39849__$1 = (state_39869[(2)]);
var inst_39850 = (inst_39849__$1 == null);
var inst_39851 = cljs.core.not(inst_39850);
var state_39869__$1 = (function (){var statearr_39874 = state_39869;
(statearr_39874[(8)] = inst_39849__$1);

return statearr_39874;
})();
if(inst_39851){
var statearr_39875_41048 = state_39869__$1;
(statearr_39875_41048[(1)] = (5));

} else {
var statearr_39876_41049 = state_39869__$1;
(statearr_39876_41049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (6))){
var state_39869__$1 = state_39869;
var statearr_39877_41054 = state_39869__$1;
(statearr_39877_41054[(2)] = null);

(statearr_39877_41054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (3))){
var inst_39866 = (state_39869[(2)]);
var inst_39867 = cljs.core.async.close_BANG_(out);
var state_39869__$1 = (function (){var statearr_39878 = state_39869;
(statearr_39878[(9)] = inst_39866);

return statearr_39878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39869__$1,inst_39867);
} else {
if((state_val_39870 === (2))){
var state_39869__$1 = state_39869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39869__$1,(4),ch);
} else {
if((state_val_39870 === (11))){
var inst_39849 = (state_39869[(8)]);
var inst_39858 = (state_39869[(2)]);
var inst_39846 = inst_39849;
var state_39869__$1 = (function (){var statearr_39879 = state_39869;
(statearr_39879[(10)] = inst_39858);

(statearr_39879[(7)] = inst_39846);

return statearr_39879;
})();
var statearr_39880_41055 = state_39869__$1;
(statearr_39880_41055[(2)] = null);

(statearr_39880_41055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (9))){
var inst_39849 = (state_39869[(8)]);
var state_39869__$1 = state_39869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39869__$1,(11),out,inst_39849);
} else {
if((state_val_39870 === (5))){
var inst_39849 = (state_39869[(8)]);
var inst_39846 = (state_39869[(7)]);
var inst_39853 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39849,inst_39846);
var state_39869__$1 = state_39869;
if(inst_39853){
var statearr_39882_41056 = state_39869__$1;
(statearr_39882_41056[(1)] = (8));

} else {
var statearr_39883_41057 = state_39869__$1;
(statearr_39883_41057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (10))){
var inst_39861 = (state_39869[(2)]);
var state_39869__$1 = state_39869;
var statearr_39884_41058 = state_39869__$1;
(statearr_39884_41058[(2)] = inst_39861);

(statearr_39884_41058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39870 === (8))){
var inst_39846 = (state_39869[(7)]);
var tmp39881 = inst_39846;
var inst_39846__$1 = tmp39881;
var state_39869__$1 = (function (){var statearr_39885 = state_39869;
(statearr_39885[(7)] = inst_39846__$1);

return statearr_39885;
})();
var statearr_39886_41059 = state_39869__$1;
(statearr_39886_41059[(2)] = null);

(statearr_39886_41059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___41041,out))
;
return ((function (switch__26085__auto__,c__26130__auto___41041,out){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_39887 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39887[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_39887[(1)] = (1));

return statearr_39887;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_39869){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39869);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39888){if((e39888 instanceof Object)){
var ex__26089__auto__ = e39888;
var statearr_39889_41060 = state_39869;
(statearr_39889_41060[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41061 = state_39869;
state_39869 = G__41061;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_39869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_39869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___41041,out))
})();
var state__26132__auto__ = (function (){var statearr_39890 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39890[(6)] = c__26130__auto___41041);

return statearr_39890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___41041,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39892 = arguments.length;
switch (G__39892) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26130__auto___41065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___41065,out){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___41065,out){
return (function (state_39930){
var state_val_39931 = (state_39930[(1)]);
if((state_val_39931 === (7))){
var inst_39926 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_39932_41066 = state_39930__$1;
(statearr_39932_41066[(2)] = inst_39926);

(statearr_39932_41066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (1))){
var inst_39893 = (new Array(n));
var inst_39894 = inst_39893;
var inst_39895 = (0);
var state_39930__$1 = (function (){var statearr_39933 = state_39930;
(statearr_39933[(7)] = inst_39894);

(statearr_39933[(8)] = inst_39895);

return statearr_39933;
})();
var statearr_39934_41068 = state_39930__$1;
(statearr_39934_41068[(2)] = null);

(statearr_39934_41068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (4))){
var inst_39898 = (state_39930[(9)]);
var inst_39898__$1 = (state_39930[(2)]);
var inst_39899 = (inst_39898__$1 == null);
var inst_39900 = cljs.core.not(inst_39899);
var state_39930__$1 = (function (){var statearr_39935 = state_39930;
(statearr_39935[(9)] = inst_39898__$1);

return statearr_39935;
})();
if(inst_39900){
var statearr_39936_41069 = state_39930__$1;
(statearr_39936_41069[(1)] = (5));

} else {
var statearr_39937_41070 = state_39930__$1;
(statearr_39937_41070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (15))){
var inst_39920 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_39938_41071 = state_39930__$1;
(statearr_39938_41071[(2)] = inst_39920);

(statearr_39938_41071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (13))){
var state_39930__$1 = state_39930;
var statearr_39939_41072 = state_39930__$1;
(statearr_39939_41072[(2)] = null);

(statearr_39939_41072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (6))){
var inst_39895 = (state_39930[(8)]);
var inst_39916 = (inst_39895 > (0));
var state_39930__$1 = state_39930;
if(cljs.core.truth_(inst_39916)){
var statearr_39940_41074 = state_39930__$1;
(statearr_39940_41074[(1)] = (12));

} else {
var statearr_39941_41075 = state_39930__$1;
(statearr_39941_41075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (3))){
var inst_39928 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39930__$1,inst_39928);
} else {
if((state_val_39931 === (12))){
var inst_39894 = (state_39930[(7)]);
var inst_39918 = cljs.core.vec(inst_39894);
var state_39930__$1 = state_39930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39930__$1,(15),out,inst_39918);
} else {
if((state_val_39931 === (2))){
var state_39930__$1 = state_39930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39930__$1,(4),ch);
} else {
if((state_val_39931 === (11))){
var inst_39910 = (state_39930[(2)]);
var inst_39911 = (new Array(n));
var inst_39894 = inst_39911;
var inst_39895 = (0);
var state_39930__$1 = (function (){var statearr_39942 = state_39930;
(statearr_39942[(7)] = inst_39894);

(statearr_39942[(8)] = inst_39895);

(statearr_39942[(10)] = inst_39910);

return statearr_39942;
})();
var statearr_39943_41076 = state_39930__$1;
(statearr_39943_41076[(2)] = null);

(statearr_39943_41076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (9))){
var inst_39894 = (state_39930[(7)]);
var inst_39908 = cljs.core.vec(inst_39894);
var state_39930__$1 = state_39930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39930__$1,(11),out,inst_39908);
} else {
if((state_val_39931 === (5))){
var inst_39894 = (state_39930[(7)]);
var inst_39903 = (state_39930[(11)]);
var inst_39898 = (state_39930[(9)]);
var inst_39895 = (state_39930[(8)]);
var inst_39902 = (inst_39894[inst_39895] = inst_39898);
var inst_39903__$1 = (inst_39895 + (1));
var inst_39904 = (inst_39903__$1 < n);
var state_39930__$1 = (function (){var statearr_39944 = state_39930;
(statearr_39944[(11)] = inst_39903__$1);

(statearr_39944[(12)] = inst_39902);

return statearr_39944;
})();
if(cljs.core.truth_(inst_39904)){
var statearr_39945_41079 = state_39930__$1;
(statearr_39945_41079[(1)] = (8));

} else {
var statearr_39946_41080 = state_39930__$1;
(statearr_39946_41080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (14))){
var inst_39923 = (state_39930[(2)]);
var inst_39924 = cljs.core.async.close_BANG_(out);
var state_39930__$1 = (function (){var statearr_39948 = state_39930;
(statearr_39948[(13)] = inst_39923);

return statearr_39948;
})();
var statearr_39949_41082 = state_39930__$1;
(statearr_39949_41082[(2)] = inst_39924);

(statearr_39949_41082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (10))){
var inst_39914 = (state_39930[(2)]);
var state_39930__$1 = state_39930;
var statearr_39950_41083 = state_39930__$1;
(statearr_39950_41083[(2)] = inst_39914);

(statearr_39950_41083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39931 === (8))){
var inst_39894 = (state_39930[(7)]);
var inst_39903 = (state_39930[(11)]);
var tmp39947 = inst_39894;
var inst_39894__$1 = tmp39947;
var inst_39895 = inst_39903;
var state_39930__$1 = (function (){var statearr_39951 = state_39930;
(statearr_39951[(7)] = inst_39894__$1);

(statearr_39951[(8)] = inst_39895);

return statearr_39951;
})();
var statearr_39952_41088 = state_39930__$1;
(statearr_39952_41088[(2)] = null);

(statearr_39952_41088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___41065,out))
;
return ((function (switch__26085__auto__,c__26130__auto___41065,out){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_39953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39953[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_39953[(1)] = (1));

return statearr_39953;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_39930){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_39930);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e39954){if((e39954 instanceof Object)){
var ex__26089__auto__ = e39954;
var statearr_39955_41090 = state_39930;
(statearr_39955_41090[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41091 = state_39930;
state_39930 = G__41091;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_39930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_39930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___41065,out))
})();
var state__26132__auto__ = (function (){var statearr_39956 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_39956[(6)] = c__26130__auto___41065);

return statearr_39956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___41065,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39958 = arguments.length;
switch (G__39958) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26130__auto___41098 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26130__auto___41098,out){
return (function (){
var f__26131__auto__ = (function (){var switch__26085__auto__ = ((function (c__26130__auto___41098,out){
return (function (state_40000){
var state_val_40001 = (state_40000[(1)]);
if((state_val_40001 === (7))){
var inst_39996 = (state_40000[(2)]);
var state_40000__$1 = state_40000;
var statearr_40002_41099 = state_40000__$1;
(statearr_40002_41099[(2)] = inst_39996);

(statearr_40002_41099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (1))){
var inst_39959 = [];
var inst_39960 = inst_39959;
var inst_39961 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40000__$1 = (function (){var statearr_40003 = state_40000;
(statearr_40003[(7)] = inst_39961);

(statearr_40003[(8)] = inst_39960);

return statearr_40003;
})();
var statearr_40004_41100 = state_40000__$1;
(statearr_40004_41100[(2)] = null);

(statearr_40004_41100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (4))){
var inst_39964 = (state_40000[(9)]);
var inst_39964__$1 = (state_40000[(2)]);
var inst_39965 = (inst_39964__$1 == null);
var inst_39966 = cljs.core.not(inst_39965);
var state_40000__$1 = (function (){var statearr_40005 = state_40000;
(statearr_40005[(9)] = inst_39964__$1);

return statearr_40005;
})();
if(inst_39966){
var statearr_40006_41101 = state_40000__$1;
(statearr_40006_41101[(1)] = (5));

} else {
var statearr_40007_41102 = state_40000__$1;
(statearr_40007_41102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (15))){
var inst_39990 = (state_40000[(2)]);
var state_40000__$1 = state_40000;
var statearr_40008_41105 = state_40000__$1;
(statearr_40008_41105[(2)] = inst_39990);

(statearr_40008_41105[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (13))){
var state_40000__$1 = state_40000;
var statearr_40009_41106 = state_40000__$1;
(statearr_40009_41106[(2)] = null);

(statearr_40009_41106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (6))){
var inst_39960 = (state_40000[(8)]);
var inst_39985 = inst_39960.length;
var inst_39986 = (inst_39985 > (0));
var state_40000__$1 = state_40000;
if(cljs.core.truth_(inst_39986)){
var statearr_40010_41107 = state_40000__$1;
(statearr_40010_41107[(1)] = (12));

} else {
var statearr_40011_41108 = state_40000__$1;
(statearr_40011_41108[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (3))){
var inst_39998 = (state_40000[(2)]);
var state_40000__$1 = state_40000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40000__$1,inst_39998);
} else {
if((state_val_40001 === (12))){
var inst_39960 = (state_40000[(8)]);
var inst_39988 = cljs.core.vec(inst_39960);
var state_40000__$1 = state_40000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40000__$1,(15),out,inst_39988);
} else {
if((state_val_40001 === (2))){
var state_40000__$1 = state_40000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40000__$1,(4),ch);
} else {
if((state_val_40001 === (11))){
var inst_39968 = (state_40000[(10)]);
var inst_39964 = (state_40000[(9)]);
var inst_39978 = (state_40000[(2)]);
var inst_39979 = [];
var inst_39980 = inst_39979.push(inst_39964);
var inst_39960 = inst_39979;
var inst_39961 = inst_39968;
var state_40000__$1 = (function (){var statearr_40012 = state_40000;
(statearr_40012[(11)] = inst_39978);

(statearr_40012[(12)] = inst_39980);

(statearr_40012[(7)] = inst_39961);

(statearr_40012[(8)] = inst_39960);

return statearr_40012;
})();
var statearr_40013_41113 = state_40000__$1;
(statearr_40013_41113[(2)] = null);

(statearr_40013_41113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (9))){
var inst_39960 = (state_40000[(8)]);
var inst_39976 = cljs.core.vec(inst_39960);
var state_40000__$1 = state_40000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40000__$1,(11),out,inst_39976);
} else {
if((state_val_40001 === (5))){
var inst_39968 = (state_40000[(10)]);
var inst_39964 = (state_40000[(9)]);
var inst_39961 = (state_40000[(7)]);
var inst_39968__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39964) : f.call(null,inst_39964));
var inst_39969 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39968__$1,inst_39961);
var inst_39970 = cljs.core.keyword_identical_QMARK_(inst_39961,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39971 = ((inst_39969) || (inst_39970));
var state_40000__$1 = (function (){var statearr_40014 = state_40000;
(statearr_40014[(10)] = inst_39968__$1);

return statearr_40014;
})();
if(cljs.core.truth_(inst_39971)){
var statearr_40015_41116 = state_40000__$1;
(statearr_40015_41116[(1)] = (8));

} else {
var statearr_40016_41120 = state_40000__$1;
(statearr_40016_41120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (14))){
var inst_39993 = (state_40000[(2)]);
var inst_39994 = cljs.core.async.close_BANG_(out);
var state_40000__$1 = (function (){var statearr_40018 = state_40000;
(statearr_40018[(13)] = inst_39993);

return statearr_40018;
})();
var statearr_40019_41127 = state_40000__$1;
(statearr_40019_41127[(2)] = inst_39994);

(statearr_40019_41127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (10))){
var inst_39983 = (state_40000[(2)]);
var state_40000__$1 = state_40000;
var statearr_40020_41128 = state_40000__$1;
(statearr_40020_41128[(2)] = inst_39983);

(statearr_40020_41128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40001 === (8))){
var inst_39968 = (state_40000[(10)]);
var inst_39964 = (state_40000[(9)]);
var inst_39960 = (state_40000[(8)]);
var inst_39973 = inst_39960.push(inst_39964);
var tmp40017 = inst_39960;
var inst_39960__$1 = tmp40017;
var inst_39961 = inst_39968;
var state_40000__$1 = (function (){var statearr_40021 = state_40000;
(statearr_40021[(14)] = inst_39973);

(statearr_40021[(7)] = inst_39961);

(statearr_40021[(8)] = inst_39960__$1);

return statearr_40021;
})();
var statearr_40022_41129 = state_40000__$1;
(statearr_40022_41129[(2)] = null);

(statearr_40022_41129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26130__auto___41098,out))
;
return ((function (switch__26085__auto__,c__26130__auto___41098,out){
return (function() {
var cljs$core$async$state_machine__26086__auto__ = null;
var cljs$core$async$state_machine__26086__auto____0 = (function (){
var statearr_40023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40023[(0)] = cljs$core$async$state_machine__26086__auto__);

(statearr_40023[(1)] = (1));

return statearr_40023;
});
var cljs$core$async$state_machine__26086__auto____1 = (function (state_40000){
while(true){
var ret_value__26087__auto__ = (function (){try{while(true){
var result__26088__auto__ = switch__26085__auto__(state_40000);
if(cljs.core.keyword_identical_QMARK_(result__26088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26088__auto__;
}
break;
}
}catch (e40024){if((e40024 instanceof Object)){
var ex__26089__auto__ = e40024;
var statearr_40025_41137 = state_40000;
(statearr_40025_41137[(5)] = ex__26089__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40024;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26087__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41143 = state_40000;
state_40000 = G__41143;
continue;
} else {
return ret_value__26087__auto__;
}
break;
}
});
cljs$core$async$state_machine__26086__auto__ = function(state_40000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26086__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26086__auto____1.call(this,state_40000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26086__auto____0;
cljs$core$async$state_machine__26086__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26086__auto____1;
return cljs$core$async$state_machine__26086__auto__;
})()
;})(switch__26085__auto__,c__26130__auto___41098,out))
})();
var state__26132__auto__ = (function (){var statearr_40026 = (f__26131__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26131__auto__.cljs$core$IFn$_invoke$arity$0() : f__26131__auto__.call(null));
(statearr_40026[(6)] = c__26130__auto___41098);

return statearr_40026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26132__auto__);
});})(c__26130__auto___41098,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
