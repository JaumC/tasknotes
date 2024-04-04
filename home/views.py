from django.db.models import BooleanField, Case, When, Value
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Tasks
import json

def limpeza(request):
    tasks = Tasks.objects.filter(checkbox=True)
    return render(request, 'limpeza.html', {'tasks': tasks})

def perfil(request):
    return render(request, 'perfil.html')

def config(request):
    return render(request, 'configuracoes.html')

def historico(request):
    return render(request, 'historico.html')
    

def home(request):
    tasks = Tasks.objects.annotate(
        checkbox_order=Case(
            When(checkbox=True, then=Value(1)),
            default=Value(0),
            output_field=BooleanField()
        )
    ).order_by('checkbox_order')
    total_tasks = tasks.count()
    context = {'tasks': tasks, 'total_tasks': total_tasks}
    return render(request, 'homePage/home.html', context)

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

def checkbox(request, id):
    if request.method == 'POST':
        task = Tasks.objects.get(id=id)
        data = json.loads(request.body)
        vcheckbox = data.get("checkbox")

        if vcheckbox == True:
            task.checkbox = True
        
        else:
            task.checkbox = False
        task.save()

        return JsonResponse({}, status=200)
    return JsonResponse({}, status=404)


def excluir(request, id):
    task = Tasks.objects.get(id=id)
    task.delete()
    return redirect('home')