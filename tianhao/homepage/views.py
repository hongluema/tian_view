from django.shortcuts import render

# Create your views here.

def index(request):
    pass
    return render(request,"index.html")

def home(request):
    pass
    return render(request,"shopping-cart/tianhao/homePage.html")
