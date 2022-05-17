package com.nguyenthaiduc.ecommerce.dto;

import com.nguyenthaiduc.ecommerce.entity.Address;
import com.nguyenthaiduc.ecommerce.entity.Customer;
import com.nguyenthaiduc.ecommerce.entity.Order;
import com.nguyenthaiduc.ecommerce.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
