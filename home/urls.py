from django.contrib import admin
from django.urls import path, include
from .views import home, cadastrar, excluir, atualizar

urlpatterns = [
    
    path('', home, name="home"),
    path('cadastrar/', cadastrar, name="cadastrar"),
    path('excluir/<int:id>', excluir, name="excluir"),
    path('atualizar/<int:id>', atualizar, name="atualizar"),
    
]