from flask import Flask, request, jsonify
import jwt
import datetime
import os
from database import init_db, get_license

app = Flask(__name__)

# CONFIGURATION
# In production, load this from an environment variable (e.g., os.environ.get('SECRET_KEY'))
SERVER_SECRET_KEY = os.environ.get('EPISTEMIC_SERVER_SECRET', 'epistemic-absolute-truth-key-change-this-in-prod')
ALGORITHM = 'HS256'

# Initialize Database on Start
init_db()

@app.route('/verify', methods=['POST'])
def verify_license():
    data = request.json
    license_key = data.get('license_key')
    
    if not license_key:
        return jsonify({"error": "No key provided"}), 400

    # 1. Consult the Truth Store
    record = get_license(license_key)
    
    if not record:
        return jsonify({"status": "invalid", "reason": "Key unknown to the Authority."}), 403
        
    if record['revoked']:
        return jsonify({"status": "revoked", "reason": "Key has been excommunicated."}), 403

    # 2. Generate the JWT (The "Seal")
    # This token proves the client is authorized for 'expiration' seconds.
    payload = {
        "sub": record['key_id'],       # Subject (Who)
        "tier": record['tier'],        # Clearance Level
        "iat": datetime.datetime.utcnow(),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=7) # Refresh weekly
    }
    
    token = jwt.encode(payload, SERVER_SECRET_KEY, algorithm=ALGORITHM)
    
    return jsonify({
        "status": "active",
        "tier": record['tier'],
        "access_token": token,  # Send this back to client to store in secrets
        "message": "Protocol Accepted. Truth is Verified."
    }), 200

if __name__ == '__main__':
    print('>>> AUTHORITY STARTING ON PORT 5000 (JWT ENABLED)')
    app.run(port=5000, debug=True)
