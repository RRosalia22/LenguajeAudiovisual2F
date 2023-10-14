from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def pagina_principal():
    return open('pagina.html').read()

@app.route('/procesar', methods=['POST'])
def procesar():
    data = request.get_json()
    nombre = data['nombre']
    resultado = f'Hola, {nombre}'

    return jsonify({'mensaje': resultado})

if __name__ == '__main__':
    app.run()
