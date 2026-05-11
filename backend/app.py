from flask import Flask, request, jsonify
from flask_cors import CORS
import os

# Safe DB Import
try:
    from db import db, cursor
except:
    db = None
    cursor = None

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Backend Running Successfully"

# ================= REGISTER =================
@app.route('/register', methods=['POST'])
def register():

    if cursor is None:
        return jsonify({"message": "Database Offline"})

    data = request.json

    sql = "INSERT INTO users(name,email,password) VALUES(%s,%s,%s)"
    val = (
        data['name'],
        data['email'],
        data['password']
    )

    cursor.execute(sql, val)
    db.commit()

    return jsonify({"message": "User Registered"})


# ================= LOGIN =================
@app.route('/login', methods=['POST'])
def login():

    if cursor is None:
        return jsonify({"message": "Database Offline"})

    data = request.json

    sql = "SELECT * FROM users WHERE email=%s AND password=%s"
    val = (
        data['email'],
        data['password']
    )

    cursor.execute(sql, val)
    user = cursor.fetchone()

    if user:
        return jsonify({"message": "Login Success"})
    else:
        return jsonify({"message": "Invalid Email or Password"})


# ================= SAVE SCORE =================
@app.route('/save-score', methods=['POST'])
def save_score():

    if cursor is None:
        return jsonify({"message": "Database Offline"})

    data = request.json

    sql = "INSERT INTO scores(user_name,field,score,total) VALUES(%s,%s,%s,%s)"
    val = (
        data['name'],
        data['field'],
        data['score'],
        data['total']
    )

    cursor.execute(sql, val)
    db.commit()

    return jsonify({"message": "Score Saved"})


# ================= GET SCORES =================
@app.route('/get-scores')
def get_scores():

    if cursor is None:
        return jsonify([])

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


# ================= RUN =================
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)