import { debuglog } from 'util'

const LOG = debuglog('@idio/jsx')

/**
 * A JSX support for the idio web server.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function idioJsx(config = {}) {
  const {
    type,
  } = config
  LOG('@idio/jsx called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
