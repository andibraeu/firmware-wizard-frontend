'use strict';

module.exports = function(app) {
  require('./compareTo')(app);
  require('./ipv4Address')(app);
  require('./fileRequired')(app);
  require('./objectLength')(app);
};
