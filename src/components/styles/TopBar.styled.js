import styled from "styled-components";

export const Body = styled.body`
  background: #000;
  color: white;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
  }
  li {
    justify-content: space-between;
    margin-right: 30px;
  }
  .list {
    display: flex;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  input {
    display: flex;
    height: 40px;
    width: 400px;
  }
`;
