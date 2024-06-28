from flask import Flask,jsonify
from flask_cors import CORS
from routes import main

app = Flask(__name__)
CORS(app, origins='*')
app.register_blueprint(main)

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     data = {"message": "Hello from Flask!"}
#     return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
