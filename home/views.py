from django.shortcuts import render, redirect
from .models import Tasks

def home(request):
    tasks = Tasks.objects.all()
    return render(request, 'home.html', {"tasks": tasks})

def cadastrar(request):
    vnome = request.POST.get("nome")
    Tasks.objects.create(nome=vnome)
    return redirect('home')

def atualizar(request, id):
    task = Tasks.objects.get(id=id)
    vnome = request.POST.get("novo_nome")
    task.nome = vnome
    task.save()
    return redirect('home')

def excluir(request, id):
    task = Tasks.objects.get(id=id)
    task.delete()
    return redirect('home')
