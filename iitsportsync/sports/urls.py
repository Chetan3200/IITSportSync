from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SportViewSet, TeamViewSet, MatchViewSet, MatchUpdateViewSet

router = DefaultRouter()
router.register(r'sports', SportViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'match-updates', MatchUpdateViewSet)

urlpatterns = [
    path('', include(router.urls)),
]