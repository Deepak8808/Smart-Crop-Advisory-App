import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

# Load dataset
data = pd.read_csv("data/price_dataset.csv")

# Features and target
X = data[['Min Price (Rs./Quintal)', 'Max Price (Rs./Quintal)']]
y = data['Modal Price (Rs./Quintal)']

# Create model
model = LinearRegression()

# Train model
model.fit(X, y)

# Save model
pickle.dump(model, open("models/price_model.pkl", "wb"))

print("Price Model Trained")