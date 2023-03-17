import React from "react";
import brasil from '../images/brasil.jpg'
import MyCarousel from "./MyCarousel";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};

const Habilities = (props: Props) => {
  return (
    <div className="bg-gray-900">
      <div className="text-center text-white pt-3 text-2xl font-semibold md:text-3xl">
        Minhas Skills
      </div>
      <div className="flex flex-wrap text-white justify-evenly">
        <div>React.JS</div>
        <div>Typescript</div>
        <div>Javascript</div>
        <div>Node.js</div>
        <div>Tailwind</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>Bootstrap</div>
        <div>Material UI</div>
      </div>
      <Button>Clique</Button>
      <MyCarousel />
    </div>
  );
};

export default Habilities;
