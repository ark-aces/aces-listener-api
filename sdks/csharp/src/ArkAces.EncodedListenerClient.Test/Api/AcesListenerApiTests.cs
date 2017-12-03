/* 
 * ACES Listener API
 *
 * API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using ArkAces.EncodedListenerClient.Client;
using ArkAces.EncodedListenerClient.Api;
using ArkAces.EncodedListenerClient.Model;

namespace ArkAces.EncodedListenerClient.Test
{
    /// <summary>
    ///  Class for testing AcesListenerApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class AcesListenerApiTests
    {
        private AcesListenerApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new AcesListenerApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of AcesListenerApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' AcesListenerApi
            //Assert.IsInstanceOfType(typeof(AcesListenerApi), instance, "instance is a AcesListenerApi");
        }

        
        /// <summary>
        /// Test StatusGet
        /// </summary>
        [Test]
        public void StatusGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.StatusGet();
            //Assert.IsInstanceOf<Health> (response, "response is Health");
        }
        
        /// <summary>
        /// Test SubscriptionsIdEventsGet
        /// </summary>
        [Test]
        public void SubscriptionsIdEventsGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //int? pageSize = null;
            //int? page = null;
            //string continuation = null;
            //var response = instance.SubscriptionsIdEventsGet(id, pageSize, page, continuation);
            //Assert.IsInstanceOf<InlineResponse200> (response, "response is InlineResponse200");
        }
        
        /// <summary>
        /// Test SubscriptionsIdGet
        /// </summary>
        [Test]
        public void SubscriptionsIdGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //var response = instance.SubscriptionsIdGet(id);
            //Assert.IsInstanceOf<Subscription> (response, "response is Subscription");
        }
        
        /// <summary>
        /// Test SubscriptionsIdUnsubscribesPost
        /// </summary>
        [Test]
        public void SubscriptionsIdUnsubscribesPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //var response = instance.SubscriptionsIdUnsubscribesPost(id);
            //Assert.IsInstanceOf<SubscriptionUnsubscribe> (response, "response is SubscriptionUnsubscribe");
        }
        
        /// <summary>
        /// Test SubscriptionsPost
        /// </summary>
        [Test]
        public void SubscriptionsPostTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //SubscriptionRequest subscriptionRequest = null;
            //var response = instance.SubscriptionsPost(subscriptionRequest);
            //Assert.IsInstanceOf<Subscription> (response, "response is Subscription");
        }
        
    }

}