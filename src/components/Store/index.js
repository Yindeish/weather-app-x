import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            currentData: null,
            currentRandomNo: null
        }
    },
    getters: {
       currentData(state) {
        return state.currentData;
       },
       currentRandomNo(state) {
        return state.currentRandomNo;
       }
    },
    mutations: {
        retrieveWeather(state, payload) {
            const data = require('../../../history_bulk');
            
            const currentTimestampData  = data.find(datum => data.indexOf(datum) == payload);
            state.currentData = currentTimestampData;

        },

        retrieveRandomNo(state, payload) {  
            let minVal = payload[0];
            let maxVal = payload[1];

            let minRandomNo = Math.random() * minVal;
            let MaxRandomNo = Math.random() * maxVal;

            let randomNo = MaxRandomNo - minRandomNo;
            state.currentRandomNo = randomNo;
        }
        
    },
    actions: {
        getWeather(state, payload) {
            state.commit('retrieveWeather', payload);
        },
        getRandomNo(state, payload) {
            state.commit('retrieveRandomNo', payload);
        }
    }
})

export default store;