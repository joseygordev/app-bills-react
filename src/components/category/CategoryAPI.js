import axios from 'axios'

const URL = 'http://localhost:9000'

/**
 * Get all categories
 * @return {Object} 
 */
const findAll = () => {
	const url = `${URL}/category`
	return axios.get(url).then(response => response.data)
}

/**
 * Delete category by id 
 * @param  {Int} id
 * @return {Promise}
 */
const deleteById = (id) => {
	const url = `${URL}/category/${id}`
	return axios.delete(url).then(response => response.data)
}

/**
 * Create new category
 * @param  {String} name
 * @return {Promise}
 */
const create = (name) => {
	const url = `${URL}/category`
	return axios.post(url, { name }).then(response => response.data)
}

export {
	findAll,
	deleteById,
	create
}
