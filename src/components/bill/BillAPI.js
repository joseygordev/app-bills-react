import axios from 'axios'

const URL = 'http://localhost:9000'

/**
 * Get all bills
 * @return {Object}
 */
const findAll = () => {
	const url = `${URL}/bill`
	return axios.get(url).then(response => response.data)
}

/**
 * Delete bill by id
 * @param  {Int} id
 * @return {Promise}
 */
const deleteById = (id) => {
	const url = `${URL}/bill/${id}`
	return axios.delete(url).then(response => response.data)
}

/**
 * Create bill
 * @param  {String} name
 * @param  {Number} value
 * @param  {String} type
 * @param  {Int} category
 * @return {Promise}
 */
const create = (name, value, type, category) => {
	const url = `${URL}/bill`
	return axios.post(url, { name, value, type, category }).then(response => response.data)
}

export {
	findAll,
	deleteById,
	create
}
