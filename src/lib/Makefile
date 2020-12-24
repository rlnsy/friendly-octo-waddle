CC=emcc
SRCS=hello.c vfs.c
EXPORTS="_malloc","_add","_vfs_write"
FLGS=-s MODULARIZE -s EXPORTED_FUNCTIONS='[$(EXPORTS)]' -s EXPORTED_RUNTIME_METHODS='["ccall", "intArrayFromString", "ALLOC_NORMAL", "allocate"]'
WEB_FLAGS=-s ENVIRONMENT='web' -s SINGLE_FILE=1 -lidbfs.js
node: hello.c
	$(CC) $(FLGS) $(SRCS)
web: hello.c
	$(CC) $(FLGS) $(WEB_FLAGS) $(SRCS)
clean:
	rm ./a.out.js ./a.out.wasm
all: node

