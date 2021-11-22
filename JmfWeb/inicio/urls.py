from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.layout, name= 'layout'),
    path('index/', views.index, name= 'index'),
    
]
