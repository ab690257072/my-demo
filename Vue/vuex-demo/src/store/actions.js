import * as types from './types'
export default {
  increment: ({
    commit
  }) => {
    commit(types.INCREMENT);
  },
  decrement: ({
    commit
  }) => {
    commit(types.DECREMENT);
  },
  clickEven: ({
    commit,
    state
  }) => {
    if (state.mutations.count % 2 == 0) {
      commit(types.INCREMENT);
    }
  },
  clickAsync: ({
    commit
  }) => {
    new Promise((resolve) => {
      setTimeout(function () {
        commit(types.INCREMENT);
        resolve();
      }, 1000);
    });
  }
}