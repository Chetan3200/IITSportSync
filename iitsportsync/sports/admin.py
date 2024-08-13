from django.contrib import admin
from .models import Sport, Team, Match, MatchUpdate

@admin.register(Sport)
class SportAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('name', 'sport')
    list_filter = ('sport',)

@admin.register(Match)
class MatchAdmin(admin.ModelAdmin):
    list_display = ('sport', 'team1', 'team2', 'date', 'location', 'is_finished')
    list_filter = ('sport', 'is_finished')
    search_fields = ('team1__name', 'team2__name', 'location')

@admin.register(MatchUpdate)
class MatchUpdateAdmin(admin.ModelAdmin):
    list_display = ('match', 'update_text', 'timestamp')
    list_filter = ('match__sport', 'match')
    search_fields = ('match__team1__name', 'match__team2__name', 'update_text')