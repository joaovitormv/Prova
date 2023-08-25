import styled from "styled-components"

export const Sidebar = styled.div`
  width: 15rem;
  background-color: white;
  padding: 1rem;
  border-right: 0.3rem solid #472F5F;
  height: 100vh;
`;

export const SidebarItem = styled.div`
  padding: 0.5rem;
  margin-bottom: 1rem;
  
  &.item2 {
    background-color: #FFB391;
    color: white;
    cursor: pointer;
  }  
  &.item3 {
    background-color: #FC2F68;
    color: white;
    cursor: pointer;
  }
`;