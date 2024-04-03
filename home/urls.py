from django.contrib import admin
from django.urls import path, include
from .views import home, cadastrar, limpeza, perfil, config, historico, excluir, atualizar, checkbox

urlpatterns = [
    
    path('', home, name="home"),
    path('cadastrar/', cadastrar, name="cadastrar"),
    path('limpeza/', limpeza, name="limpeza"),
    path('perfil/', perfil, name="perfil"),
    path('configuracoes/', config, name="config"),
    path('historico/', historico, name="historico"),


    path('excluir/<int:id>', excluir, name="excluir"),
    path('atualizar/<int:id>', atualizar, name="atualizar"),
    path('checkbox/<int:id>', checkbox, name="checkbox"),
    
    
]