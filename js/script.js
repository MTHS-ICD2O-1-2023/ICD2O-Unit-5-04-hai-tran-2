
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: April 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * this function find movie type based on user age
 */
function findDiscount() {
  // input
  const dayOfTheWeek = document.getElementById("day-of-the-week").value
  const userAge = parseFloat(document.getElementById("user-age").value)

  // process
  if (( dayOfTheWeek == "Tuesday" || dayOfTheWeek == "Thursday" ) || (userAge > 12 && userAge <21)) {
    document.getElementById("result").innerHTML = "You can go into the museum with a discount"
  } else {
    document.getElementById("result").innerHTML = "You can go into the museum with a normal price"
  }
} 