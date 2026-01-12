#!/usr/bin/env bash
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive

# Use sudo if we're not root
SUDO=""
if [ "${EUID:-0}" -ne 0 ]; then
  if command -v sudo >/dev/null 2>&1; then
    SUDO="sudo"
  else
    echo "Error: this script requires root privileges or sudo." >&2
    exit 1
  fi
fi

$SUDO apt-get update
$SUDO apt-get install -y --no-install-recommends \
  pandoc \
  texlive-latex-recommended \
  texlive-latex-extra \
  texlive-fonts-recommended \
  wget \
  ca-certificates

# Install/upgrade pip in user space to avoid permission issues
python -m pip install --upgrade --user pip || true
if [ -f "$(pwd)/requirements.txt" ]; then
  python -m pip install --user -r "$(pwd)/requirements.txt"
fi
