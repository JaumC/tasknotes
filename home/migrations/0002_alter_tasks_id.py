# Generated by Django 5.0.2 on 2024-02-19 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
