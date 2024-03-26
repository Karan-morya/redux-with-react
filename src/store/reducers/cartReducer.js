import { ADD_CART_ITEM, DECRESE_QUANTITY, INCRESE_QUANTITY, REMOVE_CART_ITEM } from "../action/cartActions"
//reducers

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case ADD_CART_ITEM:
            return [...state, { productId: action.payload.productId, quantity: action.payload.quantity }]

        case REMOVE_CART_ITEM:
            return [...state.filter(item => item.productId !== action.payload.productId)]

        case INCRESE_QUANTITY:
            return [...state.map((cartItem) => {
                if (cartItem.productId === action.payload.productId) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                    }
                }
                return cartItem

            })]

        case DECRESE_QUANTITY:
            return [...state.map((cartItem) => {
                if (cartItem.productId === action.payload.productId) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity - 1
                    }
                }
                return cartItem

            })
                .filter(item => item.quantity > 0)
            ]


        default:
            return state

    }
}