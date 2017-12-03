# \AcesListenerApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**StatusGet**](AcesListenerApi.md#StatusGet) | **Get** /status | Get Health of node.
[**SubscriptionsIdEventsGet**](AcesListenerApi.md#SubscriptionsIdEventsGet) | **Get** /subscriptions/{id}/events | List Subscription Events
[**SubscriptionsIdGet**](AcesListenerApi.md#SubscriptionsIdGet) | **Get** /subscriptions/{id} | Gets Subscription
[**SubscriptionsIdUnsubscribesPost**](AcesListenerApi.md#SubscriptionsIdUnsubscribesPost) | **Post** /subscriptions/{id}/unsubscribes | Create an Unsubscription.
[**SubscriptionsPost**](AcesListenerApi.md#SubscriptionsPost) | **Post** /subscriptions | Registers a subscriber node to receive blockchain events.


# **StatusGet**
> Health StatusGet(ctx, )
Get Health of node.

Get application health information.

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**Health**](Health.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubscriptionsIdEventsGet**
> InlineResponse200 SubscriptionsIdEventsGet(ctx, id, optional)
List Subscription Events

Gets a page of Subscription Events.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context containing the authentication | nil if no authentication
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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubscriptionsIdGet**
> Subscription SubscriptionsIdGet(ctx, id)
Gets Subscription

Get a Subscription by identifier.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context containing the authentication | nil if no authentication
  **id** | **string**| Subscription Identifier | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubscriptionsIdUnsubscribesPost**
> SubscriptionUnsubscribe SubscriptionsIdUnsubscribesPost(ctx, id)
Create an Unsubscription.

Unsubscribes an active Subscription.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context containing the authentication | nil if no authentication
  **id** | **string**| Subscription Identifier | 

### Return type

[**SubscriptionUnsubscribe**](SubscriptionUnsubscribe.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SubscriptionsPost**
> Subscription SubscriptionsPost(ctx, optional)
Registers a subscriber node to receive blockchain events.

The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context containing the authentication | nil if no authentication
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionRequest** | [**SubscriptionRequest**](SubscriptionRequest.md)| The request to create a new Subscription. | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

