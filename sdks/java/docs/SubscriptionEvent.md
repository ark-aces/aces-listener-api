
# SubscriptionEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Subscription Event identifier |  [optional]
**createdAt** | [**OffsetDateTime**](OffsetDateTime.md) | Date the Subscription Event was created. |  [optional]
**status** | [**StatusEnum**](#StatusEnum) |  |  [optional]
**tries** | **Integer** |  |  [optional]
**transactionId** | **String** | Transaction id blockchain event. |  [optional]
**data** | **String** | Event data encoded as a Json string. |  [optional]


<a name="StatusEnum"></a>
## Enum: StatusEnum
Name | Value
---- | -----
NEW | &quot;new&quot;
DELIVERED | &quot;delivered&quot;
FAILED | &quot;failed&quot;



