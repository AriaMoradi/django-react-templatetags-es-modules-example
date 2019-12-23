from django.shortcuts import render
from django.views import View


class ReactView(View):
    def get(self, request):
        return render(request, 'react_test/react.html', {
            'MyComponent_props': {
                'example_data': "example props"
            },
        })
