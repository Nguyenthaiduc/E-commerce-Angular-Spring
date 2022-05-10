package com.nguyenthaiduc.ecommerce.dao;

import com.nguyenthaiduc.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {


}
