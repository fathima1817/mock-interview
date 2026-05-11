from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from db import db, cursor

app = Flask(__name__)
CORS(app)

client = OpenAI(api_key="YOUR_API_KEY_HERE")

@app.route('/')
def home():
    return "Backend Running"

# Register
@app.route('/register', methods=['POST'])
def register():
    data = request.json

    sql = "INSERT INTO users(name,email,password) VALUES(%s,%s,%s)"
    val = (data['name'], data['email'], data['password'])

    cursor.execute(sql, val)
    db.commit()

    return jsonify({"message": "User Registered"})

# Login
@app.route('/login', methods=['POST'])
def login():
    data = request.json

    sql = "SELECT * FROM users WHERE email=%s AND password=%s"
    val = (data['email'], data['password'])

    cursor.execute(sql, val)
    user = cursor.fetchone()

    if user:
        return jsonify({"message": "Login Success"})
    else:
        return jsonify({"message": "Invalid Email or Password"})

# Save Score
@app.route('/save-score', methods=['POST'])
def save_score():
    data = request.json

    sql = "INSERT INTO scores(user_name,field,score,total) VALUES(%s,%s,%s,%s)"
    val = (data['name'], data['field'], data['score'], data['total'])

    cursor.execute(sql, val)
    db.commit()

    return jsonify({"message": "Score Saved"})

# Admin Scores
@app.route('/get-scores')
def get_scores():
    cursor.execute("SELECT * FROM scores")
    rows = cursor.fetchall()

    result = []

    for row in rows:
        result.append({
            "name": row[1],
            "field": row[2],
            "score": row[3],
            "total": row[4]
        })

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)