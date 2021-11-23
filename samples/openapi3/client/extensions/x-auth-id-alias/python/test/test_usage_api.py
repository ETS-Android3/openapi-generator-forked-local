# coding: utf-8

"""
    OpenAPI Extension x-auth-id-alias

    This specification shows how to use x-auth-id-alias extension for API keys.  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""


import unittest

import x_auth_id_alias
from x_auth_id_alias.api.usage_api import UsageApi  # noqa: E501


class TestUsageApi(unittest.TestCase):
    """UsageApi unit test stubs"""

    def setUp(self):
        self.api = UsageApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_any_key(self):
        """Test case for any_key

        Use any API key  # noqa: E501
        """
        pass

    def test_both_keys(self):
        """Test case for both_keys

        Use both API keys  # noqa: E501
        """
        pass

    def test_key_in_header(self):
        """Test case for key_in_header

        Use API key in header  # noqa: E501
        """
        pass

    def test_key_in_query(self):
        """Test case for key_in_query

        Use API key in query  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
