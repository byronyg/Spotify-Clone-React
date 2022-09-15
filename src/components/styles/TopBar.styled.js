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
    height: 44px;
    width: 400px;
  }
  
button {
  background-color: #1DB954;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  max-width: none;
  min-height: 44px;
  min-width: 10px;
  outline: none;
  overflow: hidden;
  padding: 9px 20px 8px;
  position: relative;
  text-align: center;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  &:hover,
  &:focus {
    opacity: .75;
}

}
  }
`;
