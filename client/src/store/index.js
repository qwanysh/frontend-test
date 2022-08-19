import { createStore } from "vuex";
import { fetchSearchResults } from "@/service/api";

export default createStore({
  state() {
    return {
      flights: [],
      airlines: [],
      selectedAirlines: new Set(),
    };
  },
  mutations: {
    setFlights(state, flights) {
      state.flights = flights;
    },
    setAirlines(state, airlines) {
      state.airlines = airlines;
    },
    toggleAirline(state, airlineCode) {
      if (state.selectedAirlines.has(airlineCode)) {
        state.selectedAirlines.delete(airlineCode);
      } else {
        state.selectedAirlines.add(airlineCode);
      }
    },
  },
  actions: {
    async load({ commit }) {
      const { flights, airlines } = await fetchSearchResults();
      commit("setFlights", flights);
      commit("setAirlines", airlines);
    },
    toggleAirline({ commit }, airlineCode) {
      commit("toggleAirline", airlineCode);
    },
  },
});
