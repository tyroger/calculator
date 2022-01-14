"use strict";

function substract(a, b) {
  const res = a - b;

  if (Number.isNaN(res)) {
    throw new Error("Invalid operation");
  }
  return res;
}
