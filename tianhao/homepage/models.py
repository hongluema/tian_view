# encoding: utf-8
from django.db import models
import MySQLdb
# Create your models here.

from MySQLdb.cursors import DictCursor

"""
class MysqlServer(object):

    def __init__(self):
        self.conn = MySQLdb.connect(host="5670ff801929d.sh.cdb.myqcloud.com", user='cdb_outerroot', passwd='Y02389KSYHZ',port=4099)
        self.cursor = self.conn.cursor(DictCursor)

    def choice_db(self,db):
        sql = "use {}".format(db)
        self.cursor.execute(sql)

    def query(self,sql):
        self.choice_db("youpao")
        self.cursor.execute(sql)
        all_row = self.cursor.fetchall()
        return all_row

def test():
    my = MysqlServer()
    sql = "select * from redenvelope"
    all_row = my.query(sql)
    print all_row[6]

"""
class User(models.Model):
    username = models.CharField(verbose_name="用户名",max_length=100)
    passwprd = models.CharField(verbose_name="密码",max_length=100)
    mobile = models.CharField(verbose_name="电话号码",max_length=100)
    email = models.CharField(verbose_name="邮箱",max_length=100)

    class Meta:
        verbose_name = "用户表"
        db_table = "tianhao_user"
