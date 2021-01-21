#!/usr/bin/env bash
set -euo pipefail

main() {
  cd "$(dirname "$0")/../.."

  cd src/test/test-plugin
  make -s out/index.js
  cd "$OLDPWD/src/test"
  yarn
  yarn test "$@"
}

main "$@"
