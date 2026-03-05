from flask import Flask, request, jsonify
import pickle
import numpy as np
from profit_calculator import calculate_profit

app = Flask(__name__)

# Load models
crop_model = pickle.load(open("models/crop_model.pkl", "rb"))
price_model = pickle.load(open("models/price_model.pkl", "rb"))


@app.route("/")
def home():
    return "Smart Crop Advisory App Running"


# -----------------------------
# Crop Recommendation API
# -----------------------------
@app.route("/predict_crop", methods=["POST"])
def predict_crop():

    data = request.get_json()

    features = np.array([[
        data["N"],
        data["P"],
        data["K"],
        data["temperature"],
        data["humidity"],
        data["ph"],
        data["rainfall"]
    ]])

    prediction = crop_model.predict(features)

    return jsonify({
        "recommended_crop": prediction[0]
    })


# -----------------------------
# Price Prediction API
# -----------------------------
@app.route("/predict_price", methods=["POST"])
def predict_price():

    data = request.get_json()

    min_price = float(data["min_price"])
    max_price = float(data["max_price"])

    features = np.array([[min_price, max_price]])

    prediction = price_model.predict(features)

    return jsonify({
        "predicted_price": float(prediction[0])
    })


# -----------------------------
# Profit Calculator API
# -----------------------------
@app.route("/profit", methods=["POST"])
def profit():

    data = request.get_json()

    cost = float(data["cost"])
    predicted_price = float(data["predicted_price"])
    quantity = float(data["quantity"])

    profit_value = calculate_profit(cost, predicted_price, quantity)

    return jsonify({
        "profit": profit_value
    })


if __name__ == "__main__":
    app.run(debug=True)