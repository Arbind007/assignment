from flask import Flask
from flask_cors import CORS

app = Flask(__name__)


@app.route("/", methods={"GET", "POST"})
def home():
    return "Hello World!"


app.run(debug=True)
