(ns fig-calendar.core
    (:require [reagent.core :as reagent :refer [atom]]
              [react]
              [react-dom]
;;              [FullCalendar]
))

(enable-console-print!)

(println "This text is printed from src/fig-calendar/core.cljs. Go ahead and edit it and see reloading in action.")
(js/console.log react)

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))


(defn hello-world []
  [:div
   ;; [:h1 (:text @app-state)]
   ;; [:> js/Bar]
   [:div {:id "calendar-container"}
    [:> js/Calendar
     {:message "hello from calendar"}]]])

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
