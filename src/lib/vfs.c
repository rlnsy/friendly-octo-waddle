#include <stdio.h>

int vfs_write(char *name, char *data)
{
	FILE *_f_ = fopen(name, "w");
	return fprintf(_f_, "%s", data);
}
