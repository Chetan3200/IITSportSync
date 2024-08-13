from django.db import models
from django.conf import settings

class Sport(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Team(models.Model):
    name = models.CharField(max_length=100)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Match(models.Model):
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    team1 = models.ForeignKey(Team, related_name='team1_matches', on_delete=models.CASCADE)
    team2 = models.ForeignKey(Team, related_name='team2_matches', on_delete=models.CASCADE)
    date = models.DateTimeField()
    location = models.CharField(max_length=200)
    score_team1 = models.IntegerField(default=0)
    score_team2 = models.IntegerField(default=0)
    is_finished = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.team1} vs {self.team2} - {self.date}"

class MatchUpdate(models.Model):
    match = models.ForeignKey(Match, on_delete=models.CASCADE)
    update_text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Update for {self.match} at {self.timestamp}"