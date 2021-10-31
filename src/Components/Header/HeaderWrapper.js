import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header {
    background-color: white;
    font-family: "Inter", sans-serif;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 8px 16px;
    z-index: 100;
    height: 85px;
    color: black !important;
  }
  .first {
    padding: 20px 18px;
    transition: all 0.2s ease-in;
    cursor: pointer;
  }
  .first a {
    color: black;
  }
  .first:hover {
    background-color: #f69836;
  }
  .icon2 {
    margin-left: 20px;
  }
  .header li .icon {
    transition: 0.3s;
  }
  .ground:hover .inner-menu2 {
    opacity: 1;
    visibility: visible;
  }
  .inner-menu2 {
    position: absolute;
    top: 0;
    left: 240px;
    opacity: 0;
    width: 225px;
    visibility: hidden;
    z-index: 101;
  }
  .xullas {
    padding-top: 15px;
    padding-bottom: 15px;
    padding-right: 25px;
    padding-left: 5px;
  }
  .first:hover .inner-menu {
    opacity: 1;
    visibility: visible;
  }

  .inner-menu {
    position: absolute;
    top: 64px;
    left: 0;
    opacity: 0;
    width: 240px;
    visibility: hidden;
    z-index: 101;
  }
  .first:hover .inner-menu3 {
    opacity: 1;
    visibility: visible;
  }
  .inner-menu3 {
    position: absolute;
    top: 64px;
    left: 0;
    opacity: 0;
    width: 300px;
    visibility: hidden;
    z-index: 101;
  }
  .rang li:hover {
    color: white !important;
  }
  .xullas {
    height: auto;
    transition: 0.3s;
  }
  .xullas:hover {
    background-color: black;
    transition: 0.3s;
  }

  .xullas a {
    font-size: 16px;
    color: black;
    padding-left: 15px;
  }
  .ukolde {
    margin: 0 !important;
  }
  .margn {
    margin-right: 5px;
  }
  .header img {
    width: 12% !important;
  }
  .header li {
    position: relative;
  }
  .header ul {
    list-style-type: none;
  }
  .diviconga {
    padding-top: 28px;
    padding-bottom: 28px;
    padding-right: 1px;
    padding-left: 15px;
  }
  .diviconga2 {
    padding-top: 28px;
    padding-bottom: 28px;
    padding-right: 5px;
    padding-left: 20px;
  }
  .icon3 {
    color: black;
    transition: 0.3s;
  }
  .icon3:hover {
    transition: 0.3s;
    cursor: pointer;
    color: #f69836;
  }
  .sidebarde {
    padding-left: 96px;
  }
  .bir {
    width: 23%;
  }
  .birbir {
    margin-top: 70px;
    padding-right: 88px;
    padding-bottom: 63px;
  }
  .birparagh {
    margin-top: 30px;
    margin-bottom: 15px;
  }
  .birlink {
    margin-top: 20px;
  }
`;

export default HeaderWrapper;
