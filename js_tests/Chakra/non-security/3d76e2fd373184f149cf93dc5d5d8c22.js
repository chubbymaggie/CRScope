//load("./wasm-constants.js");
//load("./wasm-module-builder.js");


(function() {
"use asm";
var builder = new WasmModuleBuilder();
builder.addFunction("regression_702460", kSig_i_v)
.addBody([
kExprI32Const, 0x52,
kExprI32Const, 0x41,
kExprI32Const, 0x3c,
kExprI32Const, 0xdc, 0x01,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprSetLocal, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprGrowMemory, 0x00,
kExprS128LoadMem, 0x00, 0x40,
kExprUnreachable,
kExprGrowMemory, 0x00
]).exportFunc();
assertThrows(() => builder.instantiate());
})();

