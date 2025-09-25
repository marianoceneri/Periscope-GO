package main

import "fmt"

// suma realiza la suma de dos números enteros
func suma(a, b int) int {
	return a + b
}

// multiplica realiza la multiplicación de dos números enteros
func multiplica(a, b int) int {
	return a * b
}

func main() {
	resultado1 := suma(5, 3)
	resultado2 := multiplica(4, 2)

	fmt.Printf("Suma: %d\n", resultado1)
	fmt.Printf("Multiplicación: %d\n", resultado2)
}
