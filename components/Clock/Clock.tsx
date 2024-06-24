"use client"

import React from "react";
import {TimeInput} from "@nextui-org/react";
import {Time} from "@internationalized/date";

export default function App() {
  return (
    <TimeInput 
    className="w-[100px]"
      isReadOnly 
      label="Event Time" 
      defaultValue={new Time(11, 45)} 
    />
  );
}
