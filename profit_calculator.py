def calculate_profit(cost, predicted_price, quantity):

    revenue = predicted_price * quantity
    profit = revenue - cost

    return profit