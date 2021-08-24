import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const myCustomStore = {
	namespaced: true,
	state, mutations, actions, getters
}

export default myCustomStore
