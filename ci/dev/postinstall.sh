#!/usr/bin/env bash
set -euo pipefail

main() {
  cd "$(dirname "$0")/../.."
  source ./ci/lib.sh

  pushd lib/vscode
  yarn ${CI+--frozen-lockfile}
  symlink_asar
  popd

  pushd test
  yarn ${CI+--frozen-lockfile}
  popd
}

main "$@"
