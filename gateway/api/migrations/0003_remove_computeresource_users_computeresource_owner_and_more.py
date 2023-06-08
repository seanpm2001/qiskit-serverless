# Generated by Django 4.2.1 on 2023-05-19 21:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("api", "0002_job_arguments"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="computeresource",
            name="users",
        ),
        migrations.AddField(
            model_name="computeresource",
            name="owner",
            field=models.ForeignKey(
                default=None,
                on_delete=django.db.models.deletion.CASCADE,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AddField(
            model_name="job",
            name="logs",
            field=models.TextField(default="Here goes nothing."),
        ),
        migrations.AlterField(
            model_name="job",
            name="status",
            field=models.CharField(
                choices=[
                    ("PENDING", "Pending"),
                    ("RUNNING", "Running"),
                    ("STOPPED", "Stopped"),
                    ("SUCCEEDED", "Succeeded"),
                    ("QUEUED", "Queued"),
                    ("FAILED", "Failed"),
                ],
                default="PENDING",
                max_length=10,
            ),
        ),
    ]
