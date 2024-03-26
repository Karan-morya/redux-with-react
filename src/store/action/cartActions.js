//action types
export const ADD_CART_ITEM = "cart/addItem"
export const REMOVE_CART_ITEM = "cart/removeItem"
export const INCRESE_QUANTITY = "increse/quantity"
export const DECRESE_QUANTITY = "decrese/quantity"

//action creaters 

export function addToCartItem(productId, quantity) {
    return {
        type: ADD_CART_ITEM,
        payload: {
            productId: parseInt(productId),
            quantity: parseInt(quantity)
        }
    }
}
export function removeItemFromCart(productId) {
    return {
        type: REMOVE_CART_ITEM,
        payload: {
            productId: parseInt(productId),
        }
    }
}
export function increaseQuantity(productId) {
    return {
        type: INCRESE_QUANTITY,
        payload: {
            productId: parseInt(productId),
        }
    }
}
export function decreaseQuantity(productId) {
    return {
        type: DECRESE_QUANTITY,
        payload: {
            productId: parseInt(productId),
        }
    }
}