from django.conf.urls import url
from django.contrib import admin
from . import views

app_name = "homepage"

urlpatterns = [
    url("^index/$",views.index,name="index"),
    url("^$",views.home,name="home"),
]
