from django.shortcuts import render, HttpResponse, render

# Create your views here.
def layout(request):
    return render (request, 'inicio/layout.html')

def index(request):
    return render (request, 'inicio/index.html')