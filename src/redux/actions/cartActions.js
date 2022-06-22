import { ADD_CART,DELETE_CART,REMOVE_CART,UPDATE_QUANTITY } from "../constants/actionTypes";

export const addCart = (data) =>{
    return{type:ADD_CART,payload:data};
}

export const deleteItem = (id) =>{
    return{type:REMOVE_CART,payload:id}
}

export const updateQuantity = (data) =>{
    return{type:UPDATE_QUANTITY,payload:data}
}

export const deleteCart = () =>{
    return{type:DELETE_CART}
}