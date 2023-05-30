// Created by: Alyssia fung
// Created on: April 2023
//
// This program converts Fahrenheit to Celsius

package main

import (
	"fmt"
)

func main() {
	// converts Fahrenheit to Celsius
	var fahrenheit float64
	var celsius float64

	// input
	fmt.Println("This program converts Fahrenheit to Celsius")
	fmt.Println()
	fmt.Println("Enter the fahrenheit ")
	fmt.Scanln(&fahrenheit)
	fmt.Println()

	// process
	celsius = ((fahrenheit - 32) * 5) / 9

	// output
	// print out the converts Fahrenheit to Celsius
	fmt.Printf("The celsius is: %.2f ℃\n", celsius)
	fmt.Println("\nDone.")
}
