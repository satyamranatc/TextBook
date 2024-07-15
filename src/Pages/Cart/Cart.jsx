import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`

  width:100vw;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CartTitle = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const CartList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CartItem = styled.li`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #444;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function Cart({ addCartCourses }) {
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <CartList>
        {addCartCourses.map((course, i) => (
          <CartItem key={i}>{course.name} {course.price}</CartItem>
        ))}
      </CartList>
    </CartContainer>
  );
}