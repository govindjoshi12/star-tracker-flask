import os
from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)
db = SQLAlchemy(app)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/starstest', methods=["GET", "POST"])
def starstest():
    temp = {
        "data": [
            {"id":1, "title":"test", "desc":"oops", "color":"red", "subj":"Math", "qty":4, "time":"today"}
        ]
    }
    
    return jsonify(temp)

@app.route('/stars', methods=["GET", "POST"])
def stars():
    pass

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081, debug=True)
