import styled from "styled-components";

export const Body = styled.body`
  font-family: "Lato";
  background: #18181d;
  color: white;
  margin: 0;
  height: 100vh;
  padding-left: 40px;
  padding-top: 50px;

  div {
    padding-top: 25px;
  }
  ul {
    list-style: none;
    padding: 0;
    font-weight: 600;
  }
  li {
    padding-left: 1.3em;
    line-height: 1.4em;
  }
  li:before {
    content: "\f00b";
    margin-left: -1.3em;
    width: 1.3em;
    font-family: FontAwesome;
    display: inline-block;
  }
`;
