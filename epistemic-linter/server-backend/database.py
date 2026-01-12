import sqlite3
from datetime import datetime

DB_PATH = "licenses.db"

def init_db():
    """Initializes the truth store if it does not exist."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Create the License Table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS licenses (
            key_id TEXT PRIMARY KEY,
            tier TEXT NOT NULL,
            email TEXT,
            created_at TIMESTAMP,
            revoked BOOLEAN DEFAULT 0
        )
    ''')
    
    # Seed with demo keys
    try:
        cursor.execute("INSERT INTO licenses VALUES (?, ?, ?, ?, ?)", 
                      ("sk_hemingway_001", "premium", "ernest@write.com", datetime.now(), 0))
        cursor.execute("INSERT INTO licenses VALUES (?, ?, ?, ?, ?)", 
                      ("sk_torvalds_002", "enterprise", "linus@linux.org", datetime.now(), 0))
        print(">>> TRUTH STORE SEEDED.")
    except sqlite3.IntegrityError:
        print(">>> TRUTH STORE ALREADY EXISTS.")
        
    conn.commit()
    conn.close()


def get_license(key_id):
    """Retrieves a license record."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM licenses WHERE key_id = ?", (key_id,))
    row = cursor.fetchone()
    conn.close()
    return dict(row) if row else None
