from rest_framework import serializers
from .models import Sport, Team, Match, MatchUpdate

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sport
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'

class MatchUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchUpdate
        fields = '__all__'