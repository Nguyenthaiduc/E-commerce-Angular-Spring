package com.nguyenthaiduc.ecommerce.service;

import com.nguyenthaiduc.ecommerce.dto.Purchase;
import com.nguyenthaiduc.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);

}
