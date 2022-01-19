#!/usr/bin/python3
class Square:
    """We create a new class using the class statement and the name of the class.
    Private instance attribute: size.
    Instantiation with size (no type/value verification).
    """

    def __init__(self, size):
        """Initializes the data."""
        self.__size = size
