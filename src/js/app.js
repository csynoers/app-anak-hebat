import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import localForage from "localforage"

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component
  id: 'com.anakhebatindonesia.m', // App bundle ID
  name: 'Anak Hebat', // App name
  theme: 'auto', // Automatic theme detection

  cache: true, // enable caching true || false
  cacheDuration: 1000 * 10 * 60 ,/* set caching expire time to 0 */ 

  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
      console.log('localforage is: ', localForage);
    },
  },
  pushState: true
});
