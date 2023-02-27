package main

import (
	"github.com/bitwormhole/starter"
	wpmmix "github.com/bitwormhole/wpm-mix"
)

func main() {
	i := starter.InitApp()
	i.UseMain(wpmmix.Module())
	i.Run()
}
