"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const CardTypeOne = (props: {
  width: string;
  height: string;
  active: boolean;
}) => {
  const { width, height, active } = props;

  return (
    <Card
      className={`w-[${width}] h-[${height}] ${
        active ? "bg-white" : "bg-transparent"
      } rounded-none overflow-visible`}
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
      id="cardtypeonemain"
    >
        <div className="relative" id="imgtestone">
            <img className="w-[100vw] h-[100vh] absolute bottom-0 right-0" src="./assets/herosectionbg.png" alt="" />
        </div>
    </Card>
  );
};

export default CardTypeOne;
