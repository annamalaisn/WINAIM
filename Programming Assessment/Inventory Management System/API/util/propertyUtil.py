import configparser
import json


class PropertyUtil:
    @staticmethod
    def get_property_string():
        f = open('../connection.json')
        prop = json.load(f)

        return {'host': prop['hostname'],
                'database': prop['dbname'],
                'user': prop['username'],
                'password': prop['password'],
                'port': int(prop['port'])
                }
'''
    @staticmethod
    def get_property_string():
        parser = configparser.ConfigParser()
        parser.read("connection.properties")
        hostname = parser['Database']['hostname']
        dbname = parser['Database']['dbname']
        username = parser['Database']['username']
        password = parser['Database']['password']
        port = parser['Database']['port']

        return {'host': hostname,
                'database': dbname,
                'user': username,
                'password': password,
                'port': int(port)
                }
'''
#print(PropertyUtil.get_property_string())