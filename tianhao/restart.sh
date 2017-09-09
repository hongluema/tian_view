#!/bin/sh
ps aux|grep tianhao.ini|grep -v grep|cut -c 9-15|xargs kill -s 9
setsid nohup uwsgi tianhao.ini &
