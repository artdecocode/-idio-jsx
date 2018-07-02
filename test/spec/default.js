import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import idioJsx from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof idioJsx, 'function')
  },
  async 'calls package without error'() {
    await idioJsx()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await idioJsx({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
