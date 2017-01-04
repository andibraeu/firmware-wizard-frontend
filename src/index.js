// include less
import './less/index.less';

// official angular modules
import { module } from 'angular';
import ngAnimate from 'angular-animate';    // ngAnimate module
import ngMessages from 'angular-messages';  // ngAnimate module
import ngSanitize from 'angular-sanitize';  // ngSanitize module

// dependency of ui-leaflet (global variable *facepalm*)
import 'leaflet';

// other modules
import 'angular-translate';                 // pascalprecht.translate module
import 'angular-translate-loader-static-files';
import 'angular-ui-bootstrap';              // ui.bootstrap
import 'angular-simple-logger';             // nemLogger (dependency of ui-leaflet)
import 'ui-leaflet';                        // ui-leaflet

import components from './components';
import config from './config';
import directives from './directives';
import filters from './filters';
import services from './services';

var wizard = module('WizardApp', [
  'ui.bootstrap',
  'ngAnimate',
  'ngMessages',
  'ngSanitize',
  'pascalprecht.translate',
  'nemLogging',
  'ui-leaflet',
  components.name,
  config.name,
  directives.name,
  filters.name,
  services.name,
]);
