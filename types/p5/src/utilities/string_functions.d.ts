// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Combines an array of Strings into one String, each
         *   separated by the character(s) used for the
         *   separator parameter. To join arrays of ints or
         *   floats, it's necessary to first convert them to
         *   Strings using nf() or nfs().
         *   @param list array of Strings to be joined
         *   @param separator String to be placed between each
         *   item
         *   @return joined String
         */
        join(list: any[], separator: string): string;

        /**
         *   This function is used to apply a regular
         *   expression to a piece of text, and return matching
         *   groups (elements found inside parentheses) as a
         *   String array. If there are no matches, a null
         *   value will be returned. If no groups are specified
         *   in the regular expression, but the sequence
         *   matches, an array of length 1 (with the matched
         *   text as the first element of the array) will be
         *   returned.  To use the function, first check to see
         *   if the result is null. If the result is null, then
         *   the sequence did not match at all. If the sequence
         *   did match, an array is returned.
         *
         *
         *   If there are groups (specified by sets of
         *   parentheses) in the regular expression, then the
         *   contents of each will be returned in the array.
         *   Element [0] of a regular expression match returns
         *   the entire matching string, and the match groups
         *   start at element [1] (the first group is [1], the
         *   second [2], and so on).
         *   @param str the String to be searched
         *   @param regexp the regexp to be used for matching
         *   @return Array of Strings found
         */
        match(str: string, regexp: string): string[];

        /**
         *   This function is used to apply a regular
         *   expression to a piece of text, and return a list
         *   of matching groups (elements found inside
         *   parentheses) as a two-dimensional String array. If
         *   there are no matches, a null value will be
         *   returned. If no groups are specified in the
         *   regular expression, but the sequence matches, a
         *   two dimensional array is still returned, but the
         *   second dimension is only of length one.  To use
         *   the function, first check to see if the result is
         *   null. If the result is null, then the sequence did
         *   not match at all. If the sequence did match, a 2D
         *   array is returned.
         *
         *
         *   If there are groups (specified by sets of
         *   parentheses) in the regular expression, then the
         *   contents of each will be returned in the array.
         *   Assuming a loop with counter variable i, element
         *   [i][0] of a regular expression match returns the
         *   entire matching string, and the match groups start
         *   at element [i][1] (the first group is [i][1], the
         *   second [i][2], and so on).
         *   @param str the String to be searched
         *   @param regexp the regexp to be used for matching
         *   @return 2d Array of Strings found
         */
        matchAll(str: string, regexp: string): string[];

        /**
         *   Utility function for formatting numbers into
         *   strings. There are two versions: one for
         *   formatting floats, and one for formatting ints.
         *   The values for the digits, left, and right
         *   parameters should always be positive integers.
         *   (NOTE): Be cautious when using left and right
         *   parameters as it prepends numbers of 0's if the
         *   parameter if greater than the current length of
         *   the number. For example if number is 123.2 and
         *   left parameter passed is 4 which is greater than
         *   length of 123 (integer part) i.e 3 than result
         *   will be 0123.2. Same case for right parameter i.e.
         *   if right is 3 than the result will be 123.200.
         *   @param num the Number to format
         *   @param [left] number of digits to the left of the
         *   decimal point
         *   @param [right] number of digits to the right of
         *   the decimal point
         *   @return formatted String
         */
        nf(num: number | string, left?: number | string, right?: number | string): string;

        /**
         *   Utility function for formatting numbers into
         *   strings. There are two versions: one for
         *   formatting floats, and one for formatting ints.
         *   The values for the digits, left, and right
         *   parameters should always be positive integers.
         *   (NOTE): Be cautious when using left and right
         *   parameters as it prepends numbers of 0's if the
         *   parameter if greater than the current length of
         *   the number. For example if number is 123.2 and
         *   left parameter passed is 4 which is greater than
         *   length of 123 (integer part) i.e 3 than result
         *   will be 0123.2. Same case for right parameter i.e.
         *   if right is 3 than the result will be 123.200.
         *   @param nums the Numbers to format
         *   @param [left] number of digits to the left of the
         *   decimal point
         *   @param [right] number of digits to the right of
         *   the decimal point
         *   @return formatted Strings
         */
        nf(nums: any[], left?: number | string, right?: number | string): string[];

        /**
         *   Utility function for formatting numbers into
         *   strings and placing appropriate commas to mark
         *   units of 1000. There are two versions: one for
         *   formatting ints, and one for formatting an array
         *   of ints. The value for the right parameter should
         *   always be a positive integer.
         *   @param num the Number to format
         *   @param [right] number of digits to the right of
         *   the decimal point
         *   @return formatted String
         */
        nfc(num: number | string, right?: number | string): string;

        /**
         *   Utility function for formatting numbers into
         *   strings and placing appropriate commas to mark
         *   units of 1000. There are two versions: one for
         *   formatting ints, and one for formatting an array
         *   of ints. The value for the right parameter should
         *   always be a positive integer.
         *   @param nums the Numbers to format
         *   @param [right] number of digits to the right of
         *   the decimal point
         *   @return formatted Strings
         */
        nfc(nums: any[], right?: number | string): string[];

        /**
         *   Utility function for formatting numbers into
         *   strings. Similar to nf() but puts a "+" in front
         *   of positive numbers and a "-" in front of negative
         *   numbers. There are two versions: one for
         *   formatting floats, and one for formatting ints.
         *   The values for left, and right parameters should
         *   always be positive integers.
         *   @param num the Number to format
         *   @param [left] number of digits to the left of the
         *   decimal point
         *   @param [right] number of digits to the right of
         *   the decimal point
         *   @return formatted String
         */
        nfp(num: number, left?: number, right?: number): string;

        /**
         *   Utility function for formatting numbers into
         *   strings. Similar to nf() but puts a "+" in front
         *   of positive numbers and a "-" in front of negative
         *   numbers. There are two versions: one for
         *   formatting floats, and one for formatting ints.
         *   The values for left, and right parameters should
         *   always be positive integers.
         *   @param nums the Numbers to format
         *   @param [left] number of digits to the left of the
         *   decimal point
         *   @param [right] number of digits to the right of
         *   the decimal point
         *   @return formatted Strings
         */
        nfp(nums: number[], left?: number, right?: number): string[];

        /**
         *   Utility function for formatting numbers into
         *   strings. Similar to nf() but puts an additional
         *   "_" (space) in front of positive numbers just in
         *   case to align it with negative numbers which
         *   includes "-" (minus) sign. The main usecase of
         *   nfs() can be seen when one wants to align the
         *   digits (place values) of a non-negative number
         *   with some negative number (See the example to get
         *   a clear picture). There are two versions: one for
         *   formatting float, and one for formatting int. The
         *   values for the digits, left, and right parameters
         *   should always be positive integers. (IMP): The
         *   result on the canvas basically the expected
         *   alignment can vary based on the typeface you are
         *   using. (NOTE): Be cautious when using left and
         *   right parameters as it prepends numbers of 0's if
         *   the parameter if greater than the current length
         *   of the number. For example if number is 123.2 and
         *   left parameter passed is 4 which is greater than
         *   length of 123 (integer part) i.e 3 than result
         *   will be 0123.2. Same case for right parameter i.e.
         *   if right is 3 than the result will be 123.200.
         *   @param num the Number to format
         *   @param [left] number of digits to the left of the
         *   decimal point
         *   @param [right] number of digits to the right of
         *   the decimal point
         *   @return formatted String
         */
        nfs(num: number, left?: number, right?: number): string;

        /**
         *   Utility function for formatting numbers into
         *   strings. Similar to nf() but puts an additional
         *   "_" (space) in front of positive numbers just in
         *   case to align it with negative numbers which
         *   includes "-" (minus) sign. The main usecase of
         *   nfs() can be seen when one wants to align the
         *   digits (place values) of a non-negative number
         *   with some negative number (See the example to get
         *   a clear picture). There are two versions: one for
         *   formatting float, and one for formatting int. The
         *   values for the digits, left, and right parameters
         *   should always be positive integers. (IMP): The
         *   result on the canvas basically the expected
         *   alignment can vary based on the typeface you are
         *   using. (NOTE): Be cautious when using left and
         *   right parameters as it prepends numbers of 0's if
         *   the parameter if greater than the current length
         *   of the number. For example if number is 123.2 and
         *   left parameter passed is 4 which is greater than
         *   length of 123 (integer part) i.e 3 than result
         *   will be 0123.2. Same case for right parameter i.e.
         *   if right is 3 than the result will be 123.200.
         *   @param nums the Numbers to format
         *   @param [left] number of digits to the left of the
         *   decimal point
         *   @param [right] number of digits to the right of
         *   the decimal point
         *   @return formatted Strings
         */
        nfs(nums: any[], left?: number, right?: number): string[];

        /**
         *   The split() function maps to String.split(), it
         *   breaks a String into pieces using a character or
         *   string as the delimiter. The delim parameter
         *   specifies the character or characters that mark
         *   the boundaries between each piece. A String[]
         *   array is returned that contains each of the
         *   pieces. The splitTokens() function works in a
         *   similar fashion, except that it splits using a
         *   range of characters instead of a specific
         *   character or sequence.
         *   @param value the String to be split
         *   @param delim the String used to separate the data
         *   @return Array of Strings
         */
        split(value: string, delim: string): string[];

        /**
         *   The splitTokens() function splits a String at one
         *   or many character delimiters or "tokens." The
         *   delim parameter specifies the character or
         *   characters to be used as a boundary.  If no delim
         *   characters are specified, any whitespace character
         *   is used to split. Whitespace characters include
         *   tab (\t), line feed (\n), carriage return (\r),
         *   form feed (\f), and space.
         *   @param value the String to be split
         *   @param [delim] list of individual Strings that
         *   will be used as separators
         *   @return Array of Strings
         */
        splitTokens(value: string, delim?: string): string[];

        /**
         *   Removes whitespace characters from the beginning
         *   and end of a String. In addition to standard
         *   whitespace characters such as space, carriage
         *   return, and tab, this function also removes the
         *   Unicode "nbsp" character.
         *   @param str a String to be trimmed
         *   @return a trimmed String
         */
        trim(str: string): string;

        /**
         *   Removes whitespace characters from the beginning
         *   and end of a String. In addition to standard
         *   whitespace characters such as space, carriage
         *   return, and tab, this function also removes the
         *   Unicode "nbsp" character.
         *   @param strs an Array of Strings to be trimmed
         *   @return an Array of trimmed Strings
         */
        trim(strs: any[]): string[];
    }
}
