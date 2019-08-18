import React from "react";
import styled from "@falldowngoboone/styled";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  styled();
  return <button {...props} />;
}
