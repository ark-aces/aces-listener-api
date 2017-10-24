# Swagger\Client\DefaultApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusGet**](DefaultApi.md#statusGet) | **GET** /status | Get Health of node.
[**subscriptionsIdEventsGet**](DefaultApi.md#subscriptionsIdEventsGet) | **GET** /subscriptions/{id}/events | List Subscription Events
[**subscriptionsIdGet**](DefaultApi.md#subscriptionsIdGet) | **GET** /subscriptions/{id} | Gets Subscription
[**subscriptionsIdUnsubscribesPost**](DefaultApi.md#subscriptionsIdUnsubscribesPost) | **POST** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
[**subscriptionsPost**](DefaultApi.md#subscriptionsPost) | **POST** /subscriptions | Registers a subscriber node to receive blockchain events.


# **statusGet**
> \Swagger\Client\Model\Health statusGet()

Get Health of node.

Get application health information.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi(new \Http\Adapter\Guzzle6\Client());

try {
    $result = $api_instance->statusGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->statusGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\Health**](../Model/Health.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **subscriptionsIdEventsGet**
> \Swagger\Client\Model\InlineResponse200 subscriptionsIdEventsGet($id, $page_size, $page, $continuation)

List Subscription Events

Gets a page of Subscription Events.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi(new \Http\Adapter\Guzzle6\Client());
$id = "id_example"; // string | Subscription Identifier
$page_size = 100; // int | Number of items to return per page.
$page = 56; // int | Zero-offset page number to return.
$continuation = "continuation_example"; // string | Continuation param for fetching next page.

try {
    $result = $api_instance->subscriptionsIdEventsGet($id, $page_size, $page, $continuation);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->subscriptionsIdEventsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier |
 **page_size** | **int**| Number of items to return per page. | [optional] [default to 100]
 **page** | **int**| Zero-offset page number to return. | [optional]
 **continuation** | **string**| Continuation param for fetching next page. | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **subscriptionsIdGet**
> \Swagger\Client\Model\Subscription subscriptionsIdGet($id)

Gets Subscription

Get a Subscription by identifier.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi(new \Http\Adapter\Guzzle6\Client());
$id = "id_example"; // string | Subscription Identifier

try {
    $result = $api_instance->subscriptionsIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->subscriptionsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier |

### Return type

[**\Swagger\Client\Model\Subscription**](../Model/Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **subscriptionsIdUnsubscribesPost**
> \Swagger\Client\Model\SubscriptionUnsubscribe subscriptionsIdUnsubscribesPost($id)

Create an Unsubscription.

Unsubscribes an active Subscription.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi(new \Http\Adapter\Guzzle6\Client());
$id = "id_example"; // string | Subscription Identifier

try {
    $result = $api_instance->subscriptionsIdUnsubscribesPost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->subscriptionsIdUnsubscribesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier |

### Return type

[**\Swagger\Client\Model\SubscriptionUnsubscribe**](../Model/SubscriptionUnsubscribe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **subscriptionsPost**
> \Swagger\Client\Model\Subscription subscriptionsPost($subscription_request)

Registers a subscriber node to receive blockchain events.

The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi(new \Http\Adapter\Guzzle6\Client());
$subscription_request = new \Swagger\Client\Model\SubscriptionRequest(); // \Swagger\Client\Model\SubscriptionRequest | The request to create a new Subscription.

try {
    $result = $api_instance->subscriptionsPost($subscription_request);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->subscriptionsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_request** | [**\Swagger\Client\Model\SubscriptionRequest**](../Model/SubscriptionRequest.md)| The request to create a new Subscription. | [optional]

### Return type

[**\Swagger\Client\Model\Subscription**](../Model/Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

