'use strict';

const api = require('api');

exports.go = (event, context, callback) => {
  require(`./${event.entrypoint}`);
  try {
    api.actions[event.name](event.data, {
      success: api.success(callback),
      error: api.error(callback),
      log: api.log,
    });
  } catch (e) {
    const err = new Error(`Cannot run ${event.name}: ${e.message}`);
    callback(err, null);
  }
};