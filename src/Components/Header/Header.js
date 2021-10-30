import {
  faAlignRight,
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
              <ul className="p-0 m-0  d-flex align-items-center d-none d-lg-flex">
                <li className=" first active">
                  <Link to="" className="text-white ">
                    Home
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className="text-white ">
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
                  <Link to="" className="text-white ">
                    Courses
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icon fs-6 ms-1"
                    />
                    <div className="inner-menu optawaw bg-white shadow">
                      {/* col-6 col-lg-4  pastigi */}

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
                  <Link to="" className="text-white ">
                    Admisson
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icon fs-6"
                    />
                    <div className="inner-menu optawaw bg-white shadow">
                      {/* col-6 col-lg-4  pastigi */}

                      <ul className="m-0 p-0 rang">
                        <li className="xullas">
                          <Link>Overview</Link>
                        </li>
                        <li className="xullas">
                          <Link>Date & Deadlines</Link>
                        </li>
                        <li className="xullas">
                          <Link>How to Apply</Link>
                        </li>
                        <li className="xullas">
                          <Link>Financial Aid</Link>
                        </li>
                        <li className="xullas">
                          <Link>Tuition & Fees</Link>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className="text-white ">
                    Student Life
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="icon fs-6"
                    />
                    <div className="inner-menu optawaw bg-white shadow">
                      {/* col-6 col-lg-4  pastigi */}

                      <ul className="m-0 p-0 rang">
                        <li className="xullas">
                          <Link>Overview</Link>
                        </li>
                        <li className="xullas">
                          <Link>Student Portal</Link>
                        </li>
                        <li className="xullas">
                          <Link>Schedule a Tour</Link>
                        </li>
                        <li className="xullas">
                          <Link>The Campus Experience</Link>
                        </li>
                        <li className="xullas">
                          <Link>Support & Guidance</Link>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>
                <li className=" first">
                  <Link to="" className="text-white ">
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
                  <Link to="" className="text-white ">
                    Apply
                  </Link>
                </li>
                <li className="first">
                  <Link to="" className="text-white ">
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
                <FontAwesomeIcon icon={faAlignRight} className="fs-4 icon3" />{" "}
              </Link>
            </div>
            <div className="diviconga2">
              <Link>
                {" "}
                <FontAwesomeIcon icon={faSearch} className="fs-4 icon3" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
