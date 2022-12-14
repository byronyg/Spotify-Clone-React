import styled from "styled-components";

export const Body = styled.body`
  font-family: "Lato", Font Awesome;
  background: #000;
  color: white;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;

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
    flex-direction: row;
    justify-content: space-around;
    margin: 100;;
    
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  input {
  font-family: "Lato", FontAwesome;
    display: flex;
    color: #fff;
    padding: 12px 20px;
    height: 44px;
    width: 400px;
    background-color: #333333;
    border-radius: 5px;
    border: 1px solid #313131;
    &:focus {
      outline: none
      border: 2px solid #555;
    }
  }
  
.button {
  background-color: #1DB954;
  border-radius: 4px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  // display: flex;
  font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 20px;
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
