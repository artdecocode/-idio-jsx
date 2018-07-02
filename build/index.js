"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = idioJsx;

var _util = require("util");

const LOG = (0, _util.debuglog)('@idio/jsx');
/**
 * A JSX support for the idio web server.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function idioJsx(config = {}) {
  const {
    type
  } = config;
  LOG('@idio/jsx called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map