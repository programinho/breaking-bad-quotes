goog.provide('breaking_bad_quotes.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
breaking_bad_quotes.core.fetch_link_BANG_ = (function breaking_bad_quotes$core$fetch_link_BANG_(data){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://breaking-bad-quotes.herokuapp.com/v1/quotes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__31589_SHARP_){
return cljs.core.reset_BANG_(data,p1__31589_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__31590){
var map__31591 = p__31590;
var map__31591__$1 = (((((!((map__31591 == null))))?(((((map__31591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31591):map__31591);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31591__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31591__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(status,status_text);
})], null)], 0));
});
breaking_bad_quotes.core.click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
breaking_bad_quotes.core.quote = (function breaking_bad_quotes$core$quote(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.root","div.root",2120930743),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Breaking Bad Quotes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.quote","p.quote",1704467714),cljs.core.deref(breaking_bad_quotes.core.click_count)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.author","p.author",-1619300660),cljs.core.deref(breaking_bad_quotes.core.click_count)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315)," Tweat"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315)," New Quote"], null)], null)], null)], null);
});
breaking_bad_quotes.core.add = (function breaking_bad_quotes$core$add(){
return ((1) + (1));
});
breaking_bad_quotes.core.start = (function breaking_bad_quotes$core$start(){
var G__31593 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [breaking_bad_quotes.core.quote], null);
var G__31594 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__31593,G__31594) : reagent.core.render_component.call(null,G__31593,G__31594));
});
breaking_bad_quotes.core.init = (function breaking_bad_quotes$core$init(){
return breaking_bad_quotes.core.start();
});
goog.exportSymbol('breaking_bad_quotes.core.init', breaking_bad_quotes.core.init);
breaking_bad_quotes.core.stop = (function breaking_bad_quotes$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=breaking_bad_quotes.core.js.map
