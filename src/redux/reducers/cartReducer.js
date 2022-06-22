import { ADD_CART,REMOVE_CART,UPDATE_QUANTITY,DELETE_CART } from '../constants/actionTypes'

export const cartReducer = (state = {products:[],total:0}, { type, payload }) =>{
    switch(type){
    case ADD_CART:
        let exists = state.products.find((item) => item.id === payload.id)               
        var product = {}
        var addTotal = state.total
        var subTotal = 0
        var newQuantity
        if(!exists) {
          subTotal =  Number(payload.price)*Number(1)
          product = {id:payload.id,title:payload.title,quantity:Number(1),price:Number(payload.price),image:payload.image,subTotal:Number(subTotal)}
          addTotal +=subTotal
          state.products.push(product)
        }else{
          product = exists        
          product.quantity +=1
          subTotal = Number(payload.price)*product.quantity
          product.subTotal = subTotal
          addTotal +=Number(payload.price)
        }
        return{...state,products:[...state.products],total:addTotal}
        
      case REMOVE_CART:
         const clone = state.products;
        product = state.products.find((item) => item.id === payload)
        addTotal = state.total - product.subTotal
        clone.splice(clone.indexOf(product),1)
        return{...state,products:clone,total:addTotal}      

      case UPDATE_QUANTITY:       
      product = state.products.find((item) => item.id === payload.id)
      newQuantity = payload.quantity
      subTotal = product.price * newQuantity 
      addTotal = ((newQuantity-product.quantity)*product.price)+state.total      
      product.quantity = newQuantity
      product.subTotal = subTotal        
     return{...state,products:[...state.products],total:addTotal}
        
      case DELETE_CART:
        return{...state,products:[],total:0}
      default:
        return state;
    }
}