"use client"

import React from "react";
import {Calendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";

export default function App() {
  return (
    <Calendar
      className="w-full h-full flex justify-center items-center"
      aria-label="Date (Read Only)" 
      value={today(getLocalTimeZone())} 
      isReadOnly
      style={{background: "#ffffff"}}
    />
  );
}
