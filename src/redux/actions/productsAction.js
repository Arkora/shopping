import { FETCH_PRODUCTS,FETCH_BY_CATEGORY,FETCH_PRODUCT } from "../constants/actionTypes"
import * as api from '../../api/index'

export const getProducts = () => async (dispatch) =>{
    try {
        const  { data }  = await api.fetchProducts()        
        dispatch({ type: FETCH_PRODUCTS, payload: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: FETCH_PRODUCTS, payload: [] })
    }
}

export const getProduct = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchProduct(id)
        dispatch({type:FETCH_PRODUCT,payload:data})
        
    } catch (error) {
        console.log(error)
    }
}

export const getCategory = (category) => async (dispatch) =>{
    try {
        const { data } = await api.fetchByCategory(category)
        dispatch({type:FETCH_BY_CATEGORY,payload:data})
    } catch (error) {
        console.log(error)
    }
}
