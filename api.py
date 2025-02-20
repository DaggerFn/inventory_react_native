from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3



con = sqlite3.connect("tutorial.db")

app = Flask(__name__)
CORS(app)


# Simulando um banco de dados em memória
posts = []


# 🔹 Rota GET: Retorna todos os posts
@app.route('/posts', methods=['GET'])
def get_posts():
    return jsonify(posts), 200


# 🔹 Rota POST: Adiciona um novo post
@app.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    if not data or "title" not in data or "body" not in data:
        return jsonify({"error": "Dados inválidos"}), 400
    
    new_post = {
        "id": len(posts) + 1,
        "title": data["title"],
        "body": data["body"],
        "userId": data.get("userId", 1)
    }
    posts.append(new_post)
    
    return jsonify(new_post), 201


# 🔹 Rodando o servidor Flask
if __name__ == '__main__':
    app.run(debug=False)
