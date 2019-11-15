export const mutations = {

  changeDrag(state, bool) {
    state.working.draging = bool;
  },

  setMinder(state, data) {
    state.minder = data
  },

  setEditor(state, data) {
    state.editor = data
  },

  changeSave(state, bool) {
    state.working.saving = bool;
  },

  changeCount(state) {
    state.count++;
  },

  increment(state) {
    state.count++
  },

  decrement(state) {
    state.count--
  },

  registerEvent(state, callback) {
    state.callbackQueue.push(callback);
  },

  setConfig(state) {
    var supported = Object.keys(state.config);
    var configObj = {};

    // 支持全配置
    if (typeof key === 'object') {
      configObj = key;
    } else {
      configObj[key] = value;
    }

    for (var i in configObj) {
      if (configObj.hasOwnProperty(i) && supported.indexOf(i) !== -1) {
        state.config[i] = configObj[i];
      } else {
        console.error('Unsupported config key: ', key, ', please choose in :', supported.join(', '));
        return false;
      }
    }
    return true;
  }

}
