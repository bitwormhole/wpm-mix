package wpmmix

import (
	"embed"

	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/collection"
	"github.com/bitwormhole/wpm"
)

const (
	theModuleName    = "github.com/bitwormhole/wpm-mix"
	theModuleVersion = "v0.1.5"
	theModuleRevison = 11
	theModuleResPath = "src/main/resources"
)

//go:embed "src/main/resources"
var theModuleResFS embed.FS

// ModuleServer ...
func ModuleServer() application.Module {

	mb := application.ModuleBuilder{}

	mb.Name(theModuleName)
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevison)

	mb.Resources(collection.LoadEmbedResources(&theModuleResFS, theModuleResPath))
	mb.OnMount(nil)
	mb.Dependency(wpm.ModuleServer())

	return mb.Create()
}

// ModuleBoot ...
func ModuleBoot() application.Module {

	mb := application.ModuleBuilder{}

	mb.Name(theModuleName)
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevison)

	mb.Resources(collection.LoadEmbedResources(&theModuleResFS, theModuleResPath))
	mb.OnMount(nil)
	mb.Dependency(wpm.ModuleBoot())

	return mb.Create()
}
