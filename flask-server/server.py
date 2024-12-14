from flask import Flask, jsonify
from flask_cors import CORS

# Initialize Flask app
api = Flask(__name__)

# Enable CORS
CORS(api)  # Apply CORS to all routes

@api.route('/random_name')
def random_name():
    response_body = {
        "name": "Nagato",
    }
    return jsonify(response_body)  # Ensure JSON response is sent properly

if __name__ == "__main__":
    api.run(debug=True)
