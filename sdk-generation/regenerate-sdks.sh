#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

REPO_PATH=$DIR/..
SWAGGER_CODEGEN_PATH=$REPO_PATH/../aces-swagger-codegen/modules/swagger-codegen-cli/target

for LANGUAGE in java php go javascript python csharp
do
    rm -rf $REPO_PATH/sdks/$LANGUAGE/
    java -jar $SWAGGER_CODEGEN_PATH/swagger-codegen-cli.jar generate \
        -i $REPO_PATH/aces-encoded-listener-api-swagger.yaml \
        -l $LANGUAGE \
        -o $REPO_PATH/sdks/$LANGUAGE/ \
        -c $DIR/configs/$LANGUAGE.json
done
