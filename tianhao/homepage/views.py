# encoding: utf-8
from django.shortcuts import render
from .models import User
from django.http import HttpResponse,HttpResponseRedirect
import hashlib
# Create your views here.

def index(request):
    pass
    return render(request,"index.html")

def home(request):
    pass
    return render(request,"homepage/homePage.html")

def require_login(request):
    return render(request,"homepage/login.html")

def require_register(request):
    return render(request,"homepage/register.html")

def address(request):
    return render(request,"homepage/address.html")

def cart(request):
    return render(request,"homepage/cart.html")

def shopping(request):
    return render(request,"homepage/shopping.html")



def login(request):
    username = request.POST.get("username")
    password = request.POST.get("password")
    try:
        user = User.objects.get(username=username)
        if user.passwprd == hashlib.md5(password.encode()).hexdigest():
            return HttpResponse("认证成功")
        else:
            return HttpResponse("密码不正确")
    except:
        return HttpResponse('账户不可用')

def register(request):
    username = request.POST.get("username")
    password = request.POST.get("password")
    password2 = request.POST.get("password2")
    mobile = request.POST.get("mobile")
    email = request.POST.get("email")
    if password == password2:
        user = User()
        user.username = username
        user.passwprd = hashlib.md5(password.encode()).hexdigest()
        user.mobile = mobile
        user.email = email
        user.save()
        return HttpResponse("注册成功")
    else:
        return HttpResponse("两次密码不一致，请核对后重新输入!")
