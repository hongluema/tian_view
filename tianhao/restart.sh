
#!/bin/sh

ps aux|grep tt.ini|grep -v grep|cut -c 9-15|xargs kill -s 9
uwsgi --ini /home/mahl/tian_view/tianhao/tt.ini & /usr/local/nginx-1.5.6/sbin/nginx &
