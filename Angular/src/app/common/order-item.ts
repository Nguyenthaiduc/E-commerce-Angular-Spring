import { CartItem } from "./cart-item"

export class OrderItem {
  imageUrl !: string
  unitPrice!: number
  quantity!:string | number
  productId!:string | number

  constructor(cartItems: CartItem) {
    this.imageUrl = cartItems.imageUrl;
    this.quantity = cartItems.quantity;
    this.unitPrice = cartItems.unitPrice;
    this.productId = cartItems.id;

  }
}
