from django.shortcuts import render, redirect
from .models import Tasks

def home(request):
    tasks = Tasks.objects.all()
    return render(request, 'home.html', {"tasks": tasks})

def cadastrar(request):
    vnome = request.POST.get("nome")
    Tasks.objects.create(nome=vnome)
    tasks = Tasks.objects.all()
    return redirect(home)

def editar(request, id):
    task = Tasks.objects.get(id=id)
    #return render(request, 'editar.html', {"task": task})
    vnome = request.POST.get("nome")
    task.nome = vnome
    task.save()
    return render(request, 'home.html', {"task": task})

def excluir(request, id):
    task = Tasks.objects.get(id=id)
    task.delete()
    return redirect(home)

