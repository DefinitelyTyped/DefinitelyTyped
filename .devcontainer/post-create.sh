#!/usr/bin/env bash
set -euo pipefail
export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get install -y --no-install-recommends \
  pandoc \
  texlive-latex-recommended \
  texlive-latex-extra \
  texlive-fonts-recommended \
  wget \
  ca-certificates

python -m pip install --upgrade pip
if [ -f "$(pwd)/requirements.txt" ]; then
  python -m pip install -r "$(pwd)/requirements.txt"
fi
