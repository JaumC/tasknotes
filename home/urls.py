from django.contrib import admin
from django.urls import path, include
from .views import home, cadastrar, lixeira, perfil, config, excluir, atualizar, checkbox

urlpatterns = [
    
    path('', home, name="home"),
    path('cadastrar/', cadastrar, name="cadastrar"),
    path('lixeira/', lixeira, name="lixeira"),
    path('perfil/', perfil, name="perfil"),
    path('configuracoes/', config, name="config"),


    path('excluir/<int:id>', excluir, name="excluir"),
    path('atualizar/<int:id>', atualizar, name="atualizar"),
    path('checkbox/<int:id>', checkbox, name="checkbox"),
    
    
]