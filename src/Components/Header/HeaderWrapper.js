import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header {
    background-color: blue;
    font-family: "Inter", sans-serif;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding: 8px 16px;
    z-index: 100;
    height: 85px;
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
  .header li:hover .icon {
    transform: rotateZ(-180deg);
  }
  .ground:hover .inner-menu2 {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
  .inner-menu2 {
    position: absolute;
    top: 0;
    left: 240px;
    transform: translateY(-30px);
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
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
  .inner-menu {
    position: absolute;
    top: 64px;
    left: 0;
    transform: translateY(-30px);
    opacity: 0;
    width: 240px;
    visibility: hidden;
    z-index: 101;
  }
  .first:hover .inner-menu3 {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
  .inner-menu3 {
    position: absolute;
    top: 64px;
    left: 0;
    transform: translateY(-30px);
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
    color: white !important;
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
    color: white;
    transition: 0.3s;
  }
  .icon3:hover {
    transition: 0.3s;
    cursor: pointer;
    color: #f69836;
  }
`;

export default HeaderWrapper;
