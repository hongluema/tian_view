# encoding: utf-8
from django.shortcuts import render
from .models import User
from django.http import HttpResponse,HttpResponseRedirect
import hashlib
from django.views.decorators.csrf import csrf_exempt
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


@csrf_exempt
def login(request):
    status = {"status":500,"data":"","msg":""}
    response = HttpResponse()
    username = request.POST.get("txtUserName")
    password = request.POST.get("txtPassword")
    try:
        print ">>>password1", password
        user = User.objects.get(username=username)
        print ">>>>>False",user.passwprd == hashlib.md5(password.encode()).hexdigest()
        if user.passwprd == hashlib.md5(password.encode()).hexdigest():
            status["status"] = 200
            status["data"] = {"info":"登录成功","user":username,"pwd":password}
        else:
            print ">>>password",password
            status["status"] = 201
            status["data"] = {"info": "密码不正确"}
            return HttpResponse("")
    except:
        status["data"] = {"info":"账户不可用"}
    response.content = json.dumps(status)
    response.content_type = "application/json"
    response["Access-Control-Allow-Origin"] = '*'
    return response

@csrf_exempt
def register(request):
    status = {"status": 500, "data": "", "msg": ""}
    response = HttpResponse()
    username = request.POST.get("txtUserName")
    password = request.POST.get("txtPassword")
    password2 = request.POST.get("txtConfirm")
    mobile = request.POST.get("txtPhone")
    email = request.POST.get("txtMail")
    if password == password2:
        user = User()
        user.username = username
        user.passwprd = hashlib.md5(password.encode()).hexdigest()
        user.mobile = mobile
        user.email = email
        user.save()
        status["data"] = {"info": "登录成功", "user": username, "pwd": password}
    else:
        status["data"] = {"info": "两次密码不一致", "user": username}
    response.content = json.dumps(status)
    response.content_type = "application/json"
    response["Access-Control-Allow-Origin"] = '*'
    return response

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

