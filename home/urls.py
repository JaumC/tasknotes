from django.contrib import admin
from django.urls import path, include
from .views import home, cadastrar, lixeira, excluir, atualizar, checkbox

urlpatterns = [
    
    path('', home, name="home"),
    path('cadastrar/', cadastrar, name="cadastrar"),
    path('lixeira/', lixeira, name="lixeira"),


    path('excluir/<int:id>', excluir, name="excluir"),
    path('atualizar/<int:id>', atualizar, name="atualizar"),
    path('checkbox/<int:id>', checkbox, name="checkbox"),
    
    
]