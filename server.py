from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/server/<mood>', methods = ['POST'])
def home(mood):
    if(request.method == 'POST'):
        data = request.get_json() # status code
        return jsonify({'data': data}), 201

# driver function
if __name__ == 'main':
    app.run(debug = True)