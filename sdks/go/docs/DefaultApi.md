# \DefaultApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**StatusGet**](DefaultApi.md#StatusGet) | **Get** /status | Get Health of node.
[**SubscriptionsIdEventsGet**](DefaultApi.md#SubscriptionsIdEventsGet) | **Get** /subscriptions/{id}/events | List Subscription Events
[**SubscriptionsIdGet**](DefaultApi.md#SubscriptionsIdGet) | **Get** /subscriptions/{id} | Gets Subscription
[**SubscriptionsIdUnsubscribesPost**](DefaultApi.md#SubscriptionsIdUnsubscribesPost) | **Post** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
[**SubscriptionsPost**](DefaultApi.md#SubscriptionsPost) | **Post** /subscriptions | Registers a subscriber node to receive blockchain events.


# **StatusGet**
> Health StatusGet()
Get Health of node.

Get application health information.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**Health**](Health.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubscriptionsIdEventsGet**
> InlineResponse200 SubscriptionsIdEventsGet(id, optional)
List Subscription Events

Gets a page of Subscription Events.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **id** | **string**| Subscription Identifier | 
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Subscription Identifier | 
 **pageSize** | **int32**| Number of items to return per page. | [default to 100]
 **page** | **int32**| Zero-offset page number to return. | 
 **continuation** | **string**| Continuation param for fetching next page. | 

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubscriptionsIdGet**
> Subscription SubscriptionsIdGet(id)
Gets Subscription

Get a Subscription by identifier.

### Required Parameters

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

# **SubscriptionsIdUnsubscribesPost**
> SubscriptionUnsubscribe SubscriptionsIdUnsubscribesPost(id)
Create an Unsubscription.

Unsubscribes an active Subscription.

### Required Parameters

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

# **SubscriptionsPost**
> Subscription SubscriptionsPost(optional)
Registers a subscriber node to receive blockchain events.

The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionRequest** | [**SubscriptionRequest**](SubscriptionRequest.md)| The request to create a new Subscription. | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

