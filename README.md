# ACES Listener API Specification

The ACES Listener API Specification defines an API interface for
blockchain listeners. Implementations allows transaction events for a blockchain to be 
consumed via a common REST-ful API.

* [ACES Listener API Specification](aces-listener-api-swagger.yaml)


## Implementations

* [ACES Listener Ark](https://github.com/ark-aces/aces-listener-ark)
* [ACES Listener Bitcoin](https://github.com/ark-aces/aces-listener-bitcoin)


## SDKs

* [Java SDK](sdks/java/)
* [Go SDK](sdks/go/)
* [PHP SDK](sdks/php/SwaggerClient-php/)
* [Javascript SDK](sdks/javascript/)
* [Python SDK](sdks/python/)
* [C# SDK](sdks/csharp/)


## Building SDKs

Clone [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) down into an adjacent directory
and build the codegen app:

```
cd ../swagger-codegen/modules/swagger-codegen-cli/
mvn clean package
```

Then run the SDK build script in this repo:

```
sh ./sdk-generation/regenerate.sh
```