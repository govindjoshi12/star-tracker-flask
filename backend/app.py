from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'Hello, World!'

@app.route('/stars', methods=["GET", "POST"])
def stars():
    temp = {
        "data": [
            {"id":1, "title":"test", "desc":"oops", "color":"red", "subj":"Math", "qty":4, "time":"today"}
        ]
    }
    
    return jsonify(temp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8081, debug=True)
