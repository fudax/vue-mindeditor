import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import {actions} from './actions'
import {mutations} from './mutations'
import {state} from './state'

Vue.use(Vuex)
// console.log('mu');
// console.log( mutations);
// console.log('ac');
// console.log(actions);

const store = new Vuex.Store({state, getters, actions, mutations})

// console.log(store);
export default store
