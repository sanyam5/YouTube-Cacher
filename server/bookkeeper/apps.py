from __future__ import unicode_literals

from django.apps import AppConfig


class BookkeeperConfig(AppConfig):
    name = 'bookkeeper'
    def ready(self):
        import bookkeeper.signals.handlers
