import Cookies from 'js-cookie'

export const state = () => ({
  alerts: []
})

export const getters = {
  getAlerts: (state) => {
    return state.alerts
  },
  countAlerts: (state) => {
    return state.alerts.length
  },
  countUnseenAlerts: (state) => {
    return state.alerts.filter((alert) => {
      alert.seen
    }).length
  }
}

export const actions = {
  fetchAlerts({ commit, dispatch }) {
    try {
      const response = JSON.parse(Cookies.get('alert/alerts'))
      console.log('FETCH DATA', response)
      commit('setAlerts', response)
    } catch (e) {
      Promise.resolve(e)
    }
  },
  initAlerts() {
    Cookies.set(
      'alert/alerts',
      JSON.stringify([
        {
          id: 1,
          title: 'Update v1.2.3 🎉',
          content: "Here's come the v1.2.3",
          seen: false
        }
      ])
    )
    console.log('INIT DATA', JSON.parse(Cookies.get('alert/alerts')))
  }
}

export const mutations = {
  setAlerts: (state, alerts) => (state.alerts = alerts)
}
