import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import sports.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'iitsportsync.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            sports.routing.websocket_urlpatterns
        )
    ),
})