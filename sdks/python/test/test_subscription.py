# coding: utf-8

"""
    ACES Listener API

    API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers.   # noqa: E501

    OpenAPI spec version: 1.1.0
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import com.arkaces.aces_listener_api
from com.arkaces.aces_listener_api.models.subscription import Subscription  # noqa: E501
from com.arkaces.aces_listener_api.rest import ApiException


class TestSubscription(unittest.TestCase):
    """Subscription unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testSubscription(self):
        """Test Subscription"""
        # FIXME: construct object with mandatory attributes with example values
        # model = com.arkaces.aces_listener_api.models.subscription.Subscription()  # noqa: E501
        pass


if __name__ == '__main__':
    unittest.main()
