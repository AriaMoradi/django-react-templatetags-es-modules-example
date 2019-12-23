from django.urls import path

from react_test.views import ReactView

urlpatterns = [
    path('', ReactView.as_view()),
]