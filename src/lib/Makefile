CC=emcc
SRCS=hello.c vfs.c
EXPORTS="_malloc","_free","_add","_vfs_write","_vfs_read"
RUNTIME="ccall", "intArrayFromString", "ALLOC_NORMAL", "allocate", "UTF8ToString", "getValue"
FLGS=-s MODULARIZE -s EXPORTED_FUNCTIONS='[$(EXPORTS)]' -s EXPORTED_RUNTIME_METHODS='[$(RUNTIME)]'
WEB_FLAGS=-s ENVIRONMENT='web' -s SINGLE_FILE=1 -lidbfs.js
node: hello.c
	$(CC) $(FLGS) $(SRCS)
web: hello.c
	$(CC) $(FLGS) $(WEB_FLAGS) $(SRCS)
clean:
	rm ./a.out.js ./a.out.wasm
all: node

