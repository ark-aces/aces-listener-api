# IO.Swagger.Api.DefaultApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**StatusGet**](DefaultApi.md#statusget) | **GET** /status | Get Health of node.
[**SubscriptionsIdEventsGet**](DefaultApi.md#subscriptionsideventsget) | **GET** /subscriptions/{id}/events | List Subscription Events
[**SubscriptionsIdGet**](DefaultApi.md#subscriptionsidget) | **GET** /subscriptions/{id} | Gets Subscription
[**SubscriptionsIdUnsubscribesPost**](DefaultApi.md#subscriptionsidunsubscribespost) | **POST** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
[**SubscriptionsPost**](DefaultApi.md#subscriptionspost) | **POST** /subscriptions | Registers a subscriber node to receive blockchain events.


<a name="statusget"></a>
# **StatusGet**
> Health StatusGet ()

Get Health of node.

Get application health information.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class StatusGetExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // Get Health of node.
                Health result = apiInstance.StatusGet();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.StatusGet: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Health**](Health.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="subscriptionsideventsget"></a>
# **SubscriptionsIdEventsGet**
> InlineResponse200 SubscriptionsIdEventsGet (string id, int? pageSize = null, int? page = null, string continuation = null)

List Subscription Events

Gets a page of Subscription Events.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SubscriptionsIdEventsGetExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var id = id_example;  // string | Subscription Identifier
            var pageSize = 56;  // int? | Number of items to return per page. (optional)  (default to 100)
            var page = 56;  // int? | Zero-offset page number to return. (optional) 
            var continuation = continuation_example;  // string | Continuation param for fetching next page. (optional) 

            try
            {
                // List Subscription Events
                InlineResponse200 result = apiInstance.SubscriptionsIdEventsGet(id, pageSize, page, continuation);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.SubscriptionsIdEventsGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier | 
 **pageSize** | **int?**| Number of items to return per page. | [optional] [default to 100]
 **page** | **int?**| Zero-offset page number to return. | [optional] 
 **continuation** | **string**| Continuation param for fetching next page. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="subscriptionsidget"></a>
# **SubscriptionsIdGet**
> Subscription SubscriptionsIdGet (string id)

Gets Subscription

Get a Subscription by identifier.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SubscriptionsIdGetExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var id = id_example;  // string | Subscription Identifier

            try
            {
                // Gets Subscription
                Subscription result = apiInstance.SubscriptionsIdGet(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.SubscriptionsIdGet: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="subscriptionsidunsubscribespost"></a>
# **SubscriptionsIdUnsubscribesPost**
> SubscriptionUnsubscribe SubscriptionsIdUnsubscribesPost (string id)

Create an Unsubscription.

Unsubscribes an active Subscription.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SubscriptionsIdUnsubscribesPostExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var id = id_example;  // string | Subscription Identifier

            try
            {
                // Create an Unsubscription.
                SubscriptionUnsubscribe result = apiInstance.SubscriptionsIdUnsubscribesPost(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.SubscriptionsIdUnsubscribesPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier | 

### Return type

[**SubscriptionUnsubscribe**](SubscriptionUnsubscribe.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="subscriptionspost"></a>
# **SubscriptionsPost**
> Subscription SubscriptionsPost (SubscriptionRequest subscriptionRequest = null)

Registers a subscriber node to receive blockchain events.

The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener. 

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SubscriptionsPostExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var subscriptionRequest = new SubscriptionRequest(); // SubscriptionRequest | The request to create a new Subscription. (optional) 

            try
            {
                // Registers a subscriber node to receive blockchain events.
                Subscription result = apiInstance.SubscriptionsPost(subscriptionRequest);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.SubscriptionsPost: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionRequest** | [**SubscriptionRequest**](SubscriptionRequest.md)| The request to create a new Subscription. | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

