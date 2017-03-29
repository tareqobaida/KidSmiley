from django.shortcuts import render


# Create your views here.

def home(request):
    return render(request, 'home/home.html')

def about_us(request):
    return render(request, 'home/about.html')


def get_involved(request):
    return render(request, 'home/get_involved.html')


def contact_us(request):
    return render(request, 'home/contact.html')


def donate(request):
    return render(request, 'home/donate.html')
