from flask import Flask, jsonify, request
from flask_cors import CORS
import random

# Initialize Flask app
api = Flask(__name__)


CORS(api)  

def generate_palindrome(length):
 
 
    half = ''.join(random.choices('abcdefghijklmnopqrstuvwxyz', k=length // 2))
    return half + half[::-1] if length % 2 == 0 else half + 'a' + half[::-1]

@api.route('/random_name')
def random_name():
    length = int(request.args.get('length', 8))  # Default length is 8
    name = generate_palindrome(length)
    response_body = {
        "name": name,
    }
    return jsonify(response_body)

if __name__ == "__main__":
    api.run(debug=True)
