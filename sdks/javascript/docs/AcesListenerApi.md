# AcesListenerApi.AcesListenerApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusGet**](AcesListenerApi.md#statusGet) | **GET** /status | Get Health of node.
[**subscriptionsIdEventsGet**](AcesListenerApi.md#subscriptionsIdEventsGet) | **GET** /subscriptions/{id}/events | List Subscription Events
[**subscriptionsIdGet**](AcesListenerApi.md#subscriptionsIdGet) | **GET** /subscriptions/{id} | Gets Subscription
[**subscriptionsIdResubscribesPost**](AcesListenerApi.md#subscriptionsIdResubscribesPost) | **POST** /subscriptions/{id}/resubscribes | Create a Resubscribe.
[**subscriptionsIdUnsubscribesPost**](AcesListenerApi.md#subscriptionsIdUnsubscribesPost) | **POST** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
[**subscriptionsPost**](AcesListenerApi.md#subscriptionsPost) | **POST** /subscriptions | Registers a subscriber node to receive blockchain events.


<a name="statusGet"></a>
# **statusGet**
> Health statusGet()

Get Health of node.

Get application health information.

### Example
```javascript
var AcesListenerApi = require('aces_listener_api');
var defaultClient = AcesListenerApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AcesListenerApi.AcesListenerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.statusGet(callback);
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
> InlineResponse200 subscriptionsIdEventsGet(id, opts)

List Subscription Events

Gets a page of Subscription Events.

### Example
```javascript
var AcesListenerApi = require('aces_listener_api');
var defaultClient = AcesListenerApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AcesListenerApi.AcesListenerApi();

var id = "id_example"; // String | Subscription Identifier

var opts = { 
  'pageSize': 100, // Number | Number of items to return per page.
  'page': 56, // Number | Zero-offset page number to return.
  'continuation': "continuation_example" // String | Continuation param for fetching next page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscriptionsIdEventsGet(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Identifier | 
 **pageSize** | **Number**| Number of items to return per page. | [optional] [default to 100]
 **page** | **Number**| Zero-offset page number to return. | [optional] 
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
```javascript
var AcesListenerApi = require('aces_listener_api');
var defaultClient = AcesListenerApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AcesListenerApi.AcesListenerApi();

var id = "id_example"; // String | Subscription Identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscriptionsIdGet(id, callback);
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

<a name="subscriptionsIdResubscribesPost"></a>
# **subscriptionsIdResubscribesPost**
> SubscriptionResubscribe subscriptionsIdResubscribesPost(id)

Create a Resubscribe.

Resubscribes an inactive subscription.

### Example
```javascript
var AcesListenerApi = require('aces_listener_api');
var defaultClient = AcesListenerApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AcesListenerApi.AcesListenerApi();

var id = "id_example"; // String | Subscription Identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscriptionsIdResubscribesPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Subscription Identifier | 

### Return type

[**SubscriptionResubscribe**](SubscriptionResubscribe.md)

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
```javascript
var AcesListenerApi = require('aces_listener_api');
var defaultClient = AcesListenerApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AcesListenerApi.AcesListenerApi();

var id = "id_example"; // String | Subscription Identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscriptionsIdUnsubscribesPost(id, callback);
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
> Subscription subscriptionsPost(opts)

Registers a subscriber node to receive blockchain events.

The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener. 

### Example
```javascript
var AcesListenerApi = require('aces_listener_api');
var defaultClient = AcesListenerApi.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AcesListenerApi.AcesListenerApi();

var opts = { 
  'subscriptionRequest': new AcesListenerApi.SubscriptionRequest() // SubscriptionRequest | The request to create a new Subscription.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subscriptionsPost(opts, callback);
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

