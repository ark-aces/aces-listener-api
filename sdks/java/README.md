# encoded-listener-client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>io.arkaces</groupId>
    <artifactId>encoded-listener-client</artifactId>
    <version>1.0.0</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.arkaces:encoded-listener-client:1.0.0"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/encoded-listener-client-1.0.0.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import io.arkaces.*;
import io.arkaces.auth.*;
import io.swagger.client.model.*;
import io.arkaces.encoded_listener_client.AcesListenerApi;

import java.io.File;
import java.util.*;

public class AcesListenerApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        
        // Configure HTTP basic authorization: basicAuth
        HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
        basicAuth.setUsername("YOUR USERNAME");
        basicAuth.setPassword("YOUR PASSWORD");

        AcesListenerApi apiInstance = new AcesListenerApi();
        try {
            Health result = apiInstance.statusGet();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AcesListenerApi#statusGet");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AcesListenerApi* | [**statusGet**](docs/AcesListenerApi.md#statusGet) | **GET** /status | Get Health of node.
*AcesListenerApi* | [**subscriptionsIdEventsGet**](docs/AcesListenerApi.md#subscriptionsIdEventsGet) | **GET** /subscriptions/{id}/events | List Subscription Events
*AcesListenerApi* | [**subscriptionsIdGet**](docs/AcesListenerApi.md#subscriptionsIdGet) | **GET** /subscriptions/{id} | Gets Subscription
*AcesListenerApi* | [**subscriptionsIdUnsubscribesPost**](docs/AcesListenerApi.md#subscriptionsIdUnsubscribesPost) | **POST** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
*AcesListenerApi* | [**subscriptionsPost**](docs/AcesListenerApi.md#subscriptionsPost) | **POST** /subscriptions | Registers a subscriber node to receive blockchain events.


## Documentation for Models

 - [FieldError](docs/FieldError.md)
 - [Health](docs/Health.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [NotFoundError](docs/NotFoundError.md)
 - [Subscription](docs/Subscription.md)
 - [SubscriptionEvent](docs/SubscriptionEvent.md)
 - [SubscriptionRequest](docs/SubscriptionRequest.md)
 - [SubscriptionUnsubscribe](docs/SubscriptionUnsubscribe.md)
 - [ValidationError](docs/ValidationError.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### basicAuth

- **Type**: HTTP basic authentication


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



