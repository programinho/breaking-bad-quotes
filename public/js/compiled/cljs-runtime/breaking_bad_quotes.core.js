goog.provide('breaking_bad_quotes.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
breaking_bad_quotes.core.fetch_link_BANG_ = (function breaking_bad_quotes$core$fetch_link_BANG_(data){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://breaking-bad-quotes.herokuapp.com/v1/quotes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__26780_SHARP_){
return cljs.core.reset_BANG_(data,p1__26780_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__26781){
var map__26782 = p__26781;
var map__26782__$1 = (((((!((map__26782 == null))))?(((((map__26782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26782):map__26782);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26782__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26782__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(status,status_text);
})], null)], 0));
});
breaking_bad_quotes.core.click_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
breaking_bad_quotes.core.quote = (function breaking_bad_quotes$core$quote(){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
breaking_bad_quotes.core.fetch_link_BANG_(data);

return ((function (data){
return (function (){
var map__26784 = cljs.core.first(cljs.core.deref(data));
var map__26784__$1 = (((((!((map__26784 == null))))?(((((map__26784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26784):map__26784);
var quote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26784__$1,"quote");
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26784__$1,"author");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cards>div.card","div.cards>div.card",-1039834183),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.card-header.text-center","h2.card-header.text-center",876431782),"Breaking Bad Quotes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body.text-center","div.card-body.text-center",-1938028278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#quote","p#quote",-168481287),cljs.core.deref(breaking_bad_quotes.core.click_count)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#author","p#author",1827247185),author], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-footer.center.xt-center","div.card-footer.center.xt-center",969173649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#twitter.outline>a#tweet","button#twitter.outline>a#tweet",-1798262653),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fi-social-twitter","i.fi-social-twitter",1481933430)," Tweasdet"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new-quote.outline","button#new-quote.outline",701277523),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fi-shuffle","i.fi-shuffle",-1303450334)," New Quote"], null)], null)], null)], null);
});
;})(data))
});
breaking_bad_quotes.core.add = (function breaking_bad_quotes$core$add(){
return ((1) + (1));
});
breaking_bad_quotes.core.start = (function breaking_bad_quotes$core$start(){
var G__26786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [breaking_bad_quotes.core.quote], null);
var G__26787 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__26786,G__26787) : reagent.core.render_component.call(null,G__26786,G__26787));
});
breaking_bad_quotes.core.init = (function breaking_bad_quotes$core$init(){
return breaking_bad_quotes.core.start();
});
goog.exportSymbol('breaking_bad_quotes.core.init', breaking_bad_quotes.core.init);
breaking_bad_quotes.core.stop = (function breaking_bad_quotes$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=breaking_bad_quotes.core.js.map
