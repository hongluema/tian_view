from django.conf.urls import url
from django.contrib import admin
import views

app_name = "homepage"

urlpatterns = [
    url("^$",views.index,name="index"),
]