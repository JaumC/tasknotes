from django.db import models

class Tasks(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=100)
    checkbox = models.BooleanField(default=False)
