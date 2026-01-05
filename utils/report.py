import pandas as pd
import os
from datetime import datetime

def generate_report(prompt: str, responses: dict):
    os.makedirs("data/comparision_reports", exist_ok=True)

    rows = []
    for model, output in responses.items():
        rows.append({
            "Model": model,
            "Prompt": prompt,
            "Response": output,
            "Timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        })

    df = pd.DataFrame(rows)
    path = "data/comparision_reports/report.csv"
    df.to_csv(path, index=False)

    return path