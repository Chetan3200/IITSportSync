from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Add additional fields here if needed
    bio = models.TextField(blank=True)

    def __str__(self):
        return self.username