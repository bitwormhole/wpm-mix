package wpmmix

import (
	"embed"

	"github.com/bitwormhole/starter/application"
	"github.com/bitwormhole/starter/collection"
	"github.com/bitwormhole/wpm"
)

const (
	theModuleName    = "github.com/bitwormhole/wpm-mix"
	theModuleVersion = "v0.0.13.1"
	theModuleRevison = 5
	theModuleResPath = "src/main/resources"
)

//go:embed "src/main/resources"
var theModuleResFS embed.FS

// Module ...
func Module() application.Module {

	mb := application.ModuleBuilder{}

	mb.Name(theModuleName)
	mb.Version(theModuleVersion)
	mb.Revision(theModuleRevison)

	mb.Resources(collection.LoadEmbedResources(&theModuleResFS, theModuleResPath))
	mb.OnMount(nil)

	mb.Dependency(wpm.Module())

	return mb.Create()
}
