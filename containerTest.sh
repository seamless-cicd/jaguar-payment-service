#!/bin/sh

docker build . -t payment-testing -f Dockerfile.testing

docker run payment-testing

EXIT_CODE=$?

echo "==> EXIT CODE <=="
echo $EXIT_CODE

if [ $EXIT_CODE -eq 0 ]; then
  echo "In Docker, an exit code of 0 indicates that the container exited without any errors. Specifically, an exit code of 0 means that the main process inside the container completed successfully and exited without any errors."
else
  echo "Container exited with an error. Research above error code."
fi

