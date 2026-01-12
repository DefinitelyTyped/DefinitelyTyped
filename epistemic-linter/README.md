# Epistemic Linter

## The Philosophy
An extension to verify the rigour of text.

## Architecture
- **Client**: TypeScript VS Code Extension. Handles "Linting" and "UI".
- **Server**: Python Flask API. Handles "Verification" and "Anti-Scheming".

## Quickstart (prototype)
1. Start the license server:
   - `python3 server-backend/app.py`
2. In a separate shell (after building the extension), run the extension host or install the extension to test the Activate License command and verify behavior.

This scaffold is intentionally minimal: the real implementation should add tests, a proper license DB, secure JWT issuance, and production-grade webhook validation.
