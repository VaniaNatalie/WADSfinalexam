from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, status
from .serializers import UserSerializer
from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response

# For admin
class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer

# Get request
class UserList(APIView):
    def get(self, request):
        users = User.objects.all().order_by('username')
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

# Post request
class NewUser(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        newUser = User.objects.create(username=username, password=password)
        serializer = UserSerializer(newUser, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(status=status.HTTP_201_CREATED)

# Put request
class UpdateUser(APIView):
    def put(self, request):
        username = request.data.get('username')
        user = User.objects.get(username=username)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(status=status.HTTP_200_OK)