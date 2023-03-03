package main

import (
	"github.com/bitwormhole/starter"
	wpmmix "github.com/bitwormhole/wpm-mix"
	"github.com/bitwormhole/wpm/server/service"
)

func main() {

	m := wpmmix.Module()
	service.SetAppModule(m)

	i := starter.InitApp()
	i.UseMain(m)
	i.Run()
}
