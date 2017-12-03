# ArkAces\AcesListenerApi\AcesListenerApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusGet**](AcesListenerApi.md#statusGet) | **GET** /status | Get Health of node.
[**subscriptionsIdEventsGet**](AcesListenerApi.md#subscriptionsIdEventsGet) | **GET** /subscriptions/{id}/events | List Subscription Events
[**subscriptionsIdGet**](AcesListenerApi.md#subscriptionsIdGet) | **GET** /subscriptions/{id} | Gets Subscription
[**subscriptionsIdUnsubscribesPost**](AcesListenerApi.md#subscriptionsIdUnsubscribesPost) | **POST** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
[**subscriptionsPost**](AcesListenerApi.md#subscriptionsPost) | **POST** /subscriptions | Registers a subscriber node to receive blockchain events.


# **statusGet**
> \ArkAces\AcesListenerApi\Model\Health statusGet()

Get Health of node.

Get application health information.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new ArkAces\AcesListenerApi\Api\AcesListenerApi(new \Http\Adapter\Guzzle6\Client());

try {
    $result = $api_instance->statusGet();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AcesListenerApi->statusGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\ArkAces\AcesListenerApi\Model\Health**](../Model/Health.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **subscriptionsIdEventsGet**
> \ArkAces\AcesListenerApi\Model\InlineResponse200 subscriptionsIdEventsGet($id, $pageSize, $page, $continuation)

List Subscription Events

Gets a page of Subscription Events.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new ArkAces\AcesListenerApi\Api\AcesListenerApi(new \Http\Adapter\Guzzle6\Client());
$id = "id_example"; // string | Subscription Identifier
$pageSize = 100; // int | Number of items to return per page.
$page = 56; // int | Zero-offset page number to return.
$continuation = "continuation_example"; // string | Continuation param for fetching next page.

try {
    $result = $api_instance->subscriptionsIdEventsGet($id, $pageSize, $page, $continuation);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AcesListenerApi->subscriptionsIdEventsGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier |
 **pageSize** | **int**| Number of items to return per page. | [optional] [default to 100]
 **page** | **int**| Zero-offset page number to return. | [optional]
 **continuation** | **string**| Continuation param for fetching next page. | [optional]

### Return type

[**\ArkAces\AcesListenerApi\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **subscriptionsIdGet**
> \ArkAces\AcesListenerApi\Model\Subscription subscriptionsIdGet($id)

Gets Subscription

Get a Subscription by identifier.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new ArkAces\AcesListenerApi\Api\AcesListenerApi(new \Http\Adapter\Guzzle6\Client());
$id = "id_example"; // string | Subscription Identifier

try {
    $result = $api_instance->subscriptionsIdGet($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AcesListenerApi->subscriptionsIdGet: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier |

### Return type

[**\ArkAces\AcesListenerApi\Model\Subscription**](../Model/Subscription.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **subscriptionsIdUnsubscribesPost**
> \ArkAces\AcesListenerApi\Model\SubscriptionUnsubscribe subscriptionsIdUnsubscribesPost($id)

Create an Unsubscription.

Unsubscribes an active Subscription.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new ArkAces\AcesListenerApi\Api\AcesListenerApi(new \Http\Adapter\Guzzle6\Client());
$id = "id_example"; // string | Subscription Identifier

try {
    $result = $api_instance->subscriptionsIdUnsubscribesPost($id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AcesListenerApi->subscriptionsIdUnsubscribesPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier |

### Return type

[**\ArkAces\AcesListenerApi\Model\SubscriptionUnsubscribe**](../Model/SubscriptionUnsubscribe.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **subscriptionsPost**
> \ArkAces\AcesListenerApi\Model\Subscription subscriptionsPost($subscriptionRequest)

Registers a subscriber node to receive blockchain events.

The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// Configure HTTP basic authorization: basicAuth
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setUsername('YOUR_USERNAME');
ArkAces\AcesListenerApi\Configuration::getDefaultConfiguration()->setPassword('YOUR_PASSWORD');

$api_instance = new ArkAces\AcesListenerApi\Api\AcesListenerApi(new \Http\Adapter\Guzzle6\Client());
$subscriptionRequest = new \ArkAces\AcesListenerApi\Model\SubscriptionRequest(); // \ArkAces\AcesListenerApi\Model\SubscriptionRequest | The request to create a new Subscription.

try {
    $result = $api_instance->subscriptionsPost($subscriptionRequest);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling AcesListenerApi->subscriptionsPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionRequest** | [**\ArkAces\AcesListenerApi\Model\SubscriptionRequest**](../Model/SubscriptionRequest.md)| The request to create a new Subscription. | [optional]

### Return type

[**\ArkAces\AcesListenerApi\Model\Subscription**](../Model/Subscription.md)

### Authorization

[basicAuth](../../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

