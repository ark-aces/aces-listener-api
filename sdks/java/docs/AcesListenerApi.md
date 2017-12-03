# AcesListenerApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusGet**](AcesListenerApi.md#statusGet) | **GET** /status | Get Health of node.
[**subscriptionsIdEventsGet**](AcesListenerApi.md#subscriptionsIdEventsGet) | **GET** /subscriptions/{id}/events | List Subscription Events
[**subscriptionsIdGet**](AcesListenerApi.md#subscriptionsIdGet) | **GET** /subscriptions/{id} | Gets Subscription
[**subscriptionsIdUnsubscribesPost**](AcesListenerApi.md#subscriptionsIdUnsubscribesPost) | **POST** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
[**subscriptionsPost**](AcesListenerApi.md#subscriptionsPost) | **POST** /subscriptions | Registers a subscriber node to receive blockchain events.


<a name="statusGet"></a>
# **statusGet**
> Health statusGet()

Get Health of node.

Get application health information.

### Example
```java
// Import classes:
//import io.arkaces.ApiClient;
//import io.arkaces.ApiException;
//import io.arkaces.Configuration;
//import io.arkaces.auth.*;
//import io.arkaces.encoded_listener_client.AcesListenerApi;

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
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Health**](Health.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionsIdEventsGet"></a>
# **subscriptionsIdEventsGet**
> InlineResponse200 subscriptionsIdEventsGet(id, pageSize, page, continuation)

List Subscription Events

Gets a page of Subscription Events.

### Example
```java
// Import classes:
//import io.arkaces.ApiClient;
//import io.arkaces.ApiException;
//import io.arkaces.Configuration;
//import io.arkaces.auth.*;
//import io.arkaces.encoded_listener_client.AcesListenerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: basicAuth
HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
basicAuth.setUsername("YOUR USERNAME");
basicAuth.setPassword("YOUR PASSWORD");

AcesListenerApi apiInstance = new AcesListenerApi();
String id = "id_example"; // String | Subscription Identifier
Integer pageSize = 100; // Integer | Number of items to return per page.
Integer page = 56; // Integer | Zero-offset page number to return.
String continuation = "continuation_example"; // String | Continuation param for fetching next page.
try {
    InlineResponse200 result = apiInstance.subscriptionsIdEventsGet(id, pageSize, page, continuation);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AcesListenerApi#subscriptionsIdEventsGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Identifier |
 **pageSize** | **Integer**| Number of items to return per page. | [optional] [default to 100]
 **page** | **Integer**| Zero-offset page number to return. | [optional]
 **continuation** | **String**| Continuation param for fetching next page. | [optional]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionsIdGet"></a>
# **subscriptionsIdGet**
> Subscription subscriptionsIdGet(id)

Gets Subscription

Get a Subscription by identifier.

### Example
```java
// Import classes:
//import io.arkaces.ApiClient;
//import io.arkaces.ApiException;
//import io.arkaces.Configuration;
//import io.arkaces.auth.*;
//import io.arkaces.encoded_listener_client.AcesListenerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: basicAuth
HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
basicAuth.setUsername("YOUR USERNAME");
basicAuth.setPassword("YOUR PASSWORD");

AcesListenerApi apiInstance = new AcesListenerApi();
String id = "id_example"; // String | Subscription Identifier
try {
    Subscription result = apiInstance.subscriptionsIdGet(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AcesListenerApi#subscriptionsIdGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Identifier |

### Return type

[**Subscription**](Subscription.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionsIdUnsubscribesPost"></a>
# **subscriptionsIdUnsubscribesPost**
> SubscriptionUnsubscribe subscriptionsIdUnsubscribesPost(id)

Create an Unsubscription.

Unsubscribes an active Subscription.

### Example
```java
// Import classes:
//import io.arkaces.ApiClient;
//import io.arkaces.ApiException;
//import io.arkaces.Configuration;
//import io.arkaces.auth.*;
//import io.arkaces.encoded_listener_client.AcesListenerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: basicAuth
HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
basicAuth.setUsername("YOUR USERNAME");
basicAuth.setPassword("YOUR PASSWORD");

AcesListenerApi apiInstance = new AcesListenerApi();
String id = "id_example"; // String | Subscription Identifier
try {
    SubscriptionUnsubscribe result = apiInstance.subscriptionsIdUnsubscribesPost(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AcesListenerApi#subscriptionsIdUnsubscribesPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Identifier |

### Return type

[**SubscriptionUnsubscribe**](SubscriptionUnsubscribe.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="subscriptionsPost"></a>
# **subscriptionsPost**
> Subscription subscriptionsPost(subscriptionRequest)

Registers a subscriber node to receive blockchain events.

The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener. 

### Example
```java
// Import classes:
//import io.arkaces.ApiClient;
//import io.arkaces.ApiException;
//import io.arkaces.Configuration;
//import io.arkaces.auth.*;
//import io.arkaces.encoded_listener_client.AcesListenerApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure HTTP basic authorization: basicAuth
HttpBasicAuth basicAuth = (HttpBasicAuth) defaultClient.getAuthentication("basicAuth");
basicAuth.setUsername("YOUR USERNAME");
basicAuth.setPassword("YOUR PASSWORD");

AcesListenerApi apiInstance = new AcesListenerApi();
SubscriptionRequest subscriptionRequest = new SubscriptionRequest(); // SubscriptionRequest | The request to create a new Subscription.
try {
    Subscription result = apiInstance.subscriptionsPost(subscriptionRequest);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AcesListenerApi#subscriptionsPost");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionRequest** | [**SubscriptionRequest**](SubscriptionRequest.md)| The request to create a new Subscription. | [optional]

### Return type

[**Subscription**](Subscription.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

