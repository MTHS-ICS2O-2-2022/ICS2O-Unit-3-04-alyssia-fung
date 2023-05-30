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
  // Get the Fahrenheit value from the query string
  const urlParams = new URLSearchParams(window.location.search)
  const fahrenheit = parseFloat(urlParams.get("fahrenheit"))

  // Input validation
  if (isNaN(fahrenheit)) {
    document.getElementById("conversion").innerHTML = "Invalid Fahrenheit value"
    return
  }

  // Process
  const celsius = (fahrenheit - 32) * (5 / 9)

  // Output
  document.getElementById("conversion").innerHTML =
    "f = " +
    fahrenheit +
    "<br>Converted to Celsius: " +
    celsius.toFixed(2) +
    "°C"
}

window.onload = calculate
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
  // Get the Fahrenheit value from the query string
  const urlParams = new URLSearchParams(window.location.search)
  const fahrenheit = parseFloat(urlParams.get("fahrenheit"))

  // Input validation
  if (isNaN(fahrenheit)) {
    document.getElementById("conversion").innerHTML = "Invalid Fahrenheit value"
    return
  }

  // Process
  const celsius = (fahrenheit - 32) * (5 / 9)

  // Output
  document.getElementById("conversion").innerHTML =
    "f = " +
    fahrenheit +
    "<br>Converted to Celsius: " +
    celsius.toFixed(2) +
    "°C"
}

window.onload = calculate
