from django.contrib import admin
from django.urls import path, include
from .views import home, cadastrar, editar, excluir

urlpatterns = [
    
    path('', home),
    path('cadastrar/', cadastrar, name="cadastrar"),
    path('editar/<int:id>', editar, name="editar"),
    #path('atualizar/<int:id>', atualizar, name="atualizar"),
    path('excluir/<int:id>', excluir, name="excluir"),
    
]