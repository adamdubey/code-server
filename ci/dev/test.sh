#!/usr/bin/env bash
set -euo pipefail

main() {
  cd "$(dirname "$0")/../.."

  pushd test/test-plugin
  make -s out/index.js
  popd

  # We must keep jest in a sub-directory. See ../../test/package.json for more
  # information. We must also run it from the root otherwise coverage will not
  # include our source files.
  ./test/node_modules/.bin/jest "$@"
}

main "$@"
