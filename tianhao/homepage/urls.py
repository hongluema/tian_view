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
    url("^address",views.address,name="address"),
    url("^cart",views.cart,name="cart"),
    url("^shopping",views.shopping,name="shopping"),
    url("^require_register$",views.require_register,name="require_register"),
    url("^require_login$",views.require_login,name="require_login"),
]
