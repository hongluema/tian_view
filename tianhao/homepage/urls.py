# encoding: utf-8
from django.conf.urls import url
from django.contrib import admin
from . import views

app_name = "homepage"

urlpatterns = [
    url("^index/$",views.index,name="index"),
    url("^$",views.home,name="home"),
    url("^login$",views.login,name="login"),
    url("^register$",views.register,name="register"),
]
