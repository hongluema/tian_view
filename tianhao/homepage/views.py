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

import json
def get_json(request):
    # return render(request,'homepage/cartData.json')
    response = HttpResponse()
    a={
  "status":1,
  "result":{
    "totalMoney":109,
    "list":[
      {
        "productId":"201703010001",
        "productName":"贝康诺TM孕前夫妇基因筛检(大众套餐)",
        "productPrice":2400,
        "productQuantity":1,
        "productImage":"/static/static/img/product-1.jpg",
        "parts":[
          {
            "partsId":"10001",
            "partsName":"迪士尼门票"
          },
          {
            "partsId":"10002",
            "partsName":"耳聋分析"
          }
        ]
      },
      {
        "productId":"201703010002",
        "productName":"贝康诺TM孕前夫妇地中海贫血基因筛检",
        "productPrice":180,
        "productQuantity":3,
        "productImage":"/static/static/img/product-2.jpg",
        "parts":[
          {
            "partsId":"20001",
            "partsName":"烧水壶"
          }
        ]
      },
      {
        "productId":"201703010003",
        "productName":"贝康诺TM孕前夫妇耳聋基因筛检",
        "productPrice":180,
        "productQuantity":1,
        "productImage":"/static/static/img/product-3.jpg",
        "parts":[
          {
            "partsId":"10001",
            "partsName":"茶具"
          }
        ]
      }
    ]
  },
  "message":""
}
    response.content = json.dumps(a)
    response.content_type = "application/json"
    response["Access-Control-Allow-Origin"] = '*'
    return response

