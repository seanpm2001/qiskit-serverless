# Generated by Django 4.2.11 on 2024-04-09 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0018_remove_program_public_delete_catalogentry"),
    ]

    operations = [
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
                default="QUEUED",
                max_length=10,
            ),
        ),
    ]
