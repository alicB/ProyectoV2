import STATUS_TYPES from './config/statusTypes'
import { parsesJSON } from './utils'

const state = () => ({
    batallas: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    batalla: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    personajes: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    personaje: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
	
	casas: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    casa: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
	regiones: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    region: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
	places: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    },
    place: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
	
    prevNext: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: {}
    },
    readMore: {
        status: STATUS_TYPES.INIT,
        error: null,
        data: []
    }
});
/* All states mutations */
const mutations = {
    GET_BATALLAS(state, payload) {
        state.batallas.data = payload
        state.batallas.status = STATUS_TYPES.SUCCESS
    },
    GET_BATALLA(state, payload) {
        state.batalla.data = payload
        state.batalla.status = STATUS_TYPES.SUCCESS
    },
    GET_PERSONAJES(state, payload) {
        state.personajes.data = payload
        state.personajes.status = STATUS_TYPES.SUCCESS
    },
    GET_PERSONAJE(state, payload) {
        state.personaje.data = payload
        state.personaje.status = STATUS_TYPES.SUCCESS
    },
    GET_CASAS(state, payload) {
        state.casas.data = payload
        state.casas.status = STATUS_TYPES.SUCCESS
    },
    GET_CASA(state, payload) {
        state.casa.data = payload
        state.casa.status = STATUS_TYPES.SUCCESS
    },
	
	 GET_REGIONES(state, payload) {
        state.regiones.data = payload
        state.regiones.status = STATUS_TYPES.SUCCESS
    },
    GET_REGION(state, payload) {
        state.region.data = payload
        state.region.status = STATUS_TYPES.SUCCESS
    },

	GET_PLACES(state, payload) {
        state.places.data = payload
        state.places.status = STATUS_TYPES.SUCCESS
    },
    GET_PLACE(state, payload) {
        state.place.data = payload
        state.place.status = STATUS_TYPES.SUCCESS
    },
    GET_READ_MORE(state, payload) {
        state.readMore.data = payload
        state.readMore.status = STATUS_TYPES.SUCCESS
    },
    GET_PREV_NEXT(state, payload) {
        state.prevNext.data = payload
        state.prevNext.status = STATUS_TYPES.SUCCESS
    }
};
/* All states getters */
const getters = {
    getBatallas: (state) => parsesJSON(state.batallas),
    getBatalla: (state) => parsesJSON(state.batalla),
    getPersonajes: (state) => parsesJSON(state.personajes),
    getPersonaje: (state) => parsesJSON(state.personaje),
	getCasas: (state) => parsesJSON(state.casas),
    getCasa: (state) => parsesJSON(state.casa),
	getRegiones: (state) => parsesJSON(state.regiones),
    getRegion: (state) => parsesJSON(state.region),
	getPlaces: (state) => parsesJSON(state.places),
    getPlace: (state) => parsesJSON(state.place),
    getPrevNext: (state) => parsesJSON(state.prevNext),
    getReadMore: (state) => parsesJSON(state.readMore)
};
/* All states actions */
const actions = {
    async getBatallas({ commit }, params, callback) {
        const storeBatallas = await this.$content('Batallas')
            .fetch()
        commit('GET_BATALLAS', storeBatallas)
    },
    async getBatalla({ commit }, params, callback) {
        const storeBatalla = await this.$content('Batallas', params.slug).fetch()
        console.log(storeBatalla);
        commit('GET_BATALLA', storeBatalla)
    },
    async getPersonajes({ commit }, params, callback) {
        const storePersonajes = await this.$content('Personajes')
            .fetch()
        commit('GET_PERSONAJES', storePersonajes)
    },
    async getPersonaje({ commit }, params, callback) {
        const storePersonaje = await this.$content('Personajes', params.slug).fetch()
        console.log(storePersonaje);
        commit('GET_PERSONAJE', storePersonaje)
    },
	async getCasas({ commit }, params, callback) {
        const storeCasas = await this.$content('Casas')
            .fetch()
        commit('GET_CASAS', storeCasas)
    },
    async getCasa({ commit }, params, callback) {
        const storeCasa = await this.$content('Casas', params.slug).fetch()
        console.log(storeCasa);
        commit('GET_CASA', storeCasa)
    },
	async getRegiones({ commit }, params, callback) {
        const storeRegiones = await this.$content('Regiones')
            .fetch()
        commit('GET_REGIONES', storeRegiones)
    },
    async getRegion({ commit }, params, callback) {
        const storeRegion = await this.$content('Regiones', params.slug).fetch()
        console.log(storeRegion);
        commit('GET_REGION', storeRegion)
    },
	async getPlaces({ commit }, params, callback) {
        const storePlaces = await this.$content('Places')
            .fetch()
        commit('GET_PLACES', storePlaces)
    },
    async getPlace({ commit }, params, callback) {
        const storePlace = await this.$content('Places', params.slug).fetch()
        console.log(storePlace);
        commit('GET_PLACE', storePlace)
    },
    async getPrevNext({ commit }, params, callback) {
        const [prev, next] = await this.$content('Batallas')
            .surround(params.slug)
            .fetch()
        commit('GET_PREV_NEXT', { prev, next })
    },
    async getReadMore({ commit }, params, callback) {
        const storeReadMore = await this.$content('Batallas')
            .where({
                slug: { $ne: params.slug },
            })
            .limit(3)
            .fetch()
        commit('GET_READ_MORE', storeReadMore)
    }
};
/* Export all stores */
export default {
    state,
    mutations,
    getters,
    actions
}