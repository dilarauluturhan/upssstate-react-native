import React from "react";
import { Slot, Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function Layout() {
  const { isAuth } = useSelector((state) => state.user);

  if (!isAuth) {
    return <Redirect href="/signinscreen" />;
  }
  
  return <Slot />;
}
