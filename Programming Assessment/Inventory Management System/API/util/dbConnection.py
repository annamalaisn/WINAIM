from util.propertyUtil import PropertyUtil
import pymysql


class DBConnection:

    __connection = None

    @staticmethod
    def get_connection():
        if DBConnection.__connection is None:
            try:
                connectionString = PropertyUtil.get_property_string()
                DBConnection.__connection = pymysql.connect(**connectionString)
            except Exception as e:
                print("Database Connection Error !!! ", e)
        return DBConnection.__connection


if DBConnection.get_connection() is not None:
    print("connected", DBConnection.get_connection())
