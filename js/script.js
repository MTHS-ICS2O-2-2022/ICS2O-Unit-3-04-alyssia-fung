// Copyright (c) 2023 Alyssia Fung. All rights reserved.
//
// Created by: Alyssia Fung
// Created on: Mar 2023
// This file contains the JavaScript functions for index.html

/**
 * This function converts Fahrenheit to Celsius
 */
"use strict"

function calculate() {
  // input
  const fahrenheit = parseInt(document.getElementById("fahrenheit").value)

  // process
  const celsius = ((fahrenheit - 32) * 5) / 9

  // output
  document.getElementById("celsius").innerHTML =
    "The Celsius is: " + celsius.toFixed(2) + " °C"
}
