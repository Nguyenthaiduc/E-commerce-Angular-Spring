package com.nguyenthaiduc.ecommerce.dao;

import com.nguyenthaiduc.ecommerce.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Long> {

}
