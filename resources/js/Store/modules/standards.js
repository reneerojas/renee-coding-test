const state = () => ({
    items: []
})

// getters
const getters = {
    isSelected: (state) => (code) => {
        return !!state.items.find(s => s.code === code);
    }
}

// actions
const actions = {
    addItemToStandards ({ state, commit }, standard) {
        commit('addItemToStandards', { standard })
    },
    removeItemFromStandards ({ state, commit }, standard) {
        commit('removeItemFromStandards', { standard })
    },
}

// mutations
const mutations = {
    addItemToStandards (state, { standard }) {
        state.items.push(standard)
    },
    removeItemFromStandards (state, { standard }) {
        state.items = state.items.filter(s => s.code !== standard.code)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
