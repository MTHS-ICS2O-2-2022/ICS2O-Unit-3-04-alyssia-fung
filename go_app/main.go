// Created by: Alyssia fung
// Created on: Mar 2023
//
// This program finds the volume of a sphere

package main

import (
	"fmt"
	"math"
)

func main() {
	// Define the variables for the sphere's radius
	var radius float64
	var volume float64

	// input
	fmt.Println("This program finds the volume of a sphere")
	fmt.Println()
	fmt.Println("Enter the radius (in cm): ")
	fmt.Scanln(&radius)
	fmt.Println()

	// process
	volume = (4.0 / 3.0) * math.Pi * math.Pow(radius, 3)

	// output
	// print out the calculated volume of the sphere
	fmt.Printf("The volume is: %.2f cm³\n", volume)
	fmt.Println("\nDone.")
}
