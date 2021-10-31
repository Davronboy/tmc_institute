import styled from "styled-components";
const OneWrapper = styled.div`
  .photo {
    background-image: url("  https://i0.wp.com/tmci.uz/wp-content/uploads/2021/08/416988ff06545f167d5d7c4c5cbbf90d.jpg?w=1434&ssl=1");
    background-position: center top;
    background-attachment: fixed;
    align-items: center;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 30%) 0px -10px 0px 0 inset;
    background-size: cover;
    opacity: 1;
    position: relative;
    display: flex;
    width: 100% !important;
    min-height: 100vmin !important;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  }
  .photo::before {
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    position: absolute;
    content: "";
    z-index: 0;
  }
  .oq {
    position: absolute;
    z-index: 100;
    top: 82%;
    left: 0;
    width: 100%;
    height: 18%;
    background-color: white;
  }
  .uyde {
    align-content: center;
    align-items: center;
  }
  .buttondiv {
  }
  .uylink {
    font-size: 22px;
    text-decoration: none;
    text-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
    color: white;
    border-style: solid;
    border-width: 15px 30px 15px 30px;
    border-color: #dc5555;
    border-radius: 15px 15px 15px 15px;
    background-color: #d9534f;
    transition: 0.3s;
  }
  .uylink:hover {
    color: #f69836;
    cursor: pointer;
    transition: 0.3s;
  }

  .homesec {
    margin: 140px 0;
    padding: 0 30px;
  }
`;

export default OneWrapper;
