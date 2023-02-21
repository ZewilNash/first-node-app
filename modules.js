// Modules
const { john, peter } = require("./index-2")
const sync = require("./index-3")
const data = require("./index-4")


require("./index-5")

sync("hi")
sync(john)
sync(peter)
