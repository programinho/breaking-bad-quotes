(ns breaking-bad-quotes.core
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET]]))

(defn fetch-link! [data]
  (GET "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    {:handler #(reset! data %)
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))

(def click-count (r/atom 0))

(defn quote []
  [:div.root
   [:h2 "Breaking Bad Quotes"]
   [:div
    [:p.quote @click-count]
    [:p.author @click-count]
   ]
   [:div
    [:button.button
     [:i " Tweat"]
     ]
    [:button.button
     [:i " New Quote"]
     ]
    ]
  ])

(defn add []
  (+ 1 1))

(defn start []
  (r/render-component [quote]
                            (. js/document (getElementById "app"))))
(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))
(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))