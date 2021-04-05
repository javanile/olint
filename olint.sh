#!/usr/bin/env bash

capture_stdout() {
  while IFS= read -r line || [ "$line" ]; do
    time=$(date +%s%N)
    echo "$line"
    echo "O ${time} ${line}" >> output
  done
}

capture_stderr() {
  while IFS= read -r line || [ "$line" ]; do
    time=$(date +%s%N)
    >&2 echo "$line"
    echo "E ${time} ${line}" >> output
  done
}

[ -f output ] && rm -f output

olint_exec() {
  #echo "[olint] Open stdout."
  #>&2 echo "[olint] Open stderr."
  eval "$@"
  #echo "[olint] Close stdout."
  #>&2 echo "[olint] Close stderr."
}

olint_exec "$@" > >(capture_stdout) 2> >(capture_stderr)

sleep 1
