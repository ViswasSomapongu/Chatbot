from flask import Flask,jsonify,send_from_directory
from flask_cors import CORS
from routes import main
import os 


app = Flask(__name__)
CORS(app, origins='*')
app.register_blueprint(main)

# @app.route('/api/data', methods=['GET'])
# def get_data():
#     data = {"message": "Hello from Flask!"}
#     return jsonify(data)


client_folder = os.path.join(os.getcwd(),"..","client")
dist_folder = os.path.join(client_folder,"dist")

@app.route("/",defaults={"filename":""})
@app.route("/<path:filename>")
def index(filename):
    if not filename:
        filename = "index.html"
    return send_from_directory(dist_folder,filename)

if __name__ == '__main__':
    app.run(debug=True)
