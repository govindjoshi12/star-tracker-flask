import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-shall-not-pass'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://postgres:caffreyNeal$12@localhost:5432/star_tracker'
    SQLALCHEMY_TRACK_MODIFICATIONS = False