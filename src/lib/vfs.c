#include <stdio.h>

int vfs_write(char *name, char *data)
{
	FILE *_f_ = fopen(name, "w");
	if (_f_ == NULL)
		return -1;
	int writ = fprintf(_f_, "%s", data);
	return fclose(_f_), writ;
}

int vfs_read(char *name, char *buf)
{
	FILE *_f_ = fopen(name, "r");
	if (_f_ == NULL)
		return -1;
	int t_read = 0;
	int n_read = 0;
	do {
		(n_read = fread(buf + t_read, 1, 1, _f_)), t_read += n_read;
	} while (n_read > 0);
	return fclose(_f_), t_read;
}
