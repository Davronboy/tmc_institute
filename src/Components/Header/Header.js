import {
  faAlignRight,
  faBars,
  faChevronDown,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";
import React from "react";
import HeaderWrapper from "./HeaderWrapper";

let data = [
  {
    link1: "Overview",
    to1: "/",
    link2: "Campus",
    to2: "/",
    link3: "Mission & Values",
    to3: "/",
    link4: "History",
    to4: "/",
    link5: "Our Leadership",
    to5: "/",
    link6: "News",
    to6: "/",
    link7: "License and Accrediation",
    to7: "/",
  },
];
let Admissondata = [
  {
    link17: "Overview",
    to17: "/",
    link18: "Date & Deadlines",
    to18: "/",
    link19: "How to Apply",
    to19: "/",
    link20: "Financial Aid",
    to20: "/",
    link21: "Tuition & Fees",
    to21: "/",
  },
];
let Studentdata = [
  {
    link22: "Overview",
    to22: "/",
    link23: "  Student Portal",
    to23: "/",
    link24: "Schedule a Tour",
    to24: "/",
    link25: " The Campus Experience",
    to25: "/",
    link26: " Support & Guidance",
    to26: "/",
  },
];
const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <div className="header d-flex align-items-center ">
          <div className="d-flex align-items-center justify-content-between">
            {/* <Link> */}
            <img
              src="https://i0.wp.com/tmci.uz/wp-content/uploads/2021/06/cropped-Untitled-1-01.png?resize=2048%2C878&ssl=1"
              alt=""
              className="w-100"
            />
            <div className="margn">
              <ul className="p-0 m-0  d-flex align-items-center d-none d-xl-flex">
                <li className=" first active">
                  <Link to="" className="">
                    Home
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className=" ">
                    About{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icon fs-6"
                    />
                    {data.map((value, index) => (
                      <div className="inner-menu optawaw bg-white shadow">
                        <ul className="m-0 p-0 rang">
                          <li className="xullas">
                            <Link to={value.to1}>{value.link1}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to2}>{value.link2}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to3}>{value.link3}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to4}>{value.link4}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to5}>{value.link5}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to6}>{value.link6}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to7}>{value.link7}</Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className=" ">
                    Courses
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icon fs-6 ms-1"
                    />
                    <div className="inner-menu optawaw bg-white shadow">
                      <ul className="m-0 p-0">
                        <li className="xullas">
                          <Link>Overview</Link>
                        </li>
                        <li className="xullas">
                          <Link>Faculty</Link>
                        </li>
                        <li className="xullas">
                          <Link>Foundation</Link>
                        </li>
                        <li className="xullas ground">
                          <Link>
                            Undergraduate
                            <FontAwesomeIcon
                              icon={faChevronRight}
                              className="icon2"
                            />
                            <div className="inner-menu2 optawaw bg-white shadow">
                              <ul className="m-0 p-0">
                                <li className="xullas">
                                  <Link>Accounting</Link>
                                </li>
                                <li className="xullas">
                                  <Link>Logistics</Link>
                                </li>
                                <li className="xullas">
                                  <Link>Hospitality and Tourism</Link>
                                </li>
                                <li className="xullas">
                                  <Link>Business</Link>
                                </li>
                                <li className="xullas">
                                  <Link>IT</Link>
                                </li>
                              </ul>
                            </div>
                          </Link>
                        </li>
                        <li className="xullas">
                          <Link>MBA</Link>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className=" ">
                    Admisson
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icon fs-6"
                    />
                    {Admissondata.map((value, index) => (
                      <div className="inner-menu optawaw bg-white shadow">
                        <ul className="m-0 p-0 rang">
                          <li className="xullas">
                            <Link to={value.to17}>{value.link17}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to18}>{value.link18}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to19}>{value.link19}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to20}>{value.link20}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to21}>{value.link21}</Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className=" ">
                    Student Life
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icon fs-6"
                    />
                    {Studentdata.map((value, index) => (
                      <div className="inner-menu optawaw bg-white shadow">
                        <ul className="m-0 p-0 rang">
                          <li className="xullas">
                            <Link to={value.to22}>{value.link22}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to23}>{value.link23}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to24}>{value.link24}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to25}>{value.link25}</Link>
                          </li>
                          <li className="xullas">
                            <Link to={value.to26}>{value.link26}</Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className=" ">
                    Online Exam
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icon fs-6"
                    />
                    <div className="inner-menu3 optawaw bg-white shadow">
                      <ul className="m-0 p-0 rang">
                        <li className="xullas">
                          <Link>Register to Online Entrance Exam</Link>
                        </li>
                        <li className="xullas">
                          <Link>Online Entrance Exam results</Link>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className=" ">
                    Apply
                  </Link>
                </li>
                <li className="first">
                  <Link to="" className=" ">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex">
            <div className="diviconga">
              <Link>
                {" "}
                <FontAwesomeIcon
                  icon={faAlignRight}
                  className="fs-4 icon3 d-none d-xl-flex"
                />{" "}
                {/* <div className="sidebarde">
                  <div className="bir">
                    <div className="birbir">
                      <div className="birtitle">
                        <h4 className="m-0">Welcome</h4>
                      </div>
                      <div className="birparagh">
                          <p className="p-0 m-0"></p>
                        At TMC Academy, we are “Every Step with You” in your
                        education journey. We hope to be your partner in
                        achieving your academic dreams and we look forward to
                        welcoming you as a student at TMC.
                      </div>
                      <div className="birlink">
                          <Link> About Us </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </Link>
            </div>
            <div className="diviconga2">
              <Link>
                {" "}
                <FontAwesomeIcon icon={faSearch} className="fs-4 icon3" />{" "}
              </Link>
            </div>
            <div className="diviconga2">
              <Link>
                {" "}
                <FontAwesomeIcon
                  icon={faBars}
                  className="fs-4 icon3 d-xl-none d-inline-block"
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
