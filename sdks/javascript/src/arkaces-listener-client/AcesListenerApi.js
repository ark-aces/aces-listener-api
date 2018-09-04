/**
 * ACES Listener API
 * API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Health', 'model/InlineResponse200', 'model/NotFoundError', 'model/Subscription', 'model/SubscriptionRequest', 'model/SubscriptionResubscribe', 'model/SubscriptionUnsubscribe', 'model/ValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Health'), require('../model/InlineResponse200'), require('../model/NotFoundError'), require('../model/Subscription'), require('../model/SubscriptionRequest'), require('../model/SubscriptionResubscribe'), require('../model/SubscriptionUnsubscribe'), require('../model/ValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.AcesListenerApi) {
      root.AcesListenerApi = {};
    }
    root.AcesListenerApi.AcesListenerApi = factory(root.AcesListenerApi.ApiClient, root.AcesListenerApi.Health, root.AcesListenerApi.InlineResponse200, root.AcesListenerApi.NotFoundError, root.AcesListenerApi.Subscription, root.AcesListenerApi.SubscriptionRequest, root.AcesListenerApi.SubscriptionResubscribe, root.AcesListenerApi.SubscriptionUnsubscribe, root.AcesListenerApi.ValidationError);
  }
}(this, function(ApiClient, Health, InlineResponse200, NotFoundError, Subscription, SubscriptionRequest, SubscriptionResubscribe, SubscriptionUnsubscribe, ValidationError) {
  'use strict';

  /**
   * AcesListener service.
   * @module arkaces-listener-client/AcesListenerApi
   * @version 1.1.0
   */

  /**
   * Constructs a new AcesListenerApi. 
   * @alias module:arkaces-listener-client/AcesListenerApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the statusGet operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~statusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Health} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Health of node.
     * Get application health information.
     * @param {module:arkaces-listener-client/AcesListenerApi~statusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Health}
     */
    this.statusGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Health;

      return this.apiClient.callApi(
        '/status', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdEventsGet operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Subscription Events
     * Gets a page of Subscription Events.
     * @param {String} id Subscription Identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Number of items to return per page. (default to 100)
     * @param {Number} opts.page Zero-offset page number to return.
     * @param {String} opts.continuation Continuation param for fetching next page.
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.subscriptionsIdEventsGet = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdEventsGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'page': opts['page'],
        'continuation': opts['continuation'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/subscriptions/{id}/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdGet operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets Subscription
     * Get a Subscription by identifier.
     * @param {String} id Subscription Identifier
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.subscriptionsIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdResubscribesPost operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsIdResubscribesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionResubscribe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Resubscribe.
     * Resubscribes an inactive subscription.
     * @param {String} id Subscription Identifier
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsIdResubscribesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionResubscribe}
     */
    this.subscriptionsIdResubscribesPost = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdResubscribesPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SubscriptionResubscribe;

      return this.apiClient.callApi(
        '/subscriptions/{id}/resubscribes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsIdUnsubscribesPost operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsIdUnsubscribesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SubscriptionUnsubscribe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Unsubscription.
     * Unsubscribes an active Subscription.
     * @param {String} id Subscription Identifier
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsIdUnsubscribesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SubscriptionUnsubscribe}
     */
    this.subscriptionsIdUnsubscribesPost = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling subscriptionsIdUnsubscribesPost");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SubscriptionUnsubscribe;

      return this.apiClient.callApi(
        '/subscriptions/{id}/unsubscribes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the subscriptionsPost operation.
     * @callback module:arkaces-listener-client/AcesListenerApi~subscriptionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registers a subscriber node to receive blockchain events.
     * The Subscribers endpoint allows subscriber to register their node to receive blockchain events from the Encoded Listener. 
     * @param {Object} opts Optional parameters
     * @param {module:model/SubscriptionRequest} opts.subscriptionRequest The request to create a new Subscription.
     * @param {module:arkaces-listener-client/AcesListenerApi~subscriptionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.subscriptionsPost = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['subscriptionRequest'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
