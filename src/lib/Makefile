CC=emcc

FUNS="_add"
FLGS=-s MODULARIZE -s EXPORTED_FUNCTIONS='[$(FUNS)]' -s EXPORTED_RUNTIME_METHODS='["ccall"]'
WEB_FLAGS=-s ENVIRONMENT='web' -s SINGLE_FILE=1
node: hello.c
	$(CC) $(FLGS) hello.c
web: hello.c
	$(CC) $(FLGS) $(WEB_FLAGS) hello.c
clean:
	rm ./a.out.js ./a.out.wasm
all: node

