# io.arkaces.encoded_listener_client.AcesListenerApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**status_get**](AcesListenerApi.md#status_get) | **GET** /status | Get Health of node.
[**subscriptions_id_events_get**](AcesListenerApi.md#subscriptions_id_events_get) | **GET** /subscriptions/{id}/events | List Subscription Events
[**subscriptions_id_get**](AcesListenerApi.md#subscriptions_id_get) | **GET** /subscriptions/{id} | Gets Subscription
[**subscriptions_id_unsubscribes_post**](AcesListenerApi.md#subscriptions_id_unsubscribes_post) | **POST** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
[**subscriptions_post**](AcesListenerApi.md#subscriptions_post) | **POST** /subscriptions | Registers a subscriber node to receive blockchain events.


# **status_get**
> Health status_get()

Get Health of node.

Get application health information.

### Example 
```python
from __future__ import print_function
import time
import io.arkaces.encoded_listener_client
from io.arkaces.encoded_listener_client.rest import ApiException
from pprint import pprint

# Configure HTTP basic authorization: basicAuth
configuration = io.arkaces.encoded_listener_client.Configuration()
configuration.username = 'YOUR_USERNAME'
configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = io.arkaces.encoded_listener_client.AcesListenerApi(io.arkaces.encoded_listener_client.ApiClient(configuration))

try: 
    # Get Health of node.
    api_response = api_instance.status_get()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AcesListenerApi->status_get: %s\n" % e)
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_id_events_get**
> InlineResponse200 subscriptions_id_events_get(id, page_size=page_size, page=page, continuation=continuation)

List Subscription Events

Gets a page of Subscription Events.

### Example 
```python
from __future__ import print_function
import time
import io.arkaces.encoded_listener_client
from io.arkaces.encoded_listener_client.rest import ApiException
from pprint import pprint

# Configure HTTP basic authorization: basicAuth
configuration = io.arkaces.encoded_listener_client.Configuration()
configuration.username = 'YOUR_USERNAME'
configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = io.arkaces.encoded_listener_client.AcesListenerApi(io.arkaces.encoded_listener_client.ApiClient(configuration))
id = 'id_example' # str | Subscription Identifier
page_size = 100 # int | Number of items to return per page. (optional) (default to 100)
page = 56 # int | Zero-offset page number to return. (optional)
continuation = 'continuation_example' # str | Continuation param for fetching next page. (optional)

try: 
    # List Subscription Events
    api_response = api_instance.subscriptions_id_events_get(id, page_size=page_size, page=page, continuation=continuation)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AcesListenerApi->subscriptions_id_events_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Subscription Identifier | 
 **page_size** | **int**| Number of items to return per page. | [optional] [default to 100]
 **page** | **int**| Zero-offset page number to return. | [optional] 
 **continuation** | **str**| Continuation param for fetching next page. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_id_get**
> Subscription subscriptions_id_get(id)

Gets Subscription

Get a Subscription by identifier.

### Example 
```python
from __future__ import print_function
import time
import io.arkaces.encoded_listener_client
from io.arkaces.encoded_listener_client.rest import ApiException
from pprint import pprint

# Configure HTTP basic authorization: basicAuth
configuration = io.arkaces.encoded_listener_client.Configuration()
configuration.username = 'YOUR_USERNAME'
configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = io.arkaces.encoded_listener_client.AcesListenerApi(io.arkaces.encoded_listener_client.ApiClient(configuration))
id = 'id_example' # str | Subscription Identifier

try: 
    # Gets Subscription
    api_response = api_instance.subscriptions_id_get(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AcesListenerApi->subscriptions_id_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Subscription Identifier | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_id_unsubscribes_post**
> SubscriptionUnsubscribe subscriptions_id_unsubscribes_post(id)

Create an Unsubscription.

Unsubscribes an active Subscription.

### Example 
```python
from __future__ import print_function
import time
import io.arkaces.encoded_listener_client
from io.arkaces.encoded_listener_client.rest import ApiException
from pprint import pprint

# Configure HTTP basic authorization: basicAuth
configuration = io.arkaces.encoded_listener_client.Configuration()
configuration.username = 'YOUR_USERNAME'
configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = io.arkaces.encoded_listener_client.AcesListenerApi(io.arkaces.encoded_listener_client.ApiClient(configuration))
id = 'id_example' # str | Subscription Identifier

try: 
    # Create an Unsubscription.
    api_response = api_instance.subscriptions_id_unsubscribes_post(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AcesListenerApi->subscriptions_id_unsubscribes_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Subscription Identifier | 

### Return type

[**SubscriptionUnsubscribe**](SubscriptionUnsubscribe.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_post**
> Subscription subscriptions_post(subscription_request=subscription_request)

Registers a subscriber node to receive blockchain events.

The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener. 

### Example 
```python
from __future__ import print_function
import time
import io.arkaces.encoded_listener_client
from io.arkaces.encoded_listener_client.rest import ApiException
from pprint import pprint

# Configure HTTP basic authorization: basicAuth
configuration = io.arkaces.encoded_listener_client.Configuration()
configuration.username = 'YOUR_USERNAME'
configuration.password = 'YOUR_PASSWORD'

# create an instance of the API class
api_instance = io.arkaces.encoded_listener_client.AcesListenerApi(io.arkaces.encoded_listener_client.ApiClient(configuration))
subscription_request = io.arkaces.encoded_listener_client.SubscriptionRequest() # SubscriptionRequest | The request to create a new Subscription. (optional)

try: 
    # Registers a subscriber node to receive blockchain events.
    api_response = api_instance.subscriptions_post(subscription_request=subscription_request)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AcesListenerApi->subscriptions_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_request** | [**SubscriptionRequest**](SubscriptionRequest.md)| The request to create a new Subscription. | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

