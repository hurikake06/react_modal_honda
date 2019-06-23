import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles.css";

const companies = [
  {
    id: 0,
    name: "brides",
    image:
      "https://brides.a-tm.co.jp/wp-content/themes/ateam-ls2/images/common/logo.png",
    mission: "真のユーザビリティの追求をする"
  },
  {
    id: 1,
    name: "hikkoshi",
    image: "https://hikkoshi.a-tm.co.jp/common/img/logo.jpg",
    mission: "一組でも多くのカップルに“理想の結婚式”のきっかけを"
  },
  {
    id: 2,
    name: "life",
    image:
      "https://life.a-tm.co.jp/wp-content/themes/ateam-ls2/images/common/logo.png",
    mission: "便利に、お得に、よかったを"
  },
  {
    id: 3,
    name: "finergy",
    image:
      "https://finergy.a-tm.co.jp/static/596c93e0e4c1442b634cbeb16be139f5/53f6f/logo.png",
    mission: "世の中からお金の不安をなくす"
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App companies={companies} />, rootElement);
