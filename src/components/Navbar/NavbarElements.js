import React from "react";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const NavLink = styled(LinkRouter)`
  color: #fff;
  text-decoration: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid white;
  }
`;
