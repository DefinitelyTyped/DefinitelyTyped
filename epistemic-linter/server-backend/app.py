from flask import Flask, request, jsonify

app = Flask(__name__)

# THE TRUTH TABLE (Mock Database)
VALID_KEYS = {
    "sk_hemingway_001": {"tier": "premium", "expires": "2099-12-31"},
    "sk_torvalds_002": {"tier": "enterprise", "expires": "2099-12-31"}
}

@app.route('/verify', methods=['POST'])
def verify_license():
    data = request.json
    license_key = data.get('license_key')
    
    if license_key in VALID_KEYS:
        return jsonify({
            "status": "valid",
            "tier": VALID_KEYS[license_key]['tier'],
            "signature": "valid_signature_hash_123"
        }), 200

    return jsonify({"status": "invalid", "reason": "Key not found in truth table."}), 403

if __name__ == '__main__':
    print('>>> LICENSE AUTHORITY STARTING ON PORT 5000')
    app.run(port=5000)
