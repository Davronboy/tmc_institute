import { Link } from "@mui/material";
import React from "react";
import OneWrapper from "./OneWrapper";

const HomeSection1 = () => {
  return (
    <>
      <OneWrapper>
        <div className="photo">
          <div className="container baby">
            <div className="maindiv">
              <div className="uyde">
                <div className="uytitle">
                  <h1>Start your studies & pursue your dream career</h1>
                </div>
                <div className="uybutton">
                  <div className="mt-5 buttondiv">
                    <Link to="" className="uylink">
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="oq"></div>
        </div>

        <section className="homesec">
          <div className="container">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              quaerat ipsum harum quas recusandae magni nostrum inventore,
              facere enim. Velit error, quas temporibus cum maiores architecto
              quos aperiam ex officia?
            </p>
          </div>
        </section>
      </OneWrapper>
    </>
  );
};

export default HomeSection1;
