"use strict";

module.exports = function multiply(a, b) {
  const res = a * b;
  if (Number.isNaN(res)) {
    throw new Error("Invalid Operation");
  }
  return res;
};
