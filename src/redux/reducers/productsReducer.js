import { FETCH_PRODUCTS,FETCH_BY_CATEGORY,FETCH_PRODUCT } from "../constants/actionTypes"

export const productsReducer = (state = { products:[] }, {type,payload}) =>{
    switch(type) {
        case FETCH_PRODUCTS:
            return{...state,products:payload}
        case FETCH_PRODUCT:
            return{...state,products:payload}    
        case FETCH_BY_CATEGORY:
            return{...state,products:payload} 
        default:
             return state
    }
}